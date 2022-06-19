import { oneOf } from "@/utils";
import { Note, allNotes } from "./note";
import { ScaleCategory, getFormula, allScaleCategories } from "./scale-category";

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

    getNote(index: number): Note {
        return this.getNotes()[index]
    }
}

export const getRandomScale = (allowedScaleCategories: ScaleCategory[], allowedNotes: Note[]): Scale => {
    const notes = allNotes()
        .filter(note => allowedNotes ? allowedNotes.includes(note) : true)
    const scaleCategories = allScaleCategories()
        .filter(category => allowedScaleCategories ? allowedScaleCategories.includes(category) : true)
        
    const randomRoot = oneOf(notes)
    const randomScaleCategory = oneOf(scaleCategories)
    return new Scale(randomRoot, randomScaleCategory)
}