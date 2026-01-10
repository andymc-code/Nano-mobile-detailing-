
import React from 'react';
import { usePageMetadata } from '../hooks/usePageMetadata';
import BookingSection from '../components/BookingSection';
import { TESTIMONIALS_DATA } from '../constants';

const GoogleIcon = () => (
    <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
);

const VerifiedBadge = () => (
    <div className="flex items-center space-x-1 bg-green-500/10 text-green-500 px-2 py-0.5 rounded text-[9px] font-black uppercase tracking-widest mt-2 border border-green-500/20">
        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
        <span>Verified Google Review</span>
    </div>
);

const StarRow = ({ rating }: { rating: number }) => (
    <div className="flex space-x-0.5">
        {[...Array(5)].map((_, i) => (
            <svg key={i} className={`w-4 h-4 ${i < rating ? 'text-brand-gold' : 'text-brand-border'}`} fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
        ))}
    </div>
);

const ReviewsPage: React.FC = () => {
    usePageMetadata(
        'Verified Google Reviews | Nano Mobile Detailing',
        "Read 5-star Google reviews for our mobile detailing labs. See why we are Vancouver's top-rated choice for automotive precision."
    );

    return (
        <div className="bg-brand-dark-bg">
            {/* Google Rating Header */}
            <div className="relative py-24 bg-brand-surface border-b border-brand-border">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 bg-brand-dark-bg p-12 rounded-[40px] border border-brand-border shadow-2xl">
                        <div className="text-center md:text-left">
                            <div className="flex items-center justify-center md:justify-start mb-4">
                                <GoogleIcon />
                                <span className="text-white font-display font-bold text-xl">Google Rating</span>
                            </div>
                            <div className="flex items-center justify-center md:justify-start space-x-4">
                                <span className="text-7xl font-display font-black text-white">5.0</span>
                                <div>
                                    <div className="flex mb-1">
                                        {[...Array(5)].map((_, i) => (
                                            <svg key={i} className="w-6 h-6 text-brand-gold" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                                        ))}
                                    </div>
                                    <p className="text-brand-text-secondary text-sm font-bold uppercase tracking-widest">Based on 150+ Reviews</p>
                                </div>
                            </div>
                        </div>
                        <div className="text-center">
                            <p className="text-brand-text-secondary mb-6 max-w-xs text-sm">Experience the 5-star precision that has made us Vancouver's mobile detailing leader.</p>
                            <a 
                                href="https://search.google.com/local/writereview?placeid=YOUR_PLACE_ID" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="inline-block bg-white text-brand-dark-bg font-bold py-4 px-10 rounded-full hover:bg-brand-gold hover:text-brand-dark-bg transition-all uppercase tracking-widest font-display text-xs"
                            >
                                Write a Review
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Verified Reviews Grid */}
            <div className="py-32 container mx-auto px-6">
                <div className="text-center mb-20">
                    <span className="text-brand-gold font-display font-bold uppercase tracking-[0.3em] mb-4 text-xs block">Public Proof</span>
                    <h2 className="text-4xl md:text-6xl font-extrabold font-display text-white uppercase tracking-tighter">Verified <span className="text-brand-gold">Experiences</span></h2>
                    <div className="w-24 h-1 bg-brand-gold mx-auto mt-8 opacity-40"></div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {TESTIMONIALS_DATA.map((review, index) => (
                        <div key={index} className="bg-brand-surface p-10 rounded-[32px] border border-brand-border flex flex-col hover:border-brand-gold/20 transition-all duration-500 shadow-xl group relative overflow-hidden">
                            <div className="flex items-start justify-between mb-8">
                                <div className="flex items-center space-x-4">
                                    <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-brand-border group-hover:border-brand-gold transition-colors duration-500">
                                        <img src={review.authorImage || `https://ui-avatars.com/api/?name=${review.name}&background=141414&color=D4AF37`} alt={review.name} className="w-full h-full object-cover" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-white uppercase tracking-widest text-sm font-display">{review.name}</h3>
                                        <p className="text-[10px] text-brand-text-secondary uppercase tracking-tighter">{review.date}</p>
                                        <VerifiedBadge />
                                    </div>
                                </div>
                                <GoogleIcon />
                            </div>
                            
                            <div className="mb-6">
                                <StarRow rating={review.rating} />
                            </div>

                            <p className="text-brand-text-primary text-lg mb-8 italic flex-grow leading-relaxed font-serif opacity-90">
                                "{review.quote}"
                            </p>

                            <div className="mt-auto pt-6 border-t border-brand-border flex items-center justify-between">
                                <span className="text-[10px] text-brand-gold font-bold uppercase tracking-widest">{review.location}</span>
                                <svg className="w-4 h-4 text-brand-text-secondary/20" fill="currentColor" viewBox="0 0 32 32"><path d="M9.333 22.667h4L16 17.333V9.333H6.667v8h4L8 22.667H9.333zM22.667 22.667h4L29.333 17.333V9.333H20v8h4l-2.667 5.333h1.334z" /></svg>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <BookingSection />
        </div>
    );
};

export default ReviewsPage;
