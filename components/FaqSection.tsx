import React, { useEffect } from 'react';
import { FAQ_DATA } from '../constants';
import FaqAccordion from './FaqAccordion';

const FaqSection: React.FC = () => {
    useEffect(() => {
        const scriptId = 'faq-schema-script';

        const existingScript = document.getElementById(scriptId);
        if (existingScript) {
            existingScript.remove();
        }

        const faqSchema = {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": FAQ_DATA.general.map(item => ({
                "@type": "Question",
                "name": item.question,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": item.answer
                }
            }))
        };

        const script = document.createElement('script');
        script.id = scriptId;
        script.type = 'application/ld+json';
        script.innerHTML = JSON.stringify(faqSchema);
        document.head.appendChild(script);

        return () => {
            const scriptToRemove = document.getElementById(scriptId);
            if (scriptToRemove) {
                scriptToRemove.remove();
            }
        };
    }, []);

    return (
        <section id="faq" className="py-24 bg-brand-surface">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold font-display uppercase text-brand-text-primary">Frequently Asked Questions</h2>
                    <p className="text-brand-text-secondary mt-4 max-w-2xl mx-auto">Answers to common questions about our mobile detailing services.</p>
                </div>
                <FaqAccordion items={FAQ_DATA.general} />
            </div>
        </section>
    );
};

export default FaqSection;
