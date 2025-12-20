
import React from 'react';
import FaqAccordion from '../components/FaqAccordion';
import Breadcrumb from '../components/Breadcrumb';
import { FAQ_DATA, getWhatsAppLink } from '../constants';
import { usePageMetadata } from '../hooks/usePageMetadata';
import BookingSection from '../components/BookingSection';

const CheckIcon = () => (
    <svg className="w-6 h-6 text-brand-gold mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
    </svg>
);

const InteriorRestorationPage: React.FC = () => {
    const pageTitle = 'Interior Restoration & Sanitization Vancouver | Nano Mobile';
    const pageDescription = 'Professional interior car restoration. We use 320°F steam sanitization and molecular extraction to restore your cabin to a factory-fresh environment.';
    usePageMetadata(pageTitle, pageDescription);

    return (
        <div className="bg-brand-dark-bg">
            <div className="relative h-[60vh] bg-cover bg-center" style={{ backgroundImage: `url('https://ik.imagekit.io/wnwu0xxx5/Auto_detailing/jeep_after_detail.png?updatedAt=1759629189923')` }}>
                <div className="absolute inset-0 bg-black/80 flex flex-col items-center justify-center text-center px-6">
                    <span className="text-brand-gold font-display font-bold uppercase tracking-[0.3em] mb-4 text-sm">Cabin Restoration</span>
                    <h1 className="text-4xl md:text-7xl font-extrabold font-display text-white uppercase tracking-tighter leading-none">Interior <br/> <span className="text-brand-gold">Restoration</span></h1>
                    <p className="text-brand-text-secondary mt-8 text-lg max-w-2xl font-display uppercase tracking-widest">
                        Bio-safe sanitization and deep-fiber extraction.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-6 py-24">
                <div className="mb-12">
                    <Breadcrumb paths={[{ name: 'Services', path: '/services' }, { name: 'Interior Restoration', path: '/interior-restoration' }]} />
                </div>

                <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
                    <div className="order-2 lg:order-1">
                        <img 
                            src="https://ik.imagekit.io/wnwu0xxx5/Auto_detailing/Interior%20Restoration_card.png" 
                            alt="Interior deep cleaning" 
                            className="rounded-3xl border border-brand-border shadow-2xl" 
                        />
                    </div>
                    <div className="order-1 lg:order-2">
                        <h2 className="text-4xl font-bold font-display text-white mb-8 uppercase tracking-tighter">A Healthier <span className="text-brand-gold">Sanctuary.</span></h2>
                        <p className="text-brand-text-secondary text-lg leading-relaxed mb-6">
                            The average vehicle cabin contains more bacteria than a standard office desk. Our process goes beyond simple vacuuming—we utilize 320°F pressurized steam and hospital-grade biocides to sanitize every square inch.
                        </p>
                        <p className="text-brand-text-secondary text-lg leading-relaxed mb-10">
                            From the vents to the deep carpet fibers, we restore the visual beauty and the biological safety of your vehicle's interior environment.
                        </p>
                        
                        <div className="space-y-4">
                            {[
                                "320°F High-Pressure Steam Sanitization",
                                "Deep Hot Water Extraction for Fibers",
                                "pH-Balanced Leather Cleaning & Hydration",
                                "Molecular Odor Elimination",
                                "Ventilation Duct De-dusting",
                                "Anti-Static Surface Protection"
                            ].map((benefit, i) => (
                                <div key={i} className="flex items-center text-white font-display uppercase tracking-widest text-sm">
                                    <CheckIcon /> {benefit}
                                </div>
                            ))}
                        </div>

                        <div className="mt-12">
                             <a 
                                href={getWhatsAppLink("Hi! I'm interested in an Interior Restoration quote.")} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="bg-brand-gold text-brand-dark-bg font-black py-4 px-10 rounded-full hover:bg-brand-gold-light transition-all transform hover:scale-105 shadow-xl uppercase tracking-widest font-display text-sm"
                            >
                                Restore My Interior
                            </a>
                        </div>
                    </div>
                </div>

                <div className="py-24 border-t border-brand-border">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold font-display text-white uppercase tracking-tighter">Cabin Care <span className="text-brand-gold">FAQs</span></h2>
                        <p className="text-brand-text-secondary mt-4">Understanding the science behind a clean car interior.</p>
                    </div>
                    <FaqAccordion items={[...FAQ_DATA.interior, ...FAQ_DATA.odor.slice(0, 1)]} />
                </div>
            </div>

            <BookingSection />
        </div>
    );
};

export default InteriorRestorationPage;
