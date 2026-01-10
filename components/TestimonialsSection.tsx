
import React from 'react';
import { TESTIMONIALS_DATA } from '../constants';

const GoogleIcon = () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
);

// Explicitly using React.FC to allow for standard React props like 'key'
const StarIcon: React.FC<{ size?: string }> = ({ size = "w-6 h-6" }) => (
    <svg className={`${size} text-brand-gold drop-shadow-[0_0_8px_rgba(212,175,55,0.4)]`} fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
);

const VerifiedBadge = () => (
    <div className="flex items-center space-x-1.5 bg-green-500/10 text-green-500 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border border-green-500/20">
        <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
        <span>Google Verified</span>
    </div>
);

const TestimonialsSection: React.FC = () => {
  const duplicatedTestimonials = [...TESTIMONIALS_DATA, ...TESTIMONIALS_DATA];

  return (
    <section className="py-32 bg-brand-dark-bg relative overflow-hidden">
      {/* Dynamic Background Accents */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-gold/5 blur-[160px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-gold/5 blur-[140px] rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>
      
      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-${TESTIMONIALS_DATA.length * 30}rem); }
          }
          .animate-scrolling-reviews {
            animation: scroll 70s linear infinite;
          }
        `}
      </style>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 mb-24">
            <div className="max-w-3xl text-center lg:text-left">
                <span className="text-brand-gold font-display font-bold uppercase tracking-[0.4em] mb-4 text-xs block">Public Endorsement</span>
                <h2 className="text-5xl md:text-7xl font-extrabold font-display uppercase text-brand-text-primary leading-none tracking-tighter">
                    The <span className="gold-gradient-text gold-glow">5-Star</span> Standard.
                </h2>
                <p className="text-brand-text-secondary mt-8 text-lg md:text-xl leading-relaxed max-w-xl">
                    Nano Mobile is Metro Vancouver's most trusted name in mobile precision. Read the verified experiences of our premium clientele.
                </p>
            </div>

            <div className="bg-brand-surface p-10 rounded-[40px] border border-brand-border shadow-2xl flex flex-col items-center text-center backdrop-blur-xl">
                <div className="flex items-center mb-4 space-x-3">
                    <GoogleIcon />
                    <span className="text-white font-display font-bold text-xl uppercase tracking-widest">Business Profile</span>
                </div>
                <div className="flex items-center space-x-4 mb-6">
                    <span className="text-7xl font-display font-black text-white">4.9</span>
                    <div className="space-y-1 text-left">
                        <div className="flex">
                            {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
                        </div>
                        <p className="text-[10px] text-brand-text-secondary uppercase font-black tracking-widest opacity-60">Verified On Google Maps</p>
                    </div>
                </div>
                <a 
                  href="https://share.google/UkjnE9WGzcdaPiZDq" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white text-brand-dark-bg px-8 py-3 rounded-full text-xs font-black uppercase tracking-widest hover:bg-brand-gold transition-all"
                >
                    Review us on Google
                </a>
            </div>
        </div>
        
        {/* Desktop: Auto-scrolling carousel */}
        <div 
          className="hidden md:flex w-full overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)] group"
        >
          <ul className="flex items-stretch animate-scrolling-reviews group-hover:[animation-play-state:paused]">
            {duplicatedTestimonials.map((testimonial, index) => (
              <li key={index} className="flex-shrink-0 w-[30rem] mx-6 py-4">
                <div className="h-full bg-brand-surface p-12 rounded-[40px] border border-brand-border flex flex-col shadow-2xl transition-all duration-700 hover:border-brand-gold/40 hover:-translate-y-2 group/card relative overflow-hidden">
                  
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center space-x-4">
                        <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-brand-border group-hover/card:border-brand-gold transition-colors duration-500">
                             <img src={testimonial.authorImage || `https://ui-avatars.com/api/?name=${testimonial.name}&background=141414&color=D4AF37`} alt={testimonial.name} className="w-full h-full object-cover" />
                        </div>
                        <div>
                            <h4 className="font-bold text-white uppercase tracking-widest text-sm font-display">{testimonial.name}</h4>
                            <p className="text-[10px] text-brand-gold font-bold uppercase tracking-widest mt-1 opacity-70">{testimonial.location}</p>
                        </div>
                    </div>
                    <div className="opacity-40 group-hover/card:opacity-100 transition-opacity">
                        <GoogleIcon />
                    </div>
                  </div>

                  <div className="flex mb-6 space-x-0.5">
                      {[...Array(5)].map((_, i) => (
                          <StarIcon key={i} size="w-4 h-4" />
                      ))}
                  </div>
                  
                  <p className="text-brand-text-primary text-lg mb-10 flex-grow italic leading-relaxed font-serif">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>

                  <div className="mt-auto flex items-center justify-between border-t border-brand-border pt-8">
                     <VerifiedBadge />
                     <span className="text-[10px] text-brand-text-secondary font-black uppercase tracking-widest">{testimonial.date}</span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile: Swipeable carousel */}
        <div className="md:hidden w-full">
            <div className="flex overflow-x-auto snap-x snap-mandatory scroll-p-6 -mx-6 px-6 pb-12 gap-8 scrollbar-hide">
              {TESTIMONIALS_DATA.map((testimonial, index) => (
                <div key={index} className="flex-shrink-0 w-[90%] snap-center">
                  <div className="h-full bg-brand-surface p-10 rounded-[32px] border border-brand-border flex flex-col shadow-xl">
                    <div className="flex items-center justify-between mb-6">
                         <img src={testimonial.authorImage} className="w-12 h-12 rounded-full border border-brand-border" alt={testimonial.name} />
                         <GoogleIcon />
                    </div>
                    <div className="flex mb-4">
                        {[...Array(5)].map((_, i) => <StarIcon key={i} size="w-4 h-4" />)}
                    </div>
                    <p className="text-brand-text-secondary mb-8 flex-grow italic text-lg leading-relaxed font-serif">&ldquo;{testimonial.quote}&rdquo;</p>
                    <div className="mt-auto pt-6 border-t border-brand-border">
                      <p className="font-bold text-white uppercase tracking-widest text-sm font-display">{testimonial.name}</p>
                      <div className="flex items-center justify-between mt-2">
                         <span className="text-[9px] text-brand-gold font-bold uppercase tracking-widest">{testimonial.location}</span>
                         <span className="text-[9px] text-green-500 font-bold uppercase tracking-widest">Verified</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
        </div>

        <div className="mt-16 text-center">
            <p className="text-brand-text-secondary text-xs font-black uppercase tracking-[0.4em] opacity-40">Trusted Excellence Across the Lower Mainland</p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
