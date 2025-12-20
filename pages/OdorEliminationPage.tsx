import React, { useEffect } from 'react';
import FaqAccordion from '../components/FaqAccordion';
import Breadcrumb from '../components/Breadcrumb';
import { FAQ_DATA, getWhatsAppLink } from '../constants';
import { usePageMetadata } from '../hooks/usePageMetadata';

const CheckIcon = () => (
    <svg className="w-6 h-6 text-brand-accent mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
    </svg>
);

const OdorEliminationPage: React.FC = () => {
    const pageTitle = 'Car Odor Elimination Vancouver | Convenient Car Spa';
    const pageDescription = 'Permanently remove smoke, pet, and mildew odors from your car with our mobile ozone treatment service in Vancouver. Breathe easy again!';
    usePageMetadata(pageTitle, pageDescription);

    useEffect(() => {
        // Service Schema
        const serviceSchema = {
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Automotive Odor Elimination & Ozone Treatment",
            "description": pageDescription,
            "provider": {
                "@type": "AutoDetailing",
                "name": "Convenient Car Spa"
            },
            "areaServed": {
                "@type": "GeoCircle",
                "geoMidpoint": { "@type": "GeoCoordinates", "latitude": "49.2827", "longitude": "-123.1207" },
                "geoRadius": "30000"
            },
            "url": window.location.href
        };
        const serviceScript = document.createElement('script');
        serviceScript.type = 'application/ld+json';
        serviceScript.id = 'service-schema';
        serviceScript.innerHTML = JSON.stringify(serviceSchema);
        document.head.appendChild(serviceScript);

        // FAQ Schema
        const faqItems = FAQ_DATA.odor;
        const faqSchema = {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqItems.map(item => ({
                "@type": "Question",
                "name": item.question,
                "acceptedAnswer": { "@type": "Answer", "text": item.answer }
            }))
        };
        const faqScript = document.createElement('script');
        faqScript.type = 'application/ld+json';
        faqScript.id = 'faq-schema';
        faqScript.innerHTML = JSON.stringify(faqSchema);
        document.head.appendChild(faqScript);
        
        return () => {
            document.getElementById('service-schema')?.remove();
            document.getElementById('faq-schema')?.remove();
        };
    }, [pageDescription]);

    return (
        <div className="bg-brand-dark-bg">
            <div className="relative h-72 bg-cover bg-center" style={{ backgroundImage: `url('https://ik.imagekit.io/wnwu0xxx5/Auto_detailing/jeep_after_detail.png?updatedAt=1759629189923')` }}>
                <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center text-center">
                    <h1 className="text-4xl md:text-6xl font-extrabold font-display text-white uppercase tracking-wider">Odor Elimination</h1>
                    <p className="text-brand-text-secondary mt-2 text-lg max-w-2xl">Permanently removes stubborn odors, restoring a fresh, neutral cabin.</p>
                </div>
            </div>
            <div className="container mx-auto px-6 py-16">
                 <div className="mb-8">
                    <Breadcrumb paths={[{ name: 'Services', path: '/#services' }, { name: 'Odor Elimination', path: '/odor-elimination' }]} />
                </div>

                <div className="grid lg:grid-cols-5 gap-12">
                    <div className="lg:col-span-3">
                        <h2 className="text-3xl font-bold font-display text-white mb-4">BREATHE EASY. DRIVE FRESH.</h2>
                        <p className="text-brand-text-secondary mb-6 leading-relaxed">
                            Lingering odors from smoke, pets, spilled food, or mildew can make driving unpleasant. Air fresheners only mask the problem temporarily. Our professional odor elimination service targets and destroys odors at their source. We combine a thorough deep cleaning of the affected areas with a powerful ozone shock treatment to permanently eradicate the odor-causing molecules, leaving your car smelling neutral and fresh.
                        </p>
                        
                        <h3 className="text-2xl font-semibold font-display text-white mt-10 mb-6">OUR PROCESS INCLUDES:</h3>
                        <ul className="space-y-4 text-brand-text-secondary">
                           <li className="flex items-center"><CheckIcon /><span>Full Interior Inspection to Locate the Odor Source</span></li>
                            <li className="flex items-center"><CheckIcon /><span>Deep Cleaning & Shampooing of Affected Surfaces (carpets, upholstery)</span></li>
                            <li className="flex items-center"><CheckIcon /><span>Thorough Interior Wipe-Down and Detailing</span></li>
                            <li className="flex items-center"><CheckIcon /><span>Professional Ozone Shock Treatment to Neutralize the Vehicle</span></li>
                            <li className="flex items-center"><CheckIcon /><span>Cabin Air Filter Replacement Recommendation</span></li>
                        </ul>
                         <a 
                            href={getWhatsAppLink("Hi! I need a quote for the Odor Elimination service.")}
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="mt-10 inline-block bg-brand-accent text-brand-dark-bg font-bold py-3 px-8 rounded-md hover:opacity-90 transition-colors uppercase font-display tracking-widest"
                        >
                            Book This Service
                        </a>
                    </div>
                    <div className="lg:col-span-2">
                        <img src="https://ik.imagekit.io/wnwu0xxx5/Auto_detailing/Odor_Elimination.png" alt="Pristine and clean car interior dashboard" className="rounded-lg shadow-xl object-cover h-full w-full" />
                    </div>
                </div>

                <div className="mt-24">
                    <h2 className="text-3xl font-bold font-display text-white text-center mb-10 uppercase">Frequently Asked Questions</h2>
                    <FaqAccordion items={FAQ_DATA.odor} />
                </div>
            </div>
        </div>
    );
};

export default OdorEliminationPage;