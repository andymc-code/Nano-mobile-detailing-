
import React from 'react';
import { NavLink } from 'react-router-dom';

const ServicesSubNav: React.FC = () => {
  const navItems = [
    { name: 'Specialized Care', path: '/services' },
    { name: 'Packages', path: '/services/packages' },
    { name: 'How It Works', path: '/services/how-it-works' },
    { name: 'Add-Ons', path: '/services/add-ons' },
  ];

  return (
    <div className="py-8 bg-brand-surface border-y border-brand-border">
      <div className="container mx-auto px-6 overflow-x-auto whitespace-nowrap scrollbar-hide">
        <div className="flex justify-center space-x-8 md:space-x-12">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/services'}
              className={({ isActive }) => `
                text-[10px] md:text-xs font-black uppercase tracking-[0.2em] transition-all duration-300
                ${isActive ? 'text-brand-gold border-b border-brand-gold pb-1' : 'text-brand-text-secondary hover:text-brand-gold'}
              `}
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSubNav;
