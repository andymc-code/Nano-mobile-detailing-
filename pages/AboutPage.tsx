
import React from 'react';
import { usePageMetadata } from '../hooks/usePageMetadata';
import WhyChooseUsSection from '../components/WhyChooseUsSection';
import BookingSection from '../components/BookingSection';

const AboutPage: React.FC = () => {
    usePageMetadata(
        'About Nano Mobile Detailing | Premier Vancouver Auto Care',
        "Learn about Nano Mobile Detailing, our mission to provide luxury automotive care with everyday convenience, and our meticulous approach to every vehicle."
    );

    return (
        <div className="bg-brand-dark-bg">
            <div className="relative h-[60vh] bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1601362840469-51e4d8d59085?q=80&w=2670&auto=format&fit=crop')` }}>
                <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center text-center px-6">
                    <span className="text-brand-gold font-display font-bold uppercase tracking-[0.3em] mb-4 text-sm">Our Story</span>
                    <h1 className="text-4xl md:text-7xl font-extrabold font-display text-white uppercase tracking-wider mb-6">Precision. Passion. <span className="text-brand-gold">Protection.</span></h1>
                    <p className="text-brand-text-secondary text-lg md:text-xl max-w-3xl leading-relaxed font-display italic">
                        "Your Car's Best Friend."
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-6 py-24">
                <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold font-display text-white uppercase mb-8">Bridging the Gap</h2>
                        <p className="text-brand-text-secondary text-lg leading-relaxed mb-6">
                            Nano Mobile Detailing is a premier mobile automotive care provider specializing in high-quality, convenient detailing services. We bridge the gap between luxury results and everyday convenience by bringing professional-grade equipment and advanced techniques directly to your doorstep.
                        </p>
                        <p className="text-brand-text-secondary text-lg leading-relaxed">
                            Our mission is simple: to provide exceptional mobile detailing services that exceed customer expectations, restoring vehicle beauty and providing long-term protection through advanced molecular technology.
                        </p>
                    </div>
                    <div className="relative">
                        <div className="absolute -inset-4 bg-brand-gold/10 blur-2xl rounded-full"></div>
                        <img 
                            src="https://ik.imagekit.io/wnwu0xxx5/Auto_detailing/yellow_lambo.png" 
                            alt="Luxury Car Care" 
                            className="relative rounded-2xl border border-brand-border shadow-2xl"
                        />
                    </div>
                </div>

                <div className="bg-brand-surface rounded-3xl p-12 border border-brand-border">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold font-display text-white uppercase tracking-widest">Our Core Values</h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-12">
                        <div className="text-center">
                            <h3 className="text-brand-gold text-xl font-bold font-display uppercase mb-4">Convenience</h3>
                            <p className="text-brand-text-secondary text-sm">We value your time. Our fully self-sufficient mobile labs mean we work while you live your life.</p>
                        </div>
                        <div className="text-center">
                            <h3 className="text-brand-gold text-xl font-bold font-display uppercase mb-4">Quality</h3>
                            <p className="text-brand-text-secondary text-sm">Meticulous attention to detail using state-of-the-art products that ensure a factory-fresh finish.</p>
                        </div>
                        <div className="text-center">
                            <h3 className="text-brand-gold text-xl font-bold font-display uppercase mb-4">Eco-Friendly</h3>
                            <p className="text-brand-text-secondary text-sm">Utilizing advanced products that are safe for both the vehicle and the environment.</p>
                        </div>
                    </div>
                </div>
            </div>

            <WhyChooseUsSection />
            <BookingSection />
        </div>
    );
};

export default AboutPage;
