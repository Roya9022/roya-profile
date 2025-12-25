const PaintModal: React.FC = () => {
  return (
    <div className='w-full h-full bg-white p-0 flex justify-center items-center'>
      <div className='w-full max-w-200 aspect-4/3'>
        <iframe
          src='https://paint.js.org/'
          title='Retro Paint'
          className='w-full h-full border-none'
          style={{ imageRendering: 'pixelated' }}
        />
      </div>
    </div>
  );
};

export default PaintModal;
