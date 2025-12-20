
import React, { useEffect } from 'react';
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

const CeramicCoatingPage: React.FC = () => {
    const pageTitle = 'Professional Ceramic Coating Vancouver | Nano Mobile Detailing';
    const pageDescription = 'The ultimate 9H paint protection. Our mobile ceramic coating service bonds Si02 polymers to your clear coat for permanent gloss and chemical resistance.';
    usePageMetadata(pageTitle, pageDescription);

    return (
        <div className="bg-brand-dark-bg">
            <div className="relative h-[60vh] bg-cover bg-center" style={{ backgroundImage: `url('https://ik.imagekit.io/wnwu0xxx5/Auto_detailing/Blur_bmwm4_ceramiccoated.png?updatedAt=1759719374116')` }}>
                <div className="absolute inset-0 bg-black/80 flex flex-col items-center justify-center text-center px-6">
                    <span className="text-brand-gold font-display font-bold uppercase tracking-[0.3em] mb-4 text-sm">Protection Science</span>
                    <h1 className="text-4xl md:text-7xl font-extrabold font-display text-white uppercase tracking-tighter leading-none">Ceramic <br/> <span className="text-brand-gold">Coating</span></h1>
                    <p className="text-brand-text-secondary mt-8 text-lg max-w-2xl font-display uppercase tracking-widest">
                        Permanent molecular bonding for a life-long shine.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-6 py-24">
                <div className="mb-12">
                    <Breadcrumb paths={[{ name: 'Services', path: '/services' }, { name: 'Ceramic Coating', path: '/ceramic-coating' }]} />
                </div>

                <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
                    <div>
                        <h2 className="text-4xl font-bold font-display text-white mb-8 uppercase tracking-tighter">Beyond <span className="text-brand-gold">Wax.</span></h2>
                        <p className="text-brand-text-secondary text-lg leading-relaxed mb-6">
                            A ceramic coating represents the pinnacle of paint protection technology. It is a liquid polymer (Si02) that chemically bonds with your vehicle's factory paint, creating a semi-permanent, hardened glass layer that measures up to 9H on the Mohs hardness scale.
                        </p>
                        <p className="text-brand-text-secondary text-lg leading-relaxed mb-10">
                            Our mobile service brings this advanced technology to your garage, providing unparalleled depth, chemical resistance, and making your car incredibly easy to clean.
                        </p>
                        
                        <div className="space-y-4">
                            {[
                                "9H Hardness Scratch Resistance",
                                "Self-Cleaning Hydrophobic Properties",
                                "Permanent UV Oxidation Protection",
                                "Deep Mirror-Like Reflective Gloss",
                                "Resistance to Bird Droppings & Tree Sap",
                                "5+ Year Durability Packages"
                            ].map((benefit, i) => (
                                <div key={i} className="flex items-center text-white font-display uppercase tracking-widest text-sm">
                                    <CheckIcon /> {benefit}
                                </div>
                            ))}
                        </div>

                        <div className="mt-12">
                             <a 
                                href={getWhatsAppLink("Hi! I'm interested in a Ceramic Coating quote.")} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="bg-brand-gold text-brand-dark-bg font-black py-4 px-10 rounded-full hover:bg-brand-gold-light transition-all transform hover:scale-105 shadow-xl uppercase tracking-widest font-display text-sm"
                            >
                                Get a Technical Quote
                            </a>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="absolute -inset-4 bg-brand-gold/20 blur-3xl rounded-full"></div>
                        <img 
                            src="https://ik.imagekit.io/wnwu0xxx5/Auto_detailing/m4_after_hydro.png?updatedAt=1759630759462" 
                            alt="Water beading on a ceramic coated car" 
                            className="relative rounded-3xl border border-brand-border shadow-2xl" 
                        />
                    </div>
                </div>

                <div className="py-24 border-t border-brand-border">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold font-display text-white uppercase tracking-tighter">Protection <span className="text-brand-gold">FAQs</span></h2>
                        <p className="text-brand-text-secondary mt-4">Essential knowledge for maintaining your vehicle's long-term value.</p>
                    </div>
                    <FaqAccordion items={FAQ_DATA.ceramic} />
                </div>
            </div>

            <BookingSection />
        </div>
    );
};

export default CeramicCoatingPage;
