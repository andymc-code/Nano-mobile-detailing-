
import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES_DATA, LOCATIONS_DATA, CONTACT_PHONE } from '../constants';

const Footer: React.FC = () => {
    return (
        <footer className="bg-brand-surface border-t border-brand-border">
            <div className="container mx-auto px-6 py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    <div className="lg:col-span-1">
                        <Link to="/" className="flex items-center mb-6">
                             <span className="text-2xl font-display font-extrabold uppercase tracking-tighter text-white">
                                NANO <span className="text-brand-gold">MOBILE</span>
                            </span>
                        </Link>
                        <p className="text-brand-text-secondary text-sm leading-relaxed max-w-xs">
                            Premier mobile automotive care for Vancouver. We combine luxury results with the ultimate convenience. "Your Car's Best Friend."
                        </p>
                        <div className="mt-8">
                             <Link to="/about" className="text-xs font-bold text-brand-gold hover:text-white uppercase tracking-widest transition-colors">Our Story &rarr;</Link>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-xs font-black text-brand-text-primary uppercase tracking-[0.2em] mb-6">Quick Links</h3>
                        <ul className="space-y-3">
                            <li><Link to="/services" className="text-sm text-brand-text-secondary hover:text-brand-gold transition-colors">All Services</Link></li>
                            <li><Link to="/pricing" className="text-sm text-brand-text-secondary hover:text-brand-gold transition-colors">Pricing & Packages</Link></li>
                            <li><Link to="/reviews" className="text-sm text-brand-text-secondary hover:text-brand-gold transition-colors">Reviews</Link></li>
                            <li><Link to="/gallery" className="text-sm text-brand-text-secondary hover:text-brand-gold transition-colors">Before & After Gallery</Link></li>
                            <li><Link to="/faq" className="text-sm text-brand-text-secondary hover:text-brand-gold transition-colors">FAQ</Link></li>
                        </ul>
                    </div>
                     <div>
                        <h3 className="text-xs font-black text-brand-text-primary uppercase tracking-[0.2em] mb-6">Service Areas</h3>
                        <ul className="space-y-3">
                            {LOCATIONS_DATA.map(location => (
                                <li key={location.name}><Link to={location.path} className="text-sm text-brand-text-secondary hover:text-brand-gold transition-colors">{location.name}</Link></li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xs font-black text-brand-text-primary uppercase tracking-[0.2em] mb-6">Contact</h3>
                        <ul className="space-y-3 text-brand-text-secondary text-sm">
                            <li>hello@nanomobiledetailing.ca</li>
                            <li className="text-brand-gold font-bold">{CONTACT_PHONE}</li>
                            <li><Link to="/contact" className="hover:text-brand-gold">View All Contact Options</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="mt-20 pt-8 border-t border-brand-border flex flex-col md:flex-row justify-between items-center text-xs tracking-widest text-brand-text-secondary/50 uppercase font-semibold">
                    <p>&copy; {new Date().getFullYear()} Nano Mobile Detailing. All Rights Reserved.</p>
                     <div className="mt-4 md:mt-0 space-x-6">
                       <Link to="/official-info" className="hover:text-brand-gold transition-colors">AI Profile</Link>
                       <Link to="/sitemap" className="hover:text-brand-gold transition-colors">Sitemap</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
