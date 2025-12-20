
import React from 'react';
import { usePageMetadata } from '../hooks/usePageMetadata';
import { CONTACT_PHONE, getWhatsAppLink, DEFAULT_WHATSAPP_MESSAGE, LOCATIONS_DATA } from '../constants';
import { Link } from 'react-router-dom';

const ContactPage: React.FC = () => {
    usePageMetadata(
        'Contact & Book Now | Nano Mobile Detailing Vancouver',
        "Reach out to Nano Mobile Detailing. Schedule your at-home or at-office detailing service in Metro Vancouver via WhatsApp for the fastest response."
    );

    return (
        <div className="bg-brand-dark-bg">
            <div className="container mx-auto px-6 py-24">
                <div className="max-w-6xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 items-start">
                        <div>
                            <span className="text-brand-gold font-display font-bold uppercase tracking-[0.3em] mb-4 text-sm block">Get in Touch</span>
                            <h1 className="text-5xl md:text-7xl font-extrabold font-display text-white uppercase tracking-tighter mb-8 leading-none">Let's Restore Your <span className="text-brand-gold">Pride.</span></h1>
                            <p className="text-brand-text-secondary text-lg mb-12 leading-relaxed">
                                We operate exclusively through WhatsApp to ensure the most personalized and efficient booking experience. Send us a message, and we'll provide a custom quote within minutes.
                            </p>
                            
                            <div className="space-y-8">
                                <div className="flex items-center space-x-6 group">
                                    <div className="w-16 h-16 bg-brand-surface rounded-2xl flex items-center justify-center border border-brand-border group-hover:border-brand-gold transition-colors">
                                        <svg className="w-8 h-8 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-xs text-brand-text-secondary uppercase tracking-widest font-bold mb-1">Call / Text</p>
                                        <p className="text-2xl font-display text-white">{CONTACT_PHONE}</p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-6 group">
                                    <div className="w-16 h-16 bg-brand-surface rounded-2xl flex items-center justify-center border border-brand-border group-hover:border-brand-gold transition-colors">
                                        <svg className="w-8 h-8 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-xs text-brand-text-secondary uppercase tracking-widest font-bold mb-1">Email</p>
                                        <p className="text-2xl font-display text-white">hello@nanomobiledetailing.ca</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-16 p-8 bg-brand-surface rounded-2xl border border-brand-border">
                                <h3 className="text-xl font-bold font-display text-white uppercase mb-6 tracking-widest">Service Areas</h3>
                                <div className="flex flex-wrap gap-3">
                                    {LOCATIONS_DATA.map(loc => (
                                        <Link key={loc.name} to={loc.path} className="px-4 py-2 bg-brand-dark-bg border border-brand-border rounded-lg text-xs text-brand-text-secondary hover:text-brand-gold hover:border-brand-gold transition-all uppercase font-bold tracking-widest">
                                            {loc.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="bg-brand-surface p-10 md:p-16 rounded-[40px] border border-brand-border shadow-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/5 blur-[100px] rounded-full"></div>
                            <h2 className="text-3xl font-bold font-display text-white uppercase mb-4 tracking-widest">Book Your Detail</h2>
                            <p className="text-brand-text-secondary mb-12">Start your instant quote via WhatsApp. Our team is ready to assist you.</p>
                            
                            <a 
                                href={getWhatsAppLink(DEFAULT_WHATSAPP_MESSAGE)}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center space-x-4 bg-brand-gold text-brand-dark-bg font-black py-6 px-10 rounded-3xl text-xl hover:bg-brand-gold-light transition-all transform active:scale-95 shadow-2xl shadow-brand-gold/20 uppercase tracking-widest font-display w-full"
                            >
                                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.432 5.631 1.43h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                                <span>Start Booking Chat</span>
                            </a>

                            <div className="mt-12 text-center">
                                <p className="text-xs text-brand-text-secondary uppercase tracking-[0.2em] font-bold">Hours of Operation</p>
                                <p className="text-white mt-2 font-display uppercase tracking-widest text-sm">Mon - Sat: 9:00 AM - 6:00 PM</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
