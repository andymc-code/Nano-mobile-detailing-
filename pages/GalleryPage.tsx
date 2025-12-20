
import React from 'react';
import { usePageMetadata } from '../hooks/usePageMetadata';
import GallerySection from '../components/GallerySection';
import BookingSection from '../components/BookingSection';

const GalleryPage: React.FC = () => {
    usePageMetadata(
        'Auto Detailing Gallery | Before & After | Nano Mobile Detailing',
        "Witness the dramatic transformations our mobile detailing team delivers. View our portfolio of luxury car restoration, ceramic coatings, and interior deep cleaning."
    );

    return (
        <div className="bg-brand-dark-bg">
            <div className="relative h-[40vh] bg-cover bg-center" style={{ backgroundImage: `url('https://ik.imagekit.io/wnwu0xxx5/Auto_detailing/911_after_detail.png')` }}>
                <div className="absolute inset-0 bg-black/80 flex flex-col items-center justify-center text-center px-6">
                    <h1 className="text-4xl md:text-7xl font-extrabold font-display text-white uppercase tracking-tighter">The Proof In The <span className="text-brand-gold">Polish</span></h1>
                    <p className="text-brand-text-secondary mt-6 text-lg max-w-2xl font-display uppercase tracking-widest">
                        Visual transformations from our mobile labs.
                    </p>
                </div>
            </div>
            
            <GallerySection />
            
            <div className="py-24 bg-brand-surface border-t border-brand-border">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold font-display text-white uppercase mb-8">Ready for your Transformation?</h2>
                    <p className="text-brand-text-secondary mb-12 max-w-2xl mx-auto leading-relaxed">
                        Every car in this gallery received our signature "Best Friend" treatment. Your vehicle can be next.
                    </p>
                    <div className="flex justify-center">
                         <a 
                            href="https://wa.me/17782515604" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="bg-brand-gold text-brand-dark-bg font-bold py-5 px-12 rounded-full hover:bg-brand-gold-light transition-all transform hover:scale-105 shadow-xl uppercase tracking-widest font-display"
                        >
                            Book Your Refresh
                        </a>
                    </div>
                </div>
            </div>

            <BookingSection />
        </div>
    );
};

export default GalleryPage;
