import React from 'react';
import LocationPageLayout from '../../components/LocationPageLayout';

const IconHiker = () => <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>;
const IconTree = () => <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /><path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
const IconClock = () => <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
const IconCheck = () => <svg className="w-6 h-6 text-brand-accent mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>;

const NorthVancouverPage: React.FC = () => {
  return (
    <LocationPageLayout
      city="North Vancouver"
      metaTitle="Mobile Car Detailing in North Vancouver | Convenient Car Spa"
      metaDescription="Get professional mobile car detailing on the North Shore. Convenient Car Spa serves Lonsdale, Edgemont, and all of North Vancouver. We remove tree sap and trail grime. Book now!"
      h1="Mobile Car Detailing in North Vancouver"
      imageUrl="https://ik.imagekit.io/wnwu0xxx5/Auto_detailing/priscilla-du-preez-Vm0nC-VKFTc-unsplash.jpg?updatedAt=1759732298519"
      geo={{ latitude: '49.3167', longitude: '-123.0667' }}
    >
        <div className="space-y-6 text-lg">
            <h2 className="text-3xl font-bold font-display text-brand-text-primary border-l-4 border-brand-accent pl-4">Your North Shore Mobile Detailing Specialists</h2>
            <p>
                Convenient Car Spa is proud to offer our premium, on-demand mobile auto detailing services to the City and District of North Vancouver. We know that North Shore residents value quality, efficiency, and an active lifestyle. Our mobile service is perfectly aligned with these values, delivering meticulous, professional results at your home or office, so you can spend less time on errands and more time enjoying the incredible natural playground at your doorstep.
            </p>
        </div>

        <div className="my-16">
            <h2 className="text-3xl font-bold font-display text-brand-text-primary border-l-4 border-brand-accent pl-4 mb-6">Complete Service Coverage for the North Shore</h2>
            <p className="text-lg">
                Our experienced technicians serve every neighbourhood in North Vancouver, providing tailored services for the specific needs of the community:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div className="bg-brand-surface border border-brand-border p-6 rounded-lg"><h3 className="text-xl font-semibold text-brand-accent">Lower Lonsdale & The Shipyards</h3><p className="text-brand-text-secondary mt-2">For the vibrant community of condo dwellers, our parkade-friendly service is the ultimate convenience. We'll detail your car while you explore the market at <strong>Lonsdale Quay</strong>.</p></div>
                <div className="bg-brand-surface border border-brand-border p-6 rounded-lg"><h3 className="text-xl font-semibold text-brand-accent">Edgemont Village & Lynn Valley</h3><p className="text-brand-text-secondary mt-2">Your vehicles are your gateway to adventure. We provide deep interior cleaning to remove mud and grime, and durable exterior protection against the elements.</p></div>
                <div className="bg-brand-surface border border-brand-border p-6 rounded-lg"><h3 className="text-xl font-semibold text-brand-accent">Deep Cove & Dollarton</h3><p className="text-brand-text-secondary mt-2">Protect your car from the salty sea air and tree fallout common in these beautiful areas. We offer long-lasting sealants and ceramic coatings perfect for the coastal environment.</p></div>
                <div className="bg-brand-surface border border-brand-border p-6 rounded-lg"><h3 className="text-xl font-semibold text-brand-accent">Capilano & Grouse Woods</h3><p className="text-brand-text-secondary mt-2">We serve residents near major attractions like the <strong>Capilano Suspension Bridge</strong>, providing a discreet and high-quality service that respects the tranquility of your neighbourhood.</p></div>
            </div>
        </div>

        <div className="my-16">
            <h2 className="text-3xl font-bold font-display text-brand-text-primary border-l-4 border-brand-accent pl-4 mb-8">Solving the North Vancouver Driver's Dilemmas</h2>
            <p className="text-lg mb-8">
                The North Shore lifestyle is unique, and so are the challenges your vehicle faces. We have the right tools and expertise for the job.
            </p>
            <div className="space-y-8">
                <div className="flex items-start space-x-4"><div className="flex-shrink-0 bg-brand-accent/10 text-brand-accent rounded-full p-3"><IconHiker /></div><div><h3 className="text-xl font-semibold text-brand-text-primary">The Outdoor Adventurer's Vehicle</h3><p className="text-brand-text-secondary mt-1">After a weekend of hiking or mountain biking, your car's interior can look like the trail. Our Interior Restoration service is designed to tackle heavy mud, dirt, and pet hair, restoring your cabin to a pristine state.</p></div></div>
                <div className="flex items-start space-x-4"><div className="flex-shrink-0 bg-brand-accent/10 text-brand-accent rounded-full p-3"><IconTree /></div><div><h3 className="text-xl font-semibold text-brand-text-primary">Tree Sap & Environmental Fallout</h3><p className="text-brand-text-secondary mt-1">The beautiful, dense tree canopy means a constant battle with tree sap and bird droppings. These substances are highly acidic and can damage your paint. We safely remove them and apply protective coatings to prevent future etching.</p></div></div>
                <div className="flex items-start space-x-4"><div className="flex-shrink-0 bg-brand-accent/10 text-brand-accent rounded-full p-3"><IconClock /></div><div><h3 className="text-xl font-semibold text-brand-text-primary">Bridge Traffic & Busy Schedules</h3><p className="text-brand-text-secondary mt-1">No one wants to spend their precious time off sitting in bridge traffic to get their car washed. We bring the service to you, completely eliminating that hassle and giving you back your weekend.</p></div></div>
            </div>
        </div>

        <div className="my-16">
            <h2 className="text-3xl font-bold font-display text-brand-text-primary border-l-4 border-brand-accent pl-4 mb-6">Our Top Detailing Services for North Vancouver</h2>
            <p className="text-lg">We recommend these services to perfectly match the North Shore lifestyle:</p>
            <ul className="space-y-4 mt-6 text-lg">
                <li className="flex items-start"><IconCheck /><span><strong>Interior Restoration:</strong> Our number one service for active North Shore residents. We deep clean and sanitize your vehicle's interior, making it a pleasant place to be after any adventure.</span></li>
                <li className="flex items-start"><IconCheck /><span><strong>Convenient Plus Package:</strong> Get the best of both worlds. A thorough exterior cleaning with a 6-month protective sealant to guard against tree sap, combined with a full interior vacuum and cleaning.</span></li>
                <li className="flex items-start"><IconCheck /><span><strong>Ceramic Coating:</strong> For the ultimate, long-term defense against the North Shore's unique environment. A ceramic coating makes your vehicle incredibly easy to clean, meaning mud and grime wash away with ease.</span></li>
            </ul>
            <p className="mt-6 text-lg">
                Embrace the convenience of a mobile detailing service that understands your lifestyle. Contact Convenient Car Spa today to schedule your appointment in North Vancouver and keep your vehicle looking as stunning as its surroundings.
            </p>
        </div>
    </LocationPageLayout>
  );
};

export default NorthVancouverPage;