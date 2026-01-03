
import React from 'react';
import { usePageMetadata } from '../../hooks/usePageMetadata';
import ProcessSection from '../../components/ProcessSection';
import BookingSection from '../../components/BookingSection';

const ProcessPage: React.FC = () => {
  usePageMetadata(
    'How Our Mobile Detailing Works | The Nano Process',
    'Discover our seamless 3-step process from easy booking to a perfect mobile finish at your location.'
  );

  return (
    <>
      <ProcessSection />
      <BookingSection />
    </>
  );
};

export default ProcessPage;
