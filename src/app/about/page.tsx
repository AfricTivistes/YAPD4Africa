export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[60vh] w-full">
        <img
          src="/lovable-uploads/Home/IMG_0549.jpeg"
          alt="About YAPD4Africa"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white text-center">
            About <span className="text-green-600">Us</span>
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="relative h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="/lovable-uploads/Home/IMG_0549.jpeg"
              alt="YAPD4Africa Team"
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          </div>

          {/* Text Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                About <span className="text-green-600">Us</span>
              </h2>
              <div className="w-24 h-1 bg-green-600 mb-8"></div>
            </div>
            
            <p className="text-lg text-gray-700 leading-relaxed">
            Founded in 2017, Connected Youth for Accountability, Peace and Development Initiative (YAPD4Africa) is a Pan-Africa youth-led and civil society organization, whose dedicated mission is to build strong people and sustainable communities in Africa. 
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
            Our primary focus is to empower people with the accurate knowledge and skills to advocate for their rights and community development across the continent through our various homegrown initiatives and social impact projects.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 