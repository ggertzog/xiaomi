export type ButtonData = {
  id: number;
  title: string;
};

export type BackgroundWord = {
  word: string;
};

export type AnimationStage = 'currently' | 'exiting' | 'entering';

export const ANIMATION_STAGES = {
  CURRENTLY: 'currently' as AnimationStage,
  EXITING: 'exiting' as AnimationStage,
  ENTERING: 'entering' as AnimationStage,
};

export type MediaItem =
  | { content: string; type: 'image' }
  | { content: Array<{ src: string; type: string }>; type: 'video' };

export type Slide = MediaItem[];

export type SliderData = Slide[];
