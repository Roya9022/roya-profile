import { useState, useEffect, useRef } from 'react';
import { Play, Pause, SkipBack, SkipForward, Volume2 } from 'lucide-react';
import { RetroButton } from '@/shared';
import { tracks } from '@/constants/tracks';
import text from '@/content/text.json';

const MusicPlayer: React.FC = () => {
  const musicPlayerText = text.musicPlayer;

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const [currentTrack, setCurrentTrack] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(0.7);

  useEffect(() => {
    if (!audioRef.current) return;
    audioRef.current.volume = volume;
  }, [volume]);

  useEffect(() => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.play().catch(() => {});
    } else {
      videoRef.current.pause();
    }
  }, [isPlaying]);

  const playTrack = (index: number) => {
    const track = tracks[index];
    if (!track.playable) return;
    setCurrentTrack(index);
    setTimeout(() => {
      audioRef.current?.play();
      setIsPlaying(true);
    }, 0);
  };

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const nextTrack = () => {
    playTrack((currentTrack + 1) % tracks.length);
  };

  const prevTrack = () => {
    playTrack((currentTrack - 1 + tracks.length) % tracks.length);
  };

  const handleTimeUpdate = () => {
    if (!audioRef.current) return;
    const percent = (audioRef.current.currentTime / audioRef.current.duration) * 100;
    setProgress(percent || 0);
  };

  const seek = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!audioRef.current) return;
    const value = Number(e.target.value);
    audioRef.current.currentTime = (value / 100) * audioRef.current.duration;
    setProgress(value);
  };

  const contentInset = 'border-2 border-[#808080] border-b-white border-r-white shadow-[inset_1px_1px_0_0_#000]';

  return (
    <div className='w-full h-full bg-[#C0C0C0] p-2 sm:p-3 flex flex-col lg:flex-row gap-3 lg:gap-4 font-mono select-none overflow-y-auto lg:overflow-visible'>
      <div className='flex-1 flex flex-col gap-2 sm:gap-3 min-w-0'>
        <div className={`relative bg-black h-36 sm:h-44 overflow-hidden ${contentInset}`}>
          <div className='absolute inset-0 bg-linear-to-t from-purple-600 to-cyan-300 opacity-30 z-0' />
          <video
            ref={videoRef}
            src='/assets/equalizer.mp4'
            loop
            muted
            playsInline
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 mix-blend-screen z-0 ${
              isPlaying ? 'opacity-80 saturate-150' : 'opacity-20 grayscale'
            }`}
          />
          <div className='relative z-10 p-2 sm:p-3'>
            <div className='text-white text-[9px] sm:text-[10px] tracking-widest uppercase mb-0.5 opacity-80'>
              {musicPlayerText.nowPlaying}
            </div>
            <div className='text-white text-xs sm:text-base truncate font-bold uppercase drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]'>
              {tracks[currentTrack].title}
            </div>
          </div>
          <div className='absolute bottom-0 left-0 right-0 p-1.5 sm:p-2 bg-black/40 backdrop-blur-sm z-10'>
            <input
              type='range'
              min={0}
              max={100}
              value={progress}
              onChange={seek}
              className='w-full h-1  cursor-pointer bg-gray-800'
            />
          </div>
        </div>
        <div className='retro-outset p-2 sm:p-4 bg-[#C0C0C0] space-y-3 sm:space-y-4'>
          <div className='flex justify-center items-center gap-2 sm:gap-3'>
            <RetroButton onClick={prevTrack} className='px-2! py-1! sm:px-3! sm:py-1.5!'>
              <SkipBack className='w-4 h-4 sm:w-4.5 sm:h-4.5' />
            </RetroButton>
            <RetroButton onClick={togglePlay} className='px-4! py-2! sm:px-6! sm:py-2.5!'>
              {isPlaying ? (
                <Pause className='w-5 h-5 sm:w-6 sm:h-6' fill='currentColor' />
              ) : (
                <Play className='w-5 h-5 sm:w-6 sm:h-6' fill='currentColor' />
              )}
            </RetroButton>
            <RetroButton onClick={nextTrack} className='px-2! py-1! sm:px-3! sm:py-1.5!'>
              <SkipForward className='w-4 h-4 sm:w-4.5 sm:h-4.5' />
            </RetroButton>
          </div>
          <div className={`flex items-center gap-2 sm:gap-3 p-1 sm:p-1.5 px-2 sm:px-3 bg-[#808080] ${contentInset}`}>
            <Volume2 className='text-white w-3 h-3 sm:w-4 sm:h-4' />
            <input
              type='range'
              min={0}
              max={1}
              step={0.01}
              value={volume}
              onChange={(e) => setVolume(Number(e.target.value))}
              className='flex-1 h-1  cursor-pointer'
            />
          </div>
        </div>
      </div>
      <div className='w-full lg:w-72 flex flex-col shrink-0'>
        <div className='bg-[#808080] text-white text-[10px] px-2 py-1 font-bold uppercase tracking-wider'>
          {musicPlayerText.nowPlaying}
        </div>
        <div className={`flex-1 bg-white overflow-y-auto max-h-48 lg:max-h-none ${contentInset} scrollbar-retro`}>
          {tracks.map((track, index) => {
            const isActive = index === currentTrack;
            return (
              <button
                key={track.title}
                onClick={() => playTrack(index)}
                disabled={!track.playable}
                className={`w-full text-left px-3 py-2 text-[11px] border-b border-gray-100 flex justify-between items-center transition-colors
                  ${
                    !track.playable
                      ? 'text-gray-400 italic cursor-not-allowed'
                      : isActive
                      ? 'bg-[#DFDFDF] font-bold'
                      : 'hover:bg-blue-50 text-black'
                  }
                `}>
                <span className='truncate pr-2'>
                  {index + 1}. {track.title}
                </span>
                {isActive && isPlaying && (
                  <div className='flex gap-0.5 items-end h-3'>
                    <div
                      className='w-0.5 bg-purple-600 animate-[eq-bar_0.5s_infinite_alternate]'
                      style={{ height: '60%' }}></div>
                    <div
                      className='w-0.5 bg-purple-600 animate-[eq-bar_0.8s_infinite_alternate]'
                      style={{ height: '100%' }}></div>
                    <div
                      className='w-0.5 bg-purple-600 animate-[eq-bar_0.6s_infinite_alternate]'
                      style={{ height: '40%' }}></div>
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </div>

      <audio ref={audioRef} src={tracks[currentTrack].src} onTimeUpdate={handleTimeUpdate} onEnded={nextTrack} />
    </div>
  );
};

export default MusicPlayer;
