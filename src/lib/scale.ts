import { Note, allNotes } from "./note";
import { ScaleCategory, getFormula } from "./scale-category";

export class Scale {
    constructor(
        private root: Note,
        private category: ScaleCategory
    ) { }

    getRoot(): Note { return this.root; }
    getCategory(): ScaleCategory { return this.category; }
    getNotes(): Note[] {
        const noteArray = allNotes()

        const slicedArray = [...noteArray, ...noteArray].slice(noteArray.indexOf(this.root));
        const formula = getFormula(this.category);

        const indexes = formula.reduce((prev, curr, index) => {
            const lastValue = index === 0 ? 0 : prev[index - 1];
            const value = lastValue + curr;
            return [...prev, value];
        }, []);
        
        return slicedArray.filter((_, index) => indexes.includes(index));
    }
}
