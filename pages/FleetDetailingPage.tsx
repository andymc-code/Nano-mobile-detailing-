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

const FleetDetailingPage: React.FC = () => {
    const pageTitle = 'Fleet Detailing Service Vancouver | Convenient Car Spa';
    const pageDescription = 'Professional mobile fleet detailing for businesses in Vancouver. We service commercial vans, trucks, and cars on-site to maintain your brand image and protect your assets.';
    usePageMetadata(pageTitle, pageDescription);

    useEffect(() => {
        // Service Schema
        const serviceSchema = {
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Commercial Fleet Detailing",
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
        const faqItems = FAQ_DATA.fleet;
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
            <div className="relative h-72 bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1617015452627-4b933023a1a5?q=80&w=2670&auto=format&fit=crop')` }}>
                <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center text-center">
                    <h1 className="text-4xl md:text-6xl font-extrabold font-display text-white uppercase tracking-wider">Fleet Detailing</h1>
                    <p className="text-brand-text-secondary mt-2 text-lg max-w-2xl">Reliable & scalable mobile detailing for your business vehicles.</p>
                </div>
            </div>
            <div className="container mx-auto px-6 py-16">
                 <div className="mb-8">
                    <Breadcrumb paths={[{ name: 'Services', path: '/#services' }, { name: 'Fleet Detailing', path: '/fleet-detailing' }]} />
                </div>

                <div className="grid lg:grid-cols-5 gap-12">
                    <div className="lg:col-span-3">
                        <h2 className="text-3xl font-bold font-display text-white mb-4">A CLEAN FLEET IS GOOD BUSINESS.</h2>
                        <p className="text-brand-text-secondary mb-6 leading-relaxed">
                            Your company's vehicles are a mobile billboard for your brand. A clean, well-maintained fleet communicates professionalism and attention to detail. Our on-site fleet detailing service minimizes vehicle downtime and logistical headaches by bringing our expert team and equipment directly to your business location. We offer customizable maintenance plans to keep your fleet looking its best, protecting your assets and enhancing your brand's image.
                        </p>
                        
                        <h3 className="text-2xl font-semibold font-display text-white mt-10 mb-6">OUR FLEET SERVICES INCLUDE:</h3>
                        <ul className="space-y-4 text-brand-text-secondary">
                           <li className="flex items-center"><CheckIcon /><span>Scheduled Maintenance Washes (Weekly, Bi-weekly, Monthly)</span></li>
                            <li className="flex items-center"><CheckIcon /><span>Comprehensive Interior & Exterior Detailing Packages</span></li>
                            <li className="flex items-center"><CheckIcon /><span>Decal and Livery-Safe Cleaning Methods</span></li>
                            <li className="flex items-center"><CheckIcon /><span>Interior Sanitization & Odor Removal for work vehicles</span></li>
                            <li className="flex items-center"><CheckIcon /><span>Service for Fleets of Any Size (Cars, Vans, Trucks)</span></li>
                            <li className="flex items-center"><CheckIcon /><span>Centralized Billing & Service Reporting</span></li>
                        </ul>
                         <a 
                            href={getWhatsAppLink("Hi! I would like to get a quote for my business fleet.")}
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="mt-10 inline-block bg-brand-accent text-brand-dark-bg font-bold py-3 px-8 rounded-md hover:opacity-90 transition-colors uppercase font-display tracking-widest"
                        >
                            Request a Fleet Quote
                        </a>
                    </div>
                    <div className="lg:col-span-2">
                        <img src="https://images.unsplash.com/photo-1599599810624-91f13b15b399?q=80&w=2670&auto=format&fit=crop" alt="A clean white commercial van" className="rounded-lg shadow-xl object-cover h-full w-full" />
                    </div>
                </div>

                <div className="mt-24">
                    <h2 className="text-3xl font-bold font-display text-white text-center mb-10 uppercase">Fleet Detailing FAQs</h2>
                    <FaqAccordion items={FAQ_DATA.fleet} />
                </div>
            </div>
        </div>
    );
};

export default FleetDetailingPage;