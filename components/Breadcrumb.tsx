
import React from 'react';
import { Link } from 'react-router-dom';

interface BreadcrumbProps {
  paths: { name: string; path: string }[];
}

const Breadcrumb: React.FC = ({ paths }) => {
  return (
    <nav className="text-sm" aria-label="Breadcrumb">
      <ol className="list-none p-0 inline-flex">
        <li className="flex items-center">
          <Link to="/" className="text-brand-text-secondary hover:text-brand-gold transition-colors">Home</Link>
        </li>
        {paths.map((path, index) => (
          <li key={index} className="flex items-center">
            <span className="mx-2 text-brand-text-secondary/40">/</span>
            {index === paths.length - 1 ? (
              <span className="text-white font-semibold uppercase tracking-widest text-[10px]">{path.name}</span>
            ) : (
              <Link to={path.path} className="text-brand-text-secondary hover:text-brand-gold transition-colors">{path.name}</Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
