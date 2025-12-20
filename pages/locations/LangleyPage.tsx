import React from 'react';
import LocationPageLayout from '../../components/LocationPageLayout';

const IconDust = () => <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m3-3h-6m2-8a4 4 0 100 8 4 4 0 000-8z" /></svg>;
const IconFamily = () => <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.653-.28-1.25-1-1.657M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.653.28-1.25 1-1.657m10-4l-3-3m0 0l-3 3m3-3v12" /></svg>;
const IconShield = () => <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>;
const IconCheck = () => <svg className="w-6 h-6 text-brand-accent mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>;

const LangleyPage: React.FC = () => {
  return (
    <LocationPageLayout
      city="Langley"
      metaTitle="Mobile Car Detailing in Langley | Convenient Car Spa"
      metaDescription="Convenient Car Spa brings professional mobile auto detailing to Langley, BC. Serving Walnut Grove, Fort Langley, and more. We specialize in family vehicle cleaning. Book today!"
      h1="Mobile Car Detailing in Langley"
      imageUrl="https://ik.imagekit.io/wnwu0xxx5/Auto_detailing/langley_location_img.jpg?updatedAt=1759733031041"
      geo={{ latitude: '49.1042', longitude: '-122.5834' }}
    >
        <div className="space-y-6 text-lg">
            <h2 className="text-3xl font-bold font-display text-brand-text-primary border-l-4 border-brand-accent pl-4">Langley's Premier At-Home Car Detailing Service</h2>
            <p>
                Convenient Car Spa is proud to extend our professional mobile detailing services to the Township and City of Langley. We know that Langley is a place where community and family are central, and life can be busy. That's why we've designed a service that brings the highest quality car care right to your front door. Forget about driving to a shop; our fully self-contained mobile detailing unit will transform your vehicle in your own driveway while you relax or spend time with family.
            </p>
        </div>

        <div className="my-16">
            <h2 className="text-3xl font-bold font-display text-brand-text-primary border-l-4 border-brand-accent pl-4 mb-6">Serving All of Langley's Communities</h2>
            <p className="text-lg">
                From bustling town centres to serene rural properties, our team provides consistent, top-tier service across Langley:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div className="bg-brand-surface border border-brand-border p-6 rounded-lg"><h3 className="text-xl font-semibold text-brand-accent">Walnut Grove & Willoughby</h3><p className="text-brand-text-secondary mt-2">As popular family neighbourhoods, we specialize in deep interior cleaning for SUVs and minivans, tackling everything from juice box spills to soccer field mud.</p></div>
                <div className="bg-brand-surface border border-brand-border p-6 rounded-lg"><h3 className="text-xl font-semibold text-brand-accent">Fort Langley</h3><p className="text-brand-text-secondary mt-2">We help preserve your vehicle's beauty in this historic village, providing protective coatings to guard against tree sap and environmental fallout.</p></div>
                <div className="bg-brand-surface border border-brand-border p-6 rounded-lg"><h3 className="text-xl font-semibold text-brand-accent">Brookswood & Murrayville</h3><p className="text-brand-text-secondary mt-2">For residents with larger properties, our service is the ultimate convenience. We take care of your vehicles so you can enjoy your space.</p></div>
                <div className="bg-brand-surface border border-brand-border p-6 rounded-lg"><h3 className="text-xl font-semibold text-brand-accent">Langley City</h3><p className="text-brand-text-secondary mt-2">We provide our full range of services to residents in apartments and townhomes, offering a practical solution for those without access to washing supplies.</p></div>
            </div>
             <p className="mt-6 text-lg">
                Whether you're shopping at <strong>Willowbrook Shopping Centre</strong> or enjoying a day in the country, we are your local, reliable detailing professionals.
            </p>
        </div>

        <div className="my-16">
            <h2 className="text-3xl font-bold font-display text-brand-text-primary border-l-4 border-brand-accent pl-4 mb-8">Solutions for the Langley Driver</h2>
            <p className="text-lg mb-8">
                The Langley lifestyle presents a unique mix of suburban and rural driving conditions. We have the right solutions for your vehicle.
            </p>
            <div className="space-y-8">
                <div className="flex items-start space-x-4"><div className="flex-shrink-0 bg-brand-accent/10 text-brand-accent rounded-full p-3"><IconDust /></div><div><h3 className="text-xl font-semibold text-brand-text-primary">Rural & Farm Dust</h3><p className="text-brand-text-secondary mt-1">The beautiful open spaces in Langley can mean more dust and pollen. Our interior services include thorough air purging and deep vacuuming, while our exterior sealants create an anti-static surface that is easier to keep clean.</p></div></div>
                <div className="flex items-start space-x-4"><div className="flex-shrink-0 bg-brand-accent/10 text-brand-accent rounded-full p-3"><IconFamily /></div><div><h3 className="text-xl font-semibold text-brand-text-primary">The Hard-Working Family Vehicle</h3><p className="text-brand-text-secondary mt-1">Langley is family territory. Our Interior Restoration service is a lifesaver, removing kid-related messes and sanitizing all surfaces to create a clean and healthy environment for your most precious cargo.</p></div></div>
                <div className="flex items-start space-x-4"><div className="flex-shrink-0 bg-brand-accent/10 text-brand-accent rounded-full p-3"><IconShield /></div><div><h3 className="text-xl font-semibold text-brand-text-primary">Protecting Your Investment</h3><p className="text-brand-text-secondary mt-1">Whether it's a work truck, a family SUV, or a classic car, your vehicle is a major investment. Our detailing services are crucial for preserving its value and appearance over time.</p></div></div>
            </div>
        </div>

        <div className="my-16">
            <h2 className="text-3xl font-bold font-display text-brand-text-primary border-l-4 border-brand-accent pl-4 mb-6">Our Recommended Detailing Services for Langley</h2>
            <p className="text-lg">We recommend these services for the typical Langley vehicle:</p>
            <ul className="space-y-4 mt-6 text-lg">
                <li className="flex items-start"><IconCheck /><span><strong>Interior Restoration:</strong> Our most popular service in Langley for a reason. We use steam and hot water extraction to safely and effectively remove the toughest grime from carpets, seats, and floor mats.</span></li>
                <li className="flex items-start"><IconCheck /><span><strong>Convenient Plus Package:</strong> A fantastic value that combines our thorough interior vacuum and wipe-down with a complete exterior wash, decontamination, and a durable 6-month paint sealant.</span></li>
                <li className="flex items-start"><IconCheck /><span><strong>Exterior Detailing:</strong> Get a deep clean that removes road film and dust, followed by a protective layer that adds incredible shine and makes maintenance a breeze.</span></li>
            </ul>
             <p className="mt-6 text-lg">
                Experience the difference of a truly professional and convenient car detailing service. Contact Convenient Car Spa to book your appointment in Langley today.
            </p>
        </div>
    </LocationPageLayout>
  );
};

export default LangleyPage;