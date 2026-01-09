import text from '@/content/text.json';

interface Track {
  title: string;
  src?: string;
  playable: boolean;
}

const musicPlayerText = text.musicPlayer;

export const tracks: Track[] = [
  { title: musicPlayerText.trackOne, src: '/music/lofi1.mp3', playable: true },
  { title: musicPlayerText.trackTwo, src: '/music/lofi2.mp3', playable: true },
  { title: musicPlayerText.trackThree, src: '/music/lofi3.mp3', playable: true },
  { title: musicPlayerText.trackFour, playable: false },
  { title: musicPlayerText.trackFive, playable: false },
  { title: musicPlayerText.trackSix, playable: false },
];
