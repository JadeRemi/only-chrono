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
         />
         <div
            className={button_left}
            onClick={() => setCounter(counter - 1)}
         />

         {findObj.map((obj: ToText): object => (
            <Text
               counter={counter}
               selectCounter={selectCounter}
               len={number}
               obj={obj}
            />
         ))}
      </>
   );
}

export default DatesMap;
