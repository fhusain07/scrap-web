import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
import NotFound from "pages/NotFound";
import BookingFormAppointmentScheduling from './pages/booking-form-appointment-scheduling';
import BookingConfirmationSuccess from './pages/booking-confirmation-success';
import HomepageServiceOverview from './pages/homepage-service-overview';

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
      <ScrollToTop />
      <RouterRoutes>
        {/* Define your route here */}
        <Route path="/" element={<HomepageServiceOverview />} />
        <Route path="/booking-form-appointment-scheduling" element={<BookingFormAppointmentScheduling />} />
        <Route path="/booking-confirmation-success" element={<BookingConfirmationSuccess />} />
        <Route path="/homepage-service-overview" element={<HomepageServiceOverview />} />
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;
