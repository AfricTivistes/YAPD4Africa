import React from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import { motion } from "framer-motion";
import { User, Award, Users, Heart, Lightbulb, Shield, Handshake } from "lucide-react";
import { FaLinkedin, FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";

const WhoAreWe = () => {
  const teamMembers = [
    {
      name: "Idris Bilyaminu Ndasadu'Lau",
      role: "Chief Executive",
      //bio: "Leading YAPD4Africa's vision and strategic direction with extensive experience in youth development and community engagement.",
      image: "/lovable-uploads/Staff/Idris.JPG"
    },
    {
      name: "Sa'adatu Idris Ndasadu'Lau",
      role: "Head of Programs",
      //bio: "Overseeing program development and implementation with a focus on sustainable community impact.",
      image: "/lovable-uploads/Staff/saadatu.png"
    },
    {
      name: "Yahya Abubakar",
      role: "Programs Manager (Youth Engagement)",
      //bio: "Specializing in youth mobilization and leadership development across African communities.",
      image: "/lovable-uploads/Staff/Yahaya.JPG"
    },
    {
      name: "Fatima Muftau",
      role: "Assistant Monitoring and Evaluation Manager",
      //bio: "Ensuring program effectiveness and impact through rigorous monitoring and evaluation.",
      image: "/lovable-uploads/Staff/fatima.png"
    },
    {
      name: "Baqau Hassan Omotayo",
      role: "Creative Design Manager",
      //bio: "Leading our visual communication and creative strategy to amplify our impact.",
      image: "/lovable-uploads/Staff/Hassan.JPG"
    },
    {
      name: "Ibrahim Mohammed Bakodo",
      role: "Community Engagement Manager",
      //bio: "Leading our visual communication and creative strategy to amplify our impact.",
      image: "/lovable-uploads/Staff/Ibrahim Mohammed Badoko.JPG"
    }
  ];

  const boardMembers = [
    {
      name: "Fatima Mohammed Habib",
      title: "Board Chair",
      //organization: "YAPD4Africa",
      image: "/lovable-uploads/Trustees/Fatima.JPG"
    },
    {
      name: "Idris Bilyaminu Ndasadu'Lau",
      title: "Board Secretary",
      //organization: "YAPD4Africa",
      image: "/lovable-uploads/Staff/Idris.JPG"
    },
    {
      name: "Tagwai Zigwai",
      title: "Board Secretary II",
      //organization: "YAPD4Africa",
      image: "/lovable-uploads/Trustees/Zigwai.JPG"
    },
    {
      name: "Aisha Dabo",
      title: "Board Member",
      //organization: "YAPD4Africa",
      image: "/lovable-uploads/Trustees/Aisha.JPG"
    },
    {
      name: "Abbas Inuwa",
      title: "Board Member",
      //organization: "YAPD4Africa",
      image: "/lovable-uploads/Trustees/Abbas.JPG"
    },
    {
      name: "Zainab Suleiman Ajuma",
      title: "Board Member",
      //organization: "YAPD4Africa",
      image: "/lovable-uploads/Trustees/Zainab.JPG"
    },
    {
      name: "Ayomide Ladipo Yetunde",
      title: "Board Member",
      //organization: "YAPD4Africa",
      image: "/lovable-uploads/Trustees/Ayomide.JPG"
    },
    {
      name: "Mbah Aaron Promise",
      title: "Board Member",
      //organization: "YAPD4Africa",
      image: "/lovable-uploads/Trustees/Promise.JPG"
    },
    {
      name: "Valentine Okafor",
      title: "Board Member",
      //organization: "YAPD4Africa",
      image: "/lovable-uploads/Trustees/Okafor.JPG"
    }
  ];

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
              Who Are We
              </h1>
              <p className="text-xl text-white/90 leading-relaxed">
              Meet our brilliant and inspiring team of changemakers dedicated to transforming communities across Africa through youth-led initiatives and sustainable development.
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

      {/* Our Story Section */}
      <section className="section-padding relative overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-emerald-50">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/pattern.svg')] bg-repeat opacity-5"></div>
          <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-emerald-100/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-blue-100/20 rounded-full blur-3xl"></div>
        </div>
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-emerald-500/10 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl"></div>
              <SectionHeading 
                title="Our Story" 
                subtitle="The journey of YAPD4Africa from inception to impact"
                className="relative z-10"
              />
              
              <div className="prose max-w-none text-gray-700 mt-8 relative z-10">
                <div className="space-y-6">
                  <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-lg leading-relaxed bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-sm border border-emerald-100/50"
                  >
YAPD4Africa was founded in 2017 by a group of passionate young Africans who believed in the power of youth-led initiatives to address pressing social challenges. What began as a small network of volunteers has grown into a prominent organization with programs in multiple African countries.
Our founders recognized that despite being the continent with the youngest population, young people in Africa were often excluded from development processes and decision-making. They established YAPD4Africa to bridge this gap, creating platforms for youth leadership and meaningful participation in community development.
                  </motion.p>
                  <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-lg leading-relaxed bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-sm border border-emerald-100/50"
                  >
Our founders recognized that despite being the continent with the youngest population, young people in Africa were often excluded from development processes and decision-making. They established YAPD4Africa to bridge this gap, creating platforms for youth leadership and meaningful participation in community development.
</motion.p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl"></div>
              <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
                <img
                  src="/lovable-uploads/Staff/Idris.JPG"
                  alt="Our Story"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/40 via-emerald-900/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                  >
                    <h3 className="text-2xl font-bold mb-2">Idris Bilyaminu Ndasadu'Lau</h3>
                    <p className="text-white/90">Founder & Chief Executive</p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="section-padding bg-gradient-to-br from-gray-50 via-white to-gray-50">
        <div className="container-custom">
          <SectionHeading 
            title="Our Team" 
            subtitle="Meet our brilliant and inspiring colleagues"
            centered
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-white rounded-3xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className="relative h-[400px] overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 group-hover:text-emerald-600 transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-emerald-600 font-medium mb-3">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Board of Trustees Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading 
            title="Board of Trustees" 
            subtitle="Meet our diverse group of experts across Nigeria's geopolitical and Africa"
            centered
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {boardMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-gray-50 rounded-3xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className="relative h-[400px] overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 group-hover:text-emerald-600 transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-emerald-600 font-medium mb-2">{member.title}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team CTA */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-emerald-600 mb-6">
                Join Our Team
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Interested in contributing your skills and passion to YAPD4Africa's mission? Explore current opportunities to join our team or volunteer with us.
              </p>
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block bg-emerald-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                View Opportunities
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhoAreWe;
