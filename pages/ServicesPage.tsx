
import React from 'react';
import { usePageMetadata } from '../hooks/usePageMetadata';
import ServicesSection from '../components/ServicesSection';
import ProcessSection from '../components/ProcessSection';
import PricingSection from '../components/PricingSection';
import BookingSection from '../components/BookingSection';

const ServicesPage: React.FC = () => {
    usePageMetadata(
        'Our Mobile Detailing Services | Vancouver | Nano Mobile Detailing',
        "From Mini Interior Refreshes to Complete Showroom Restorations and Ceramic Coatings, explore the full suite of Nano Mobile Detailing's professional services."
    );

    return (
        <div className="bg-brand-dark-bg">
            <div className="relative h-[50vh] bg-cover bg-center" style={{ backgroundImage: `url('https://ik.imagekit.io/wnwu0xxx5/Auto_detailing/Blur_bmwm4_ceramiccoated.png?updatedAt=1759719374116')` }}>
                <div className="absolute inset-0 bg-black/80 flex flex-col items-center justify-center text-center px-6">
                    <h1 className="text-4xl md:text-7xl font-extrabold font-display text-white uppercase tracking-tighter">Our Signature <span className="text-brand-gold">Services</span></h1>
                    <p className="text-brand-text-secondary mt-6 text-lg md:text-xl max-w-2xl font-display">
                        High-precision automotive care, delivered to your doorstep.
                    </p>
                </div>
            </div>
            
            <div className="py-12 bg-brand-surface border-y border-brand-border">
                <div className="container mx-auto px-6 overflow-x-auto whitespace-nowrap scrollbar-hide flex justify-center space-x-12 text-xs font-black uppercase tracking-[0.2em]">
                    <a href="#packages" className="text-brand-gold hover:text-white transition-colors">Packages</a>
                    <a href="#process" className="text-brand-text-secondary hover:text-brand-gold transition-colors">How It Works</a>
                    <a href="#specialized" className="text-brand-text-secondary hover:text-brand-gold transition-colors">Specialized Care</a>
                    <a href="#add-ons" className="text-brand-text-secondary hover:text-brand-gold transition-colors">Add-ons</a>
                </div>
            </div>

            <div id="packages">
                <PricingSection />
            </div>

            <div id="process">
                <ProcessSection />
            </div>

            <div id="specialized">
                <ServicesSection />
            </div>

            <div id="add-ons" className="py-24 bg-brand-dark-bg">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold font-display uppercase text-white">Custom Add-Ons</h2>
                        <p className="text-brand-text-secondary mt-4">Personalize your detail with these specific treatments.</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { name: 'Pet Hair Removal', desc: 'Thorough vacuuming and brushing to remove stubborn pet hair from all fibers.' },
                            { name: 'Engine Bay Detail', desc: 'Cleaning and dressing the engine compartment for a showroom-ready look.' },
                            { name: 'Headlight Restoration', desc: 'Removing oxidation and fog for improved visibility and aesthetics.' },
                            { name: 'Leather Conditioning', desc: 'Premium creams to keep your leather soft, supple, and protected from UV rays.' },
                            { name: 'Ozone Treatment', desc: 'Eliminating deep-seated odors from tobacco, mold, or pets at a molecular level.' },
                            { name: 'Glass Sealant', desc: 'Hydrophobic coating for all exterior glass to improve wet weather visibility.' }
                        ].map((addon, i) => (
                            <div key={i} className="p-8 bg-brand-surface border border-brand-border rounded-xl group hover:border-brand-gold transition-colors">
                                <h3 className="text-brand-gold font-bold uppercase tracking-widest mb-2 font-display">{addon.name}</h3>
                                <p className="text-brand-text-secondary text-sm leading-relaxed">{addon.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <BookingSection />
        </div>
    );
};

export default ServicesPage;
