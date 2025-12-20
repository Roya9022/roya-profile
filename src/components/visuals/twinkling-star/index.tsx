import { useState, useEffect } from 'react';

interface TwinklingStarProps {
  top: string;
  left: string;
  delay: number;
  size: number;
}

const TwinklingStar: React.FC<TwinklingStarProps> = ({ top, left, delay, size }) => {
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        setOpacity((prev) => {
          const next = prev + 0.1;
          return next > 1 ? 0 : next;
        });
      }, 100);
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div className='absolute pointer-events-none transition-opacity duration-100' style={{ top, left, opacity }}>
      <svg width={size} height={size} viewBox='0 0 10 10'>
        <path d='M5 0 L6 4 L10 5 L6 6 L5 10 L4 6 L0 5 L4 4 Z' fill='white' opacity={0.9} />
        <circle cx='5' cy='5' r='1' fill='white' opacity={0.5} />
      </svg>
    </div>
  );
};

export default TwinklingStar;
