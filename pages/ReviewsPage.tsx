
import React from 'react';
import { usePageMetadata } from '../hooks/usePageMetadata';
import TestimonialsSection from '../components/TestimonialsSection';
import BookingSection from '../components/BookingSection';
import { TESTIMONIALS_DATA } from '../constants';

const ReviewsPage: React.FC = () => {
    usePageMetadata(
        'Customer Reviews & Testimonials | Nano Mobile Detailing',
        "Read what our clients in Vancouver, Burnaby, and Richmond are saying about our mobile detailing services. 5-star quality at your doorstep."
    );

    return (
        <div className="bg-brand-dark-bg">
            <div className="relative py-24 border-b border-brand-border">
                <div className="container mx-auto px-6 text-center">
                    <div className="flex justify-center mb-6 space-x-1">
                        {[...Array(5)].map((_, i) => (
                            <svg key={i} className="w-8 h-8 text-brand-gold" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                        ))}
                    </div>
                    <h1 className="text-5xl md:text-7xl font-extrabold font-display text-white uppercase tracking-tighter mb-6">Real Results. <br/><span className="text-brand-gold">Real Feedback.</span></h1>
                    <p className="text-brand-text-secondary text-lg max-w-2xl mx-auto leading-relaxed">
                        We pride ourselves on meticulous care and customer satisfaction. Explore the experiences of our valued clients.
                    </p>
                </div>
            </div>

            <div className="py-24 container mx-auto px-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {TESTIMONIALS_DATA.map((testimonial, index) => (
                        <div key={index} className="bg-brand-surface p-10 rounded-2xl border border-brand-border flex flex-col hover:border-brand-gold/50 transition-colors shadow-lg">
                            <svg className="w-10 h-10 text-brand-gold mb-6 opacity-30" fill="currentColor" viewBox="0 0 32 32">
                                <path d="M9.333 22.667h4L16 17.333V9.333H6.667v8h4L8 22.667H9.333zM22.667 22.667h4L29.333 17.333V9.333H20v8h4l-2.667 5.333h1.334z" />
                            </svg>
                            <p className="text-brand-text-primary text-lg mb-8 italic flex-grow leading-relaxed">
                                "{testimonial.quote}"
                            </p>
                            <div className="border-t border-brand-border pt-6">
                                <p className="font-bold text-white uppercase tracking-widest">{testimonial.name}</p>
                                <p className="text-sm text-brand-gold">{testimonial.location}</p>
                            </div>
                        </div>
                    ))}
                    {/* Placeholder Reviews to fill page */}
                    <div className="bg-brand-surface p-10 rounded-2xl border border-brand-border flex flex-col hover:border-brand-gold/50 transition-colors shadow-lg">
                        <svg className="w-10 h-10 text-brand-gold mb-6 opacity-30" fill="currentColor" viewBox="0 0 32 32">
                            <path d="M9.333 22.667h4L16 17.333V9.333H6.667v8h4L8 22.667H9.333zM22.667 22.667h4L29.333 17.333V9.333H20v8h4l-2.667 5.333h1.334z" />
                        </svg>
                        <p className="text-brand-text-primary text-lg mb-8 italic flex-grow leading-relaxed">
                            "The convenience of having them come to my home while I was in meetings was incredible. Car looks showroom ready."
                        </p>
                        <div className="border-t border-brand-border pt-6">
                            <p className="font-bold text-white uppercase tracking-widest">James L.</p>
                            <p className="text-sm text-brand-gold">North Vancouver</p>
                        </div>
                    </div>
                </div>
            </div>

            <TestimonialsSection />
            <BookingSection />
        </div>
    );
};

export default ReviewsPage;
