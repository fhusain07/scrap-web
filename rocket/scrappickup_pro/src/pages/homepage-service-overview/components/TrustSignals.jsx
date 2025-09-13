import React from 'react';
import Icon from '../../../components/AppIcon';

const TrustSignals = () => {
  const testimonials = [
  {
    id: 1,
    name: "Rahul Deshmukh",
    location: "Sitabuldi, Nagpur",
    rating: 5,
    comment:
      "Service mast hoti re! Time pe aaye, pura scrap uthake le gaye. Bilkul jhanjhat free kaam. Nagpur me aise reliable service dhoondhna mushkil hai.",
    avatar:
      "https://images.unsplash.com/photo-1603415526960-f7e0328a9c3d?w=150&h=150&fit=crop&crop=face",
  },
  {
    id: 2,
    name: "Priya Joshi",
    location: "Dharampeth, Nagpur",
    rating: 5,
    comment:
      "Bahut quick aur professional team hai. Maine call kiya aur next day hi pickup ho gaya. Rate bhi sahi mila aur staff polite tha. Zabardast experience!",
    avatar:
      "https://images.unsplash.com/photo-1619895862022-09114b41f16d?w=150&h=150&fit=crop&crop=face",
  },
  {
    id: 3,
    name: "Imran Khan",
    location: "Mahal, Nagpur",
    rating: 5,
    comment:
      "Office ka pura scrap in logon ne easily nikal diya. Old computers, furniture sab eco-friendly recycle kiya. Nagpur me best scrap service yehi hai!",
    avatar:
      "https://images.unsplash.com/photo-1603415527039-0bfc25e3b7e5?w=150&h=150&fit=crop&crop=face",
  },
];


  const guarantees = [
    {
      icon: "Shield",
      title: "Fully Insured",
      description: "Complete coverage for your peace of mind"
    },
    {
      icon: "Clock",
      title: "On-Time Guarantee",
      description: "We arrive when scheduled or notify in advance"
    },
    {
      icon: "Award",
      title: "Licensed & Certified",
      description: "Proper permits and environmental compliance"
    },
    {
      icon: "DollarSign",
      title: "Fair Pricing",
      description: "Transparent rates with no hidden fees"
    }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Icon
        key={index}
        name="Star"
        size={16}
        className={index < rating ? "text-yellow-400 fill-current" : "text-gray-300"}
      />
    ));
  };

  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Trust Badges */}
          <div className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-center text-foreground mb-8">
              Why Choose Nagpur Scrap?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {guarantees?.map((guarantee, index) => (
                <div
                  key={index}
                  className="bg-card rounded-lg p-6 text-center border border-border shadow-subtle hover:shadow-form transition-shadow duration-300"
                >
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={guarantee?.icon} size={24} color="white" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">
                    {guarantee?.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {guarantee?.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Customer Testimonials */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-center text-foreground mb-8">
              What Our Customers Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials?.map((testimonial) => (
                <div
                  key={testimonial?.id}
                  className="bg-card rounded-lg p-6 border border-border shadow-subtle hover:shadow-form transition-shadow duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden mr-4 bg-muted">
                      <img
                        src={testimonial?.avatar}
                        alt={testimonial?.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.src = '/assets/images/no_image.png';
                        }}
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">
                        {testimonial?.name}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {testimonial?.location}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center mb-3">
                    {renderStars(testimonial?.rating)}
                  </div>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    "{testimonial?.comment}"
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Security Badge */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center bg-card rounded-lg px-6 py-3 border border-border shadow-subtle">
              <Icon name="Lock" size={20} className="text-primary mr-2" />
              <span className="text-sm font-medium text-foreground">
                SSL Secured & Privacy Protected
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSignals;