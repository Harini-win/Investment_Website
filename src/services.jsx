import React from 'react';
import { PiggyBank, Shield, Users, HandCoins, Heart } from 'lucide-react';

export default function FeatureCards() {
  const cards = [
    {
      icon: <HandCoins className="w-8 h-8" />,
      title: "Mutual Funds",
      features: [
        "KYC Registration",
        "Doubt clarification",
        "Goal-based planning",
        "Regular monitoring of portfolio",
        "Processing SIP and bulk investments"
      ],
      
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Health Insurance",
      features: [
        "Doubt clarification",
        "Goal-based planning"
      ],
    
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Term Insurance",
      features: [
        "Doubt clarification",
        "Goal-based planning"
      ]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "NPS",
      features: [
        "Doubt clarification",
        "Goal-based planning"
      ]
    },
    {
      icon: <PiggyBank className="w-8 h-8" />,
      title: "Corporate Fixed Deposits",
      features: [
        "Doubt clarification",
        "Goal-based planning"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 text-black">
            Our <span className="text-yellow-500">Services</span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive financial solutions tailored to your needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden border-2 border-yellow-100 hover:border-yellow-300 min-h-[300px]"
            >
            
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-50 to-yellow-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
              
            
              <div className="relative z-10 group-hover:opacity-0 transition-opacity duration-300">
                <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-2xl w-18 h-18 flex items-center justify-center mb-6 text-black shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                  {card.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-black leading-tight">
                  {card.title}
                </h3>

              </div>

              
              <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black rounded-3xl p-6 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col transform translate-y-4 group-hover:translate-y-0">
                <div className="text-yellow-400 mb-3 transform scale-110">
                  {card.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-white leading-tight">
                  {card.title}
                </h3>
                <ul className="space-y-3 flex-grow">
                  {card.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3 transform translate-x-2 group-hover:translate-x-0 transition-transform duration-300" style={{transitionDelay: `${featureIndex * 100}ms`}}>
                      <div className="w-2.5 h-2.5 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full mt-2 flex-shrink-0 shadow-sm"></div>
                      <span className="text-white text-sm leading-relaxed font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-yellow-400 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
              <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-yellow-500 rounded-full opacity-10 group-hover:opacity-30 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}