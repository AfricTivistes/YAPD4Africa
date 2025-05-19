import type React from "react"
import { Users, Megaphone, ClipboardCheck, Award, Handshake, Globe } from "lucide-react"
import { motion } from "framer-motion"

function ApproachCard({
  icon: Icon,
  title,
  description,
  index,
}: {
  icon: React.ElementType
  title: string
  description: string
  index: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative rounded-3xl border border-gray-100 bg-white/80 backdrop-blur-sm p-8 shadow-lg transition-all duration-300 hover:shadow-xl hover:border-emerald-100"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent rounded-3xl"></div>
      <div className="relative z-10">
        <div className="mb-6 inline-flex rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 p-4 text-white shadow-lg transition-all duration-300 group-hover:scale-110">
          <Icon className="h-7 w-7" />
        </div>
        <h3 className="mb-3 text-xl font-bold text-gray-900 group-hover:text-emerald-600 transition-colors duration-300">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </motion.div>
  )
}

export default function ApproachSection() {
  const approaches = [
    {
      icon: Users,
      title: "Community Engagement",
      description:
        "Centering community voices and needs in all our work, ensuring local ownership and participation in development initiatives.",
    },
    {
      icon: Megaphone,
      title: "Advocacy",
      description:
        "Amplifying marginalized voices and advocating for policy changes that promote equity, justice, and sustainable development.",
    },
    {
      icon: ClipboardCheck,
      title: "Research",
      description:
        "Conducting rigorous research to inform evidence-based interventions and measure impact across our programs.",
    },
    {
      icon: Award,
      title: "Empowerment",
      description:
        "Building capacity and creating opportunities for individuals and communities to lead their own development journey.",
    },
    {
      icon: Handshake,
      title: "Strategic Partnerships",
      description:
        "Collaborating with diverse stakeholders to leverage resources and expertise for greater collective impact.",
    },
    {
      icon: Globe,
      title: "Digital Campaigns",
      description:
        "Utilizing digital platforms to raise awareness, mobilize support, and drive social change at scale.",
    },
  ]

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/pattern.svg')] bg-repeat opacity-5"></div>
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-emerald-500/5 to-teal-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-blue-500/5 to-indigo-500/5 rounded-full blur-3xl"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Approach: <span className="text-emerald-600">CARE-SD</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600">
            Our comprehensive CARE-SD framework guides our work in community development, ensuring sustainable impact
            through six interconnected pillars. This holistic approach addresses the complex challenges facing African
            communities.
          </p>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {approaches.map((approach, index) => (
            <ApproachCard 
              key={index} 
              icon={approach.icon} 
              title={approach.title} 
              description={approach.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
