import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import {
  ScrapCollection,
  EwasteRecycling,
  EcoProcessing,
  TruckService,
  MaterialSorting,
} from "../../../assets";

const PhotoSlider = () => {
  // Sample photos related to scrap pickup service
  const photos = [
    {
      id: 1,
      url: ScrapCollection,
      title: "Professional Scrap Collection",
      description: "Our team efficiently collecting metal scraps",
    },
    {
      id: 2,
      url: EwasteRecycling,
      title: "E-Waste Recycling",
      description: "Responsible disposal of electronic components",
    },
    {
      id: 3,
      url: EcoProcessing,
      title: "Eco-Friendly Processing",
      description: "Sustainable recycling facilities",
    },
    {
      id: 4,
      url: TruckService,
      title: "Truck Collection Service",
      description: "Convenient doorstep pickup service",
    },
    {
      id: 5,
      url: MaterialSorting,
      title: "Material Sorting",
      description: "Expert sorting and categorization",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-slide functionality
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === photos?.length - 1 ? 0 : prevIndex + 1
        );
      }, 4000); // Change photo every 4 seconds

      return () => clearInterval(interval);
    }
  }, [isPaused, photos?.length]);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? photos?.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === photos?.length - 1 ? 0 : currentIndex + 1);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Scrap Pickup Live Action
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Take a look at our professional scrap pickup service and eco-friendly recycling processes
            </p>
          </div>

          {/* Photo Slider */}
          <div 
            className="relative overflow-hidden rounded-2xl shadow-2xl bg-gray-100"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Main Image Display */}
            <div className="relative h-96 lg:h-[500px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 300 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -300 }}
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                  className="absolute inset-0"
                >
                  <img
                    src={photos?.[currentIndex]?.url}
                    alt={photos?.[currentIndex]?.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = '/assets/images/no_image.png';
                    }}
                  />
                  {/* Overlay with content */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent">
                    <div className="absolute bottom-6 left-6 right-6">
                      <h3 className="text-white text-xl lg:text-2xl font-bold mb-2">
                        {photos?.[currentIndex]?.title}
                      </h3>
                      <p className="text-white/90 text-sm lg:text-base">
                        {photos?.[currentIndex]?.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm"
              aria-label="Previous image"
            >
              <Icon name="ChevronLeft" size={24} />
            </button>
            
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm"
              aria-label="Next image"
            >
              <Icon name="ChevronRight" size={24} />
            </button>

            {/* Dot Indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
              {photos?.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-white shadow-lg' 
                      : 'bg-white/50 hover:bg-white/70'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Play/Pause Button */}
            <button
              onClick={() => setIsPaused(!isPaused)}
              className="absolute top-4 right-4 w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm"
              aria-label={isPaused ? 'Play slideshow' : 'Pause slideshow'}
            >
              <Icon name={isPaused ? "Play" : "Pause"} size={16} />
            </button>
          </div>

          {/* Thumbnail Strip */}
          <div className="flex justify-center mt-6 space-x-2 overflow-x-auto pb-2">
            {photos?.map((photo, index) => (
              <button
                key={photo?.id}
                onClick={() => goToSlide(index)}
                className={`flex-shrink-0 w-20 h-16 lg:w-24 lg:h-18 rounded-lg overflow-hidden transition-all duration-300 ${
                  index === currentIndex 
                    ? 'ring-2 ring-primary ring-offset-2 opacity-100' :'opacity-60 hover:opacity-80'
                }`}
              >
                <img
                  src={photo?.url}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = '/assets/images/no_image.png';
                  }}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhotoSlider;