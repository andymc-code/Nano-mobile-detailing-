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

const DeepInteriorShampooPage: React.FC = () => {
    const pageTitle = 'Deep Interior Shampoo Service Vancouver | Convenient Car Spa';
    const pageDescription = 'Revitalize your car\'s interior with our mobile deep shampoo service in Vancouver. We use hot water extraction to remove tough stains from carpets and seats.';
    usePageMetadata(pageTitle, pageDescription);

    useEffect(() => {
        // Service Schema
        const serviceSchema = {
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Automotive Interior Shampoo & Hot Water Extraction",
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
        const faqItems = FAQ_DATA.shampoo;
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
            <div className="relative h-72 bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1616422285923-45a7c244ab43?q=80&w=2670&auto=format&fit=crop')` }}>
                <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center text-center">
                    <h1 className="text-4xl md:text-6xl font-extrabold font-display text-white uppercase tracking-wider">Deep Interior Shampoo</h1>
                    <p className="text-brand-text-secondary mt-2 text-lg max-w-2xl">Lifting deep-seated dirt and stains from carpets and upholstery.</p>
                </div>
            </div>
            <div className="container mx-auto px-6 py-16">
                 <div className="mb-8">
                    <Breadcrumb paths={[{ name: 'Services', path: '/#services' }, { name: 'Deep Interior Shampoo', path: '/deep-interior-shampoo' }]} />
                </div>

                <div className="grid lg:grid-cols-5 gap-12">
                    <div className="lg:col-span-3">
                        <h2 className="text-3xl font-bold font-display text-white mb-4">REVITALIZE YOUR FABRICS.</h2>
                        <p className="text-brand-text-secondary mb-6 leading-relaxed">
                           Our Deep Interior Shampoo service focuses on what matters most: your carpets, mats, and fabric seats. Using professional-grade hot water extraction and specialized shampoos, we lift away years of ground-in dirt, spills, and tough stains, leaving your fabrics clean, fresh, and revitalized. It's the perfect solution for targeting specific problem areas or refreshing your vehicle's interior after a long season.
                        </p>
                        
                        <h3 className="text-2xl font-semibold font-display text-white mt-10 mb-6">OUR PROCESS INCLUDES:</h3>
                        <ul className="space-y-4 text-brand-text-secondary">
                           <li className="flex items-center"><CheckIcon /><span>Thorough Pre-Vacuuming of Fabric Surfaces</span></li>
                            <li className="flex items-center"><CheckIcon /><span>Pre-Treatment of Spots & Stains</span></li>
                            <li className="flex items-center"><CheckIcon /><span>Hot Water Extraction for Carpets & Mats</span></li>
                            <li className="flex items-center"><CheckIcon /><span>Deep Shampooing of Fabric Upholstery Seats</span></li>
                            <li className="flex items-center"><CheckIcon /><span>Deodorizing Treatment for a Fresh, Clean Scent</span></li>
                        </ul>
                         <a 
                            href={getWhatsAppLink("Hi! I'm interested in the Deep Interior Shampoo service.")}
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="mt-10 inline-block bg-brand-accent text-brand-dark-bg font-bold py-3 px-8 rounded-md hover:opacity-90 transition-colors uppercase font-display tracking-widest"
                        >
                            Book This Service
                        </a>
                    </div>
                    <div className="lg:col-span-2">
                        <img src="https://images.unsplash.com/photo-1583600585315-779cf5b99a43?q=80&w=2574&auto=format&fit=crop" alt="Close up of a clean car seat fabric" className="rounded-lg shadow-xl object-cover h-full w-full" />
                    </div>
                </div>

                <div className="mt-24">
                    <h2 className="text-3xl font-bold font-display text-white text-center mb-10 uppercase">Frequently Asked Questions</h2>
                    <FaqAccordion items={FAQ_DATA.shampoo} />
                </div>
            </div>
        </div>
    );
};

export default DeepInteriorShampooPage;