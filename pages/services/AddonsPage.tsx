
import React from 'react';
import { usePageMetadata } from '../../hooks/usePageMetadata';
import BookingSection from '../../components/BookingSection';

const AddonsPage: React.FC = () => {
  usePageMetadata(
    'Custom Detailing Add-Ons | Pet Hair, Engine Bay & Odor Removal',
    'Personalize your detail with specialized add-ons like pet hair removal, headlight restoration, and ozone treatments.'
  );

  const addons = [
    { name: 'Pet Hair Removal', desc: 'Thorough vacuuming and brushing to remove stubborn pet hair from all fibers.' },
    { name: 'Engine Bay Detail', desc: 'Cleaning and dressing the engine compartment for a showroom-ready look.' },
    { name: 'Headlight Restoration', desc: 'Removing oxidation and fog for improved visibility and aesthetics.' },
    { name: 'Leather Conditioning', desc: 'Premium creams to keep your leather soft, supple, and protected from UV rays.' },
    { name: 'Ozone Treatment', desc: 'Eliminating deep-seated odors from tobacco, mold, or pets at a molecular level.' },
    { name: 'Glass Sealant', desc: 'Hydrophobic coating for all exterior glass to improve wet weather visibility.' }
  ];

  return (
    <div className="bg-brand-dark-bg">
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-display uppercase text-white">Custom <span className="text-brand-gold">Add-Ons</span></h2>
            <p className="text-brand-text-secondary mt-4 max-w-2xl mx-auto">Personalize your detail with these specific high-impact treatments.</p>
            <div className="w-24 h-1 bg-brand-gold mx-auto mt-8"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {addons.map((addon, i) => (
              <div key={i} className="p-10 bg-brand-surface border border-brand-border rounded-3xl group hover:border-brand-gold transition-all duration-500 shadow-xl">
                <h3 className="text-brand-gold font-bold uppercase tracking-[0.2em] mb-4 font-display text-lg">{addon.name}</h3>
                <p className="text-brand-text-secondary text-sm leading-relaxed">{addon.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <BookingSection />
    </div>
  );
};

export default AddonsPage;
