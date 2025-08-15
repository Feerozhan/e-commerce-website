import React, { useState, useEffect } from 'react';

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      id: 1,
      title: "New Denim Collection",
      subtitle: "Shop the latest arrivals",
      image: '/images/fashion4.jpg', // Path from public folder
      alt: "Denim jeans and jackets collection"
    },
    {
      id: 2,
      title: "Summer Essentials",
      subtitle: "Fresh styles for the season",
      image: '/images/fashion6.jpg', // Path from public folder
      alt: "Summer t-shirts and shorts collection"
    },
    {
      id: 3,
      title: "Limited Edition",
      subtitle: "Exclusive items while they last",
      image: '/images/fashion8.jpg', // Path from public folder
      alt: "Limited edition fashion items"
    }
  ];

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="relative overflow-hidden">
      <div className="h-64 md:h-96 w-full relative">
        {/* Slides with images */}
        {slides.map((slide, index) => (
          <div 
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
          >
            <img 
              src={slide.image} 
              alt={slide.alt}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <div className="text-center text-white">
                <h1 className="text-3xl md:text-5xl font-bold">{slide.title}</h1>
                <p className="mt-2 text-lg">{slide.subtitle}</p>
              </div>
            </div>
          </div>
        ))}
        
        {/* Navigation dots */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full ${index === currentSlide ? 'bg-white' : 'bg-white/50'}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}