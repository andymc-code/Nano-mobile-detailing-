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
        { name: 'Locations', path: '#' },
        { name: city, path: `/locations/${city.toLowerCase().replace(' ', '-')}/mobile-car-detailing` }
    ];
    
    const localBusinessSchema = useMemo(() => ({
      "@context": "https://schema.org",
      "@type": "AutoDetailing",
      "name": "Convenient Car Spa",
      "description": `Mobile car detailing and car wash services in ${city}.`,
      "image": imageUrl,
      "url": window.location.href,
      "telephone": "+1-604-555-0101",
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
        <div className="bg-brand-dark-bg">
            <div className="relative h-72 bg-cover bg-center" style={{ backgroundImage: `url('${imageUrl}')` }}>
                <div className="absolute inset-0 bg-black/70 flex items-center justify-center text-center">
                    <h1 className="text-4xl md:text-6xl font-extrabold font-display text-white uppercase tracking-wider px-4">{h1}</h1>
                </div>
            </div>
            <div className="container mx-auto px-6 py-16">
                <div className="mb-8">
                    <Breadcrumb paths={breadcrumbPaths} />
                </div>

                <div className="max-w-none text-brand-text-secondary leading-relaxed">
                    {children}
                </div>

                <div className="mt-24">
                    <h2 className="text-3xl font-bold font-display text-white text-center mb-12 uppercase">Detailing Services Available in {city}</h2>
                    <div className="grid md:grid-cols-3 gap-8 text-center">
                        <div className="bg-brand-surface border border-brand-border p-6 rounded-lg">
                            <h3 className="text-xl font-bold font-display text-brand-accent mb-2 uppercase">Exterior Detailing</h3>
                            <p className="text-brand-text-secondary text-sm">Restore shine and protect your paint.</p>
                        </div>
                        <div className="bg-brand-surface border border-brand-border p-6 rounded-lg">
                            <h3 className="text-xl font-bold font-display text-brand-accent mb-2 uppercase">Interior Restoration</h3>
                            <p className="text-brand-text-secondary text-sm">Deep cleaning for a fresh interior.</p>
                        </div>
                        <div className="bg-brand-surface border border-brand-border p-6 rounded-lg">
                            <h3 className="text-xl font-bold font-display text-brand-accent mb-2 uppercase">Ceramic Coating</h3>
                            <p className="text-brand-text-secondary text-sm">Long-term gloss and protection.</p>
                        </div>
                    </div>
                </div>

                <div className="mt-24">
                    <h2 className="text-3xl font-bold font-display text-white text-center mb-12 uppercase">Explore Our Other Service Areas</h2>
                    <div className="flex flex-wrap justify-center gap-4">
                        {otherLocations.map(loc => (
                             <Link key={loc.name} to={loc.path} className="bg-brand-surface border border-brand-border hover:bg-brand-accent hover:text-brand-dark-bg text-brand-text-primary font-bold py-2 px-5 rounded-md transition-colors text-sm">
                                {loc.name}
                            </Link>
                        ))}
                    </div>
                </div>

                <div className="mt-24">
                    <h2 className="text-3xl font-bold font-display text-white text-center mb-10 uppercase">Frequently Asked Questions</h2>
                    <FaqAccordion items={FAQ_DATA.general} />
                </div>
            </div>
            <BookingSection />
        </div>
    );
};

export default LocationPageLayout;