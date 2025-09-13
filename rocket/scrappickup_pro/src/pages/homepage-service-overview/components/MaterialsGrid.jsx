import React from 'react';
import Icon from '../../../components/AppIcon';

const MaterialsGrid = () => {
  const materials = [
    {
      id: 1,
      name: "Metal Scrap",
      icon: "Wrench",
      description: "Aluminum, copper, steel, iron, and other metal materials",
      examples: "Pipes, wires, appliances, car parts",
      color: "bg-blue-50 border-blue-200",
      iconColor: "text-blue-600"
    },
    {
      id: 2,
      name: "Plastic Waste",
      icon: "Package",
      description: "Various plastic types including bottles, containers, and packaging",
      examples: "Bottles, containers, bags, packaging materials",
      color: "bg-green-50 border-green-200",
      iconColor: "text-green-600"
    },
    {
      id: 3,
      name: "E-Waste",
      icon: "Smartphone",
      description: "Electronic devices, components, and computer equipment",
      examples: "Phones, computers, TVs, batteries, cables",
      color: "bg-purple-50 border-purple-200",
      iconColor: "text-purple-600"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
              What We Collect
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We accept a wide variety of scrap materials and ensure they're processed responsibly
            </p>
          </div>

          {/* Materials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {materials?.map((material) => (
              <div
                key={material?.id}
                className={`${material?.color} rounded-xl p-6 border-2 transition-all duration-300 hover:shadow-lg hover:scale-105`}
              >
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 ${material?.iconColor} bg-white rounded-lg flex items-center justify-center mr-4 shadow-sm`}>
                    <Icon name={material?.icon} size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {material?.name}
                  </h3>
                </div>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {material?.description}
                </p>
                
                <div className="bg-white rounded-lg p-3 border">
                  <p className="text-sm font-medium text-foreground mb-1">Examples:</p>
                  <p className="text-sm text-muted-foreground">
                    {material?.examples}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-12 text-center">
            <div className="bg-card rounded-xl p-6 border border-border shadow-subtle max-w-2xl mx-auto">
              <div className="flex items-center justify-center mb-3">
                <Icon name="Info" size={20} className="text-primary mr-2" />
                <span className="font-semibold text-foreground">Important Note</span>
              </div>
              <p className="text-muted-foreground">
                We provide free estimates based on material type and quantity. 
                Hazardous materials require special handling - please mention them during booking.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MaterialsGrid;