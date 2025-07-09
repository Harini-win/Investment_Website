import React, { useState } from 'react';
import { PiggyBank, Shield, Users, HandCoins, Heart } from 'lucide-react';

export default function FeatureCards() {
  const [activeCard, setActiveCard] = useState(null);

  const cards = [
    // ...existing cards array...
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

  const handleCardClick = (index) => {
    setActiveCard(activeCard === index ? null : index);
  };

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
              className={`relative bg-white rounded-3xl p-8 shadow-xl transition-all duration-500 cursor-pointer overflow-hidden border-2 min-h-[300px] ${
                activeCard === index 
                  ? 'border-yellow-300 bg-gradient-to-br from-black via-gray-900 to-black' 
                  : 'border-yellow-100 hover:border-yellow-300 hover:shadow-2xl'
              }`}
              onClick={() => handleCardClick(index)}
            >
              {/* Default state content */}
              <div className={`transition-opacity duration-300 ${activeCard === index ? 'opacity-0' : 'opacity-100'}`}>
                <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-2xl w-18 h-18 flex items-center justify-center mb-6 text-black shadow-lg">
                  {card.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-black leading-tight">
                  {card.title}
                </h3>
                <p className="text-gray-600 text-sm">Tap to see features</p>
              </div>

              {/* Active state content */}
              <div className={`absolute inset-0 rounded-3xl p-6 flex flex-col transition-opacity duration-500 ${
                activeCard === index ? 'opacity-100' : 'opacity-0'
              }`}>
                <div className="text-yellow-400 mb-3">
                  {card.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-white leading-tight">
                  {card.title}
                </h3>
                <ul className="space-y-3 flex-grow">
                  {card.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <div className="w-2.5 h-2.5 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full mt-2 flex-shrink-0 shadow-sm"></div>
                      <span className="text-white text-sm leading-relaxed font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-gray-300 text-xs mt-4">Tap again to close</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}