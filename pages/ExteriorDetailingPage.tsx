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

const ExteriorDetailingPage: React.FC = () => {
    const pageTitle = 'Exterior Car Detailing Vancouver | Convenient Car Spa';
    const pageDescription = 'Our mobile exterior detailing service for Vancouver includes a meticulous hand wash, paint decontamination, and durable sealant to restore your car\'s brilliant finish at your location.';
    usePageMetadata(pageTitle, pageDescription);

    useEffect(() => {
        // Service Schema
        const serviceSchema = {
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Exterior Car Detailing",
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
        const faqItems = FAQ_DATA.general;
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
            <div className="relative h-72 bg-cover bg-center" style={{ backgroundImage: `url('https://ik.imagekit.io/wnwu0xxx5/Auto_detailing/blue_lamborghini_washing.png?updatedAt=1758762754766')` }}>
                <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center text-center">
                    <h1 className="text-4xl md:text-6xl font-extrabold font-display text-white uppercase tracking-wider">Exterior Detailing</h1>
                    <p className="text-brand-text-secondary mt-2 text-lg max-w-2xl">Restoring a brilliant, protected finish to your vehicle's paint, glass, and wheels.</p>
                </div>
            </div>
            <div className="container mx-auto px-6 py-16">
                <div className="mb-8">
                    <Breadcrumb paths={[{ name: 'Services', path: '/#services' }, { name: 'Exterior Detailing', path: '/exterior-detailing' }]} />
                </div>

                <div className="grid lg:grid-cols-5 gap-12">
                    <div className="lg:col-span-3">
                        <h2 className="text-3xl font-bold font-display text-white mb-4">A LUSTROUS, PROTECTED FINISH. DELIVERED.</h2>
                        <p className="text-brand-text-secondary mb-6 leading-relaxed">
                            Our exterior detailing is far more than a simple car wash; it's a comprehensive rejuvenation of your vehicle's most visible surfaces, brought directly to you. We meticulously remove embedded contaminants, restore true gloss and depth to the paint, and apply a durable layer of protection to keep your car looking its best while being shielded from Vancouver's harsh elements.
                        </p>
                        
                        <h3 className="text-2xl font-semibold font-display text-white mt-10 mb-6">WHAT'S INCLUDED:</h3>
                        <ul className="space-y-4 text-brand-text-secondary">
                            <li className="flex items-center"><CheckIcon /><span>Foam Cannon Pre-wash & Gentle Hand Wash</span></li>
                            <li className="flex items-center"><CheckIcon /><span>Paint Decontamination (Removes bonded contaminants)</span></li>
                            <li className="flex items-center"><CheckIcon /><span>Wheels, Tires, and Wheel Wells Deep Cleaned</span></li>
                            <li className="flex items-center"><CheckIcon /><span>Durable Paint Sealant Applied (Up to 6 months protection)</span></li>
                            <li className="flex items-center"><CheckIcon /><span>Tires Dressed for a Satin, Non-Sling Finish</span></li>
                            <li className="flex items-center"><CheckIcon /><span>Streak-Free Exterior Glass Cleaning</span></li>
                        </ul>
                         <a 
                            href={getWhatsAppLink("Hi! I'm interested in booking an Exterior Detailing service.")} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="mt-10 inline-block bg-brand-accent text-brand-dark-bg font-bold py-3 px-8 rounded-md hover:opacity-90 transition-colors uppercase font-display tracking-widest"
                        >
                            Book This Service
                        </a>
                    </div>
                    <div className="lg:col-span-2">
                        <img src="https://ik.imagekit.io/wnwu0xxx5/Auto_detailing/ford_raptor_after_exterior_detail.png?updatedAt=1759708679669" alt="Ford Raptor with a clean exterior" className="rounded-lg shadow-xl object-cover h-full w-full" />
                    </div>
                </div>

                <div className="mt-24">
                    <h2 className="text-3xl font-bold font-display text-white text-center mb-10 uppercase">Frequently Asked Questions</h2>
                    <FaqAccordion items={FAQ_DATA.general} />
                </div>
            </div>
        </div>
    );
};

export default ExteriorDetailingPage;