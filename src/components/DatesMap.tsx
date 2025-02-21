import { useEffect, useState } from 'react';
import { Obj, ToText } from '../models/models';
import Text from '../pages/Text';
import style from '../style/Line.module.scss';

export const DatesMap = () => {
   const response = require('../data/data.json');
   const [filtered, setFiltered] = useState<number | undefined>(1);
   const [counter, setCounter] = useState(1);
   const { button_right, button_left } = style;   
   const number = response.length;
   
   const findObj = response.filter((obj: Obj): boolean => {
      return obj.id === filtered;
   });

   useEffect(() => {
      let filtered = counter;
      if (filtered > number || filtered < 1) {
         setCounter(1);
      }
      setFiltered(filtered);
   }, [counter]);

   const selectCounter = (i: number) => {
      setCounter(i);
   }

   return (
      <>
         <div
            className={button_right}
            onClick={() => setCounter(counter + 1)}
         ></div>
         <div
            className={button_left}
            onClick={() => setCounter(counter - 1)}
         ></div>

         {findObj.map((obj: ToText): object => (
            <Text
               counter={counter}
               selectCounter={selectCounter}
               len={number}
               key={obj.counter}
               start={obj.start}
               finish={obj.finish}
               coun={obj.counter}
               year0={obj.year0}
               descr={obj.description}
               year1={obj.year1}
               descr1={obj.description1}
               year2={obj.year2}
               descr2={obj.description2}
               year3={obj.year3}
               descr3={obj.description3}
            />
         ))}
      </>
   );
}

export default DatesMap;
