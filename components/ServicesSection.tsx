
import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES_DATA } from '../constants';

const ServicesSection: React.FC = () => {
    return (
        <section id="services" className="py-24 bg-brand-dark-bg relative">
            <div className="container mx-auto px-6">
                <div className="mb-16 border-l-4 border-brand-gold pl-6">
                    <h2 className="text-4xl md:text-5xl font-bold font-display uppercase text-brand-text-primary">Our Signature <span className="text-brand-gold">Services</span></h2>
                    <p className="text-brand-text-secondary mt-4 max-w-2xl">Tailored solutions that blend meticulous craftsmanship with the ultimate convenience.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {SERVICES_DATA.map((service, index) => (
                        <div key={index} className="bg-brand-surface rounded-lg shadow-2xl overflow-hidden group border border-brand-border transform hover:-translate-y-2 transition-all duration-300 hover:border-brand-gold/40">
                            <div className="relative h-56">
                                <img src={service.image} alt={service.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent"></div>
                                <h3 className="absolute bottom-0 left-0 p-6 text-2xl font-bold font-display text-white group-hover:text-brand-gold transition-colors">{service.name}</h3>
                            </div>
                            <div className="p-6">
                                <p className="text-brand-text-secondary text-sm mb-6 h-12 leading-relaxed">{service.description}</p>
                                <Link to={service.link.replace('#', '')} className="font-semibold text-brand-gold hover:text-brand-gold-light transition-colors flex items-center group/link text-xs uppercase tracking-widest font-display">
                                    Exploration Details
                                    <span className="transform transition-transform duration-300 group-hover/link:translate-x-2 ml-2">&rarr;</span>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
