import React from 'react';
import LocationPageLayout from '../../components/LocationPageLayout';

const IconTraffic = () => <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 0h12M9 11l.75-5.002L12 3v5.21l2.25-1.21L15 11M3 21h18" /></svg>;
const IconClock = () => <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
const IconConstruction = () => <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>;
const IconCheck = () => <svg className="w-6 h-6 text-brand-accent mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>;

const BurnabyPage: React.FC = () => {
  return (
    <LocationPageLayout
      city="Burnaby"
      metaTitle="Mobile Car Detailing in Burnaby | Convenient Car Spa"
      metaDescription="Convenient Car Spa delivers professional mobile auto detailing to Burnaby. Serving Metrotown, Brentwood, and Edmonds. Get a showroom shine at your home or office. Book now!"
      h1="Mobile Car Detailing in Burnaby"
      imageUrl="https://ik.imagekit.io/wnwu0xxx5/Auto_detailing/dania-shaeeb-DBpyrJ1XOtI-unsplash.jpg?updatedAt=1759732297218"
      geo={{ latitude: '49.2488', longitude: '-122.9805' }}
    >
        <div className="space-y-6 text-lg">
            <h2 className="text-3xl font-bold font-display text-brand-text-primary border-l-4 border-brand-accent pl-4">Burnaby's Most Convenient Auto Detailing Service</h2>
            <p>
                Convenient Car Spa is proud to bring our five-star mobile car detailing services to the vibrant and diverse city of Burnaby. As a central hub in the Lower Mainland, we know Burnaby residents lead busy lives, juggling commutes, family, and work. Our service is designed for you: we eliminate the need to drive to a detailing shop and wait. Instead, our state-of-the-art mobile detailing van comes directly to your location, whether that's your home, apartment, or workplace.
            </p>
        </div>

        <div className="my-16">
            <h2 className="text-3xl font-bold font-display text-brand-text-primary border-l-4 border-brand-accent pl-4 mb-6">Serving All of Burnaby's Neighbourhoods</h2>
            <p className="text-lg">
                Our team is familiar with every corner of Burnaby, providing top-quality service to a wide range of communities:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div className="bg-brand-surface border border-brand-border p-6 rounded-lg"><h3 className="text-xl font-semibold text-brand-accent">Metrotown & Station Square</h3><p className="text-brand-text-secondary mt-2">Living in a high-rise? No problem. We are equipped to detail your vehicle in condo parkades, bringing premium car care to the heart of the city.</p></div>
                <div className="bg-brand-surface border border-brand-border p-6 rounded-lg"><h3 className="text-xl font-semibold text-brand-accent">Brentwood & The Amazing Brentwood</h3><p className="text-brand-text-secondary mt-2">Your lifestyle is modern and convenient, and your car care should be too. We'll get your vehicle looking as sharp as the neighbourhood while you shop or relax at home.</p></div>
                <div className="bg-brand-surface border border-brand-border p-6 rounded-lg"><h3 className="text-xl font-semibold text-brand-accent">North Burnaby & The Heights</h3><p className="text-brand-text-secondary mt-2">We cater to the proud homeowners in this area, helping maintain vehicle value and appearance with our meticulous detailing services.</p></div>
                <div className="bg-brand-surface border border-brand-border p-6 rounded-lg"><h3 className="text-xl font-semibold text-brand-accent">Edmonds & Highgate</h3><p className="text-brand-text-secondary mt-2">As a growing family-oriented community, we offer interior deep cleaning and sanitization services to keep your vehicle safe and clean for your loved ones.</p></div>
            </div>
            <p className="mt-6 text-lg">
                Whether you're a student at <strong>Simon Fraser University (SFU)</strong> needing a quick clean-up before heading home, or enjoying a day at <strong>Deer Lake Park</strong>, we can schedule a service that fits seamlessly into your life. We serve customers within a 15-mile radius of Burnaby City Hall, ensuring comprehensive coverage.
            </p>
        </div>

        <div className="my-16">
            <h2 className="text-3xl font-bold font-display text-brand-text-primary border-l-4 border-brand-accent pl-4 mb-8">Addressing Burnaby's Unique Car Care Challenges</h2>
            <p className="text-lg mb-8">
                We're not just a generic detailing service; we understand the specific issues Burnaby drivers face.
            </p>
            <div className="space-y-8">
                <div className="flex items-start space-x-4"><div className="flex-shrink-0 bg-brand-accent/10 text-brand-accent rounded-full p-3"><IconTraffic /></div><div><h3 className="text-xl font-semibold text-brand-text-primary">Heavy Commuter Traffic</h3><p className="text-brand-text-secondary mt-1">Sitting in traffic on Highway 1 or Kingsway means your vehicle is constantly exposed to road grime and exhaust. Our exterior detailing process effectively removes this tough build-up, protecting your paint from long-term damage.</p></div></div>
                <div className="flex items-start space-x-4"><div className="flex-shrink-0 bg-brand-accent/10 text-brand-accent rounded-full p-3"><IconClock /></div><div><h3 className="text-xl font-semibold text-brand-text-primary">The "Go, Go, Go" Lifestyle</h3><p className="text-brand-text-secondary mt-1">Between work, shopping at Metropolis at Metrotown, and family activities, there's little time left for car maintenance. Our mobile model gives you back your weekends. We detail while you live your life.</p></div></div>
                <div className="flex items-start space-x-4"><div className="flex-shrink-0 bg-brand-accent/10 text-brand-accent rounded-full p-3"><IconConstruction /></div><div><h3 className="text-xl font-semibold text-brand-text-primary">Construction Dust</h3><p className="text-brand-text-secondary mt-1">With Burnaby's rapid development, construction dust is a constant nuisance. This abrasive dust can harm your paint. Our safe washing methods and protective sealants are the perfect antidote.</p></div></div>
            </div>
        </div>

        <div className="my-16">
            <h2 className="text-3xl font-bold font-display text-brand-text-primary border-l-4 border-brand-accent pl-4 mb-6">Our Top Services for Burnaby Residents</h2>
            <p className="text-lg">We offer a full suite of services to keep your car in pristine condition:</p>
            <ul className="space-y-4 mt-6 text-lg">
                <li className="flex items-start"><IconCheck /><span><strong>Exterior Detailing:</strong> A thorough hand wash, paint decontamination to remove embedded grime, and a high-gloss paint sealant to protect against road film and UV rays.</span></li>
                <li className="flex items-start"><IconCheck /><span><strong>Interior Restoration:</strong> We tackle everything from daily dirt to serious spills. Our deep cleaning service includes vacuuming, steam cleaning, and shampooing of carpets and upholstery.</span></li>
                <li className="flex items-start"><IconCheck /><span><strong>Convenient Plus Package:</strong> The ideal all-in-one solution for busy Burnaby residents, combining essential exterior protection with a comprehensive interior cleaning.</span></li>
            </ul>
            <p className="mt-6 text-lg">
                Experience the ultimate convenience of professional auto detailing. Contact Convenient Car Spa today to schedule your mobile service in Burnaby and give your car the attention it deserves, without the hassle.
            </p>
        </div>
    </LocationPageLayout>
  );
};

export default BurnabyPage;