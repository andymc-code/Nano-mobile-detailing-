
import React, { useState } from 'react';
import { FaqItem } from '../types';

interface FaqAccordionProps {
  items: FaqItem[];
}

const AccordionItem: React.FC<{ item: FaqItem }> = ({ item }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={`border-b border-brand-border transition-all duration-300 ${isOpen ? 'bg-white/5' : ''}`}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-center text-left py-7 px-4 group"
            >
                <span className={`text-lg md:text-xl font-display font-semibold transition-colors duration-300 ${isOpen ? 'text-brand-gold' : 'text-brand-text-primary group-hover:text-brand-gold'}`}>
                    {item.question}
                </span>
                <span className={`flex-shrink-0 ml-4 p-2 rounded-full border border-brand-border transition-all duration-500 ${isOpen ? 'rotate-180 bg-brand-gold border-brand-gold text-brand-dark-bg' : 'rotate-0 text-brand-gold group-hover:bg-brand-gold/10'}`}>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7"></path></svg>
                </span>
            </button>
            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="px-4 pb-8 text-brand-text-secondary leading-relaxed md:text-lg border-l-2 border-brand-gold ml-4">
                    {item.answer}
                </div>
            </div>
        </div>
    );
};


const FaqAccordion: React.FC<FaqAccordionProps> = ({ items }) => {
  return (
    <div className="w-full max-w-5xl mx-auto space-y-2">
        {items.map((item, index) => (
            <AccordionItem key={index} item={item} />
        ))}
    </div>
  );
};

export default FaqAccordion;
