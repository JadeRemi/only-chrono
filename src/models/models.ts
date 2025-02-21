export interface IData {
   counter: number;
   selectCounter: (i: number) => void;
   len: number;
   obj: ToText;
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
   description0: string;
   year1: string;
   description1: string;
   year2: string;
   description2: string;
   year3: string;
   description3: string;
   length: number;
   type: string;
}