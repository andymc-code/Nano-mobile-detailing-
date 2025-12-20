
import React, { useState, useRef, useCallback } from 'react';

interface ImageSliderProps {
    before: string;
    after: string;
}

const ImageSlider: React.FC<ImageSliderProps> = ({ before, after }) => {
    const [sliderPos, setSliderPos] = useState(50);
    const imageContainer = useRef<HTMLDivElement>(null);

    const handleMove = (clientX: number) => {
        if (!imageContainer.current) return;
        const rect = imageContainer.current.getBoundingClientRect();
        const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
        const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
        setSliderPos(percent);
    };
    
    const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault();
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseup', handleMouseUp);
    };

    const handleMouseMove = useCallback((e: MouseEvent) => {
        handleMove(e.clientX);
    }, []);

    const handleMouseUp = () => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseup', handleMouseUp);
    };

    const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
        handleMove(e.touches[0].clientX);
    };
    
    return (
        <div ref={imageContainer} className="relative w-full aspect-[4/3] overflow-hidden select-none rounded-lg group border border-brand-border shadow-2xl">
            <img src={after} alt="After" className="absolute top-0 left-0 w-full h-full object-cover" />
            <div className="absolute top-0 left-0 w-full h-full object-cover" style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}>
                <img src={before} alt="Before" className="absolute top-0 left-0 w-full h-full object-cover" />
            </div>
            <div
                className="absolute top-0 bottom-0 bg-brand-gold w-0.5 cursor-ew-resize z-10"
                style={{ left: `${sliderPos}%` }}
                onMouseDown={handleMouseDown}
                onTouchMove={handleTouchMove}
            >
                <div className="bg-brand-gold absolute rounded-full h-10 w-10 -left-5 top-1/2 -translate-y-1/2 flex items-center justify-center shadow-[0_0_15px_rgba(212,175,55,0.6)] group-hover:scale-110 transition-transform border-2 border-brand-dark-bg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-brand-dark-bg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                    </svg>
                </div>
            </div>
            <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-sm text-brand-gold px-3 py-1 rounded text-[10px] font-black tracking-widest uppercase border border-brand-gold/20 pointer-events-none">BEFORE</div>
            <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm text-brand-silver px-3 py-1 rounded text-[10px] font-black tracking-widest uppercase border border-brand-silver/20 pointer-events-none">AFTER</div>
        </div>
    );
};

export default ImageSlider;
