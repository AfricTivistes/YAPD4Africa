import React, { useEffect, useState } from "react";
import SectionHeading from "../ui/SectionHeading";
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter, Linkedin, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Partners = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const partners = [
    { logo: "/lovable-uploads/Donors and Partners/IMG_3108.PNG" },
    { logo: "/lovable-uploads/Donors and Partners/IMG_3109.PNG" },
    { logo: "/lovable-uploads/Donors and Partners/IMG_3110.PNG" },
    { logo: "/lovable-uploads/Donors and Partners/IMG_3113.PNG" },
    { logo: "/lovable-uploads/Donors and Partners/IMG_3114.PNG" },
    { logo: "/lovable-uploads/Donors and Partners/IMG_3115.PNG" },
    { logo: "/lovable-uploads/Donors and Partners/IMG_3116.PNG" },
    { logo: "/lovable-uploads/Donors and Partners/IMG_3117.JPG" },
    { logo: "/lovable-uploads/Donors and Partners/IMG_3118.PNG" },
    { logo: "/lovable-uploads/Donors and Partners/IMG_3119.JPG" },
    { logo: "/lovable-uploads/Donors and Partners/IMG_3121.JPG" },
    { logo: "/lovable-uploads/Donors and Partners/IMG_3122.JPG" },
    { logo: "/lovable-uploads/Donors and Partners/IMG_3125.JPG" },
    { logo: "/lovable-uploads/Donors and Partners/IMG_3126.PNG" },
    { logo: "/lovable-uploads/Donors and Partners/IMG_3253.PNG" },
    { logo: "/lovable-uploads/Donors and Partners/IMG-20220512-WA0001.jpg" },
    { logo: "/lovable-uploads/Donors and Partners/IMG-20220515-WA0002.jpg" }

  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % partners.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="section-padding bg-white overflow-hidden items-center justify-center">
      <div className="container-custom">
        <div className="flex justify-center mb-24">
          <div className="w-full max-w-2xl">
            {/* Announcement Section */}
            <div className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md transition-all duration-300 hover:shadow-lg">
              <div className="relative h-48 w-full">
                <img 
                  src="/lovable-uploads/image_article.png" 
                  alt="WYDE Civic Engagement Project" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              <div className="p-6">
                <div className="mb-1 flex items-center">
                  <div className="mr-2 h-2 w-2 rounded-full bg-[#008000]"></div>
                  <span className="text-sm font-medium uppercase tracking-wider text-[#008000]">Recent Recognition</span>
                </div>

                <h3 className="mb-4 text-xl font-bold text-gray-900">
                  YAPD4Africa selected among 10 organizations in WYDE Civic Engagement Project.
                </h3>

                <p className="mb-6 text-gray-600">
                  We are proud to announce that YAPD4Africa has been selected as one of the 10 organizations to participate in
                  the WYDE Civic Engagement Project, recognizing our commitment to youth empowerment and community
                  development.
                </p>

                <a
                  href="https://www.alda-europe.eu/meet-the-10-selected-organisations-from-the-3rd-call-for-proposals-of-the-wyde-civic-engagement-project/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-[#008000] text-white px-4 py-2 rounded hover:bg-[#006800] transition-colors duration-300"
                >
                  Read Article
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <SectionHeading 
            title="Our Partners" 
            subtitle="Collaborating with leading organizations to maximize our impact"
            centered 
          />
        </motion.div>
        
        <div className="relative mt-12">
          <div className="flex gap-8 overflow-hidden py-4">
            <motion.div 
              className="flex gap-8 animate-slide"
              style={{
                transform: `translateX(-${currentIndex * (100 / partners.length)}%)`,
                transition: 'transform 0.5s ease-in-out'
              }}
            >
              {partners.map((partner, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex-shrink-0 w-[200px] aspect-square bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group"
                >
                  <div className="w-full h-full relative flex items-center justify-center p-4">
                    <img 
                      src={partner.logo} 
                      alt={`Partner logo ${index + 1}`}
                      className="w-full h-full object-contain max-w-[180px] max-h-[180px]"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="text-white font-medium text-center px-2">Partner {index + 1}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6">
            Interested in partnering with YAPD4Africa to create positive change?
          </p>
          <Link 
            to="/contact" 
            className="bg-[#008000] text-white px-6 py-3 rounded hover:bg-[#006800] inline-block"
          >
            Become a Partner
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Partners;
