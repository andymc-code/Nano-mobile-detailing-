
import React from 'react';
import { TESTIMONIALS_DATA } from '../constants';

const QuoteIcon = () => (
  <svg className="w-10 h-10 text-brand-gold mb-6 opacity-50" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
    <path d="M9.333 22.667h4L16 17.333V9.333H6.667v8h4L8 22.667H9.333zM22.667 22.667h4L29.333 17.333V9.333H20v8h4l-2.667 5.333h1.334z" />
  </svg>
);

const StarIcon = () => (
    <svg className="w-8 h-8 text-brand-gold drop-shadow-[0_0_8px_rgba(212,175,55,0.6)]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
);

const TestimonialsSection: React.FC = () => {
  const duplicatedTestimonials = [...TESTIMONIALS_DATA, ...TESTIMONIALS_DATA];

  return (
    <section className="py-24 bg-brand-surface relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-brand-gold/5 blur-[120px] rounded-full pointer-events-none"></div>
      
      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-${TESTIMONIALS_DATA.length * 26}rem); }
          }
          .animate-scrolling-testimonials {
            animation: scroll 60s linear infinite;
          }
        `}
      </style>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6 space-x-2">
              {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} />
              ))}
          </div>
          <span className="text-brand-gold font-display font-bold uppercase tracking-[0.3em] mb-4 text-sm block">Customer Satisfaction</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display uppercase text-brand-text-primary">
            What our clients <span className="gold-gradient-text gold-glow">say about us</span>
          </h2>
          <div className="w-24 h-1 bg-brand-gold mx-auto mt-8"></div>
        </div>
        
        {/* Desktop: Auto-scrolling carousel */}
        <div 
          className="hidden md:flex w-full overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)] group"
        >
          <ul className="flex items-stretch animate-scrolling-testimonials group-hover:[animation-play-state:paused]">
            {duplicatedTestimonials.map((testimonial, index) => (
              <li key={index} className="flex-shrink-0 w-[26rem] mx-4 py-4">
                <div className="h-full bg-brand-dark-bg p-10 rounded-3xl border border-brand-border flex flex-col shadow-2xl transition-all duration-500 hover:border-brand-gold/30 hover:shadow-brand-gold/5 group/card relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-gold/20 to-transparent"></div>
                  <QuoteIcon />
                  <p className="text-brand-text-secondary text-lg mb-8 flex-grow italic leading-relaxed">&ldquo;{testimonial.quote}&rdquo;</p>
                  <div className="mt-auto border-t border-brand-border pt-6 flex items-center justify-between">
                    <div>
                        <p className="font-bold text-white uppercase tracking-widest font-display">{testimonial.name}</p>
                        <p className="text-xs text-brand-gold uppercase font-bold tracking-tighter mt-1">{testimonial.location}</p>
                    </div>
                    <div className="opacity-30 group-hover/card:opacity-100 transition-opacity">
                        <svg className="w-6 h-6 text-brand-gold" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile: Swipeable carousel */}
        <div className="md:hidden w-full">
            <div className="flex overflow-x-auto snap-x snap-mandatory scroll-p-6 -mx-6 px-6 pb-8 gap-6">
              {TESTIMONIALS_DATA.map((testimonial, index) => (
                <div key={index} className="flex-shrink-0 w-[85%] snap-center">
                  <div className="h-full bg-brand-dark-bg p-8 rounded-3xl border border-brand-border flex flex-col shadow-xl">
                    <QuoteIcon />
                    <p className="text-brand-text-secondary mb-8 flex-grow italic text-base leading-relaxed">&ldquo;{testimonial.quote}&rdquo;</p>
                    <div className="mt-auto border-t border-brand-border pt-6">
                      <p className="font-bold text-white uppercase tracking-widest font-display">{testimonial.name}</p>
                      <p className="text-xs text-brand-gold uppercase font-bold tracking-tighter mt-1">{testimonial.location}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
        </div>

        <div className="mt-12 text-center">
            <p className="text-brand-text-secondary text-sm font-semibold uppercase tracking-widest opacity-50">Trusted by hundreds across Metro Vancouver</p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
