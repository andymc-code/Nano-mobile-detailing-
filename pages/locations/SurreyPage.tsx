import React from 'react';
import LocationPageLayout from '../../components/LocationPageLayout';

const IconHighway = () => <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>;
const IconFamily = () => <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.653-.28-1.25-1-1.657M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.653.28-1.25 1-1.657m10-4l-3-3m0 0l-3 3m3-3v12" /></svg>;
const IconWeather = () => <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>;
const IconCheck = () => <svg className="w-6 h-6 text-brand-accent mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>;

const SurreyPage: React.FC = () => {
  return (
    <LocationPageLayout
      city="Surrey"
      metaTitle="Mobile Car Detailing in Surrey | Convenient Car Spa"
      metaDescription="Convenient Car Spa is Surrey's #1 mobile auto detailing service. We serve South Surrey, Guildford, and all of Surrey. Family-friendly interior cleaning at your home. Book now!"
      h1="Mobile Car Detailing in Surrey"
      imageUrl="https://ik.imagekit.io/wnwu0xxx5/Auto_detailing/city_centre_aerial_cityscape_our_communities.jpg?updatedAt=1759732860459"
      geo={{ latitude: '49.1913', longitude: '-122.8490' }}
    >
        <div className="space-y-6 text-lg">
            <h2 className="text-3xl font-bold font-display text-brand-text-primary border-l-4 border-brand-accent pl-4">Surrey's Choice for Convenient, Professional Mobile Detailing</h2>
            <p>
                Convenient Car Spa is excited to offer our top-rated mobile car detailing services to the residents and businesses of Surrey, BC. As one of Canada's largest and fastest-growing cities, we know that life in Surrey is busy. From commuting to work to family outings, your vehicle goes through a lot. Our mobile service is the perfect solution, bringing comprehensive, high-quality auto care directly to your driveway, saving you time and effort.
            </p>
        </div>

        <div className="my-16">
            <h2 className="text-3xl font-bold font-display text-brand-text-primary border-l-4 border-brand-accent pl-4 mb-6">We Serve Every Corner of Surrey</h2>
            <p className="text-lg">
                Surrey's size and diversity are its strengths, and our service is designed to reach every community within the city. We proudly serve:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div className="bg-brand-surface border border-brand-border p-6 rounded-lg"><h3 className="text-xl font-semibold text-brand-accent">South Surrey & White Rock</h3><p className="text-brand-text-secondary mt-2">We help protect vehicles from the coastal air near <strong>Crescent Beach</strong> and maintain the pristine look of cars in this beautiful residential area.</p></div>
                <div className="bg-brand-surface border border-brand-border p-6 rounded-lg"><h3 className="text-xl font-semibold text-brand-accent">Guildford & Fraser Heights</h3><p className="text-brand-text-secondary mt-2">For busy shoppers at <strong>Guildford Town Centre</strong> and commuters, our service is a time-saving lifesaver. We can detail your car while you shop or work from home.</p></div>
                <div className="bg-brand-surface border border-brand-border p-6 rounded-lg"><h3 className="text-xl font-semibold text-brand-accent">Newton & Whalley</h3><p className="text-brand-text-secondary mt-2">At the heart of Surrey, we provide accessible detailing to keep your daily driver looking its best and protected from the wear and tear of city driving.</p></div>
                <div className="bg-brand-surface border border-brand-border p-6 rounded-lg"><h3 className="text-xl font-semibold text-brand-accent">Cloverdale & Fleetwood</h3><p className="text-brand-text-secondary mt-2">We offer family-friendly interior deep cleaning, sanitizing surfaces and removing stains to create a healthier environment for you and your children.</p></div>
            </div>
        </div>

        <div className="my-16">
            <h2 className="text-3xl font-bold font-display text-brand-text-primary border-l-4 border-brand-accent pl-4 mb-8">Tackling Surrey-Specific Vehicle Challenges</h2>
            <p className="text-lg mb-8">
                Driving in Surrey comes with its own set of challenges. Our services are designed to provide real solutions.
            </p>
            <div className="space-y-8">
                <div className="flex items-start space-x-4"><div className="flex-shrink-0 bg-brand-accent/10 text-brand-accent rounded-full p-3"><IconHighway /></div><div><h3 className="text-xl font-semibold text-brand-text-primary">Highway Commuter Grime</h3><p className="text-brand-text-secondary mt-1">Daily drives on Highway 99 or Fraser Highway coat your car in a tough layer of road film and tar. Our exterior detailing process is designed to safely remove this grime and protect your paint.</p></div></div>
                <div className="flex items-start space-x-4"><div className="flex-shrink-0 bg-brand-accent/10 text-brand-accent rounded-full p-3"><IconFamily /></div><div><h3 className="text-xl font-semibold text-brand-text-primary">The Family Vehicle</h3><p className="text-brand-text-secondary mt-1">Between school runs and sports practice, the family SUV can take a beating. Our Interior Restoration service is the answer, removing spills, ground-in dirt, and odors, making the car feel new again.</p></div></div>
                <div className="flex items-start space-x-4"><div className="flex-shrink-0 bg-brand-accent/10 text-brand-accent rounded-full p-3"><IconWeather /></div><div><h3 className="text-xl font-semibold text-brand-text-primary">Diverse Weather Conditions</h3><p className="text-brand-text-secondary mt-1">From summer road dust to winter rain and road salt, the seasons are tough on your paint. We recommend our Convenient Plus package, featuring a 6-month paint sealant, as the perfect year-round protection plan.</p></div></div>
            </div>
        </div>

        <div className="my-16">
            <h2 className="text-3xl font-bold font-display text-brand-text-primary border-l-4 border-brand-accent pl-4 mb-6">Our Most Popular Services in Surrey</h2>
            <p className="text-lg">Based on the needs of Surrey drivers, we highly recommend:</p>
            <ul className="space-y-4 mt-6 text-lg">
                <li className="flex items-start"><IconCheck /><span><strong>Convenient Plus Package:</strong> The ideal balance of interior and exterior care for the busy Surrey resident. It keeps your car looking great and protected without taking up your whole day.</span></li>
                <li className="flex items-start"><IconCheck /><span><strong>Interior Restoration:</strong> Our most requested service by families. We use professional-grade equipment to deep clean and sanitize every surface inside your vehicle.</span></li>
                <li className="flex items-start"><IconCheck /><span><strong>Exterior Detailing:</strong> Restore that showroom shine and protect your vehicle's paint from the harsh elements of daily driving in Surrey.</span></li>
            </ul>
            <p className="mt-6 text-lg">
                Discover the easiest way to keep your car in pristine condition. Contact Convenient Car Spa today to book your mobile detailing service in Surrey. We come to you, so you can focus on what matters most.
            </p>
        </div>
    </LocationPageLayout>
  );
};

export default SurreyPage;