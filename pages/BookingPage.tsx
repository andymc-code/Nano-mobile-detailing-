import React from 'react';
import { usePageMetadata } from '../hooks/usePageMetadata';
import { getWhatsAppLink, DEFAULT_WHATSAPP_MESSAGE } from '../constants';

const BookingPage: React.FC = () => {
    usePageMetadata('Book Mobile Detailing via WhatsApp | Convenient Car Spa', 'Schedule your mobile car detailing service in Vancouver by contacting us on WhatsApp. Quick, easy, and personal booking experience.');
    
    return (
        <div className="bg-brand-dark-bg py-20 min-h-[60vh] flex items-center">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto bg-brand-surface p-8 md:p-16 rounded-lg shadow-2xl text-center">
                    <h1 className="text-4xl md:text-5xl font-bold font-display text-brand-text-primary">Schedule Your Mobile Service</h1>
                    <p className="text-brand-text-secondary mt-4 text-lg max-w-2xl mx-auto">
                        For a personal touch and the fastest response, we handle all our bookings through WhatsApp. Click the button below to start a chat with us!
                    </p>
                    <div className="mt-10">
                         <a 
                            href={getWhatsAppLink(DEFAULT_WHATSAPP_MESSAGE)} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="inline-block bg-brand-accent text-brand-dark-bg font-bold py-4 px-10 rounded-md text-xl hover:opacity-90 transition-all duration-300 transform hover:scale-105 uppercase tracking-widest font-display"
                        >
                            Book Now
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingPage;