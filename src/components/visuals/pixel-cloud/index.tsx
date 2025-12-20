import { useState, useEffect } from 'react';

interface PixelCloudProps {
  delay: number;
  top: string;
  speed: number;
  size: 'sm' | 'md' | 'lg';
  direction: 'left' | 'right';
  flip?: boolean;
}
const PixelCloud: React.FC<PixelCloudProps> = ({ delay, top, speed, size, direction, flip }) => {
  const startPos = direction === 'left' ? -30 : 130;
  const [position, setPosition] = useState(startPos);

  useEffect(() => {
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        setPosition((prev) => {
          if (direction === 'left') {
            return prev >= 130 ? -30 : prev + speed;
          } else {
            return prev <= -30 ? 130 : prev - speed;
          }
        });
      }, 50);
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(timer);
  }, [delay, speed, direction]);

  const sizeMap = {
    sm: 'w-24 h-12 md:w-32 md:h-16',
    md: 'w-32 h-16 md:w-48 md:h-20',
    lg: 'w-40 h-20 md:w-64 md:h-24',
  };

  return (
    <svg
      className={`absolute ${sizeMap[size]} pointer-events-none opacity-70 ${flip ? '-scale-x-100' : ''}`}
      style={{ left: `${position}%`, top }}
      viewBox='0 0 200 80'
      preserveAspectRatio='none'>
      <g fill='white' fillOpacity='0.9'>
        <rect x='20' y='60' width='160' height='10' />
        <rect x='10' y='50' width='180' height='10' />
        <rect x='30' y='40' width='140' height='10' />
        <rect x='40' y='30' width='120' height='10' />
        <rect x='50' y='20' width='30' height='10' />
        <rect x='90' y='15' width='40' height='15' />
        <rect x='140' y='20' width='20' height='10' />
        <rect x='20' y='60' width='160' height='5' fillOpacity='0.3' />
        <rect x='40' y='40' width='120' height='5' fillOpacity='0.2' />
      </g>
    </svg>
  );
};

export default PixelCloud;
