import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import Image from 'next/image';
import styles from './Slider.module.css';
import 'swiper/css';

const FolinShorts = [
  { img: '/images/main-shorts/174407118090.jpg', alt: '폴인쇼츠' },
  { img: '/images/main-shorts/1743721284133.jpg', alt: '폴인쇼츠' },
  { img: '/images/main-shorts/1744330983738.jpg', alt: '폴인쇼츠' },
  { img: '/images/main-shorts/1744675653304_.jpg', alt: '폴인쇼츠' },
  { img: '/images/main-shorts/1744933884541.jpg', alt: '폴인쇼츠' },
  { img: '/images/main-shorts/1746748222805.jpg', alt: '폴인쇼츠' },
  { img: '/images/main-shorts/1747640404647.jpg', alt: '폴인쇼츠' },
  { img: '/images/main-shorts/1748233888619.jpg', alt: '폴인쇼츠' },
];

export default function FolinShortsSlider() {
  return (
    <>
      <div className={`${styles['slide-button']}`}>
        <button className="shots-button-prev"></button>
        <button className="shots-button-next"></button>
      </div>
      <Swiper
        className={`${styles['slide-shorts']}`}
        modules={[Navigation]}
        slidesPerView={4}
        spaceBetween={24}
        breakpoints={{
          0: { slidesPerView: 1.5, spaceBetween: 8 },
          600: { slidesPerView: 3, spaceBetween: 16 },
          1023: { slidesPerView: 4, spaceBetween: 24 },
        }}
        navigation={{
          nextEl: '.shots-button-next',
          prevEl: '.shots-button-prev',
        }}
      >
        {/* 스와이퍼랩퍼가 이미지 두배였는데 aspect-auto하니까 줄어듦 */}
        {FolinShorts.map((item, i) => (
          <SwiperSlide key={i}>
            <Image
              src={item.img}
              alt={item.alt}
              width={280}
              height={960}
              className="w-full h-full object-cover rounded-[6px] aspect-auto max-h-[600px]"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
