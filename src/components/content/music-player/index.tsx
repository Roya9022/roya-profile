import { useState, useEffect, useRef } from 'react';

import Equalizer from './Equalizer';

interface Track {
  title: string;
  src?: string;
  playable: boolean;
}

const tracks: Track[] = [
  { title: 'Lofi Chill - DELOSound', src: '/music/lofi1.mp3', playable: true },
  { title: 'Sakura - lofidreams', src: '/music/lofi2.mp3', playable: true },
  { title: 'Snowy Window - Turning Pages', src: '/music/lofi3.mp3', playable: true },
  { title: 'Semi-Charmed Life – Third Eye Blind', playable: false },
  { title: 'Falls Apart – Sugar Ray', playable: false },
  { title: 'No Scrubs – TLC', playable: false },
];

const MusicPlayer: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [currentTrack, setCurrentTrack] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(0.7);

  useEffect(() => {
    if (!audioRef.current) return;
    audioRef.current.volume = volume;
  }, [volume]);

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

  return (
    <div className='w-full h-full p-3 font-mono text-sm flex flex-col gap-3'>
      <div className='border border-gray-500 bg-[#c0c0c0] p-2'>
        <div className='truncate text-xs sm:text-sm'>Now Playing: {tracks[currentTrack].title}</div>
      </div>
      <Equalizer isPlaying={isPlaying} />
      <div className='flex justify-center items-center gap-6 mt-4'>
        <button onClick={prevTrack} className='retro-btn text-3xl px-4 py-2'>
          ⏮
        </button>
        <button onClick={togglePlay} className='retro-btn text-4xl px-5 py-3'>
          {isPlaying ? '⏸' : '▶'}
        </button>
        <button onClick={nextTrack} className='retro-btn text-3xl px-4 py-2'>
          ⏭
        </button>
      </div>
      <input type='range' min={0} max={100} value={progress} onChange={seek} className='w-full' />
      <div className='flex items-center gap-3 mt-3'>
        <span className='text-2xl'>🔊</span>
        <input
          type='range'
          min={0}
          max={1}
          step={0.01}
          value={volume}
          onChange={(e) => setVolume(Number(e.target.value))}
          className='flex-1'
        />
      </div>
      <div className='flex flex-col gap-1 mt-2'>
        {tracks.map((track, index) => {
          const isActive = index === currentTrack;
          return (
            <button
              key={track.title}
              onClick={() => playTrack(index)}
              disabled={!track.playable}
              className={`text-left px-2 py-1 border flex justify-between items-center
          ${
            !track.playable
              ? 'bg-gray-200 text-gray-500 cursor-not-allowed italic'
              : isActive
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 hover:bg-gray-200'
          }
        `}>
              <span className='text-xs sm:text-sm'>{track.title}</span>
              {/* {!track.playable && <span className='text-xs'>(unavailable)</span>} */}
            </button>
          );
        })}
      </div>
      <audio ref={audioRef} src={tracks[currentTrack].src} onTimeUpdate={handleTimeUpdate} />
    </div>
  );
};

export default MusicPlayer;
