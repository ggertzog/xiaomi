import backstageFirst1 from '@/assets/backstage-slider/backstage1-1.png';
import backstageFirst2 from '@/assets/backstage-slider/backstage1-2.png';
import backstageFirst3 from '@/assets/backstage-slider/backstage1-3.png';
import backstageFirst4 from '@/assets/backstage-slider/backstage1-4.png';

import backstageSecond1 from '@/assets/backstage-slider/backstage2-1.png';
import backstageSecond2 from '@/assets/backstage-slider/backstage2-2.png';
import backstageSecond3 from '@/assets/backstage-slider/backstage2-3.png';
import backstageSecond4 from '@/assets/backstage-slider/backstage2-4.png';

const firstContent = [
  { id: 1, content: backstageFirst1, alt: 'photo' },
  { id: 2, content: backstageFirst2, alt: 'photo' },
  { id: 3, content: backstageFirst3, alt: 'photo' },
  { id: 4, content: backstageFirst4, alt: 'photo' },
];

const secondContent = [
  { id: 1, content: backstageSecond1, alt: 'photo' },
  { id: 2, content: backstageSecond2, alt: 'photo' },
  { id: 3, content: backstageSecond3, alt: 'photo' },
  { id: 4, content: backstageSecond4, alt: 'photo' },
];

const content = [
  [{content: backstageFirst1}, {content: backstageSecond1}],
  [{content: backstageFirst2}, {content: backstageSecond2}],
  [{content: backstageFirst3}, {content: backstageSecond3}],
  [{content: backstageFirst4}, {content: backstageSecond4}],
]

export { firstContent, secondContent, content };
