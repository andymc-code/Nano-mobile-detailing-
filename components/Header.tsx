
import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { SERVICES_DATA, LOCATIONS_DATA, getWhatsAppLink, DEFAULT_WHATSAPP_MESSAGE } from '../constants';

const MenuIcon = () => (
    <svg className="w-7 h-7 text-brand-text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
    </svg>
);

const CloseIcon = () => (
    <svg className="w-7 h-7 text-brand-text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
    </svg>
);

const Header: React.FC = () => {
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const [isLocationsOpen, setIsLocationsOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    const servicesDropdownRef = useRef<HTMLDivElement>(null);
    const locationsDropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (servicesDropdownRef.current && !servicesDropdownRef.current.contains(event.target as Node)) setIsServicesOpen(false);
            if (locationsDropdownRef.current && !locationsDropdownRef.current.contains(event.target as Node)) setIsLocationsOpen(false);
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    useEffect(() => { setIsMobileMenuOpen(false); }, [location.pathname]);

    return (
        <header className="bg-brand-dark-bg/90 backdrop-blur-xl sticky top-0 z-50 border-b border-brand-border border-t-2 border-t-brand-gold">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <Link to="/" className="flex items-center space-x-2">
                    <span className="text-2xl font-display font-extrabold uppercase tracking-tighter text-white">
                        NANO <span className="text-brand-gold gold-glow">MOBILE</span>
                    </span>
                </Link>
                
                <nav className="hidden lg:flex items-center space-x-6 text-[11px] font-semibold uppercase tracking-widest">
                    <Link to="/" className={`transition-colors duration-300 ${location.pathname === '/' ? 'text-brand-gold font-bold' : 'text-brand-text-secondary hover:text-brand-gold'}`}>Home</Link>
                    <Link to="/about" className={`transition-colors duration-300 ${location.pathname === '/about' ? 'text-brand-gold font-bold' : 'text-brand-text-secondary hover:text-brand-gold'}`}>About</Link>
                    
                    <div className="relative" ref={servicesDropdownRef}>
                        <button onClick={() => setIsServicesOpen(!isServicesOpen)} className="text-brand-text-secondary hover:text-brand-gold transition-colors duration-300 flex items-center">
                            Services
                            <svg className={`w-3 h-3 ml-1 transform transition-transform ${isServicesOpen ? 'rotate-180 text-brand-gold' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                        </button>
                        {isServicesOpen && (
                            <div className="absolute top-full mt-4 w-64 bg-brand-surface rounded shadow-2xl py-3 border border-brand-border ring-1 ring-brand-gold/10">
                                <Link to="/services" className="block px-6 py-2 text-brand-gold font-bold border-b border-brand-border mb-2 hover:bg-white/5 uppercase">All Services Overview</Link>
                                {SERVICES_DATA.map(service => (
                                    <Link key={service.name} to={service.link} onClick={() => setIsServicesOpen(false)} className="block px-6 py-2 text-brand-text-secondary hover:text-brand-gold hover:bg-white/5 transition-colors">
                                        {service.name}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>

                    <Link to="/pricing" className={`transition-colors duration-300 ${location.pathname === '/pricing' ? 'text-brand-gold font-bold' : 'text-brand-text-secondary hover:text-brand-gold'}`}>Pricing</Link>
                    <Link to="/reviews" className={`transition-colors duration-300 ${location.pathname === '/reviews' ? 'text-brand-gold font-bold' : 'text-brand-text-secondary hover:text-brand-gold'}`}>Reviews</Link>
                    <Link to="/gallery" className={`transition-colors duration-300 ${location.pathname === '/gallery' ? 'text-brand-gold font-bold' : 'text-brand-text-secondary hover:text-brand-gold'}`}>Gallery</Link>

                    <div className="relative" ref={locationsDropdownRef}>
                        <button onClick={() => setIsLocationsOpen(!isLocationsOpen)} className="text-brand-text-secondary hover:text-brand-gold transition-colors duration-300 flex items-center">
                            Locations
                            <svg className={`w-3 h-3 ml-1 transform transition-transform ${isLocationsOpen ? 'rotate-180 text-brand-gold' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                        </button>
                        {isLocationsOpen && (
                            <div className="absolute top-full mt-4 w-64 bg-brand-surface rounded shadow-2xl py-3 border border-brand-border ring-1 ring-brand-gold/10">
                                {LOCATIONS_DATA.map(loc => (
                                    <Link key={loc.name} to={loc.path} onClick={() => setIsLocationsOpen(false)} className="block px-6 py-2 text-brand-text-secondary hover:text-brand-gold hover:bg-white/5 transition-colors">
                                        {loc.name}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>
                    
                    <Link to="/contact" className="bg-brand-gold text-brand-dark-bg px-6 py-2 rounded-full hover:bg-brand-gold-light transition-all transform active:scale-95 shadow-lg shadow-brand-gold/20 font-bold">
                        Book Now
                    </Link>
                </nav>

                <div className="lg:hidden">
                    <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>{isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}</button>
                </div>
            </div>
            
            <div className={`
                absolute top-full left-0 w-full bg-brand-dark-bg border-b border-brand-border lg:hidden transition-all duration-300 overflow-hidden
                ${isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}
            `}>
                <div className="p-8 flex flex-col space-y-6 text-lg font-display uppercase tracking-widest text-center">
                    <Link to="/" className="hover:text-brand-gold">Home</Link>
                    <Link to="/about" className="hover:text-brand-gold">About</Link>
                    <Link to="/services" className="hover:text-brand-gold">Services</Link>
                    <Link to="/pricing" className="hover:text-brand-gold">Pricing</Link>
                    <Link to="/reviews" className="hover:text-brand-gold">Reviews</Link>
                    <Link to="/gallery" className="hover:text-brand-gold">Gallery</Link>
                    <Link to="/contact" className="bg-brand-gold text-brand-dark-bg py-4 rounded font-bold shadow-xl shadow-brand-gold/10">Book Now</Link>
                </div>
            </div>
        </header>
    );
};

export default Header;
