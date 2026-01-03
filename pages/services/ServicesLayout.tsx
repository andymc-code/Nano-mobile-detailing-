
import React from 'react';
import { Outlet } from 'react-router-dom';
import ServicesSubNav from '../../components/ServicesSubNav';

const ServicesLayout: React.FC = () => {
  return (
    <div className="bg-brand-dark-bg">
      <div className="relative h-[50vh] bg-cover bg-center" style={{ backgroundImage: `url('https://ik.imagekit.io/wnwu0xxx5/Auto_detailing/Blur_bmwm4_ceramiccoated.png?updatedAt=1759719374116')` }}>
        <div className="absolute inset-0 bg-black/80 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-4xl md:text-7xl font-extrabold font-display text-white uppercase tracking-tighter">
            Our Signature <span className="text-brand-gold">Services</span>
          </h1>
          <p className="text-brand-text-secondary mt-6 text-lg md:text-xl max-w-2xl font-display uppercase tracking-widest">
            High-precision automotive care, delivered to your doorstep.
          </p>
        </div>
      </div>
      
      <ServicesSubNav />
      
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default ServicesLayout;
