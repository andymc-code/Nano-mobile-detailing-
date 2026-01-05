
import React from 'react';
import LocationPageLayout from '../../components/LocationPageLayout';

const IconRain = () => <svg className="h-10 w-10 text-brand-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1"><path strokeLinecap="round" strokeLinejoin="round" d="M12 19c-4.418 0-8-3.582-8-8a8.004 8.004 0 015-7.416M12 19c4.418 0 8-3.582 8-8a8.004 8.004 0 00-5-7.416M12 19v2" /><path strokeLinecap="round" strokeLinejoin="round" d="M7 13a5 5 0 1110 0" /></svg>;
const IconClock = () => <svg className="h-10 w-10 text-brand-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
const IconBuilding = () => <svg className="h-10 w-10 text-brand-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1"><path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m-1 4h1m5-8h1m-1 4h1m-1 4h1M5 7h1m-1 4h1m-1 4h1" /></svg>;

const VancouverPage: React.FC = () => {
  return (
    <LocationPageLayout
      city="Vancouver"
      metaTitle="Mobile Car Detailing in Vancouver | Nano Mobile Detailing"
      metaDescription="Nano Mobile Detailing offers premium mobile auto detailing and car wash services in Vancouver. We come to you in Yaletown, Kitsilano, or Downtown. Book today!"
      h1="Mobile Car Detailing in Vancouver"
      imageUrl="https://ik.imagekit.io/wnwu0xxx5/Auto_detailing/matt-wang-dBp9dbQCh4Q-unsplash.jpg?updatedAt=1759732296928"
      geo={{ latitude: '49.2827', longitude: '-123.1207' }}
    >
        <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
                <h2 className="text-4xl font-bold font-display text-white uppercase tracking-tighter leading-tight">
                    Premium Care for the <br/>
                    <span className="text-brand-gold">Vancouver Lifestyle.</span>
                </h2>
                <p className="text-lg text-brand-text-secondary leading-relaxed">
                    Welcome to the flagship mobile detailing lab for the City of Vancouver. We understand that in a city as vibrant and fast-paced as ours, your time is your most valuable asset. Nano Mobile Detailing brings the full-service "Auto Spa" experience directly to your doorstep, whether you're at a high-rise office downtown or a waterfront home in Kitsilano.
                </p>
                <div className="bg-brand-gold/5 border-l-4 border-brand-gold p-6 rounded-r-2xl italic">
                    "Our mobile labs are 100% self-sufficient—carrying our own filtered water and silent power generators."
                </div>
            </div>
            <div className="bg-brand-dark-bg/60 p-10 rounded-[32px] border border-brand-border shadow-2xl">
                <h3 className="text-xl font-bold font-display text-white uppercase tracking-widest mb-8">Vancouver Impact</h3>
                <div className="grid grid-cols-2 gap-6">
                    <div className="text-center p-6 bg-brand-surface rounded-2xl border border-brand-border">
                        <p className="text-3xl font-black text-brand-gold font-display">1200+</p>
                        <p className="text-[10px] text-brand-text-secondary uppercase tracking-[0.2em] font-bold mt-2">Cars Detailed</p>
                    </div>
                    <div className="text-center p-6 bg-brand-surface rounded-2xl border border-brand-border">
                        <p className="text-3xl font-black text-brand-gold font-display">5.0</p>
                        <p className="text-[10px] text-brand-text-secondary uppercase tracking-[0.2em] font-bold mt-2">Avg. Review</p>
                    </div>
                    <div className="text-center p-6 bg-brand-surface rounded-2xl border border-brand-border">
                        <p className="text-3xl font-black text-brand-gold font-display">100%</p>
                        <p className="text-[10px] text-brand-text-secondary uppercase tracking-[0.2em] font-bold mt-2">Mobile Lab</p>
                    </div>
                    <div className="text-center p-6 bg-brand-surface rounded-2xl border border-brand-border">
                        <p className="text-3xl font-black text-brand-gold font-display">15+</p>
                        <p className="text-[10px] text-brand-text-secondary uppercase tracking-[0.2em] font-bold mt-2">Neighborhoods</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="mt-32">
            <h2 className="text-3xl font-bold font-display text-white text-center mb-12 uppercase tracking-tighter">Neighborhood <span className="text-brand-gold">Spotlight</span></h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                    { name: 'Downtown & Yaletown', desc: 'Expert parkade detailing for busy professionals.' },
                    { name: 'Kitsilano', desc: 'Coastal protection from salt air and sea mist.' },
                    { name: 'Point Grey', desc: 'Luxury restoration for high-end automotive assets.' },
                    { name: 'Mount Pleasant', desc: 'Flexible scheduling for creative communities.' }
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
                    <h2 className="text-3xl md:text-5xl font-bold font-display text-white uppercase tracking-tighter">Combatting the <span className="text-brand-gold">Vancouver Climate</span></h2>
                </div>
                <div className="grid md:grid-cols-3 gap-12">
                    <div className="text-center space-y-6">
                        <div className="flex justify-center"><IconRain /></div>
                        <h3 className="text-xl font-bold font-display text-white uppercase tracking-widest">The Acid Rain Factor</h3>
                        <p className="text-sm text-brand-text-secondary leading-relaxed">Vancouver's frequent rain leaves mineral deposits. Our hydrophobic coatings ensure water beads and rolls off, preventing etching.</p>
                    </div>
                    <div className="text-center space-y-6">
                        <div className="flex justify-center"><IconBuilding /></div>
                        <h3 className="text-xl font-bold font-display text-white uppercase tracking-widest">Parkade Specialist</h3>
                        <p className="text-sm text-brand-text-secondary leading-relaxed">Most condos prohibit washing. We use self-contained labs and specialized techniques to work cleanly in any parkade or underground.</p>
                    </div>
                    <div className="text-center space-y-6">
                        <div className="flex justify-center"><IconClock /></div>
                        <h3 className="text-xl font-bold font-display text-white uppercase tracking-widest">Zero Traffic Stress</h3>
                        <p className="text-sm text-brand-text-secondary leading-relaxed">Why sit in bridge traffic or fight through Robson Street? We handle the logistics and come to you at home or work.</p>
                    </div>
                </div>
            </div>
        </div>
    </LocationPageLayout>
  );
};

export default VancouverPage;
