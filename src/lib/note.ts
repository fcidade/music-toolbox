import { Interval } from "./interval"

export class Note {
    constructor(public note: string) { }

    getRelative(interval: Interval): Note {
        const notes = Note.allNotes().map(({note}) => note)
        const indexOfCurrentNote = notes.indexOf(this.note)
        const relativeNote = notes[(indexOfCurrentNote + interval) % notes.length]
        return new Note(relativeNote)
    }

    isAccident(): boolean {
        return this.note.includes('#')
    }

    display(): string {
        return this.note
    }

    asSharp(): string {
        const [sharp] = this.splitAccidents()
        return sharp
    }

    asFlat(): string {
        const [sharp, flat] = this.splitAccidents()
        return flat ?? sharp
    }

    splitAccidents(): string[] {
        return this.note.split('/')
    }
}

export namespace Note {

    export const A = new Note('A')
    export const Bb = new Note('A#/Bb')
    export const B = new Note('B')
    export const C = new Note('C')
    export const Db = new Note('C#/Db')
    export const D = new Note('D')
    export const Eb = new Note('D#/Eb')
    export const E = new Note('E')
    export const F = new Note('F')
    export const Gb = new Note('F#/Gb')
    export const G = new Note('G')
    export const Ab = new Note('G#/Ab')

    export const allNotes = (): Note[] => {
        return [A, Bb, B, C, Db, D, Eb, E, F, Gb, G, Ab]
    }

    export const allNaturalNotes = (): Note[] => {
        return allNotes().filter(note => !note.isAccident())
    }

    export const allAccidentNotes = (): Note[] => {
        return allNotes().filter(note => note.isAccident())
    }

}
