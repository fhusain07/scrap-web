import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import CustomerInfoSection from './components/CustomerInfoSection';
import PickupDetailsSection from './components/PickupDetailsSection';
import SchedulingSection from './components/SchedulingSection';
import FormActions from './components/FormActions';
import FormProgress from './components/FormProgress';

const BookingFormAppointmentScheduling = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    address: '',
    scrapTypes: [],
    estimatedWeight: '',
    weightUnit: 'kg',
    pickupDate: '',
    timeSlot: '',
    specialInstructions: ''
  });
  
  const [errors, setErrors] = useState({});

  // Form validation
  const validateForm = () => {
    const newErrors = {};
    
    // Customer Information validation
    if (!formData?.fullName?.trim()) {
      newErrors.fullName = 'Full name is required';
    }
    
    if (!formData?.phone?.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\+?[\d\s\-\(\)]{10,}$/?.test(formData?.phone?.replace(/\s/g, ''))) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    
    if (!formData?.email?.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/?.test(formData?.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    // Pickup Details validation
    if (!formData?.address?.trim()) {
      newErrors.address = 'Pickup address is required';
    }
    
    if (formData?.scrapTypes?.length === 0) {
      newErrors.scrapTypes = 'Please select at least one scrap type';
    }
    
    if (!formData?.estimatedWeight || parseFloat(formData?.estimatedWeight) <= 0) {
      newErrors.estimatedWeight = 'Please enter a valid weight';
    }
    
    // Scheduling validation
    if (!formData?.pickupDate) {
      newErrors.pickupDate = 'Please select a pickup date';
    } else {
      const selectedDate = new Date(formData.pickupDate);
      const today = new Date();
      today?.setHours(0, 0, 0, 0);
      
      if (selectedDate < today) {
        newErrors.pickupDate = 'Pickup date cannot be in the past';
      }
    }
    
    if (!formData?.timeSlot) {
      newErrors.timeSlot = 'Please select a time slot';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors)?.length === 0;
  };

  const isFormValid = () => {
    return (formData?.fullName?.trim() &&
    formData?.phone?.trim() &&
    formData?.email?.trim() &&
    formData?.address?.trim() &&
    formData?.scrapTypes?.length > 0 &&
    formData?.estimatedWeight &&
    formData?.pickupDate && formData?.timeSlot);
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    
    // Clear error when user starts typing
    if (errors?.[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ''
      }));
    }
  };

  const handleScrapTypeChange = (scrapType, checked) => {
    setFormData(prev => ({
      ...prev,
      scrapTypes: checked
        ? [...prev?.scrapTypes, scrapType]
        : prev?.scrapTypes?.filter(type => type !== scrapType)
    }));
    
    // Clear error when user makes selection
    if (errors?.scrapTypes) {
      setErrors(prev => ({
        ...prev,
        scrapTypes: ''
      }));
    }
  };

  const handleWeightUnitChange = (unit) => {
    setFormData(prev => ({
      ...prev,
      weightUnit: unit
    }));
  };

  const handleTimeSlotChange = (timeSlot) => {
    setFormData(prev => ({
      ...prev,
      timeSlot: timeSlot
    }));
    
    // Clear error when user makes selection
    if (errors?.timeSlot) {
      setErrors(prev => ({
        ...prev,
        timeSlot: ''
      }));
    }
  };

  const generateWhatsAppMessage = () => {
    const scrapTypeLabels = {
      metal: 'Metal Scrap',
      plastic: 'Plastic Materials',
      ewaste: 'Electronic Waste',
      paper: 'Paper & Cardboard',
      glass: 'Glass Items'
    };
    
    const selectedScrapTypes = formData?.scrapTypes?.map(type => scrapTypeLabels?.[type])?.join(', ');
    
    const message = `🚛 *New Scrap Pickup Request*

📋 *Customer Details:*
• Name: ${formData?.fullName}
• Phone: ${formData?.phone}
• Email: ${formData?.email}

📍 *Pickup Address:*
${formData?.address}

♻️ *Scrap Details:*
• Types: ${selectedScrapTypes}
• Estimated Weight: ${formData?.estimatedWeight} ${formData?.weightUnit}

📅 *Preferred Schedule:*
• Date: ${new Date(formData.pickupDate)?.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    })}
• Time: ${formData?.timeSlot}

${formData?.specialInstructions ? `📝 *Special Instructions:*\n${formData?.specialInstructions}` : ''}

*Booking submitted on:* ${new Date()?.toLocaleString('en-US')}

Please confirm this pickup request. Thank you! 🌱`;

    return encodeURIComponent(message);
  };

  const handleSubmit = async () => {
    if (!validateForm()) {
      // Scroll to first error
      const firstErrorField = Object.keys(errors)?.[0];
      const errorElement = document.querySelector(`[name="${firstErrorField}"]`);
      if (errorElement) {
        errorElement?.scrollIntoView({ behavior: 'smooth', block: 'center' });
        errorElement?.focus();
      }
      return;
    }

    setIsLoading(true);
    
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Generate WhatsApp message
      const whatsappMessage = generateWhatsAppMessage();
      const whatsappUrl = `https://wa.me/15551234567?text=${whatsappMessage}`;
      
      // Store booking data for confirmation page
      localStorage.setItem('bookingData', JSON.stringify({
        ...formData,
        bookingId: `SP${Date.now()}`,
        submittedAt: new Date()?.toISOString(),
        whatsappUrl
      }));
      
      // Navigate to confirmation page
      navigate('/booking-confirmation-success');
      
    } catch (error) {
      console.error('Booking submission error:', error);
      // Handle error - could show toast notification
    } finally {
      setIsLoading(false);
    }
  };

  const handleBack = () => {
    navigate('/homepage-service-overview');
  };

  // Auto-save to localStorage
  useEffect(() => {
    const timer = setTimeout(() => {
      if (Object.values(formData)?.some(value => 
        Array.isArray(value) ? value?.length > 0 : value?.toString()?.trim()
      )) {
        localStorage.setItem('draftBooking', JSON.stringify(formData));
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [formData]);

  // Load draft on mount
  useEffect(() => {
    const draft = localStorage.getItem('draftBooking');
    if (draft) {
      try {
        const draftData = JSON.parse(draft);
        setFormData(draftData);
      } catch (error) {
        console.error('Error loading draft:', error);
      }
    }
  }, []);

  return (
    <>
      <Helmet>
        <title>Book Scrap Pickup - Nagpur Scrap</title>
        <meta name="description" content="Schedule your scrap pickup appointment with Nagpur Scrap. Easy online booking for metal, plastic, e-waste, and more." />
        <meta name="keywords" content="scrap pickup booking, waste collection appointment, recycling service, scrap removal" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <FormProgress currentStep={2} totalSteps={3} />
        
        <div className="max-w-4xl mx-auto px-4 py-6 md:py-8 pb-32">
          <div className="space-y-6">
            <CustomerInfoSection
              formData={formData}
              errors={errors}
              onChange={handleInputChange}
            />
            
            <PickupDetailsSection
              formData={formData}
              errors={errors}
              onChange={handleInputChange}
              onScrapTypeChange={handleScrapTypeChange}
              onWeightUnitChange={handleWeightUnitChange}
            />
            
            <SchedulingSection
              formData={formData}
              errors={errors}
              onChange={handleInputChange}
              onTimeSlotChange={handleTimeSlotChange}
            />
          </div>
        </div>
        
        <FormActions
          onSubmit={handleSubmit}
          onBack={handleBack}
          isLoading={isLoading}
          isFormValid={isFormValid()}
        />
      </div>
    </>
  );
};

export default BookingFormAppointmentScheduling;