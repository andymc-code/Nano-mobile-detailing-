import React from 'react';
import LocationPageLayout from '../../components/LocationPageLayout';

const IconShield = () => <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>;
const IconSparkles = () => <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.293 2.293a1 1 0 010 1.414L10 16l-4-4 6.293-6.293a1 1 0 011.414 0z" /></svg>;
const IconTree = () => <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /><path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
const IconCheck = () => <svg className="w-6 h-6 text-brand-accent mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>;

const WestVancouverPage: React.FC = () => {
  return (
    <LocationPageLayout
      city="West Vancouver"
      metaTitle="Mobile Car Detailing in West Vancouver | Convenient Car Spa"
      metaDescription="Premium mobile auto detailing for luxury vehicles in West Vancouver. We serve Ambleside, Dundarave, and the British Properties. Ceramic coatings and paint correction at your home."
      h1="Mobile Car Detailing in West Vancouver"
      imageUrl="https://ik.imagekit.io/wnwu0xxx5/Auto_detailing/matt-wang-dBp9dbQCh4Q-unsplash.jpg?updatedAt=1759732296928"
      geo={{ latitude: '49.3208', longitude: '-123.1424' }}
    >
        <div className="space-y-6 text-lg">
            <h2 className="text-3xl font-bold font-display text-brand-text-primary border-l-4 border-brand-accent pl-4">The Gold Standard in Mobile Detailing for West Vancouver</h2>
            <p>
                Convenient Car Spa provides an elite, discreet, and professional mobile detailing service tailored for the discerning residents of West Vancouver. We understand that your vehicle is more than just transportation—it's a significant investment. Our service brings a world-class detailing experience to your private driveway or garage, delivering meticulous results that meet the highest standards, all at your convenience.
            </p>
        </div>

        <div className="my-16">
            <h2 className="text-3xl font-bold font-display text-brand-text-primary border-l-4 border-brand-accent pl-4 mb-6">Serving West Vancouver's Most Prestigious Neighbourhoods</h2>
            <p className="text-lg">
                Our reputation for quality and professionalism has made us a trusted choice in West Vancouver's finest communities:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div className="bg-brand-surface border border-brand-border p-6 rounded-lg"><h3 className="text-xl font-semibold text-brand-accent">British Properties</h3><p className="text-brand-text-secondary mt-2">We provide specialized care for high-end luxury and exotic vehicles, ensuring every detail is perfect, from the paint finish to the interior leather.</p></div>
                <div className="bg-brand-surface border border-brand-border p-6 rounded-lg"><h3 className="text-xl font-semibold text-brand-accent">Ambleside & Dundarave</h3><p className="text-brand-text-secondary mt-2">Enjoy a stroll along the Seawall while we meticulously detail your vehicle at your home. We make car care a seamless part of your sophisticated lifestyle.</p></div>
                <div className="bg-brand-surface border border-brand-border p-6 rounded-lg"><h3 className="text-xl font-semibold text-brand-accent">Caulfeild & Horseshoe Bay</h3><p className="text-brand-text-secondary mt-2">For residents who appreciate the natural beauty of the area, we ensure your vehicle is protected from the elements, whether it's salt from the marine air or tree sap from the lush surroundings.</p></div>
            </div>
             <p className="mt-6 text-lg">
                From the shoppers at <strong>Park Royal Shopping Centre</strong> to the nature lovers exploring <strong>Lighthouse Park</strong>, we provide a service that respects your time and your property. Our team is trained to work cleanly and efficiently, leaving nothing behind but a flawlessly detailed vehicle.
            </p>
        </div>

        <div className="my-16">
            <h2 className="text-3xl font-bold font-display text-brand-text-primary border-l-4 border-brand-accent pl-4 mb-8">Specialized Solutions for West Vancouver Car Owners</h2>
            <p className="text-lg mb-8">
                We recognize the unique requirements of maintaining a vehicle in West Vancouver's beautiful but challenging environment.
            </p>
            <div className="space-y-8">
                <div className="flex items-start space-x-4"><div className="flex-shrink-0 bg-brand-accent/10 text-brand-accent rounded-full p-3"><IconShield /></div><div><h3 className="text-xl font-semibold text-brand-text-primary">Protection for Luxury Vehicles</h3><p className="text-brand-text-secondary mt-1">High-end vehicles deserve the best protection. Our ceramic coatings provide long-term, durable protection for valuable paintwork, enhancing gloss and making maintenance effortless.</p></div></div>
                <div className="flex items-start space-x-4"><div className="flex-shrink-0 bg-brand-accent/10 text-brand-accent rounded-full p-3"><IconSparkles /></div><div><h3 className="text-xl font-semibold text-brand-text-primary">Steep Driveways & Limited Space</h3><p className="text-brand-text-secondary mt-1">We are experienced in working in a variety of settings. Our mobile units are designed to be compact and efficient, allowing us to perform full details even in locations with challenging access.</p></div></div>
                <div className="flex items-start space-x-4"><div className="flex-shrink-0 bg-brand-accent/10 text-brand-accent rounded-full p-3"><IconTree /></div><div><h3 className="text-xl font-semibold text-brand-text-primary">Marine Air & Tree Fallout</h3><p className="text-brand-text-secondary mt-1">Proximity to the ocean and dense forests means vehicles are exposed to corrosive salt air and sticky tree sap. Our process includes thorough decontamination to remove these substances and protective coatings to prevent future damage.</p></div></div>
            </div>
        </div>

        <div className="my-16">
            <h2 className="text-3xl font-bold font-display text-brand-text-primary border-l-4 border-brand-accent pl-4 mb-6">Our Premier Services for West Vancouver</h2>
            <p className="text-lg">We recommend our top-tier services to meet the expectations of our West Vancouver clientele:</p>
            <ul className="space-y-4 mt-6 text-lg">
                <li className="flex items-start"><IconCheck /><span><strong>Ceramic Coating:</strong> This is our most recommended service for West Vancouver. It provides unmatched gloss, scratch resistance, and hydrophobic properties, ensuring your luxury vehicle stays looking immaculate for years.</span></li>
                <li className="flex items-start"><IconCheck /><span><strong>Paint Correction:</strong> Before any protection is applied, the paint must be flawless. Our multi-stage paint correction process removes swirl marks and fine scratches, creating a perfect, mirror-like finish.</span></li>
                <li className="flex items-start"><IconCheck /><span><strong>Convenient Premier Package:</strong> Our most comprehensive package includes a one-step polish and sealant, deep interior cleaning with leather conditioning, and engine bay detailing for a complete vehicle rejuvenation.</span></li>
            </ul>
             <p className="mt-6 text-lg">
                Entrust your vehicle to the experts at Convenient Car Spa. Contact us today to schedule a consultation or book our premium mobile detailing service in West Vancouver.
            </p>
        </div>
    </LocationPageLayout>
  );
};

export default WestVancouverPage;