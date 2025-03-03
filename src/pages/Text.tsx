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
      trans,
   } = style;
   const {
      len,
      obj,
      selectCounter,
      counter: count,
   } = props;

   const {
      items,
      id,
      start,
      finish,
      type,
   } = obj;

   return (
      <>
         <Clockface 
            counter={count}
            selectCounter={selectCounter}
            len={len}
            title={type}
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
            0{id}/0{len}
         </div>
         {
         /*
         <div>
            <div className={block_left}></div>
            <div className={block_right}></div>
         </div>
         */
         }

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
         >
            {items.map(item => (
               <SwiperSlide key={item.year}>
                  <div className={trans}>
                     <div className={year}>{item.year}</div>
                     <div className={description}>{item.description}</div>
                  </div>
               </SwiperSlide>
            ))}
         </Swiper>
      </>
   );
}

export default Text;
