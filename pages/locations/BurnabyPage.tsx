
import React from 'react';
import LocationPageLayout from '../../components/LocationPageLayout';

const IconConstruction = () => <svg className="h-10 w-10 text-brand-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>;
const IconTraffic = () => <svg className="h-10 w-10 text-brand-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1"><path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 0h12M9 11l.75-5.002L12 3v5.21l2.25-1.21L15 11M3 21h18" /></svg>;
const IconFamily = () => <svg className="h-10 w-10 text-brand-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1"><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.653-.28-1.25-1-1.657M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.653.28-1.25 1-1.657m10-4l-3-3m0 0l-3 3m3-3v12" /></svg>;

const BurnabyPage: React.FC = () => {
  return (
    <LocationPageLayout
      city="Burnaby"
      metaTitle="Mobile Car Detailing in Burnaby | Nano Mobile Detailing"
      metaDescription="Nano Mobile Detailing delivers professional mobile auto detailing to Burnaby. Serving Metrotown, Brentwood, and Edmonds. Get a showroom shine at your home or office. Book now!"
      h1="Mobile Car Detailing in Burnaby"
      imageUrl="https://ik.imagekit.io/wnwu0xxx5/Auto_detailing/dania-shaeeb-DBpyrJ1XOtI-unsplash.jpg?updatedAt=1759732297218"
      geo={{ latitude: '49.2488', longitude: '-122.9805' }}
    >
        <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
                <h2 className="text-4xl font-bold font-display text-white uppercase tracking-tighter leading-tight">
                    Burnaby's High-Tech <br/>
                    <span className="text-brand-gold">Detailing Destination.</span>
                </h2>
                <p className="text-lg text-brand-text-secondary leading-relaxed">
                    Burnaby is the central heart of the Lower Mainland, and we've positioned our mobile labs to serve it with unmatched efficiency. From the high-rise corridors of Metrotown to the growing communities of Brentwood, we provide premium automotive care without you ever leaving your driveway.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                     <div className="p-6 bg-brand-surface border border-brand-border rounded-2xl">
                         <h4 className="text-brand-gold font-bold uppercase text-[10px] tracking-widest mb-2">Central Location</h4>
                         <p className="text-xs text-brand-text-secondary">Serving all quadrants of Burnaby with sub-15 minute dispatch times.</p>
                     </div>
                     <div className="p-6 bg-brand-surface border border-brand-border rounded-2xl">
                         <h4 className="text-brand-gold font-bold uppercase text-[10px] tracking-widest mb-2">Versatile Labs</h4>
                         <p className="text-xs text-brand-text-secondary">Compact enough for Station Square parkades, powerful enough for fleet work.</p>
                     </div>
                </div>
            </div>
            <div className="bg-brand-dark-bg/60 p-10 rounded-[32px] border border-brand-border shadow-2xl">
                <h3 className="text-xl font-bold font-display text-white uppercase tracking-widest mb-8">Burnaby Service Stats</h3>
                <div className="space-y-6">
                    <div className="flex justify-between items-center border-b border-brand-border pb-4">
                        <span className="text-brand-text-secondary text-sm uppercase font-bold tracking-widest">Metrotown Clients</span>
                        <span className="text-brand-gold font-display font-black text-xl">450+</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-brand-border pb-4">
                        <span className="text-brand-text-secondary text-sm uppercase font-bold tracking-widest">Response Time</span>
                        <span className="text-brand-gold font-display font-black text-xl">&lt; 2hr</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-brand-border pb-4">
                        <span className="text-brand-text-secondary text-sm uppercase font-bold tracking-widest">Service Radius</span>
                        <span className="text-brand-gold font-display font-black text-xl">15 Miles</span>
                    </div>
                </div>
            </div>
        </div>

        <div className="mt-32">
            <h2 className="text-3xl font-bold font-display text-white text-center mb-12 uppercase tracking-tighter">Service Area <span className="text-brand-gold">Spotlight</span></h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                    { name: 'Brentwood', desc: 'Modern car care for the North Burnaby tech corridor.' },
                    { name: 'Metrotown', desc: 'Precision parkade detailing for high-rise residents.' },
                    { name: 'Edmonds', desc: 'Family-focused interior restoration and sanitization.' },
                    { name: 'Highgate', desc: 'Deep exterior decontamination for commuter vehicles.' },
                    { name: 'SFU / Burnaby Mountain', desc: 'Reliable mobile service for the university community.' }
                ].map((area, i) => (
                    <div key={i} className="group p-8 bg-brand-dark-bg/40 border border-brand-border rounded-3xl hover:border-brand-gold/40 transition-all duration-300">
                        <h3 className="text-brand-gold font-bold uppercase tracking-widest text-sm mb-3 font-display">{area.name}</h3>
                        <p className="text-brand-text-secondary text-xs leading-relaxed">{area.desc}</p>
                    </div>
                ))}
            </div>
        </div>

        <div className="mt-32 py-24 bg-brand-surface/30 rounded-[40px] border border-brand-border">
            <div className="container mx-auto px-10">
                <div className="text-center mb-20">
                    <h2 className="text-3xl md:text-5xl font-bold font-display text-white uppercase tracking-tighter">Why Burnaby <span className="text-brand-gold">Trusts Us</span></h2>
                </div>
                <div className="grid md:grid-cols-3 gap-12">
                    <div className="text-center space-y-6">
                        <div className="flex justify-center"><IconConstruction /></div>
                        <h3 className="text-xl font-bold font-display text-white uppercase tracking-widest">Dust Resistance</h3>
                        <p className="text-sm text-brand-text-secondary leading-relaxed">Burnaby's construction boom means abrasive dust is everywhere. Our sealants provide an anti-static barrier that keeps your car cleaner, longer.</p>
                    </div>
                    <div className="text-center space-y-6">
                        <div className="flex justify-center"><IconTraffic /></div>
                        <h3 className="text-xl font-bold font-display text-white uppercase tracking-widest">Commuter Restoration</h3>
                        <p className="text-sm text-brand-text-secondary leading-relaxed">sitting on Highway 1 or Kingsway coats your vehicle in road film. Our chemical decontamination process safely dissolves these industrial pollutants.</p>
                    </div>
                    <div className="text-center space-y-6">
                        <div className="flex justify-center"><IconFamily /></div>
                        <h3 className="text-xl font-bold font-display text-white uppercase tracking-widest">Deep Family Clean</h3>
                        <p className="text-sm text-brand-text-secondary leading-relaxed">We specialize in restoring family SUVs, eradicating juice spills and ground-in dirt using hospital-grade molecular steam.</p>
                    </div>
                </div>
            </div>
        </div>
    </LocationPageLayout>
  );
};

export default BurnabyPage;
