
import React from 'react';
import { getWhatsAppLink, DEFAULT_WHATSAPP_MESSAGE } from '../constants';
import GoogleReviewsFeed from './GoogleReviewsFeed';

const BookingSection: React.FC = () => {
    return (
        <section className="py-24 bg-brand-dark-bg relative overflow-hidden">
             {/* Ambient Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand-gold/5 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                <GoogleReviewsFeed />
                
                <div className="bg-brand-surface border border-brand-gold/20 p-8 md:p-16 rounded-[40px] shadow-2xl text-center">
                    <h2 className="text-4xl md:text-5xl font-bold font-display uppercase text-brand-text-primary mb-6">Ready for a <span className="gold-gradient-text gold-glow">Flawless Finish?</span></h2>
                    <p className="text-brand-text-secondary mb-12 max-w-2xl mx-auto leading-relaxed text-lg">
                        Booking is simple and personal. Tap the button below to start a conversation with us on WhatsApp and schedule your appointment today.
                    </p>
                    <a 
                        href={getWhatsAppLink(DEFAULT_WHATSAPP_MESSAGE)} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="inline-block bg-brand-gold text-brand-dark-bg font-black py-5 px-14 rounded-full text-xl hover:bg-brand-gold-light transition-all duration-300 transform hover:scale-105 shadow-[0_10px_30px_rgba(212,175,55,0.3)] uppercase tracking-widest font-display"
                    >
                        Book Your Refresh
                    </a>
                </div>
            </div>
        </section>
    );
};

export default BookingSection;
