
import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import LocationPageLayout from '../components/LocationPageLayout';
import { SERVICES_DATA, SEO_CITIES, getWhatsAppLink } from '../constants';

const DynamicLandingPage: React.FC = () => {
    const { city, service } = useParams<{ city: string; service: string }>();

    // 1. Validate City
    const cityKey = city?.toLowerCase() || '';
    const cityData = SEO_CITIES[cityKey];

    // 2. Validate Service
    const serviceData = SERVICES_DATA.find(s => s.link.substring(1) === service);

    if (!cityData || !serviceData) {
        return <Navigate to="/" replace />;
    }

    // 3. Generate Dynamic Content
    const metaTitle = `${serviceData.name} in ${cityData.name} | Nano Mobile Detailing`;
    const metaDescription = `Looking for ${serviceData.name} in ${cityData.name}? Nano Mobile Detailing brings professional mobile car care to your home or office. Book today!`;
    const h1 = `${serviceData.name} in ${cityData.name}`;

    return (
        <LocationPageLayout
            city={cityData.name}
            metaTitle={metaTitle}
            metaDescription={metaDescription}
            h1={h1}
            imageUrl={cityData.image}
            geo={{ latitude: cityData.lat, longitude: cityData.lng }}
        >
            <div className="space-y-8 text-lg">
                <div className="border-l-4 border-brand-accent pl-6">
                    <h2 className="text-3xl font-bold font-display text-brand-text-primary mb-3">
                        Professional {serviceData.name}, Delivered to Your Doorstep in {cityData.name}
                    </h2>
                    <p className="text-xl text-brand-text-secondary">
                        Why waste time driving to a shop? We bring the car care experience directly to you.
                    </p>
                </div>

                <p>
                    Nano Mobile Detailing is the premier provider of <strong>{serviceData.name}</strong> services for residents and businesses in <strong>{cityData.name}</strong>. 
                    Whether you are at home, at the office, or at an apartment complex, our fully self-contained mobile unit is equipped to deliver showroom-quality results without you lifting a finger.
                </p>

                <div className="my-10 bg-brand-surface border border-brand-border p-8 rounded-lg shadow-lg">
                    <div className="flex flex-col md:flex-row gap-8 items-center">
                        <div className="w-full md:w-1/2">
                            <img 
                                src={serviceData.image} 
                                alt={`${serviceData.name} service`} 
                                className="rounded-lg shadow-md w-full h-64 object-cover"
                            />
                        </div>
                        <div className="w-full md:w-1/2">
                            <h3 className="text-2xl font-bold font-display text-brand-accent mb-4">About This Service</h3>
                            <p className="mb-6 text-brand-text-secondary">{serviceData.description}</p>
                            <h4 className="font-bold text-white mb-2 uppercase tracking-wider text-sm">Service Areas:</h4>
                            <p className="text-brand-text-secondary text-sm">
                                We proudly serve all neighbourhoods in {cityData.name}. Our technicians are familiar with the local area and can easily navigate to your location for a seamless experience.
                            </p>
                            <div className="mt-8">
                                <a 
                                    href={getWhatsAppLink(`Hi! I'm interested in ${serviceData.name} in ${cityData.name}.`)} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="inline-block bg-brand-accent text-brand-dark-bg font-bold py-3 px-6 rounded-md hover:opacity-90 transition-all duration-300 uppercase tracking-widest font-display text-sm"
                                >
                                    Book Now
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="space-y-6">
                    <h3 className="text-2xl font-bold font-display text-white">Why Choose Nano Mobile {serviceData.name} in {cityData.name}?</h3>
                    <ul className="space-y-4">
                        <li className="flex items-start">
                            <svg className="w-6 h-6 text-brand-accent mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                            <span><strong>Convenience:</strong> Traffic in {cityData.name} can be unpredictable. We save you the trip by coming to you.</span>
                        </li>
                        <li className="flex items-start">
                            <svg className="w-6 h-6 text-brand-accent mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                            <span><strong>Quality:</strong> We use professional-grade products tailored for {serviceData.name} to ensure long-lasting results.</span>
                        </li>
                        <li className="flex items-start">
                            <svg className="w-6 h-6 text-brand-accent mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                            <span><strong>Self-Sufficient:</strong> Our vans carry water and power, making us perfect for condo parkades or driveways with limited access.</span>
                        </li>
                    </ul>
                </div>
            </div>
        </LocationPageLayout>
    );
};

export default DynamicLandingPage;
