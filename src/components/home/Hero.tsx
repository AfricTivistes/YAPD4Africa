import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { FaLinkedinIn, FaFacebookF, FaYoutube, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { HiMail } from "react-icons/hi";

const Hero = () => {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[80vh] overflow-hidden">
      {/* Social Media Links */}
      <motion.div 
        className="absolute left-4 md:left-8 top-1/5 transform -translate-y-1/2 z-20 flex flex-col gap-4 md:gap-6 p-4 bg-black/20 rounded-xl"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <a 
          href="https://www.linkedin.com/company/youth-awareness-for-peace-and-development/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="group relative bg-white/20 p-3 md:p-4 rounded-full hover:bg-[#0A66C2] text-[#0A66C2] hover:text-white transition-all duration-300"
        >
          <FaLinkedinIn className="w-5 h-5 md:w-6 md:h-6" />
          <span className="absolute left-12 md:left-16 bg-black/80 px-3 md:px-4 py-1 rounded-lg text-base text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            LinkedIn
          </span>
        </a>
        <a 
          href="https://x.com/yapd4africa?s=21" 
          target="_blank" 
          rel="noopener noreferrer"
          className="group relative bg-white/20 p-3 md:p-4 rounded-full hover:bg-black text-black hover:text-white transition-all duration-300"
        >
          <FaXTwitter className="w-5 h-5 md:w-6 md:h-6" />
          <span className="absolute left-12 md:left-16 bg-black/80 px-3 md:px-4 py-1 rounded-lg text-base text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            X (Twitter)
          </span>
        </a>
        <a 
          href="https://www.instagram.com/yapd_4africa/?igshid=MzRlODBiNWFlZA" 
          target="_blank" 
          rel="noopener noreferrer"
          className="group relative bg-white/20 p-3 md:p-4 rounded-full hover:bg-gradient-to-br from-[#FF0069] via-[#E4405F] to-[#FE9D41] text-[#E4405F] hover:text-white transition-all duration-300"
        >
          <FaInstagram className="w-5 h-5 md:w-6 md:h-6" />
          <span className="absolute left-12 md:left-16 bg-black/80 px-3 md:px-4 py-1 rounded-lg text-base text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Instagram
          </span>
        </a>
        <a 
          href="https://www.facebook.com/YAPD4Africa?mibextid=9R9pXO" 
          target="_blank" 
          rel="noopener noreferrer"
          className="group relative bg-white/20 p-3 md:p-4 rounded-full hover:bg-[#1877F2] text-[#1877F2] hover:text-white transition-all duration-300"
        >
          <FaFacebookF className="w-5 h-5 md:w-6 md:h-6" />
          <span className="absolute left-12 md:left-16 bg-black/80 px-3 md:px-4 py-1 rounded-lg text-base text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Facebook
          </span>
        </a>
        <a 
          href="https://www.youtube.com/@yapd4africa" 
          target="_blank" 
          rel="noopener noreferrer"
          className="group relative bg-white/20 p-3 md:p-4 rounded-full hover:bg-[#FF0000] text-[#FF0000] hover:text-white transition-all duration-300"
        >
          <FaYoutube className="w-5 h-5 md:w-6 md:h-6" />
          <span className="absolute left-12 md:left-16 bg-black/80 px-3 md:px-4 py-1 rounded-lg text-base text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            YouTube
          </span>
        </a>
        <div className="w-px h-16 bg-white/40 mx-auto"></div>
        <button 
          className="group relative bg-white/20 p-3 md:p-4 rounded-full hover:bg-[#4CAF50] text-[#4CAF50] hover:text-white transition-all duration-300"
          onClick={() => window.location.href = '#newsletter'}
        >
          <HiMail className="w-5 h-5 md:w-6 md:h-6" />
          <span className="absolute left-12 md:left-16 bg-black/80 px-3 md:px-4 py-1 rounded-lg text-base whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Subscribe to Newsletter
          </span>
        </button>
      </motion.div>
      <div className="absolute inset-0 z-0">
        <img
          src="lovable-uploads/Home/image_accueil.png"
          alt="African community"
          className="object-cover w-full h-full"
          style={{ filter: 'brightness(0.4)' }}
        />
      </div>
      
      <div className="container relative z-10 mx-auto pr-4 pl-14 md:pl-22 text-center pt-56">
        <motion.div 
          className="mx-auto max-w-4xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="mb-5 text-2xl font-extrabold leading-tight text-white md:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
              Advancing social development and empowering African grassroots communities
            </span>
          </motion.h1>
          
          <motion.p 
            className="mx-auto mb-12 max-w-3xl text-xl text-white/90 md:text-2xl font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Through youth-led empowerment, inclusive governance and advocacy, we're building a brighter future for Africa.
          </motion.p>

          <motion.div 
            className="flex flex-wrap justify-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link 
              to="#get-involved"
              className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-amber-700 text-white text-lg font-semibold rounded-lg shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              Get Involved
              <ArrowDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform duration-300" />
            </Link>
            
            <Link 
              to="#learn-more"
              className="group inline-flex items-center px-8 py-4 border-2 border-white/30 hover:border-white text-white text-lg font-semibold rounded-lg transition-all duration-300 hover:bg-white/10"
            >
              Learn More
              <ArrowDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform duration-300" />
            </Link>
          </motion.div>
          {/* Scroll Down Indicator */}
          <motion.div
            className="flex justify-center mt-10"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <ArrowDown className="w-8 h-8 text-white/80 drop-shadow-lg" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
