import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import PhotoSlider from './components/PhotoSlider';
import MaterialsGrid from './components/MaterialsGrid';
import TrustSignals from './components/TrustSignals';
import CallToAction from './components/CallToAction';
import Icon from '../../components/AppIcon';


const HomepageServiceOverview = () => {
  return (
    <>
      <Helmet>
        <title>Nagpur Scrap - Professional Scrap Collection Service</title>
        <meta 
          name="description" 
          content="Schedule convenient scrap pickup from your doorstep. We collect metal, plastic, and e-waste with eco-friendly disposal methods. Free estimates available." 
        />
        <meta name="keywords" content="scrap pickup, metal collection, e-waste disposal, recycling service, doorstep pickup" />
        <meta property="og:title" content="Nagpur Scrap - Professional Scrap Collection Service" />
        <meta property="og:description" content="Schedule convenient scrap pickup from your doorstep. Eco-friendly disposal methods with free estimates." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/homepage-service-overview" />
      </Helmet>
      <div className="min-h-screen bg-background">
        {/* Header */}
        <Header />

        {/* Main Content */}
        <main>
          {/* Hero Section */}
          <HeroSection />

          {/* Photo Slider */}
          <PhotoSlider />

          {/* Materials We Collect */}
          <MaterialsGrid />

          {/* Trust Signals & Testimonials */}
          <TrustSignals />

          {/* Final Call to Action */}
          <CallToAction />
        </main>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Company Info */}
                <div className="lg:col-span-2">
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                      <Icon name="Recycle" size={20} color="white" strokeWidth={2.5} />
                    </div>
                    <div>
                      <span className="text-xl font-bold">Nagpur Scrap</span>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4 max-w-md">
                    Professional scrap collection service committed to eco-friendly disposal 
                    and exceptional customer service. Making recycling convenient for everyone.
                  </p>
                  <div className="flex space-x-4">
                    <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors cursor-pointer">
                      <Icon name="Facebook" size={16} />
                    </div>
                    <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors cursor-pointer">
                      <Icon name="Twitter" size={16} />
                    </div>
                    <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors cursor-pointer">
                      <Icon name="Instagram" size={16} />
                    </div>
                  </div>
                </div>

                {/* Services */}
                <div>
                  <h3 className="font-semibold mb-4">Services</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="hover:text-white transition-colors cursor-pointer">Metal Scrap Pickup</li>
                    <li className="hover:text-white transition-colors cursor-pointer">Plastic Waste Collection</li>
                    <li className="hover:text-white transition-colors cursor-pointer">E-Waste Disposal</li>
                    <li className="hover:text-white transition-colors cursor-pointer">Bulk Pickup Service</li>
                  </ul>
                </div>

                {/* Contact */}
                <div>
                  <h3 className="font-semibold mb-4">Contact</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center">
                      <Icon name="Phone" size={16} className="mr-2" />
                      (883) 038-6225
                    </li>
                    <li className="flex items-center">
                      <Icon name="Mail" size={16} className="mr-2" />
                      nagpurscrap@gmail.com
                    </li>
                    <li className="flex items-center">
                      <Icon name="MapPin" size={16} className="mr-2" />
                      Hasanbagh Chowk, Nagpur
                    </li>
                    <li className="flex items-center">
                      <Icon name="Clock" size={16} className="mr-2" />
                      Mon-Sat: 7AM-10PM
                    </li>
                  </ul>
                </div>
              </div>

              {/* Bottom Bar */}
              <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
                <p className="text-gray-400 text-sm">
                  © {new Date()?.getFullYear()} Nagpur Scrap. All rights reserved.
                </p>
                <div className="flex space-x-6 mt-4 sm:mt-0">
                  <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                    Privacy Policy
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                    Terms of Service
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                    Cookie Policy
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default HomepageServiceOverview;