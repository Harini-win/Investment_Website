import React, { useState, useEffect } from 'react';

const Abt = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-96 h-96 bg-gradient-to-br from-yellow-200 to-yellow-300 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-1/2 -right-1/2 w-96 h-96 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-6xl w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-yellow-500 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-all duration-500"></div>
              <div className="relative bg-white rounded-2xl p-2 shadow-2xl border border-white/20 backdrop-blur-sm">
                <img
                  src="./abt.png" 
                  alt="Phone"
                  className="w-full h-auto rounded-xl transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
          <div className={`space-y-8 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            <div className="space-y-6">
              <div className="relative">
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight relative">
                  <span className="bg-gradient-to-r from-yellow-600 via-yellow-300 to-yellow-600 bg-clip-text text-transparent">
                    ABOUT US
                  </span>
                  <div className="absolute -bottom-2 left-0 w-24 h-1 bg-gradient-to-r from-yellow-300 to-yellow-600 rounded-full"></div>
                </h1>
              </div>
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-yellow-500 rounded-2xl blur-xl opacity-10 group-hover:opacity-20 transition-all duration-500"></div>
                <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-white/20 hover:shadow-3xl transition-all duration-500">
                  <div className="space-y-6">
                    <div className="relative">
                      <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-yellow-300 to-yellow-500 rounded-full"></div>
                      <p className="text-gray-700 leading-relaxed text-lg ml-6 relative z-10">
                        At <span className="font-semibold text-yellow-400">LN Investments</span>, we specialize in goal-based and risk-based financial planning tailored to your life priorities. With a strong foundation in mutual fund investments, term and health insurance, and retirement planning, our mission is to help you grow, protect, and transfer your wealth efficiently.
                      </p>
                    </div>

                    <div className="my-6">
                      <p className="text-gray-700 leading-relaxed text-lg mb-4">
                        We work extensively with:
                      </p>
                      
                      <div className="space-y-3">
                        <div className="flex items-center space-x-3 group/item">
                          <div className="w-2 h-2 bg-yellow-500 rounded-full group-hover/item:scale-125 transition-transform duration-300"></div>
                          <span className="text-gray-700 group-hover/item:text-gray-900 transition-colors duration-300">
                            <span className="font-semibold">NRIs (Non-Resident Indians)</span> navigating cross-border financial needs
                          </span>
                        </div>
                        <div className="flex items-center space-x-3 group/item">
                          <div className="w-2 h-2 bg-yellow-500 rounded-full group-hover/item:scale-125 transition-transform duration-300"></div>
                          <span className="text-gray-700 group-hover/item:text-gray-900 transition-colors duration-300">
                            <span className="font-semibold">HNIs (High Net-Worth Individuals)</span> requiring bespoke investment strategies
                          </span>
                        </div>
                        <div className="flex items-center space-x-3 group/item">
                          <div className="w-2 h-2 bg-yellow-500 rounded-full group-hover/item:scale-125 transition-transform duration-300"></div>
                          <span className="text-gray-700 group-hover/item:text-gray-900 transition-colors duration-300">
                            <span className="font-semibold">IT professionals</span> looking for tax-efficient wealth creation and retirement solutions
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="relative">
                      <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-yellow-300 to-yellow-500 rounded-full"></div>
                      <p className="text-gray-700 leading-relaxed text-lg ml-6">
                        Our approach combines personalized advice with well-researched financial products, enabling our clients to make informed, confident financial decisions at every stage of life.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Abt;