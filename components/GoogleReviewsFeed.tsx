
import React from 'react';
import { TESTIMONIALS_DATA } from '../constants';

const GoogleIcon = () => (
    <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
);

const StarIcon = () => (
    <svg className="w-3 h-3 text-brand-gold" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
);

const GoogleReviewsFeed: React.FC = () => {
  return (
    <div className="w-full mb-16">
      <div className="flex items-center justify-center mb-10 space-x-4">
        <div className="flex -space-x-3">
          {TESTIMONIALS_DATA.map((t, i) => (
            <img 
              key={i} 
              src={t.authorImage} 
              className="w-10 h-10 rounded-full border-2 border-brand-dark-bg object-cover" 
              alt={t.name} 
            />
          ))}
        </div>
        <div className="flex flex-col items-start">
          <div className="flex items-center">
            <GoogleIcon />
            <span className="text-white font-bold text-sm tracking-widest uppercase font-display">4.9 Star Rating</span>
          </div>
          <p className="text-[10px] text-brand-text-secondary uppercase tracking-[0.2em] font-black mt-1">
            Verified Nano Mobile Detailing Profile
          </p>
        </div>
      </div>

      <div className="flex overflow-x-auto gap-6 pb-12 scrollbar-hide snap-x snap-mandatory px-4">
        {TESTIMONIALS_DATA.map((review, idx) => (
          <div 
            key={idx} 
            className="flex-shrink-0 w-80 snap-center bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-3xl hover:border-brand-gold/30 transition-all duration-500"
          >
            <div className="flex items-center space-x-3 mb-4">
              <img src={review.authorImage} className="w-10 h-10 rounded-full border border-white/10" alt={review.name} />
              <div>
                <h4 className="text-white text-[11px] font-bold uppercase tracking-widest">{review.name}</h4>
                <div className="flex mt-0.5">
                  {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
                </div>
              </div>
              <div className="ml-auto opacity-40">
                <GoogleIcon />
              </div>
            </div>
            <p className="text-brand-text-secondary text-xs leading-relaxed line-clamp-3 italic">
              "{review.quote}"
            </p>
            <div className="mt-4 flex items-center justify-between">
              <span className="text-[9px] text-brand-gold font-bold uppercase tracking-widest">{review.date}</span>
              <div className="flex items-center text-[9px] text-green-500 font-bold uppercase tracking-widest">
                <svg className="w-2.5 h-2.5 mr-1" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" /></svg>
                Verified
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="text-center">
        <a 
          href="https://share.google/UkjnE9WGzcdaPiZDq" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-[10px] font-black text-brand-text-secondary uppercase tracking-[0.3em] hover:text-brand-gold transition-colors border-b border-brand-text-secondary/20 pb-1"
        >
          View More Reviews on Google &rarr;
        </a>
      </div>
    </div>
  );
};

export default GoogleReviewsFeed;
