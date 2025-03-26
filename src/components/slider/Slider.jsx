import React from 'react';
import styles from './styles.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import backstage1 from '@/assets/backstage1.png';
import backstage2 from '@/assets/backstage2.png';
import backstage3 from '@/assets/backstage3.png';

export default function Slider() {
  return (
    <div className={styles.slider} style={{width: "430px"}}>
      <Swiper slidesPerView={1} spaceBetween={30}>
        <SwiperSlide>
          <img src={backstage1} alt="" style={{width: "400px"}}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={backstage2} alt="" style={{width: "400px"}} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={backstage3} alt="" style={{width: "400px"}} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
