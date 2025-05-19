
import React from "react";
import { motion } from "framer-motion";


const ImpactSection = () => {
  return (
    <section className="py-24 px-6 bg-gradient-to-r from-blue-50 via-blue-100 to-blue-50">
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            Notre <span className="text-blue-500">Impact</span>
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-12"></div>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <p className="text-4xl font-bold text-green-800">30,000+</p>
            <p className="text-sm">Vies Touchées</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-green-800">80+</p>
            <p className="text-sm">Communautés Impactées</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-green-800">$25,000+</p>
            <p className="text-sm">Fonds Collectés</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-green-800">60,000+</p>
            <p className="text-sm">Portée Mondiale</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
