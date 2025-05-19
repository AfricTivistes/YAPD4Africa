import React from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import { motion } from "framer-motion";
import { Download, FileText, BookOpen, BarChart2, Calendar, Users } from "lucide-react";

const Reports = () => {
  const annualReports = [
    { year: 2023, title: "Annual Impact Report 2023", size: "2.4 MB" },
    { year: 2022, title: "Annual Impact Report 2022", size: "2.1 MB" },
    { year: 2021, title: "Annual Impact Report 2021", size: "1.9 MB" },
    { year: 2020, title: "Annual Impact Report 2020", size: "1.8 MB" },
  ];

  const projectReports = [
    { 
      title: "Youth Leadership Academy Impact Assessment",
      date: "November 2023",
      size: "3.2 MB",
      icon: Users
    },
    { 
      title: "Community Innovation Hubs: First Year Outcomes",
      date: "September 2023",
      size: "1.7 MB",
      icon: BarChart2
    },
    { 
      title: "Digital Empowerment Program Evaluation",
      date: "July 2023",
      size: "2.5 MB",
      icon: BookOpen
    },
    { 
      title: "Inclusive Governance Initiative: Midterm Review",
      date: "March 2023",
      size: "1.9 MB",
      icon: Users
    },
    { 
      title: "Green Communities Project: Environmental Impact",
      date: "December 2022",
      size: "2.3 MB",
      icon: BarChart2
    },
    { 
      title: "Health Access Alliance: Community Outcomes",
      date: "October 2022",
      size: "1.6 MB",
      icon: BookOpen
    },
  ];

  const researchPublications = [
    { 
      title: "Youth-Led Development in African Communities",
      author: "YAPD4Africa Research Team",
      date: "February 2023",
      size: "1.5 MB",
      image: "/images/publications/youth-development.jpg"
    },
    { 
      title: "Inclusive Governance: Lessons from Grassroots Initiatives",
      author: "Dr. Sarah Johnson & Michael Okafor",
      date: "November 2022",
      size: "1.8 MB",
      image: "/images/publications/governance.jpg"
    },
    { 
      title: "Digital Inclusion and Rural Development",
      author: "David Mensah & Amina Diallo",
      date: "August 2022",
      size: "2.1 MB",
      image: "/images/publications/digital-inclusion.jpg"
    },
    { 
      title: "Climate Resilience Strategies for African Communities",
      author: "YAPD4Africa in collaboration with Climate Action Network",
      date: "May 2022",
      size: "2.4 MB",
      image: "/images/publications/climate-resilience.jpg"
    },
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
              Reports & Publications
              </h1>
              <p className="text-xl text-white/90 leading-relaxed">
              Access our annual reports, project evaluations, and research publications to learn about our impact and insights.
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

      {/* Annual Reports Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading 
            title="Annual Reports" 
            subtitle="Comprehensive overviews of our yearly activities and impact"
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {annualReports.map((report, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg border border-gray-100 hover:shadow-xl hover:border-emerald-100 transition-all duration-300 overflow-hidden"
              >
                <div className="bg-gradient-to-br from-emerald-600 to-emerald-800 p-8 text-white text-center">
                  <FileText className="h-12 w-12 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-3xl font-bold">{report.year}</h3>
                </div>
                <div className="p-6">
                  <h4 className="font-medium mb-2 text-gray-900">{report.title}</h4>
                  <p className="text-sm text-gray-500 mb-4">PDF • {report.size}</p>
                  <motion.a 
                    href="#" 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center justify-center gap-2 bg-emerald-600 text-white hover:bg-emerald-700 px-6 py-3 rounded-full font-medium transition-colors w-full"
                  >
                    <Download className="h-4 w-4" />
                    Download Report
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Reports Section */}
      <section className="section-padding bg-gradient-to-br from-gray-50 via-white to-gray-50">
        <div className="container-custom">
          <SectionHeading 
            title="Project Reports" 
            subtitle="Detailed evaluations and outcomes of our initiatives"
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {projectReports.map((report, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg border border-gray-100 hover:shadow-xl hover:border-emerald-100 transition-all duration-300 overflow-hidden"
              >
                <div className="p-8">
                  <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <report.icon className="h-8 w-8 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-emerald-600 transition-colors duration-300">
                    {report.title}
                  </h3>
                  <div className="flex items-center gap-2 text-gray-500 mb-4">
                    <Calendar className="h-4 w-4" />
                    <span>{report.date}</span>
                  </div>
                  <p className="text-sm text-gray-500 mb-6">PDF • {report.size}</p>
                  <motion.a 
                    href="#" 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-medium"
                  >
                    <Download className="h-4 w-4" />
                    Download Report
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Publications Section 
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading 
            title="Research Publications" 
            subtitle="Original research and insights from our work"
          />
          
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {researchPublications.map((publication, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg border border-gray-100 hover:shadow-xl hover:border-emerald-100 transition-all duration-300 overflow-hidden"
              >
                <div className="relative h-48 w-full">
                  <img
                    src={publication.image}
                    alt={publication.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/50 to-transparent"></div>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-emerald-600 transition-colors duration-300">
                    {publication.title}
                  </h3>
                  <p className="text-emerald-600 font-medium mb-2">{publication.author}</p>
                  <div className="flex items-center gap-2 text-gray-500 mb-6">
                    <Calendar className="h-4 w-4" />
                    <span>{publication.date}</span>
                    <span>•</span>
                    <span>PDF • {publication.size}</span>
                  </div>
                  <motion.a 
                    href="#" 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-medium"
                  >
                    <Download className="h-4 w-4" />
                    Download Publication
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Request Reports Section */}
      <section className="relative section-padding bg-gradient-to-br from-emerald-600 to-emerald-800 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/pattern.svg')] bg-repeat opacity-10"></div>
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-white/10 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-white/10 to-transparent rounded-full blur-3xl"></div>
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Can't Find What You're Looking For?
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Contact us to request specific reports or publications that are not listed on this page.
              </p>
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block bg-white text-emerald-600 px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Request a Report
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reports;
