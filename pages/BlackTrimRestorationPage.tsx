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

const BlackTrimRestorationPage: React.FC = () => {
    const pageTitle = 'Black Trim Restoration Vancouver | Convenient Car Spa';
    const pageDescription = 'Restore faded, gray plastic trim to a deep, like-new black finish with our mobile service in Vancouver. Long-lasting results.';
    usePageMetadata(pageTitle, pageDescription);

    useEffect(() => {
        // Service Schema
        const serviceSchema = {
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Automotive Black Trim Restoration",
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
        const faqItems = FAQ_DATA.trim;
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
            <div className="relative h-72 bg-cover bg-center" style={{ backgroundImage: `url('https://ik.imagekit.io/wnwu0xxx5/Auto_detailing/ford_raptor_after_exterior_detail.png?updatedAt=1759708679669')` }}>
                <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center text-center">
                    <h1 className="text-4xl md:text-6xl font-extrabold font-display text-white uppercase tracking-wider">Black Trim Restoration</h1>
                    <p className="text-brand-text-secondary mt-2 text-lg max-w-2xl">Brings faded, chalky plastic back to a deep, factory-fresh black.</p>
                </div>
            </div>
            <div className="container mx-auto px-6 py-16">
                 <div className="mb-8">
                    <Breadcrumb paths={[{ name: 'Services', path: '/#services' }, { name: 'Black Trim Restoration', path: '/black-trim-restoration' }]} />
                </div>

                <div className="grid lg:grid-cols-5 gap-12">
                    <div className="lg:col-span-3">
                        <h2 className="text-3xl font-bold font-display text-white mb-4">REVIVE YOUR VEHICLE'S CONTRAST.</h2>
                        <p className="text-brand-text-secondary mb-6 leading-relaxed">
                            Faded, graying plastic trim can make an otherwise pristine vehicle look aged and neglected. Our mobile black trim restoration service is the perfect solution. We don't use temporary, greasy silicone dressings that wash off in the first rain. Instead, we use a professional-grade product that penetrates deep into the plastic to restore its original rich, black color for a long-lasting, durable finish.
                        </p>
                        
                        <h3 className="text-2xl font-semibold font-display text-white mt-10 mb-6">WHAT IT FIXES:</h3>
                        <ul className="space-y-4 text-brand-text-secondary">
                           <li className="flex items-center"><CheckIcon /><span>Faded Gray or Chalky Plastic Bumpers</span></li>
                            <li className="flex items-center"><CheckIcon /><span>Dull Mirror Casings and Window Trim</span></li>
                            <li className="flex items-center"><CheckIcon /><span>Discolored Plastic Fender Flares and Cladding</span></li>
                            <li className="flex items-center"><CheckIcon /><span>Restore a Rich, Satin Factory Finish</span></li>
                            <li className="flex items-center"><CheckIcon /><span>Provides UV Protection to Prevent Future Fading</span></li>
                        </ul>
                         <a 
                            href={getWhatsAppLink("Hi! I'm interested in getting a quote for Black Trim Restoration.")}
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="mt-10 inline-block bg-brand-accent text-brand-dark-bg font-bold py-3 px-8 rounded-md hover:opacity-90 transition-colors uppercase font-display tracking-widest"
                        >
                            Get a Quote
                        </a>
                    </div>
                    <div className="lg:col-span-2">
                        <img src="https://ik.imagekit.io/wnwu0xxx5/Auto_detailing/Black_Trim_Restoration.png" alt="A close-up of restored black car trim" className="rounded-lg shadow-xl object-cover h-full w-full" />
                    </div>
                </div>

                <div className="mt-24">
                    <h2 className="text-3xl font-bold font-display text-white text-center mb-10 uppercase">Frequently Asked Questions</h2>
                    <FaqAccordion items={FAQ_DATA.trim} />
                </div>
            </div>
        </div>
    );
};

export default BlackTrimRestorationPage;