import { oneOf } from "@/utils";
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
        if (shouldBeSharps.find(note => note.isTheSameNoteAs(this.root))) {
            return this.displayNotesWithSharps()
        }
        return this.displayNotesWithFlats()
    }

    displayNotesWithSharps(): string[] {
        return this.getNotes().map(note => note.isAccident() ? note.asSharp() : note.display());
    }

    displayNotesWithFlats(): string[] {
        const notes = this.getNotes()
        return notes.map(note => note.isAccident() ? note.asFlat() : note.display());
    }
}

export namespace Scale {

    // FIXME: Add unit tests to optimize
    export const getRandomScaleCustom = (allowedScaleCategories: ScaleCategory[] = [], allowedNotes: Note[] = []): Scale => {
        const allowedNotesIDs = allowedNotes.map(({ note }) => note)
        const notes = Note.allNotes()
            .filter(({ note }) => !!allowedNotesIDs.length ? allowedNotesIDs.includes(note) : true)

        const scaleCategories = ScaleCategory.allScaleCategories()
            .filter(category => !!allowedScaleCategories.length ? allowedScaleCategories.includes(category) : true)

        const randomRoot = oneOf(notes)
        const randomScaleCategory = oneOf(scaleCategories)
        return new Scale(randomRoot || Note.C, randomScaleCategory)
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