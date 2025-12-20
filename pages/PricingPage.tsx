
import React from 'react';
import { usePageMetadata } from '../hooks/usePageMetadata';
import PricingSection from '../components/PricingSection';
import BookingSection from '../components/BookingSection';

const PricingPage: React.FC = () => {
    usePageMetadata(
        'Detailing Packages & Pricing | Nano Mobile Detailing',
        "Explore our clear and transparent mobile detailing pricing. From the Mini Refresh to the Complete Detail restoration, we have a package for every vehicle."
    );

    return (
        <div className="bg-brand-dark-bg">
            <div className="relative py-24 border-b border-brand-border">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="text-5xl md:text-7xl font-extrabold font-display text-white uppercase tracking-tighter mb-6">Investment & <span className="text-brand-gold">Packages</span></h1>
                    <p className="text-brand-text-secondary text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                        Transparent pricing. Premium results. Choose the package that fits your vehicle's needs.
                    </p>
                </div>
            </div>

            <PricingSection />

            <div className="py-24 bg-brand-surface">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold font-display text-white uppercase mb-8">Need a Custom Quote?</h2>
                    <p className="text-brand-text-secondary mb-12 max-w-2xl mx-auto">
                        For oversized vehicles, commercial fleets, or specialized restoration needs, we provide tailored estimates via WhatsApp.
                    </p>
                    <div className="flex justify-center">
                        <a 
                            href="https://wa.me/17782515604" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="bg-brand-gold text-brand-dark-bg font-bold py-5 px-12 rounded-full hover:bg-brand-gold-light transition-all transform hover:scale-105 shadow-xl uppercase tracking-widest font-display"
                        >
                            Get A Custom Estimate
                        </a>
                    </div>
                </div>
            </div>

            <BookingSection />
        </div>
    );
};

export default PricingPage;
