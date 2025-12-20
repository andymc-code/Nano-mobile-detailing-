
import React from 'react';
import { GALLERY_DATA } from '../constants';
import ImageSlider from './ImageSlider';

const GallerySection: React.FC = () => {
    return (
        <section id="gallery" className="py-24 bg-brand-dark-bg">
            <div className="container mx-auto px-6">
                <div className="mb-16 border-l-4 border-brand-gold pl-6">
                    <h2 className="text-4xl md:text-5xl font-bold font-display uppercase text-brand-text-primary">The Proof is in the <span className="text-brand-gold">Polish</span></h2>
                    <p className="text-brand-text-secondary mt-4 max-w-2xl">Drag the slider to witness the dramatic transformations we deliver.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {GALLERY_DATA.map((item, index) => (
                        <div key={index} className="group">
                            <ImageSlider before={item.before} after={item.after} />
                            <h3 className="text-center text-lg font-bold font-display uppercase tracking-[0.2em] mt-6 text-brand-text-primary group-hover:text-brand-gold transition-colors">{item.title}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default GallerySection;
