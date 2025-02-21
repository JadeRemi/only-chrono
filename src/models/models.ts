export interface IData {
   counter: number;
   selectCounter: (i: number) => void;
   len: number;
   start: number;
   finish: number;
   coun: string;
   year0: string;
   descr: string;
   year1: string;
   descr1: string;
   year2: string;
   descr2: string;
   year3: string;
   descr3: string;
}

export interface Obj {
   id: number;
   length: number;
}

export interface ToText {
   counter: string;
   start: number;
   finish: number;
   year0: string;
   description: string;
   year1: string;
   description1: string;
   year2: string;
   description2: string;
   year3: string;
   description3: string;
   length: number;
}