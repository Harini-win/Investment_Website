import React from 'react';

const Footer = () => {
  return (
    <div className="min-h-screen bg-white p-6 flex items-center justify-center">
      <div className="max-w-6xl w-full">
        <div className="bg-white rounded-3xl shadow-2xl shadow-amber-900/10 border border-amber-100 overflow-hidden">
          <div className="h-1 bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500"></div>
          
          <div className="p-12 lg:p-16">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-yellow-50 text-yellow-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></div>
                Available Now
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-900 via-yellow-700 to-amber-800 bg-clip-text text-transparent mb-4">
                We are always happy to assist you
              </h1>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Get in touch with us for any questions, assistance, or feedback. We're here to help!
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="group bg-gradient-to-br from-yellow-50 to-amber-50 rounded-2xl p-8 border border-yellow-100 hover:shadow-xl hover:shadow-yellow-100 transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg">Email Address</h3>
                    <p className="text-sm text-yellow-600">Send us a message</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <a 
                    href="mailto:ln.invts@gmail.com"
                    className="block text-lg font-medium text-gray-900 hover:text-yellow-600 transition-colors"
                  >
                    ln.invts@gmail.com
                  </a>
                  
                  
                </div>
              </div>

              <div className="group bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 border border-amber-100 hover:shadow-xl hover:shadow-amber-100 transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg">Linkedin</h3>
                    <p className="text-sm text-amber-600">Connect with us</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <a 
                    href="https://www.linkedin.com/in/lakshmi-s-906946361/"
                    className="block text-lg font-medium text-gray-900 hover:text-amber-600 transition-colors"
                  >
                    LinkedIn Profile
                  </a>
                  
                 
                </div>
              </div>

              <div className="group bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 border border-orange-100 hover:shadow-xl hover:shadow-orange-100 transition-all duration-300 hover:-translate-y-1 md:col-span-2 lg:col-span-1">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg">Instagram</h3>
                    <p className="text-sm text-orange-600">Connect with us</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <a 
                    href="https://www.instagram.com/ln.invts/?hl=en"
                    className="block text-lg font-medium text-gray-900 hover:text-amber-600 transition-colors"
                  >
                    Insta Handle: @ln.invts
                  </a>
                  
                 
                </div>
              </div>
            </div>

            
          </div>
        </div>
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-yellow-400/10 rounded-full animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-amber-400/10 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-orange-400/10 rounded-full animate-pulse delay-500"></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;