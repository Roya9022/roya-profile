import React from 'react';
import TwinklingStar from '../twinkling-star';
import PixelCloud from '../pixel-cloud';

const STAR_DATA = Array.from({ length: 40 }).map((_, i) => ({
  id: i,
  top: `${Math.random() * 100}%`,
  left: `${Math.random() * 100}%`,
  delay: Math.random() * 3000,
  size: 6 + Math.random() * 6,
}));

const Background: React.FC = () => {
  return (
    <>
      {STAR_DATA.map((star) => (
        <TwinklingStar key={star.id} top={star.top} left={star.left} delay={star.delay} size={star.size} />
      ))}
      <PixelCloud delay={0} top='8%' speed={0.12} size='lg' direction='left' />
      <PixelCloud delay={3000} top='25%' speed={0.15} size='md' direction='right' flip />
      <PixelCloud delay={7000} top='50%' speed={0.1} size='sm' direction='left' flip />
      <PixelCloud delay={12000} top='70%' speed={0.18} size='md' direction='right' flip />
      <PixelCloud delay={18000} top='35%' speed={0.14} size='lg' direction='left' />
      <div className='absolute inset-0 pointer-events-none bg-[linear-gradient(to_bottom,rgba(255,255,255,0)_0%,rgba(255,255,255,0)_50%,rgba(0,0,0,0.05)_50%,rgba(0,0,0,0.05)_100%)] bg-size-[100%_4px] opacity-30 z-50' />
    </>
  );
};

export default React.memo(Background);
