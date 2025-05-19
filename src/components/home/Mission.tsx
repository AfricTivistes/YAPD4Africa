import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "../ui/SectionHeading";
import { RocketLaunchIcon, LightBulbIcon } from "@heroicons/react/24/outline";

const Mission = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-amber-50">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/pattern.svg')] bg-repeat opacity-10"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">

        {/* Core Values Section */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r"></div>
          <div className="relative z-10">
            <SectionHeading 
              title="Core Values" 
              subtitle="The principles that drive our impact"
              centered
            />
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {[
                {
                  title: "Innovation",
                  description: "Pioneering creative solutions for community development",
                  image: "/lovable-uploads/OurCoreValues/Innovation.png",
                  color: "from-blue-500 to-blue-600"
                },
                {
                  title: "Teamwork Ethic",
                  description: "Working together with dedication and purpose",
                  image: "/lovable-uploads/OurCoreValues/Teamwork.jpg",
                  color: "from-purple-500 to-purple-600"
                },
                {
                  title: "Gender Inclusivity",
                  description: "Ensuring equal opportunities and representation",
                  image: "/lovable-uploads/OurCoreValues/Gender Inclusivity.jpg",
                  color: "from-pink-500 to-pink-600"
                },
                {
                  title: "Transparency and Accountability",
                  description: "Maintaining accountability in all our actions",
                  image: "/lovable-uploads/OurCoreValues/Transparency and Accountability.jpeg",
                  color: "from-green-500 to-green-600"
                },
                {
                  title: "Commitment and Make Difference",
                  description: "Dedicated to making a lasting difference",
                  image: "/lovable-uploads/OurCoreValues/Commitment and Make Difference.jpg",
                  color: "from-amber-500 to-amber-600"
                },
                {
                  title: "Collaboration and Parntership",
                  description: "Building strong collaborations for greater impact",
                  image: "/lovable-uploads/OurCoreValues/Collaboration and Parntership.JPG", 
                  color: "from-red-500 to-red-600"
                }
              ].map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <img
                    src={value.image}
                    alt={value.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-6 flex flex-col justify-end">
                    <h3 className="text-xl font-semibold text-white mb-2">{value.title}</h3>
                    <p className="text-white/90 text-sm">{value.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
