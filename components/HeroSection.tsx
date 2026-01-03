
import React from 'react';
import { Link } from 'react-router-dom';
import { getWhatsAppLink, DEFAULT_WHATSAPP_MESSAGE } from '../constants';

const HeroSection: React.FC = () => {
    return (
        <section className="relative h-[95vh] bg-brand-dark-bg flex items-center overflow-hidden">
            <div 
                className="absolute inset-0 bg-cover bg-center scale-105" 
                style={{ 
                    backgroundImage: `url('https://ik.imagekit.io/wnwu0xxx5/Auto_detailing/Gemini_Generated_Image_hxtj2ghxtj2ghxtj.png')`,
                    filter: 'grayscale(0.4) brightness(0.6)'
                }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark-bg via-brand-dark-bg/60 to-transparent"></div>
            
            {/* Ambient Gold Glow */}
            <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-brand-gold/10 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="relative container mx-auto px-6 text-center lg:text-left">
                <div className="max-w-4xl">
                    <span className="inline-block text-brand-gold font-display font-bold uppercase tracking-[0.3em] mb-4 text-sm md:text-base animate-fade-in gold-glow">
                        Premium Mobile Care
                    </span>
                    <h1 className="text-5xl md:text-8xl font-extrabold font-display uppercase tracking-tighter leading-none mb-6">
                        NANO MOBILE <br/>
                        <span className="gold-gradient-text gold-glow">DETAILING.</span>
                    </h1>
                    <p className="text-xl md:text-3xl font-display text-brand-silver mb-8 italic opacity-90 border-l-2 border-brand-gold pl-6">
                        "Your Car's Best Friend."
                    </p>
                    <p className="text-lg md:text-xl text-brand-text-secondary mb-12 max-w-2xl leading-relaxed">
                        Experience the new standard of automotive excellence. We deliver high-precision, nano-tech detailing right to your doorstep, restoring the flawless "new car feeling" every single time.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                        <a 
                            href={getWhatsAppLink(DEFAULT_WHATSAPP_MESSAGE)} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="bg-brand-gold text-brand-dark-bg font-bold py-5 px-12 rounded-full text-lg hover:bg-brand-gold-light transition-all transform hover:scale-105 shadow-2xl shadow-brand-gold/40 uppercase tracking-widest font-display"
                        >
                            Schedule a Detail
                        </a>
                        <Link 
                            to="/pricing"
                            className="bg-transparent border-2 border-brand-gold/30 text-brand-text-primary font-bold py-5 px-12 rounded-full text-lg hover:border-brand-gold hover:bg-brand-gold/5 transition-all uppercase tracking-widest font-display flex items-center justify-center"
                        >
                            View Packages
                        </Link>
                    </div>
                </div>
            </div>
            
            {/* Ambient Background Element */}
            <div className="absolute bottom-0 right-0 w-full h-1/4 bg-gradient-to-t from-brand-dark-bg to-transparent pointer-events-none"></div>
        </section>
    );
};

export default HeroSection;
