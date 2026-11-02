// Node module hooks used by export.mjs to evaluate src/data/*.ts outside Astro:
// resolves the "@/" alias, turns image imports into their repository path,
// and replaces import.meta.glob() with a plain object.
import { existsSync, readdirSync } from "node:fs";
import { fileURLToPath, pathToFileURL } from "node:url";
import path from "node:path";

const root = path.resolve(fileURLToPath(new URL("../..", import.meta.url)));
const IMAGE = /\.(png|jpe?g|webp|svg|gif)$/i;

export async function resolve(specifier, context, next) {
  if (specifier.startsWith("@/")) {
    let file = path.join(root, "src", specifier.slice(2));
    if (!path.extname(file) && existsSync(`${file}.ts`)) file += ".ts";
    return { url: pathToFileURL(file).href, shortCircuit: true };
  }
  return next(specifier, context);
}

export async function load(url, context, next) {
  if (IMAGE.test(url)) {
    const rel = path.relative(root, fileURLToPath(url));
    return { format: "module", source: `export default { src: ${JSON.stringify(rel)} };`, shortCircuit: true };
  }
  const result = await next(url, context);
  if (url.endsWith(".ts") && result.source) {
    let source = result.source.toString();
    source = source.replace(
      /import\.meta\.glob(?:<[^>]*>)?\(\s*"@\/([^"*]+)\*"[^)]*\)/g,
      (_, dir) => {
        const entries = readdirSync(path.join(root, "src", dir)).map(
          (f) => `${JSON.stringify(`/src/${dir}${f}`)}: { default: { src: ${JSON.stringify(`src/${dir}${f}`)} } }`,
        );
        return `({ ${entries.join(", ")} })`;
      },
    );
    return { ...result, source };
  }
  return result;
}
