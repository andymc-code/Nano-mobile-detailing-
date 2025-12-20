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

const MoldRemovalPage: React.FC = () => {
    const pageTitle = 'Car Mold Removal Vancouver | Convenient Car Spa';
    const pageDescription = 'Professional mobile mold removal service in Vancouver. We safely eradicate hazardous mold and spores from your vehicle, restoring a healthy cabin environment.';
    usePageMetadata(pageTitle, pageDescription);

    useEffect(() => {
        // Service Schema
        const serviceSchema = {
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Automotive Mold Removal & Remediation",
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
        const faqItems = FAQ_DATA.mold;
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
            <div className="relative h-72 bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1603106915313-64a4d3340052?q=80&w=2670&auto=format&fit=crop')` }}>
                <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center text-center">
                    <h1 className="text-4xl md:text-6xl font-extrabold font-display text-white uppercase tracking-wider">Mold Removal</h1>
                    <p className="text-brand-text-secondary mt-2 text-lg max-w-2xl">Safely eradicating hazardous mold & restoring a healthy cabin environment.</p>
                </div>
            </div>
            <div className="container mx-auto px-6 py-16">
                 <div className="mb-8">
                    <Breadcrumb paths={[{ name: 'Services', path: '/#services' }, { name: 'Mold Removal', path: '/mold-removal' }]} />
                </div>

                <div className="grid lg:grid-cols-5 gap-12">
                    <div className="lg:col-span-3">
                        <h2 className="text-3xl font-bold font-display text-white mb-4">PROTECT YOUR HEALTH. RESTORE YOUR CAR.</h2>
                        <p className="text-brand-text-secondary mb-6 leading-relaxed">
                            Discovering mold in your vehicle is more than just an unpleasant surprise—it's a significant health risk. Mold spores can circulate through your car's ventilation system, causing allergies and respiratory issues. Our mobile mold remediation service is a comprehensive process designed to safely and completely eliminate mold from your vehicle's interior, ensuring you and your passengers can breathe clean, healthy air again.
                        </p>
                        
                        <h3 className="text-2xl font-semibold font-display text-white mt-10 mb-6">OUR MOLD REMEDIATION PROCESS:</h3>
                        <ul className="space-y-4 text-brand-text-secondary">
                           <li className="flex items-center"><CheckIcon /><span>Safety First: Use of PPE to contain spores during removal</span></li>
                            <li className="flex items-center"><CheckIcon /><span>Deep Cleaning and Steam Treatment of all affected surfaces</span></li>
                            <li className="flex items-center"><CheckIcon /><span>Application of a professional-grade, EPA-approved biocide</span></li>
                            <li className="flex items-center"><CheckIcon /><span>Ozone treatment to kill any remaining airborne spores</span></li>
                            <li className="flex items-center"><CheckIcon /><span>Final inspection to ensure complete eradication</span></li>
                        </ul>
                         <a 
                            href={getWhatsAppLink("Hi! I have a mold problem in my car and need a quote for removal.")}
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="mt-10 inline-block bg-brand-accent text-brand-dark-bg font-bold py-3 px-8 rounded-md hover:opacity-90 transition-colors uppercase font-display tracking-widest"
                        >
                            Request an Evaluation
                        </a>
                    </div>
                    <div className="lg:col-span-2">
                        <img src="https://ik.imagekit.io/wnwu0xxx5/Auto_detailing/Interior%20Restoration_card.png" alt="A clean and restored car interior" className="rounded-lg shadow-xl object-cover h-full w-full" />
                    </div>
                </div>

                <div className="mt-24">
                    <h2 className="text-3xl font-bold font-display text-white text-center mb-10 uppercase">Frequently Asked Questions</h2>
                    <FaqAccordion items={FAQ_DATA.mold} />
                </div>
            </div>
        </div>
    );
};

export default MoldRemovalPage;