export interface IData {
   counter: number;
   selectCounter: (i: number) => void;
   len: number;
   obj: ToText;
}

export interface ToTextItem {
   year: number;
   description: number;
}

export interface Obj {
   id: number;
   length: number;
}

export interface ToText {
   id: number;
   start: number;
   finish: number;
   length: number;
   type: string;
   items: ToTextItem[];
}