import { oneOf } from "@/utils";
import { Interval } from "./interval";
import { Note } from "./note";
import { ScaleCategory } from "./scale-category";

export class Scale {
    constructor(
        private root: Note,
        private category: ScaleCategory
    ) { }

    getRoot(): Note { return this.root; }
    getCategory(): ScaleCategory { return this.category; }
    getNotes(): Note[] {
        const formula = ScaleCategory.getFormula(this.getCategory())
        return formula.map(interval => this.root.getRelative(interval))
    }

    getNotesAsStrings(): string[] {
        return this.getNotes().map(({ note }) => note)
    }

    getNote(index: number): Note {
        return this.getNotes()[index]
    }

    displayNotes(): string[] {
        const shouldBeSharps = [Note.C, Note.G, Note.D, Note.A, Note.E, Note.B, Note.Gb]
        if (shouldBeSharps.includes(this.root)) {
            return this.displayNotesWithSharps()
        }
        return this.displayNotesWithFlats()
    }

    displayNotesWithSharps(): string[] {
        return this.getNotes().map(note => note.isAccident() ? note.asSharp() : note.display());
    }

    displayNotesWithFlats(): string[] {
        return this.getNotes().map(note => note.isAccident() ? note.asFlat() : note.display());
    }
}

export namespace Scale {

    export const getRandomScaleCustom = (allowedScaleCategories: ScaleCategory[], allowedNotes: Note[]): Scale => {
        const notes = Note.allNotes()
            .filter(note => allowedNotes ? allowedNotes.includes(note) : true)
        const scaleCategories = ScaleCategory.allScaleCategories()
            .filter(category => allowedScaleCategories ? allowedScaleCategories.includes(category) : true)

        const randomRoot = oneOf(notes)
        const randomScaleCategory = oneOf(scaleCategories)
        return new Scale(randomRoot, randomScaleCategory)
    }

    export const major = (note: Note): Scale => {
        return new Scale(note, ScaleCategory.Major)
    }

    export const minor = (note: Note): Scale => {
        return new Scale(note, ScaleCategory.Minor)
    }

    export const pentatonicMajor = (note: Note): Scale => {
        return new Scale(note, ScaleCategory.PentatonicMajor)
    }

    export const pentatonicMinor = (note: Note): Scale => {
        return new Scale(note, ScaleCategory.PentatonicMinor)
    }

    export const harmonicMinor = (note: Note): Scale => {
        return new Scale(note, ScaleCategory.HarmonicMinor)
    }

    export const melodicMinor = (note: Note): Scale => {
        return new Scale(note, ScaleCategory.MelodicMinor)
    }
    
    
}