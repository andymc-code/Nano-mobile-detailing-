
import React from 'react';

const IconSchedule = () => (
    <svg className="w-12 h-12 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
    </svg>
);
const IconVan = () => (
    <svg className="w-12 h-12 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
    </svg>
);
const IconCar = () => (
    <svg className="w-12 h-12 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.293 2.293a1 1 0 010 1.414L10 16l-4-4 6.293-6.293a1 1 0 011.414 0z"></path>
    </svg>
);

const ProcessSection: React.FC = () => {
    return (
        <section className="py-24 bg-brand-dark-bg relative">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="text-brand-gold font-display font-bold uppercase tracking-[0.3em] mb-4 text-sm block">How it Works</span>
                    <h2 className="text-4xl md:text-5xl font-bold font-display uppercase text-brand-text-primary">The <span className="text-brand-gold">Process</span></h2>
                    <div className="w-24 h-1 bg-brand-gold mx-auto mt-6"></div>
                </div>
                <div className="grid md:grid-cols-3 gap-10">
                    <div className="flex flex-col items-center text-center p-8 border border-brand-border rounded-lg bg-brand-surface/50 group hover:bg-brand-surface transition-all duration-500 hover:border-brand-gold/30">
                        <div className="mb-6 transform group-hover:scale-110 transition-transform duration-500"><IconSchedule/></div>
                        <h3 className="text-xl font-bold font-display text-white mb-2 uppercase tracking-widest"><span className="text-brand-gold mr-2">01.</span> Book Easily</h3>
                        <p className="text-brand-text-secondary text-sm leading-relaxed">Contact us via WhatsApp to select your service and schedule a convenient time that fits your life.</p>
                    </div>
                    <div className="flex flex-col items-center text-center p-8 border border-brand-border rounded-lg bg-brand-surface/50 group hover:bg-brand-surface transition-all duration-500 hover:border-brand-gold/30">
                        <div className="mb-6 transform group-hover:scale-110 transition-transform duration-500"><IconVan/></div>
                        <h3 className="text-xl font-bold font-display text-white mb-2 uppercase tracking-widest"><span className="text-brand-gold mr-2">02.</span> We Come To You</h3>
                        <p className="text-brand-text-secondary text-sm leading-relaxed">Our fully-equipped, self-sufficient mobile van arrives at your home or office. No water or power hookups needed.</p>
                    </div>
                    <div className="flex flex-col items-center text-center p-8 border border-brand-border rounded-lg bg-brand-surface/50 group hover:bg-brand-surface transition-all duration-500 hover:border-brand-gold/30">
                        <div className="mb-6 transform group-hover:scale-110 transition-transform duration-500"><IconCar/></div>
                        <h3 className="text-xl font-bold font-display text-white mb-2 uppercase tracking-widest"><span className="text-brand-gold mr-2">03.</span> Enjoy Perfection</h3>
                        <p className="text-brand-text-secondary text-sm leading-relaxed">Relax while we restore your car's brilliance. Get back that "new car feeling" without leaving your driveway.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProcessSection;
