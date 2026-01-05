
import React, { useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from './Breadcrumb';
import BookingSection from './BookingSection';
import FaqAccordion from './FaqAccordion';
import { FAQ_DATA, LOCATIONS_DATA } from '../constants';
import { usePageMetadata } from '../hooks/usePageMetadata';

interface LocationPageLayoutProps {
    city: string;
    metaTitle: string;
    metaDescription: string;
    h1: string;
    children: React.ReactNode;
    imageUrl: string;
    geo: { latitude: string; longitude: string };
}

const StarIcon = () => (
    <svg className="w-4 h-4 text-brand-gold" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
);

const LocationPageLayout: React.FC<LocationPageLayoutProps> = ({
    city,
    metaTitle,
    metaDescription,
    h1,
    children,
    imageUrl,
    geo,
}) => {
    usePageMetadata(metaTitle, metaDescription);

    const otherLocations = LOCATIONS_DATA.filter(loc => loc.name !== city);
    const breadcrumbPaths = [
        { name: 'Locations', path: '/services' },
        { name: city, path: `/locations/${city.toLowerCase().replace(' ', '-')}/mobile-car-detailing` }
    ];
    
    const localBusinessSchema = useMemo(() => ({
      "@context": "https://schema.org",
      "@type": "AutoDetailing",
      "name": "Nano Mobile Detailing",
      "description": `Mobile car detailing and car wash services in ${city}.`,
      "image": imageUrl,
      "url": window.location.href,
      "telephone": "+1-778-251-5604",
      "priceRange": "$$$",
      "areaServed": {
        "@type": "Place",
        "name": city,
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": geo.latitude,
          "longitude": geo.longitude
        }
      },
      "address": {
          "@type": "PostalAddress",
          "addressLocality": city,
          "addressRegion": "BC",
          "addressCountry": "CA"
      }
    }), [city, imageUrl, geo.latitude, geo.longitude]);

    useEffect(() => {
        const scriptId = 'location-schema-script';
        let script = document.getElementById(scriptId) as HTMLScriptElement | null;
        
        if (!script) {
            script = document.createElement('script');
            script.id = scriptId;
            script.type = 'application/ld+json';
            document.head.appendChild(script);
        }

        script.innerHTML = JSON.stringify(localBusinessSchema);

        return () => {
            const scriptToRemove = document.getElementById(scriptId);
            if (scriptToRemove) {
                scriptToRemove.remove();
            }
        };
    }, [localBusinessSchema]);

    return (
        <div className="bg-brand-dark-bg min-h-screen">
            {/* Hero Section */}
            <div className="relative h-[65vh] md:h-[75vh] overflow-hidden">
                <div 
                    className="absolute inset-0 bg-cover bg-fixed bg-center transition-transform duration-1000 scale-105" 
                    style={{ backgroundImage: `url('${imageUrl}')` }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-b from-brand-dark-bg/40 via-brand-dark-bg/70 to-brand-dark-bg"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-brand-dark-bg via-transparent to-transparent opacity-60"></div>
                
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
                    <div className="mb-6 animate-fade-in">
                        <span className="inline-block py-2 px-4 rounded-full bg-brand-gold/10 border border-brand-gold/30 text-brand-gold text-[10px] font-black uppercase tracking-[0.3em] mb-4">
                            Local Detailing Expert
                        </span>
                        <h1 className="text-5xl md:text-8xl font-extrabold font-display text-white uppercase tracking-tighter leading-none mb-4">
                            {city} <br/><span className="gold-gradient-text gold-glow">Mobile Lab</span>
                        </h1>
                        <p className="text-brand-text-secondary md:text-xl max-w-2xl mx-auto italic opacity-90">
                            "Premium craftsmanship, delivered to your location in {city}."
                        </p>
                    </div>

                    <div className="flex space-x-2 items-center bg-brand-surface/40 backdrop-blur-md px-6 py-3 rounded-full border border-white/5">
                        <div className="flex">
                            {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
                        </div>
                        <span className="text-xs font-bold text-white uppercase tracking-widest">5.0 Local Rating</span>
                    </div>
                </div>
            </div>

            {/* Main Content Area */}
            <div className="relative z-10 -mt-20 container mx-auto px-6">
                <div className="bg-brand-surface/80 backdrop-blur-2xl border border-brand-border rounded-[40px] p-8 md:p-16 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)]">
                    <div className="mb-12">
                        <Breadcrumb paths={breadcrumbPaths} />
                    </div>

                    <div className="prose prose-invert max-w-none text-brand-text-secondary">
                        {children}
                    </div>

                    {/* Dynamic Service Grid */}
                    <div className="mt-32">
                        <div className="text-center mb-16">
                            <span className="text-brand-gold font-display font-bold uppercase tracking-widest text-sm block mb-4">On-Site Solutions</span>
                            <h2 className="text-4xl md:text-5xl font-bold font-display text-white uppercase tracking-tighter">Available in <span className="text-brand-gold">{city}</span></h2>
                        </div>
                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                { title: 'Exterior Detailing', desc: 'Deep restoration of paint clarity and gloss.', icon: '✨' },
                                { title: 'Interior Restoration', desc: 'Hospital-grade sanitization and conditioning.', icon: '🧼' },
                                { title: 'Ceramic Coating', desc: 'Permanent molecular protection for your clear coat.', icon: '🛡️' }
                            ].map((service, i) => (
                                <div key={i} className="group bg-brand-dark-bg/40 border border-brand-border p-10 rounded-3xl hover:border-brand-gold/40 transition-all duration-500 hover:-translate-y-2">
                                    <div className="text-4xl mb-6">{service.icon}</div>
                                    <h3 className="text-xl font-bold font-display text-white mb-3 uppercase tracking-widest group-hover:text-brand-gold transition-colors">{service.title}</h3>
                                    <p className="text-brand-text-secondary text-sm leading-relaxed">{service.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Location Selection */}
                    <div className="mt-32 py-24 border-t border-brand-border">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold font-display text-white uppercase tracking-tighter">Our Regional <span className="text-brand-gold">Network</span></h2>
                            <p className="text-brand-text-secondary mt-2">Find a Nano Mobile detailing lab in your city.</p>
                        </div>
                        <div className="flex flex-wrap justify-center gap-4">
                            {otherLocations.map(loc => (
                                <Link 
                                    key={loc.name} 
                                    to={loc.path} 
                                    className="bg-brand-dark-bg border border-brand-border hover:border-brand-gold text-brand-text-primary font-bold py-3 px-8 rounded-2xl transition-all text-xs uppercase tracking-widest hover:text-brand-gold"
                                >
                                    {loc.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Local FAQ */}
                    <div className="mt-16 pt-24 border-t border-brand-border">
                         <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold font-display text-white uppercase tracking-tighter">Common <span className="text-brand-gold">Questions</span></h2>
                        </div>
                        <FaqAccordion items={FAQ_DATA.general} />
                    </div>
                </div>
            </div>

            {/* Bottom Glow */}
            <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[300px] bg-brand-gold/5 blur-[150px] pointer-events-none -z-10"></div>
            
            <BookingSection />
        </div>
    );
};

export default LocationPageLayout;
