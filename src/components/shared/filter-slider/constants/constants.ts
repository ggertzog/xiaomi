import cyberpunk1 from '@/assets/filter-slider/cyberpunk1.png';
import colorFocus1 from '@/assets/filter-slider/color-focus1.png';
import goldVibes1 from '@/assets/filter-slider/gold-vibes1.png';
import blackIce1 from '@/assets/filter-slider/black-ice1.png';
import blackIce2 from '@/assets/filter-slider/black-ice2.png';
import cyberpunk2 from '@/assets/filter-slider/1@3x.png';
import colorFocus2 from '@/assets/filter-slider/2@3x.png';
import goldVibes2 from '@/assets/filter-slider/3@3x.png';
import bearsVideoMP4 from '@/assets/video/BlackBears.mp4';
import bearsVideoWEBM from '@/assets/video/BlackBears.webm';

import { ButtonData, BackgroundWord, SliderData } from '../types/types';

const content: SliderData = [
  [
    {
      content: [
        { src: bearsVideoWEBM, type: 'video/webm' },
        { src: bearsVideoMP4, type: 'video/mp4' },
      ],
      type: 'video',
    },
    { content: cyberpunk2, type: 'image' },
  ],
  [
    { content: colorFocus1, type: 'image' },
    { content: colorFocus2, type: 'image' },
  ],
  [
    { content: goldVibes1, type: 'image' },
    { content: goldVibes2, type: 'image' },
  ],
  [
    { content: blackIce1, type: 'image' },
    { content: blackIce2, type: 'image' },
  ],
];

export { content };

export const buttonData: ButtonData[] = [
  { id: 1, title: 'cyberpunk' },
  { id: 2, title: 'color focus' },
  { id: 3, title: 'gold vibes' },
  { id: 4, title: 'black ice' },
];

export const backgroundWords: BackgroundWord[] = [
  { word: 'киберпанк' },
  { word: 'цветовой фокус' },
  { word: 'золотые волны' },
  { word: 'черный лед' },
];
