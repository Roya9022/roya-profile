import React, { useState } from 'react';
import { Loader2 } from 'lucide-react';

const PaintModal: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className='relative flex flex-col w-full h-full min-h-100 bg-[#C0C0C0] overflow-hidden'>
      {isLoading && (
        <div className='absolute inset-0 flex flex-col items-center justify-center bg-[#C0C0C0] z-10'>
          <Loader2 className='w-8 h-8 animate-spin text-blue-800 mb-2' />
          <span className='text-xs font-bold text-gray-700 uppercase tracking-widest'>Initializing Paint...</span>
        </div>
      )}
      <iframe
        src='https://paint.js.org/'
        title='Retro Paint'
        onLoad={() => setIsLoading(false)}
        className={`flex-1 w-full border-none transition-opacity duration-300 p-4 ${
          isLoading ? 'opacity-0' : 'opacity-100'
        }`}
        style={{ minHeight: '500px' }}
      />
    </div>
  );
};

export default PaintModal;
