
import React from 'react';
import { usePageMetadata } from '../../hooks/usePageMetadata';
import PricingSection from '../../components/PricingSection';
import BookingSection from '../../components/BookingSection';

const PackagesPage: React.FC = () => {
  usePageMetadata(
    'Detailing Packages & Pricing | Nano Mobile Detailing',
    'Transparent pricing for our Mini Refresh, Basic, and Complete detailing packages in Vancouver.'
  );

  return (
    <>
      <PricingSection />
      <BookingSection />
    </>
  );
};

export default PackagesPage;
