
import React from 'react';
import { usePageMetadata } from '../hooks/usePageMetadata';
import BookingSection from '../components/BookingSection';
import FaqAccordion from '../components/FaqAccordion';
import { FAQ_DATA } from '../constants';

const FaqPage: React.FC = () => {
    usePageMetadata(
        'Technical Car Detailing FAQ | Nano Mobile Detailing',
        "Explore our comprehensive automotive detailing knowledge base. Learn about ceramic coatings, ozone treatments, paint correction, and our self-sufficient mobile process."
    );

    const categories = [
        { id: 'general', title: 'General & Logistics', items: FAQ_DATA.general },
        { id: 'interior', title: 'Interior Restoration', items: FAQ_DATA.interior },
        { id: 'ceramic', title: 'Ceramic Coating & Protection', items: FAQ_DATA.ceramic },
        { id: 'paint', title: 'Paint Correction Physics', items: FAQ_DATA.paint },
        { id: 'health', title: 'Odor, Mold & Health', items: [...FAQ_DATA.odor, ...FAQ_DATA.mold] }
    ];

    return (
        <div className="bg-brand-dark-bg">
            <div className="relative py-32 border-b border-brand-border bg-brand-surface overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-gold/5 blur-[120px] rounded-full"></div>
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <span className="text-brand-gold font-display font-bold uppercase tracking-[0.3em] mb-4 text-sm block">Knowledge Base</span>
                    <h1 className="text-5xl md:text-8xl font-extrabold font-display text-white uppercase tracking-tighter mb-8 leading-none">The <span className="text-brand-gold">Master</span> <br/>List</h1>
                    <p className="text-brand-text-secondary text-lg md:text-xl max-w-2xl mx-auto leading-relaxed border-l-2 border-brand-gold pl-6 md:pl-0 md:border-none uppercase tracking-widest">
                        Technical explanations and educational insights into the world of luxury car care.
                    </p>
                </div>
            </div>

            <div className="py-24 container mx-auto px-6">
                <div className="space-y-24">
                    {categories.map((cat) => (
                        <div key={cat.id} id={cat.id} className="scroll-mt-32">
                            <div className="mb-12 flex items-center space-x-6">
                                <h2 className="text-2xl md:text-4xl font-bold font-display text-white uppercase tracking-tighter">{cat.title}</h2>
                                <div className="flex-grow h-px bg-gradient-to-r from-brand-gold/50 to-transparent"></div>
                            </div>
                            <FaqAccordion items={cat.items} />
                        </div>
                    ))}
                </div>
            </div>

            <div className="py-24 bg-brand-surface border-t border-brand-border">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold font-display text-white uppercase mb-4 tracking-widest">Still have a <span className="text-brand-gold">Technical</span> Question?</h2>
                    <p className="text-brand-text-secondary mb-12 max-w-2xl mx-auto">We love discussing the science of detailing. Reach out to our experts directly for a deep dive into your vehicle\'s needs.</p>
                    <a 
                        href="https://wa.me/17782515604" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-brand-gold text-brand-dark-bg font-black py-5 px-12 rounded-full hover:bg-brand-gold-light transition-all transform hover:scale-105 shadow-xl uppercase tracking-widest font-display text-sm"
                    >
                        Chat with a Technician
                    </a>
                </div>
            </div>

            <BookingSection />
        </div>
    );
};

export default FaqPage;
