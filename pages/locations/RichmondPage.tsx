import React from 'react';
import LocationPageLayout from '../../components/LocationPageLayout';

const IconSalt = () => <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a8 8 0 11-12.856-12.856 8 8 0 0112.856 12.856zM12 6v4m0 4v.01" /></svg>;
const IconPlane = () => <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>;
const IconPuddle = () => <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2h10a2 2 0 002-2v-1a2 2 0 012-2h1.945C21.43 7.152 16.97 3 12 3S2.57 7.152 2.055 11z" /></svg>;
const IconCheck = () => <svg className="w-6 h-6 text-brand-accent mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>;

const RichmondPage: React.FC = () => {
  return (
    <LocationPageLayout
      city="Richmond"
      metaTitle="Mobile Car Detailing in Richmond | Convenient Car Spa"
      metaDescription="Top-rated mobile car detailing and wash services in Richmond, BC. We serve Steveston, City Centre, and more. Protect your car from salt spray. Book your at-home service!"
      h1="Mobile Car Detailing in Richmond"
      imageUrl="https://ik.imagekit.io/wnwu0xxx5/Auto_detailing/matt-wang-dBp9dbQCh4Q-unsplash.jpg?updatedAt=1759732296928"
      geo={{ latitude: '49.1666', longitude: '-123.1336' }}
    >
        <div className="space-y-6 text-lg">
            <h2 className="text-3xl font-bold font-display text-brand-text-primary border-l-4 border-brand-accent pl-4">Expert Mobile Auto Detailing Comes to Richmond</h2>
            <p>
                Convenient Car Spa is your trusted local provider for professional mobile car detailing services throughout Richmond, BC. We bring our fully equipped, self-sufficient detailing studio to you, whether you're at home, at work, or even at the marina. We understand that your time is valuable, and our mission is to provide a flawless, convenient service that fits your schedule and protects your vehicle from the unique environmental conditions of our island city.
            </p>
        </div>

        <div className="my-16">
            <h2 className="text-3xl font-bold font-display text-brand-text-primary border-l-4 border-brand-accent pl-4 mb-6">Full Coverage Across Richmond's Neighbourhoods</h2>
            <p className="text-lg">
                Our mobile teams are always on the move, providing exceptional detailing services to all of Richmond's distinct communities:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div className="bg-brand-surface border border-brand-border p-6 rounded-lg"><h3 className="text-xl font-semibold text-brand-accent">Steveston</h3><p className="text-brand-text-secondary mt-2">After a beautiful day at <strong>Garry Point Park</strong>, let us wash away the salt spray and road dust. We provide meticulous care for vehicles in this historic and charming neighbourhood.</p></div>
                <div className="bg-brand-surface border border-brand-border p-6 rounded-lg"><h3 className="text-xl font-semibold text-brand-accent">City Centre</h3><p className="text-brand-text-secondary mt-2">For the high-rise residents and professionals around <strong>Richmond Centre</strong>, we offer efficient and thorough detailing services in parkades, making car care effortless.</p></div>
                <div className="bg-brand-surface border border-brand-border p-6 rounded-lg"><h3 className="text-xl font-semibold text-brand-accent">West Richmond & Terra Nova</h3><p className="text-brand-text-secondary mt-2">We help families in these communities keep their vehicles clean, sanitized, and ready for any adventure, from soccer practice to a weekend getaway.</p></div>
                <div className="bg-brand-surface border border-brand-border p-6 rounded-lg"><h3 className="text-xl font-semibold text-brand-accent">East Richmond</h3><p className="text-brand-text-secondary mt-2">Serving the industrial and agricultural heartlands, we offer robust cleaning solutions to remove tougher grime while protecting your vehicle's finish.</p></div>
            </div>
            <p className="mt-6 text-lg">
                Our service radius comfortably covers all of Richmond, from the Fraser River to the Strait of Georgia. We are committed to providing every resident with access to premium, hassle-free car care.
            </p>
        </div>

        <div className="my-16">
            <h2 className="text-3xl font-bold font-display text-brand-text-primary border-l-4 border-brand-accent pl-4 mb-8">Solving Richmond's Specific Car Care Problems</h2>
            <p className="text-lg mb-8">
                Living in Richmond presents unique challenges for maintaining your vehicle's appearance and longevity. Our services are tailored to address these issues head-on.
            </p>
            <div className="space-y-8">
                <div className="flex items-start space-x-4"><div className="flex-shrink-0 bg-brand-accent/10 text-brand-accent rounded-full p-3"><IconSalt /></div><div><h3 className="text-xl font-semibold text-brand-text-primary">Coastal Salt Spray & Humidity</h3><p className="text-brand-text-secondary mt-1">Proximity to the ocean means a constant battle with salt in the air, which can accelerate rust. Our thorough washing process removes salt deposits, and our durable paint sealants provide a strong barrier against this coastal assault.</p></div></div>
                <div className="flex items-start space-x-4"><div className="flex-shrink-0 bg-brand-accent/10 text-brand-accent rounded-full p-3"><IconPlane /></div><div><h3 className="text-xl font-semibold text-brand-text-primary">Airport Proximity (YVR)</h3><p className="text-brand-text-secondary mt-1">Being near a major airport means dealing with industrial fallout that can settle on your car's surface. Our paint decontamination process safely lifts these bonded contaminants before they can cause damage.</p></div></div>
                <div className="flex items-start space-x-4"><div className="flex-shrink-0 bg-brand-accent/10 text-brand-accent rounded-full p-3"><IconPuddle /></div><div><h3 className="text-xl font-semibold text-brand-text-primary">Flat Terrain & Puddles</h3><p className="text-brand-text-secondary mt-1">Richmond's low-lying geography means roads stay wet longer, kicking up dirty road film onto your vehicle. Our hydrophobic coatings make your car easier to clean as grime will have a harder time sticking.</p></div></div>
            </div>
        </div>

        <div className="my-16">
            <h2 className="text-3xl font-bold font-display text-brand-text-primary border-l-4 border-brand-accent pl-4 mb-6">Our Recommended Services for Richmond Vehicles</h2>
            <p className="text-lg">We suggest the following services to combat Richmond's unique climate:</p>
            <ul className="space-y-4 mt-6 text-lg">
                <li className="flex items-start"><IconCheck /><span><strong>Convenient Plus Package:</strong> The perfect all-around package for Richmond. It combines a deep exterior cleaning and a durable 6-month paint sealant to fight off salt and grime, plus a full interior vacuum and wipe-down.</span></li>
                <li className="flex items-start"><IconCheck /><span><strong>Durable Paint Sealant:</strong> An essential upgrade for any Richmond driver. A step up from traditional wax, our sealant offers months of protection against the elements, making your car much easier to maintain.</span></li>
                <li className="flex items-start"><IconCheck /><span><strong>Ceramic Coating:</strong> For the ultimate peace of mind, a ceramic coating offers years of protection. Its robust chemical resistance is ideal for combating the salty, humid environment of our coastal city.</span></li>
            </ul>
            <p className="mt-6 text-lg">
                Protect your investment and enjoy the convenience of detailing that comes to you. Contact Convenient Car Spa today to schedule your mobile detailing appointment in Richmond and give your vehicle the specialized care it needs.
            </p>
        </div>
    </LocationPageLayout>
  );
};

export default RichmondPage;