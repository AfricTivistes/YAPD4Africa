import React from "react";
import { motion } from "framer-motion";
import { Check, Target, BookOpen, Users, GraduationCap, Leaf, Briefcase, Globe, Award, Rocket, Lightbulb } from "lucide-react";
import Hero from "../components/home/Hero";
import About from "../components/home/About";
import Mission from "../components/home/Mission";
import Partners from "../components/home/Partners";
import ApproachSection from "../components/home/ApproachSection";
import SectionHeading from "../components/ui/SectionHeading";

const Index = () => {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <About />

        {/* Mission & Vision Cards */}
        <div className="grid lg:grid-cols-2 gap-8 mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-blue-100 hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-blue-100 rounded-xl">
                <Rocket className="w-8 h-8 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
            </div>
            <p className="text-gray-700 leading-relaxed text-lg">
              To build strong people and sustainable communities in Africa through innovative solutions and collaborative partnerships.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-amber-100 hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-amber-100 rounded-xl">
                <Lightbulb className="w-8 h-8 text-amber-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Our Vision</h2>
            </div>
            <p className="text-gray-700 leading-relaxed text-lg">
              We envision a world where people are empowered to drive sustainable social development, even in the most remote areas of the globe, creating lasting positive change.
            </p>
          </motion.div>
        </div>
      {/* Our Impact Section */}
      <section className="relative py-32 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-white rounded-3xl">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('/pattern.svg')] bg-repeat opacity-10"></div>
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-green-500/20 to-green-500/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-gray-500/20 to-gray-500/20 rounded-full blur-3xl"></div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4 relative z-10"
        >
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            >
              Our <span className="text-green-600">Impact</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-black-600"
            >
              Making a difference across Africa and beyond
            </motion.p>
          </div>

          <div className="mx-auto max-w-7xl">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Lives Impacted",
                  value: "30,000+",
                  description: "Lives reached and positively impacted through our initiatives",
                  icon: Users,
                  color: "from-amber-500 to-amber-600",
                  bgColor: "bg-amber-50/10"
                },
                {
                  title: "Communities Reached",
                  value: "100+",
                  description: "Communities across Africa benefiting from our programs",
                  icon: Target,
                  color: "from-blue-500 to-blue-600",
                  bgColor: "bg-blue-50/10"
                },
                {
                  title: "Funds Raised",
                  value: "$25,000+",
                  description: "Raised for activities and development projects",
                  icon: Briefcase,
                  color: "from-green-500 to-green-600",
                  bgColor: "bg-green-50/10"
                },
                {
                  title: "Global Reach",
                  value: "60,000+",
                  description: "People reached through different media platforms",
                  icon: Globe,
                  color: "from-purple-500 to-purple-600",
                  bgColor: "bg-purple-50/10"
                },
                {
                  title: "Global Recognition",
                  value: "30+",
                  description: "Countries recognizing YAPD4Africa's impact",
                  icon: Award,
                  color: "from-pink-500 to-pink-600",
                  bgColor: "bg-pink-50/10"
                }
              ].map((impact, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`group relative ${impact.bgColor} rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/10 backdrop-blur-sm`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl"></div>
                  <div className="relative z-10">
                    <div className="flex items-start gap-5">
                      <div className={`p-4 rounded-2xl bg-gradient-to-br ${impact.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <impact.icon className="h-7 w-7 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-3xl font-bold text-black mb-2">
                          {impact.value}
                        </h3>
                        <h4 className="text-lg font-semibold text-green-600 mb-2">
                          {impact.title}
                        </h4>
                        <p className="text-black-300 leading-relaxed">
                          {impact.description}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-green-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>
      <Mission />
      <ApproachSection />
      <Partners />
    </div>
  );
};

export default Index;