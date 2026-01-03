
import React from 'react';
import { usePageMetadata } from '../../hooks/usePageMetadata';
import ServicesSection from '../../components/ServicesSection';
import BookingSection from '../../components/BookingSection';

const SpecializedPage: React.FC = () => {
  usePageMetadata(
    'Specialized Car Care Services | Nano Mobile Detailing',
    'Explore our high-precision specialized services including black trim restoration, mold removal, and fleet detailing.'
  );

  return (
    <>
      <ServicesSection />
      <BookingSection />
    </>
  );
};

export default SpecializedPage;
