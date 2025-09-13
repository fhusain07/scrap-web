import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../../components/ui/Header';
import ConfirmationHeader from './components/ConfirmationHeader';
import BookingDetailsCard from './components/BookingDetailsCard';
import ReferenceNumber from './components/ReferenceNumber';
import NextStepsCard from './components/NextStepsCard';
import ActionButtons from './components/ActionButtons';
import SocialSharing from './components/SocialSharing';
import ContactInfo from './components/ContactInfo';

const BookingConfirmationSuccess = () => {
  const location = useLocation();
  const [bookingDetails, setBookingDetails] = useState(null);
  const [referenceNumber, setReferenceNumber] = useState('');
  const [whatsappStatus, setWhatsappStatus] = useState('sent');
  const [emailStatus, setEmailStatus] = useState('sent');

  useEffect(() => {
    // Get booking details from navigation state or localStorage
    const details = location?.state?.bookingDetails || JSON.parse(localStorage.getItem('lastBookingDetails') || 'null');
    
    if (details) {
      setBookingDetails(details);
      // Generate reference number based on timestamp and customer name
      const timestamp = Date.now()?.toString()?.slice(-6);
      const nameInitials = details?.customerName?.split(' ')?.map(n => n?.[0])?.join('')?.toUpperCase();
      setReferenceNumber(`SP${nameInitials}${timestamp}`);
    } else {
      // Mock booking details for demonstration
      const mockDetails = {
        customerName: "John Smith",
        contactNumber: "+1 (555) 123-4567",
        email: "john.smith@email.com",
        pickupAddress: "123 Green Street, Eco City, EC 12345",
        scrapTypes: ["Metal", "E-waste"],
        estimatedWeight: "25",
        weightUnit: "kg",
        pickupDate: "2025-09-02",
        pickupTime: "10:00",
        specialInstructions: "Please call before arrival. Items are in the garage."
      };
      setBookingDetails(mockDetails);
      setReferenceNumber('SPJS847392');
    }

    // Simulate notification status (in real app, this would come from API)
    setTimeout(() => {
      setWhatsappStatus(Math.random() > 0.2 ? 'sent' : 'pending');
      setEmailStatus('sent');
    }, 1000);

    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, [location?.state]);

  if (!bookingDetails) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-center min-h-[400px]">
            <div className="text-center">
              <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-muted-foreground">Loading booking confirmation...</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Confirmation Header */}
        <ConfirmationHeader />
        
        {/* Reference Number */}
        <ReferenceNumber referenceNumber={referenceNumber} />
        
        {/* Booking Details */}
        <BookingDetailsCard bookingDetails={bookingDetails} />
        
        {/* Next Steps */}
        <NextStepsCard 
          whatsappStatus={whatsappStatus} 
          emailStatus={emailStatus} 
        />
        
        {/* Action Buttons */}
        <ActionButtons />
        
        {/* Social Sharing */}
        <SocialSharing />
        
        {/* Contact Information */}
        <ContactInfo />
        
        {/* Footer Message */}
        <div className="text-center mt-8 p-6 bg-primary/5 border border-primary/20 rounded-lg">
          <p className="text-primary font-medium mb-2">
            Thank you for choosing Nagpur Scrap! 🌱
          </p>
          <p className="text-sm text-muted-foreground">
            Together, we're making a positive impact on the environment through responsible scrap recycling.
          </p>
        </div>
      </main>
    </div>
  );
};

export default BookingConfirmationSuccess;