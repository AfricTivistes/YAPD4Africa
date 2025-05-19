import React from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import { motion } from "framer-motion";
import { Users, Lightbulb, Globe, Heart, Shield, BookOpen, Megaphone, Vote, Leaf } from "lucide-react";

const WhatWeDo = () => {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-500 to-emerald-800 py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/pattern.svg')] bg-repeat opacity-10"></div>
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-white/10 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-white/10 to-transparent rounded-full blur-3xl"></div>
        </div>
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center lg:text-left"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                What We Do
              </h1>
              <p className="text-xl text-white/90 leading-relaxed">
                Transforming communities through youth-led initiatives, inclusive governance, and sustainable development approaches.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative h-[350px] rounded-3xl overflow-hidden shadow-2xl" // Increased height from 300px to 350px
            >
              <img
                src="/lovable-uploads/logoyapd.png"
                alt="YAPD4Africa Initiatives"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-800/50 to-transparent"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Programs Overview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <SectionHeading
                title="Our Approach to Social Development"
                subtitle="Comprehensive, community-led strategies for lasting change"
              />
              
              <div className="prose max-w-none text-gray-700 mt-8">
                <p className="text-lg leading-relaxed">
                At YAPD4Africa, our comprehensive CARE-SD framework guides our work in community development, ensuring sustainable impact through six interconnected pillars.                 </p>
                <p className="mt-4 text-lg leading-relaxed">
                This holistic approach addresses the complex challenges facing African communities.                 </p>
                <p className="mt-4 text-lg leading-relaxed">
                We implement a holistic approach to social development through our CARE-SD methodology, which stands for Community Engagement, Advocacy, Research, Empowerment, Strategic Partnerships and Digital Campaigns.                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative h-[500px] rounded-3xl overflow-hidden shadow-xl"
            >
              <img
                src="/lovable-uploads/What We Do /imagefondecran.jpg"
                alt="Our Approach"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/30 to-transparent"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Homegrown Initiatives Section */}
      <section className="section-padding bg-gradient-to-br from-gray-50 via-white to-gray-50">
        <div className="container-custom">
          <SectionHeading
            title="Homegrown Initiatives"
            subtitle="Locally developed programs addressing specific community needs"
          />
          
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {[
              {
                number: "01",
                title: "Community Action-Led Initiative (CAL)",
                description: "It is a comprehensive civic education initiative aimed at catalyzing active citizenship in underserved grassroots African communities. The primary objective of the project is to educate communities to understand their rights, responsibilities, and duties as citizens. Currently operating in Nigeria and Cameroon.",
                impact: "Addressing the lack of knowledge regarding civic participatory mechanisms in Sub-Saharan Africa.",
                image: "/lovable-uploads/WhatWeDo /CAL.jpeg"
              },
              {
                number: "02",
                title: "Murya",
                description: "An innovative civic tech initiative designed to bridge the gaps between citizens' needs and government projects. Provides a platform for citizens to voice their concerns about service delivery and empowers the government with data-driven evidence reports.",
                impact: "Enabling better alignment of government projects with essential citizen needs.",
                image: "/lovable-uploads/WhatWeDo /mirya.png"
              },
              {
                number: "03",
                title: "Kuri'a",
                description: "A citizen-led initiative that combines digital and physical engagement to promote electoral accountability, transparency and inclusiveness in Nigeria. Through mobile and web platforms, community outreach and physical events.",
                impact: "Empowering citizens to participate actively in the electoral process and demand good governance.",
                image: "/lovable-uploads/WhatWeDo /Kuria.png"
              },
              {
                number: "04",
                title: "Rescue A Girl Initiative",
                description: "A social enterprise empowering hard-to-reach marginalized grassroots girls and women through the provision of eco-friendly reusable sanitary products.",
                impact: "Protecting the environment while addressing women's health needs.",
                image: "/lovable-uploads/What We Do /RAG.jpeg"
              }
            ].map((initiative, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg border border-gray-100 hover:shadow-xl hover:border-emerald-100 transition-all duration-300 overflow-hidden flex flex-col"
              >
                <div className="relative h-80 w-full">
                  <img
                    src={initiative.image}
                    alt={initiative.title}
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/50 to-transparent"></div>
                </div>
                <div className="p-8 flex-grow">
                  <div className="relative z-10">
                    <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                      <span className="text-lg font-bold text-emerald-600">{initiative.number}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-emerald-600 transition-colors duration-300">
                      {initiative.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {initiative.description}
                    </p>
                    <p className="text-gray-600">
                      <strong className="text-emerald-600">Impact:</strong> {initiative.impact}
                    </p>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Projects Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading
            title="Other Projects"
            subtitle=""
          />
          
          <div className="space-y-8 mt-12">
            {[
              {
                title: "Who Is Almajiri Project",
                description: "It was among the active projects in the northern Nigeria region that advocated for the rights of street children in the past 5 years. The project has a policy recommendation on how to reduce the high rate of dropout school children through a sustainable reformation for both Almajiri and other street children.",
                impact: "After all the advocacies at the national level, the bill to establish a national commission for Almajiris and many out of school children was signed by the former President of Nigeria, his Excellency Mohammad Buhari in 2023.",
                tags: ["projects", "Nigeria region that advocated ", "Almajiris"],
                image: "/lovable-uploads/WhatWeDo /Who Is Almajiri .JPG"
              },
              {
                title: "Rescue Mission against COVID-19 Project",
                description: "This project was a short-term activity within 2 months from March to May 2020. Through the project, YAPD4Africa directly impacted 500 beneficiaries while we used our social media as a digital tool to mobilize over 1000 young people to create awareness on the prevention of the COVID-19 disease and help raise resources for the project execution.",
                impact: "This project also helps to distribute relief materials to the most vulnerable groups of people especially orphanage homes, providing homemade face masks and sanitizers to supplement the low and overpriced supply.",
                tags: ["Health", "Emergency Response", "Community Support", "COVID-19 Relief"],
                image: "/lovable-uploads/WhatWeDo /Rescue Mission Against Covid.jpg"
              },
              {
                title: "We Need Peace Project",
                description: "We have successfully implemented our 'We Need Peace' project from 8th September, 2018 to 31st March, 2019. This project took us about 7 months to advocate and engage with different community leaders, religion scholars, security agents and political parties on how they can contribute toward promoting peace as a tool for all and at the end of the day, it turned out the elections were conducted peacefully and it was also free and fair.",
                impact: "This project has contributed to peaceful, free and fair elections through community engagement and advocacy.",
                tags: ["Peace Building", "Community Engagement", "Advocacy"],
                image: "/lovable-uploads/WhatWeDo /We Need Peace.JPG"
              }
            ].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-white/80 backdrop-blur-sm rounded-3xl hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100"
              >
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="relative h-[400px] md:h-[500px]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/30 to-transparent"></div>
                  </div>
                  <div className="p-8 flex flex-col justify-center">
                    <h3 className="text-2xl font-semibold mb-4 text-gray-900 group-hover:text-emerald-600 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                      {project.description}
                    </p>
                    <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                      <strong className="text-emerald-600">Impact:</strong> {project.impact}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="bg-emerald-100 text-emerald-600 px-4 py-1.5 rounded-full text-sm font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Get Involved CTA Section */}
      <section className="relative section-padding bg-gradient-to-br from-emerald-600 to-emerald-800 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/pattern.svg')] bg-repeat opacity-10"></div>
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-white/10 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-white/10 to-transparent rounded-full blur-3xl"></div>
        </div>
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center lg:text-left"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Join Us in Creating Positive Change
              </h2>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Whether you're interested in volunteering, partnering, or supporting our initiatives, there are many ways to contribute to YAPD4Africa's mission.
              </p>
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block bg-white text-emerald-600 px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Get Involved Today
              </motion.a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl"
            >
              <img
                src="/lovable-uploads/logoyapd.png"
                alt="Get Involved"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/50 to-transparent"></div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhatWeDo;
