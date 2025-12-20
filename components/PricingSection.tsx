
import React from 'react';
import { PRICING_DATA, getWhatsAppLink } from '../constants';

const IconCheck = () => (
    <svg className="w-5 h-5 text-brand-gold mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
    </svg>
);

const PricingSection: React.FC = () => {
    return (
        <section id="pricing" className="py-24 bg-brand-surface relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold font-display uppercase text-brand-text-primary">Detailing Menus</h2>
                    <p className="text-brand-text-secondary mt-4 max-w-2xl mx-auto">Luxury maintenance tailored for your lifestyle and your vehicle's needs.</p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
                    {PRICING_DATA.map((pkg, index) => (
                        <div key={index} className={`bg-brand-dark-bg p-10 rounded-3xl border flex flex-col relative transition-all duration-500 hover:shadow-2xl hover:shadow-brand-gold/10 ${pkg.isFeatured ? 'border-brand-gold ring-1 ring-brand-gold' : 'border-brand-border'}`}>
                            {pkg.isFeatured && (
                                <span className="bg-brand-gold text-brand-dark-bg text-[10px] font-black uppercase px-4 py-1.5 rounded-full self-center absolute -top-3 font-display tracking-[0.2em] shadow-lg shadow-brand-gold/40">Most Popular</span>
                            )}
                            <h3 className="text-2xl font-bold font-display text-center text-brand-text-primary mb-2 uppercase tracking-widest">{pkg.title}</h3>
                            <div className="flex justify-center items-baseline mb-8">
                                <span className="text-4xl font-display font-bold text-brand-gold">$</span>
                                <span className="text-6xl font-extrabold text-brand-text-primary font-display">{pkg.price.replace('$', '')}</span>
                            </div>
                            <ul className="space-y-5 text-brand-text-secondary flex-grow mb-12">
                                {pkg.features.map((feature, i) => (
                                    <li key={i} className="flex items-start text-sm">
                                        <IconCheck />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            <a 
                                href={getWhatsAppLink(`Hi! I'm interested in the ${pkg.title} package.`)} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className={`mt-auto text-center font-bold py-4 px-8 rounded-full transition-all duration-300 w-full block uppercase font-display tracking-widest text-sm ${pkg.isFeatured ? 'bg-brand-gold text-brand-dark-bg hover:bg-brand-gold-light' : 'bg-brand-surface text-brand-text-primary border border-brand-border hover:border-brand-gold hover:text-brand-gold'}`}>
                                Choose {pkg.title}
                            </a>
                        </div>
                    ))}
                </div>
            </div>
            {/* Background Accents */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/5 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-gold/5 rounded-full blur-[120px] pointer-events-none"></div>
        </section>
    );
};

export default PricingSection;
