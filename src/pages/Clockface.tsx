import classNames from 'classnames';
import style from '../style/Clockface.module.scss';

interface IClockface {
    counter: number;
    selectCounter: (i: number) => void;
    len: number;
    title: string;
}

export const Clockface = ({counter, selectCounter, len, title}:IClockface) => {
   const {
     clockmark,
     clockface,
     clockcenter,
     selected,
     clocktitle,
   } = style;

   const items: number[] = Array.from({ length: len }, (_, index) => index + 1);
   const rotateStyle = { '--rotate': `${counter}` } as React.CSSProperties;

    return (
    <div className={classNames(clockface, `rotate-${counter}`)}>
        {items.map((item) => {
            const isSelected = counter === item;
            return (
            <div className={`${clockmark} ${isSelected ? selected : ""}`} key={item} style={rotateStyle}>
                <button onClick={() => selectCounter(item)}>
                    <p>
                        {item}
                    </p>
                </button>
                <h5 className={clocktitle}>{title}</h5>
            </div>
        )
            })}
        <div className={clockcenter}/>
    </div>
    )
}