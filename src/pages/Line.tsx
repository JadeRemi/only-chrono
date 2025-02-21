import style from '../style/Line.module.scss';

export const Line = () => {
   const { vertical, horizontal, circle, gradient, line_right, line_left} = style;

   return (
      <>
         <div className={vertical}></div>
         <div className={horizontal}></div>
         <div className={circle}></div>
         <div className={gradient}></div>
         <div className={line_right}></div>
         <div className={line_left}></div>
      </>
   );
}

export default Line;
