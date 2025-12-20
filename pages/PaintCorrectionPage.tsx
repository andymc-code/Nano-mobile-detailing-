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

const PaintCorrectionPage: React.FC = () => {
    const pageTitle = 'Mobile Paint Correction Vancouver | Convenient Car Spa';
    const pageDescription = 'Remove swirls and scratches with our mobile paint correction service in Vancouver. We restore your paint\'s clarity and gloss at your home or office.';
    usePageMetadata(pageTitle, pageDescription);

    useEffect(() => {
        // Service Schema
        const serviceSchema = {
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Automotive Paint Correction",
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
        const faqItems = FAQ_DATA.paint;
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
            <div className="relative h-72 bg-cover bg-center" style={{ backgroundImage: `url('https://ik.imagekit.io/wnwu0xxx5/Auto_detailing/yellow_lambo.png')` }}>
                <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center text-center">
                    <h1 className="text-4xl md:text-6xl font-extrabold font-display text-white uppercase tracking-wider">Paint Correction</h1>
                    <p className="text-brand-text-secondary mt-2 text-lg max-w-2xl">Permanently removing swirls & scratches to reveal flawless, mirror-like paint.</p>
                </div>
            </div>
            <div className="container mx-auto px-6 py-16">
                 <div className="mb-8">
                    <Breadcrumb paths={[{ name: 'Services', path: '/#services' }, { name: 'Paint Correction', path: '/paint-correction' }]} />
                </div>

                <div className="grid lg:grid-cols-5 gap-12">
                    <div className="lg:col-span-3">
                        <h2 className="text-3xl font-bold font-display text-white mb-4">RESTORING FLAWLESS REFLECTIONS.</h2>
                        <p className="text-brand-text-secondary mb-6 leading-relaxed">
                            Over time, improper washing and environmental exposure create a web of fine scratches, or "swirl marks," in your car's clear coat, dulling the finish. Our mobile paint correction service is the highly skilled process of machine polishing the paint to permanently remove these imperfections at your location, revealing a level of clarity, depth, and gloss that is often better than new.
                        </p>
                        
                        <h3 className="text-2xl font-semibold font-display text-white mt-10 mb-6">WE CAN REMOVE:</h3>
                        <ul className="space-y-4 text-brand-text-secondary">
                           <li className="flex items-center"><CheckIcon /><span>Swirl Marks and Spider Webbing</span></li>
                            <li className="flex items-center"><CheckIcon /><span>Light to Medium Scratches</span></li>
                            <li className="flex items-center"><CheckIcon /><span>Water Spots and Etching</span></li>
                            <li className="flex items-center"><CheckIcon /><span>Oxidation and Dullness</span></li>
                            <li className="flex items-center"><CheckIcon /><span>Holograms from Improper Polishing</span></li>
                        </ul>
                        <p className="text-brand-text-secondary mt-6 italic">Paint correction is the essential first step before applying any ceramic coating for optimal bonding and results.</p>
                         <a 
                            href={getWhatsAppLink("Hi! I'm interested in requesting an evaluation for Paint Correction.")}
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="mt-10 inline-block bg-brand-accent text-brand-dark-bg font-bold py-3 px-8 rounded-md hover:opacity-90 transition-colors uppercase font-display tracking-widest"
                        >
                            Request an Evaluation
                        </a>
                    </div>
                    <div className="lg:col-span-2">
                        <img src="https://ik.imagekit.io/wnwu0xxx5/Auto_detailing/911_after_detail.png" alt="A car with a flawless, glossy finish after paint correction" className="rounded-lg shadow-xl object-cover h-full w-full" />
                    </div>
                </div>

                <div className="mt-24">
                    <h2 className="text-3xl font-bold font-display text-white text-center mb-10 uppercase">Frequently Asked Questions</h2>
                    <FaqAccordion items={FAQ_DATA.paint} />
                </div>
            </div>
        </div>
    );
};

export default PaintCorrectionPage;