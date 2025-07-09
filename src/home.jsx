import React from 'react';
import Abt from './about.jsx';
import Footer from './footer.jsx';
import FeatureCards from './services.jsx';
export default function Home() {
  
const [isHovered, setIsHovered] = React.useState(false);

return (
    <div className="min-h-screen bg-white">
        <nav className="bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center">
                        <div className="flex items-center space-x-2">
                            <img src='./logo.png' alt="Logo" className="h-8 w-12" />
                            <span className="text-xl font-bold bg-gradient-to-r from-yellow-600 via-yellow-300 to-yellow-600 bg-clip-text text-transparent">LN Investments</span>
                        </div>
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        <a href="#about" className="text-gray-700 hover:text-gray-900">About us</a>
                        <a href="#services" className="text-gray-700 hover:text-gray-900">Services</a>
                        <a href="#footer" className="text-gray-700 hover:text-gray-900">Contact us</a>
                    </div>
                </div>
            </div>
        </nav>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-60 py-16 lg:py-32">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Hide image section on mobile with hidden md:block */}
                <div
                    className="hidden md:block"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    style={{ minHeight: 400 }}
                >
                    <img
                        src="./phone.png"
                        alt="Phone"
                        className="h-160 w-auto absolute left-50 top-30"
                    />
                    <img
                        src="./card.png"
                        alt="Card"
                        className={`h-70 w-auto absolute left-100 top-80 transition-all duration-1500 ${isHovered ? 'translate-x-30' : ''}`}
                    />
                    <img
                        src="./app.png"
                        alt="app"
                        className={`h-20 w-auto rounded-3xl absolute left-90 top-80 transition-all duration-1500 ${isHovered ? '-translate-x-30' : ''}`}
                    />
                    <img
                        src="./pay.png"
                        alt="pay"
                        className={`h-30 w-auto rounded-3xl absolute left-80 top-120 transition-all duration-1500 ${isHovered ? '-translate-x-30' : ''}`}
                    />
                </div>
                
                {/* Text content - adjusted positioning for mobile */}
                <div className="space-y-8 text-center lg:text-left lg:absolute lg:left-200 lg:top-30">
                    <div>
                        <h1 className="font-mono font-semibold text-4xl md:text-5xl lg:text-[84px] text-gray-900 leading-tight">
                            Helping
                            <br />
                            <span className="text-gray-900">you grow</span>
                            <br />
                            <span className="text-gray-900">financially</span>
                        </h1>
                    </div>

                    <div className="space-y-6">
                        <p className="text-lg lg:text-xl text-gray-400 leading-relaxed">
                            Let's work together to align your finances with your goals.
                            <br className="hidden lg:block" />
                            Feel free to connect or message to explore, 
                            <br className="hidden lg:block" />
                            <span className="text-gray-400">how we can assist in your financial journey.</span>
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <a href="#footer" className="bg-yellow-400 text-black px-8 py-3 rounded-full font-semibold hover:bg-yellow-500 transition-colors flex items-center justify-center">
                                Contact us
                            </a>
                            <a href="#services" className="border border-gray-300 text-gray-700 px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition-colors">
                                Explore Services
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id = "about" className="bg-white py-12 lg:py-30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <Abt />
            </div>
        </div>
        <div id="services" className="bg-white py-12 lg:py-30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <FeatureCards />
            </div>
        </div>
        <div id = "footer" className="bg-white py-12 lg:py-30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <Footer />
            </div>
        </div>
    </div>
);
}