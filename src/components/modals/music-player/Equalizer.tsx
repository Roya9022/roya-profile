interface EqualizerProps {
  isPlaying: boolean;
}

const Equalizer: React.FC<EqualizerProps> = ({ isPlaying }) => {
  return (
    <div className='flex items-end gap-1 w-full h-6'>
      {[...Array(20)].map((_, i) => (
        <span
          key={i}
          className={`eq-bar ${isPlaying ? 'animate-eq' : ''}`}
          style={{
            animationDelay: `${i * 0.08}s`,
          }}
        />
      ))}
    </div>
  );
};

export default Equalizer;
