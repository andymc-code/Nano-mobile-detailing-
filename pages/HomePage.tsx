
import React from 'react';
import HeroSection from '../components/HeroSection';
import ProcessSection from '../components/ProcessSection';
import ServicesSection from '../components/ServicesSection';
import GallerySection from '../components/GallerySection';
import PricingSection from '../components/PricingSection';
import BookingSection from '../components/BookingSection';
import { usePageMetadata } from '../hooks/usePageMetadata';
import TestimonialsSection from '../components/TestimonialsSection';
import WhyChooseUsSection from '../components/WhyChooseUsSection';
import FaqAccordion from '../components/FaqAccordion';
import { FAQ_DATA } from '../constants';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
    usePageMetadata(
        'Nano Mobile Detailing Vancouver | Professional Car Care at Your Doorstep',
        'Experience premium mobile detailing in Vancouver. We are 100% self-sufficient with onboard water and power. Specializing in ceramic coating, interior restoration, and the flawless new car feel.'
    );
    
    // Curated FAQs for the home page to provide quick educational value
    const homeFaqs = [
        ...FAQ_DATA.general.slice(0, 3),
        FAQ_DATA.ceramic[0],
        FAQ_DATA.interior[0]
    ];

    return (
        <div>
            <HeroSection />
            <ProcessSection />
            <ServicesSection />
            <TestimonialsSection />
            <GallerySection />
            <PricingSection />
            <WhyChooseUsSection />
            
            <section className="py-24 bg-brand-surface border-y border-brand-border">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <span className="text-brand-gold font-display font-bold uppercase tracking-widest text-sm">Expert Insights</span>
                        <h2 className="text-4xl md:text-5xl font-bold font-display uppercase text-brand-text-primary mt-4">Knowledge <span className="text-brand-gold">is Power</span></h2>
                        <p className="text-brand-text-secondary mt-4 max-w-2xl mx-auto">Learn why thousands of Vancouver car owners trust the Nano Mobile method.</p>
                    </div>
                    <FaqAccordion items={homeFaqs} />
                    <div className="text-center mt-12">
                        <Link to="/faq" className="text-brand-gold font-bold uppercase tracking-widest hover:text-white transition-colors border-b border-brand-gold pb-1">View Full Technical FAQ &rarr;</Link>
                    </div>
                </div>
            </section>

            <BookingSection />
        </div>
    );
};

export default HomePage;
