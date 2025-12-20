
import React from 'react';

const IconNano = () => (
    <svg className="w-12 h-12 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M19.428 15.428a8 8 0 11-12.856-12.856 8 8 0 0112.856 12.856zM12 6v4m0 4v.01" />
    </svg>
);

const IconEco = () => (
    <svg className="w-12 h-12 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
);

const IconSelf = () => (
    <svg className="w-12 h-12 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
);

const IconPro = () => (
     <svg className="w-12 h-12 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
     </svg>
);

const WHY_CHOOSE_US_DATA = [
    {
        icon: <IconNano />,
        title: "Nano Technology",
        description: "We utilize advanced molecular coatings and high-precision tools to protect your vehicle's surfaces at the microscopic level."
    },
    {
        icon: <IconSelf />,
        title: "Total Independence",
        description: "Our mobile detailing labs are 100% self-sufficient. We bring our own high-pressure filtered water and electricity."
    },
    {
        icon: <IconEco />,
        title: "Eco-Conscious Care",
        description: "Advanced detailing products that are biodegradable and pH-balanced—safe for your car, your family, and our planet."
    },
    {
        icon: <IconPro />,
        title: "Unmatched Precision",
        description: "Meticulous attention to detail. We treat every vehicle like a masterpiece, ensuring a factory-fresh finish every time."
    }
];

const WhyChooseUsSection: React.FC = () => {
    return (
        <section className="py-24 bg-brand-dark-bg">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold font-display uppercase text-brand-text-primary">The Nano Difference</h2>
                    <p className="text-brand-text-secondary mt-4 max-w-2xl mx-auto">Bridging the gap between luxury results and everyday convenience.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {WHY_CHOOSE_US_DATA.map((item, index) => (
                         <div key={index} className="flex flex-col items-center text-center p-8 border border-brand-border rounded-2xl bg-brand-surface group hover:border-brand-gold/40 transition-all duration-500">
                             <div className="mb-6 transform group-hover:scale-110 transition-transform duration-500">{item.icon}</div>
                             <h3 className="text-xl font-bold font-display text-white mb-4 uppercase tracking-widest">{item.title}</h3>
                             <p className="text-brand-text-secondary text-sm leading-relaxed">{item.description}</p>
                         </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUsSection;
