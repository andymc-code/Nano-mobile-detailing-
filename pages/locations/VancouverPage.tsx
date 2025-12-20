import React from 'react';
import LocationPageLayout from '../../components/LocationPageLayout';

const IconRain = () => <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 19c-4.418 0-8-3.582-8-8a8.004 8.004 0 015-7.416M12 19c4.418 0 8-3.582 8-8a8.004 8.004 0 00-5-7.416M12 19v2" /><path strokeLinecap="round" strokeLinejoin="round" d="M7 13a5 5 0 1110 0" /></svg>;
const IconClock = () => <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
const IconBuilding = () => <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m-1 4h1m5-8h1m-1 4h1m-1 4h1M5 7h1m-1 4h1m-1 4h1" /></svg>;
const IconCheck = () => <svg className="w-6 h-6 text-brand-accent mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>;

const VancouverPage: React.FC = () => {
  return (
    <LocationPageLayout
      city="Vancouver"
      metaTitle="Mobile Car Detailing in Vancouver | Convenient Car Spa"
      metaDescription="Convenient Car Spa offers premium mobile auto detailing and car wash services in Vancouver. We come to you in Yaletown, Kitsilano, or Downtown. Book today!"
      h1="Mobile Car Detailing in Vancouver"
      imageUrl="https://ik.imagekit.io/wnwu0xxx5/Auto_detailing/matt-wang-dBp9dbQCh4Q-unsplash.jpg?updatedAt=1759732296928"
      geo={{ latitude: '49.2827', longitude: '-123.1207' }}
    >
        <div className="space-y-6 text-lg">
            <h2 className="text-3xl font-bold font-display text-brand-text-primary border-l-4 border-brand-accent pl-4">Your Premier Mobile Detailing Service in Vancouver, BC</h2>
            <p>
                Welcome to Convenient Car Spa, Vancouver's top choice for professional mobile auto detailing. In a city as vibrant and fast-paced as ours, finding time to take your vehicle to a traditional detailer is a luxury not everyone has. That's where we come in. We bring the complete, premium car spa experience directly to your home, apartment, or office, anywhere in Vancouver. From the bustling streets of Downtown to the serene avenues of Kitsilano, our fully-equipped mobile units are ready to restore your vehicle's brilliance.
            </p>
            <p>
                We understand the unique challenges Vancouver car owners face. The persistent rain ("liquid sunshine") leaves stubborn water spots, the sea salt air from the coast can accelerate corrosion, and tight condo parkades make washing your own car nearly impossible. Our services are specifically designed to combat these local issues, providing your vehicle with the protection it needs to look its best in the Pacific Northwest climate.
            </p>
        </div>

        <div className="my-16">
            <h2 className="text-3xl font-bold font-display text-brand-text-primary border-l-4 border-brand-accent pl-4 mb-6">Full-Service Detailing in Your Neighbourhood</h2>
            <p className="text-lg">
                Our service radius covers the entire City of Vancouver. We are proud to serve clients in numerous neighbourhoods, including:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div className="bg-brand-surface border border-brand-border p-6 rounded-lg"><h3 className="text-xl font-semibold text-brand-accent">Downtown & Yaletown</h3><p className="text-brand-text-secondary mt-2">Perfect for busy professionals. We can detail your car in your office building's parkade while you work, saving you valuable time.</p></div>
                <div className="bg-brand-surface border border-brand-border p-6 rounded-lg"><h3 className="text-xl font-semibold text-brand-accent">Kitsilano & Point Grey</h3><p className="text-brand-text-secondary mt-2">Protect your vehicle from the salty air near the beaches. We'll get your car looking pristine for that drive along NW Marine Drive or a trip to Spanish Banks.</p></div>
                <div className="bg-brand-surface border border-brand-border p-6 rounded-lg"><h3 className="text-xl font-semibold text-brand-accent">Mount Pleasant & Main Street</h3><p className="text-brand-text-secondary mt-2">For the creative and community-focused, we offer flexible scheduling to fit your dynamic lifestyle, ensuring your car reflects your attention to detail.</p></div>
                <div className="bg-brand-surface border border-brand-border p-6 rounded-lg"><h3 className="text-xl font-semibold text-brand-accent">East Vancouver</h3><p className="text-brand-text-secondary mt-2">From Commercial Drive to Hastings-Sunrise, we bring our top-tier services to your doorstep, making premium car care accessible to everyone.</p></div>
            </div>
             <p className="mt-6 text-lg">
                Whether you're located near iconic landmarks like <strong>Stanley Park</strong>, shopping on Robson Street, or working near the <strong>Vancouver Convention Centre</strong>, our team can reach you. We navigate the city's traffic so you don't have to.
            </p>
        </div>

        <div className="my-16">
            <h2 className="text-3xl font-bold font-display text-brand-text-primary border-l-4 border-brand-accent pl-4 mb-8">Why Choose Our Mobile Service in Vancouver?</h2>
            <p className="text-lg mb-8">
                Choosing Convenient Car Spa means choosing unparalleled convenience without compromising on quality. We solve the key challenges Vancouver car owners face:
            </p>
            <div className="space-y-8">
                <div className="flex items-start space-x-4"><div className="flex-shrink-0 bg-brand-accent/10 text-brand-accent rounded-full p-3"><IconRain /></div><div><h3 className="text-xl font-semibold text-brand-text-primary">The Rain Factor</h3><p className="text-brand-text-secondary mt-1">Vancouver's constant drizzle can leave mineral-rich water spots that etch into your paint. Our paint decontamination and sealant services create a hydrophobic barrier, making water bead and roll off, keeping your car cleaner for longer.</p></div></div>
                <div className="flex items-start space-x-4"><div className="flex-shrink-0 bg-brand-accent/10 text-brand-accent rounded-full p-3"><IconClock /></div><div><h3 className="text-xl font-semibold text-brand-text-primary">No Time & Heavy Traffic</h3><p className="text-brand-text-secondary mt-1">Why spend an hour fighting traffic to get to a detail shop, only to wait longer? We eliminate that stress entirely. We work around your schedule, at your location, turning wasted time into productive time.</p></div></div>
                <div className="flex items-start space-x-4"><div className="flex-shrink-0 bg-brand-accent/10 text-brand-accent rounded-full p-3"><IconBuilding /></div><div><h3 className="text-xl font-semibold text-brand-text-primary">Condo & Apartment Living</h3><p className="text-brand-text-secondary mt-1">Most strata buildings have strict rules against washing cars in the parkade. Our mobile units are self-sufficient, using specialized techniques to work efficiently and cleanly in almost any parking situation.</p></div></div>
            </div>
        </div>

        <div className="my-16">
            <h2 className="text-3xl font-bold font-display text-brand-text-primary border-l-4 border-brand-accent pl-4 mb-6">Our Comprehensive Mobile Detailing Packages</h2>
            <p className="text-lg">We offer a range of services to meet the diverse needs of Vancouver drivers. Our most popular options include:</p>
            <ul className="space-y-4 mt-6 text-lg">
                <li className="flex items-start"><IconCheck /><span><strong>Convenient Plus Package:</strong> Our most popular choice, this package includes a thorough exterior wash, paint decontamination, a durable 6-month paint sealant, plus a full interior vacuum and wipe-down.</span></li>
                <li className="flex items-start"><IconCheck /><span><strong>Interior Restoration:</strong> Ideal for families or pet owners. We perform a deep clean of all interior surfaces, including steam cleaning and hot water extraction, to remove stains, eliminate odors, and sanitize your cabin.</span></li>
                <li className="flex items-start"><IconCheck /><span><strong>Ceramic Coating:</strong> For the ultimate long-term protection against Vancouver's harsh weather. A ceramic coating provides years of gloss, scratch resistance, and makes washing your car incredibly easy.</span></li>
            </ul>
            <p className="mt-6 text-lg">
                Don't let your busy schedule or the Vancouver weather dictate the condition of your car. Experience the ultimate in convenience and quality with our mobile detailing service. We are committed to providing a flawless finish and exceptional customer service, every time.
            </p>
        </div>
    </LocationPageLayout>
  );
};

export default VancouverPage;