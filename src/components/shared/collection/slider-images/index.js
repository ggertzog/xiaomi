import mainCollection1 from '@/assets/collection-slider/collection-slider1-1.png';
import mainCollection2 from '@/assets/collection-slider/collection-slider1-2.png';
import mainCollection3 from '@/assets/collection-slider/collection-slider1-3.png';
import mainCollection4 from '@/assets/collection-slider/collection-slider1-4.png';
import mainCollection5 from '@/assets/collection-slider/collection-slider1-5.png';

import secondCollection1 from '@/assets/collection-slider/collection-slider2-1.png';
import secondCollection2 from '@/assets/collection-slider/collection-slider2-2.png';
import secondCollection3 from '@/assets/collection-slider/collection-slider2-3.png';
import secondCollection4 from '@/assets/collection-slider/collection-slider2-4.png';
import secondCollection5 from '@/assets/collection-slider/collection-slider2-5.png';

import collectionBackground1 from '@/assets/collection-slider/01.png';
import collectionBackground2 from '@/assets/collection-slider/02.png';
import collectionBackground3 from '@/assets/collection-slider/03.png';
import collectionBackground4 from '@/assets/collection-slider/04.png';
import collectionBackground5 from '@/assets/collection-slider/05.png';

import collectionShirt from '@/assets/collection-slider/collection-shirt.png';
import collectionPants from '@/assets/collection-slider/collection-pants.png';
import collectionHoodie from '@/assets/collection-slider/collection-hoodie.png';
import collectionBag from '@/assets/collection-slider/collection-bag.png';
import collectionCap from '@/assets/collection-slider/collection-cap.png';
import collectionJacket from '@/assets/collection-slider/collection-jacket.png';
import collectionTShirt from '@/assets/collection-slider/collection-T-shirt.png';
import collectionPants2 from '@/assets/collection-slider/collection-pants2.png';
import collectionTShirt2 from '@/assets/collection-slider/collection-white-T-shirt.png';

const collectionBackgroundImages = [
  { id: 1, content: collectionBackground1, alt: '01' },
  { id: 2, content: collectionBackground2, alt: '02' },
  { id: 3, content: collectionBackground3, alt: '03' },
  { id: 4, content: collectionBackground4, alt: '04' },
  { id: 5, content: collectionBackground5, alt: '05' },
];

const collectionImages = [
  [
    { content: mainCollection1 },
    { content: secondCollection1 },
    { content: collectionShirt },
    { content: collectionPants },
  ],
  [
    { content: mainCollection2 },
    { content: secondCollection2 },
    { content: collectionHoodie },
    { content: collectionBag },
  ],
  [
    { content: mainCollection3 },
    { content: secondCollection3 },
    { content: collectionCap },
    { content: collectionJacket },
  ],
  [
    { content: mainCollection4 },
    { content: secondCollection4 },
    { content: collectionPants },
    { content: collectionTShirt },
    { content: collectionPants2 },
  ],
  [
    { content: mainCollection5 },
    { content: secondCollection5 },
    { content: collectionCap },
    { content: collectionPants2 },
    { content: collectionTShirt2 },
    { content: collectionJacket },
  ],
];

export { collectionBackgroundImages, collectionImages };
