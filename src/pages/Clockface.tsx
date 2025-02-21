import style from '../style/Clockface.module.scss';

interface IClockface {
    counter: number;
    selectCounter: (i: number) => void;
    len: number;
}

export const Clockface = ({counter, selectCounter, len}:IClockface) => {
   const {
     clockmark,
     clockface,
     clockcenter,
     selected,
   } = style;

   const items: number[] = Array.from({ length: len }, (_, index) => index + 1);

    return (
    <div className={clockface}>
        {items.map((item) => (
            <div className={`${clockmark} ${counter === item ? selected : ""}`} key={item} >
                <button onClick={() => selectCounter(item)}>
                    <p>
                        {item}
                    </p>
                </button>
            </div>
        ))}
        <div className={clockcenter}/>
    </div>
    )
}