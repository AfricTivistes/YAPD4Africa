import React from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import ContactForm from "@/components/ui/ContactForm";
import { Mail, MapPin, Phone, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-500 to-emerald-800 py-12 md:py-16 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/pattern.svg')] bg-repeat opacity-10"></div>
          <div className="absolute top-0 right-0 w-1/4 h-1/4 bg-gradient-to-br from-white/10 to-transparent rounded-full blur-2xl"></div>
          <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-gradient-to-tr from-white/10 to-transparent rounded-full blur-2xl"></div>
        </div>
        <div className="container-custom relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left flex-1">
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Let's Connect
              </h1>
              <p className="text-lg text-white/90">
                Join us in our mission to empower African youth. We're here to listen and engage.
              </p>
            </div>
            <div className="relative w-48 h-32 md:w-64 md:h-40 rounded-lg overflow-hidden shadow-xl">
              <img
                src="/lovable-uploads/logoyapd.png"
                alt="YAPD4Africa Initiatives"
                className="w-full h-full object-contain bg-white/10"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-800/30 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information and Form Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="animate-fade-in-up">
              <SectionHeading title="Get In Touch" />
              <p className="text-gray-700 mb-8">
                We're excited to hear from you! Whether you're interested in our programs, want to explore partnership opportunities, or wish to volunteer, we're here to help you make a difference.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start group hover:transform hover:scale-105 transition-all duration-300">
                  <div className="bg-primary/10 p-3 rounded-full mr-4 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <MapPin className="h-6 w-6 text-primary group-hover:text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Our Address</h3>
                    <p className="text-gray-600">Hayin Banki Kaduna North, Kaduna State, Nigeria</p>
                  </div>
                </div>
                
                <div className="flex items-start group hover:transform hover:scale-105 transition-all duration-300">
                  <div className="bg-primary/10 p-3 rounded-full mr-4 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <Mail className="h-6 w-6 text-primary group-hover:text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Email Us</h3>
                    <a href="mailto:yapd2020@gmail.com" className="text-primary hover:text-secondary transition-colors">
                      yapd2020@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start group hover:transform hover:scale-105 transition-all duration-300">
                  <div className="bg-primary/10 p-3 rounded-full mr-4 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <Phone className="h-6 w-6 text-primary group-hover:text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Call Us</h3>
                    <a href="tel:+2348167185897" className="text-primary hover:text-secondary transition-colors">
                      +234 816 718 5897
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h3 className="font-semibold text-lg mb-4">Connect With Us</h3>
                <div className="flex space-x-4">
                  <a 
                    href="https://www.facebook.com/YAPD4Africa?mibextid=9R9pXO" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-gray-100 hover:bg-primary hover:text-white p-3 rounded-full transition-all duration-300 transform hover:scale-110"
                  >
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a 
                    href="https://x.com/yapd4africa?s=21" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-gray-100 hover:bg-primary hover:text-white p-3 rounded-full transition-all duration-300 transform hover:scale-110"
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a 
                    href="https://instagram.com/yapd_4africa?igshid=MzRlODBiNWFlZA==" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-gray-100 hover:bg-primary hover:text-white p-3 rounded-full transition-all duration-300 transform hover:scale-110"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a 
                    href="https://www.linkedin.com/company/youth-awareness-for-peace-and-development/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-gray-100 hover:bg-primary hover:text-white p-3 rounded-full transition-all duration-300 transform hover:scale-110"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="animate-fade-in-up animation-delay-200">
              <SectionHeading title="Send Us a Message" />
              <div className="bg-gray-50 p-6 md:p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-white pb-0">
        <div className="container-custom">
          <SectionHeading 
            title="Our Location" 
            subtitle="Visit us in Kaduna, Nigeria"
            centered
          />
        </div>
        <div className="w-full h-[400px] bg-gray-200 mt-8 rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.424177378!2d7.4389!3d10.5222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDMxJzIwLjAiTiA3wrAyNicyMC4wIkU!5e0!3m2!1sen!2sng!4v1620000000000!5m2!1sen!2sng"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default Contact;
