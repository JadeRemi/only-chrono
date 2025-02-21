import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, FreeMode, Pagination } from 'swiper';
import SwiperStyle from '../style/Swiper.scss';
import style from '../style/Text.module.scss';
import { IData } from '../models/models';
import CountUp from 'react-countup';
import { Clockface } from './Clockface';

const Text = (props: IData) => {
   const {
      name,
      period,
      date_one,
      date_two,
      counter,
      year,
      description,
      block_left,
      block_right,
      trans,
   } = style;
   const {
      len,
      start,
      finish,
      coun,
      year0,
      descr,
      year1,
      descr1,
      year2,
      descr2,
      year3,
      descr3,
      selectCounter,
      counter: count,
   } = props;

   return (
      <>
         <Clockface 
            counter={count}
            selectCounter={selectCounter}
            len={len}
         />
         <div className={name}>Historical dates</div>
         <div className={period}>
            <div className={date_one}>
               <CountUp end={start} duration={3} separator='' start={1990} />
            </div>
            <div className={date_two}>
               <CountUp end={finish} duration={3} separator='' start={1990} />
            </div>
         </div>
         <div className={counter}>
            {coun}/0{len}
         </div>
         <div>
            <div className={block_left}></div>
            <div className={block_right}></div>
         </div>

         <Swiper
            slidesPerView={3}
            spaceBetween={30}
            navigation={true}
            freeMode={true}
            pagination={{
               clickable: true,
            }}
            modules={[FreeMode, Pagination, Navigation]}
            className={SwiperStyle}
            onSlideChange={(e) => console.log("2", e?.activeIndex)}
            onSwiper={(swiper) => console.log("swiper", swiper)}
         >
            <SwiperSlide>
               <div className={trans}>
                  <div className={year}>{year0}</div>
                  <div className={description}>{descr}</div>
               </div>
            </SwiperSlide>
            <SwiperSlide>
               <div className={trans}>
                  <div className={year}>{year1}</div>
                  <div className={description}>{descr1}</div>
               </div>
            </SwiperSlide>
            <SwiperSlide>
               <div className={trans}>
                  <div className={year}>{year2}</div>
                  <div className={description}>{descr2}</div>
               </div>
            </SwiperSlide>
            <SwiperSlide>
               <div className={trans}>
                  <div className={year}>{year3}</div>
                  <div className={description}>{descr3}</div>
               </div>
            </SwiperSlide>
         </Swiper>
      </>
   );
}

export default Text;
