import { Note } from "./note"
import { Scale } from "./scale"
import { ScaleCategory } from "./scale-category"

describe('Scale', () => {

    test('should return the right scale root', () => {
        expect(Scale.major(Note.C).getRoot()).toEqual(Note.C)
        expect(Scale.minor(Note.D).getRoot()).toEqual(Note.D)
    })

    test('should return the right scale category', () => {
        expect(Scale.major(Note.C).getCategory()).toEqual(ScaleCategory.Major)
        expect(Scale.minor(Note.Db).getCategory()).toEqual(ScaleCategory.Minor)
    })

    test('should return the right note of the scale degree', () => {
        expect(Scale.major(Note.C).getNote(0)).toEqual(Note.C)
    })

    test('should return the right notes of the scales', () => {

        // Major
        expect(Scale.major(Note.C).getNotes()).toEqual([Note.C, Note.D, Note.E, Note.F, Note.G, Note.A, Note.B])
        expect(Scale.major(Note.G).getNotes()).toEqual([Note.G, Note.A, Note.B, Note.C, Note.D, Note.E, Note.Gb])
        expect(Scale.major(Note.D).getNotes()).toEqual([Note.D, Note.E, Note.Gb, Note.G, Note.A, Note.B, Note.Db])
        expect(Scale.major(Note.A).getNotes()).toEqual([Note.A, Note.B, Note.Db, Note.D, Note.E, Note.Gb, Note.Ab])
        expect(Scale.major(Note.E).getNotes()).toEqual([Note.E, Note.Gb, Note.Ab, Note.A, Note.B, Note.Db, Note.Eb])
        expect(Scale.major(Note.B).getNotes()).toEqual([Note.B, Note.Db, Note.Eb, Note.E, Note.Gb, Note.Ab, Note.Bb])
        expect(Scale.major(Note.Gb).getNotes()).toEqual([Note.Gb, Note.Ab, Note.Bb, Note.B, Note.Db, Note.Eb, Note.F])
        expect(Scale.major(Note.Db).getNotes()).toEqual([Note.Db, Note.Eb, Note.F, Note.Gb, Note.Ab, Note.Bb, Note.C])
        expect(Scale.major(Note.Ab).getNotes()).toEqual([Note.Ab, Note.Bb, Note.C, Note.Db, Note.Eb, Note.F, Note.G])
        expect(Scale.major(Note.Eb).getNotes()).toEqual([Note.Eb, Note.F, Note.G, Note.Ab, Note.Bb, Note.C, Note.D])
        expect(Scale.major(Note.Bb).getNotes()).toEqual([Note.Bb, Note.C, Note.D, Note.Eb, Note.F, Note.G, Note.A])
        expect(Scale.major(Note.F).getNotes()).toEqual([Note.F, Note.G, Note.A, Note.Bb, Note.C, Note.D, Note.E])

        // Minor
        expect(Scale.minor(Note.A).getNotes()).toEqual([Note.A, Note.B, Note.C, Note.D, Note.E, Note.F, Note.G])
        expect(Scale.minor(Note.E).getNotes()).toEqual([Note.E, Note.Gb, Note.G, Note.A, Note.B, Note.C, Note.D])
        expect(Scale.minor(Note.B).getNotes()).toEqual([Note.B, Note.Db, Note.D, Note.E, Note.Gb, Note.G, Note.A])
        expect(Scale.minor(Note.Gb).getNotes()).toEqual([Note.Gb, Note.Ab, Note.A, Note.B, Note.Db, Note.D, Note.E])
        expect(Scale.minor(Note.Db).getNotes()).toEqual([Note.Db, Note.Eb, Note.E, Note.Gb, Note.Ab, Note.A, Note.B])
        expect(Scale.minor(Note.Ab).getNotes()).toEqual([Note.Ab, Note.Bb, Note.B, Note.Db, Note.Eb, Note.E, Note.Gb])
        expect(Scale.minor(Note.Eb).getNotes()).toEqual([Note.Eb, Note.F, Note.Gb, Note.Ab, Note.Bb, Note.B, Note.Db])
        expect(Scale.minor(Note.Bb).getNotes()).toEqual([Note.Bb, Note.C, Note.Db, Note.Eb, Note.F, Note.Gb, Note.Ab])
        expect(Scale.minor(Note.F).getNotes()).toEqual([Note.F, Note.G, Note.Ab, Note.Bb, Note.C, Note.Db, Note.Eb])
        expect(Scale.minor(Note.C).getNotes()).toEqual([Note.C, Note.D, Note.Eb, Note.F, Note.G, Note.Ab, Note.Bb])
        expect(Scale.minor(Note.G).getNotes()).toEqual([Note.G, Note.A, Note.Bb, Note.C, Note.D, Note.Eb, Note.F])
        expect(Scale.minor(Note.D).getNotes()).toEqual([Note.D, Note.E, Note.F, Note.G, Note.A, Note.Bb, Note.C])

        // Pentatonic Major
        expect(Scale.pentatonicMajor(Note.C).getNotes()).toEqual([Note.C, Note.D, Note.E, Note.G, Note.A])
        expect(Scale.pentatonicMajor(Note.C).getNotes()).toEqual([Note.C, Note.D, Note.E, Note.G, Note.A])
        expect(Scale.pentatonicMajor(Note.G).getNotes()).toEqual([Note.G, Note.A, Note.B, Note.D, Note.E])
        expect(Scale.pentatonicMajor(Note.D).getNotes()).toEqual([Note.D, Note.E, Note.Gb, Note.A, Note.B])
        expect(Scale.pentatonicMajor(Note.A).getNotes()).toEqual([Note.A, Note.B, Note.Db, Note.E, Note.Gb])
        expect(Scale.pentatonicMajor(Note.E).getNotes()).toEqual([Note.E, Note.Gb, Note.Ab, Note.B, Note.Db])
        expect(Scale.pentatonicMajor(Note.B).getNotes()).toEqual([Note.B, Note.Db, Note.Eb, Note.Gb, Note.Ab])
        expect(Scale.pentatonicMajor(Note.Gb).getNotes()).toEqual([Note.Gb, Note.Ab, Note.Bb, Note.Db, Note.Eb])
        expect(Scale.pentatonicMajor(Note.Db).getNotes()).toEqual([Note.Db, Note.Eb, Note.F, Note.Ab, Note.Bb])
        expect(Scale.pentatonicMajor(Note.Ab).getNotes()).toEqual([Note.Ab, Note.Bb, Note.C, Note.Eb, Note.F])
        expect(Scale.pentatonicMajor(Note.Eb).getNotes()).toEqual([Note.Eb, Note.F, Note.G, Note.Bb, Note.C])
        expect(Scale.pentatonicMajor(Note.Bb).getNotes()).toEqual([Note.Bb, Note.C, Note.D, Note.F, Note.G])
        expect(Scale.pentatonicMajor(Note.F).getNotes()).toEqual([Note.F, Note.G, Note.A, Note.C, Note.D])

        // Pentatonic Minor
        expect(Scale.pentatonicMinor(Note.A).getNotes()).toEqual([Note.A, Note.C, Note.D, Note.E, Note.G])
        expect(Scale.pentatonicMinor(Note.E).getNotes()).toEqual([Note.E, Note.G, Note.A, Note.B, Note.D])
        expect(Scale.pentatonicMinor(Note.B).getNotes()).toEqual([Note.B, Note.D, Note.E, Note.Gb, Note.A])
        expect(Scale.pentatonicMinor(Note.Gb).getNotes()).toEqual([Note.Gb, Note.A, Note.B, Note.Db, Note.E])
        expect(Scale.pentatonicMinor(Note.Db).getNotes()).toEqual([Note.Db, Note.E, Note.Gb, Note.Ab, Note.B])
        expect(Scale.pentatonicMinor(Note.Ab).getNotes()).toEqual([Note.Ab, Note.B, Note.Db, Note.Eb, Note.Gb])
        expect(Scale.pentatonicMinor(Note.Eb).getNotes()).toEqual([Note.Eb, Note.Gb, Note.Ab, Note.Bb, Note.Db])
        expect(Scale.pentatonicMinor(Note.Bb).getNotes()).toEqual([Note.Bb, Note.Db, Note.Eb, Note.F, Note.Ab])
        expect(Scale.pentatonicMinor(Note.F).getNotes()).toEqual([Note.F, Note.Ab, Note.Bb, Note.C, Note.Eb])
        expect(Scale.pentatonicMinor(Note.C).getNotes()).toEqual([Note.C, Note.Eb, Note.F, Note.G, Note.Bb])
        expect(Scale.pentatonicMinor(Note.G).getNotes()).toEqual([Note.G, Note.Bb, Note.C, Note.D, Note.F])
        expect(Scale.pentatonicMinor(Note.D).getNotes()).toEqual([Note.D, Note.F, Note.G, Note.A, Note.C])
    
        // Harmonic Minor
        expect(Scale.harmonicMinor(Note.A).getNotes()).toEqual([Note.A, Note.B, Note.C, Note.D, Note.E, Note.F, Note.Ab])
        expect(Scale.harmonicMinor(Note.E).getNotes()).toEqual([Note.E, Note.Gb, Note.G, Note.A, Note.B, Note.C, Note.Eb])
        expect(Scale.harmonicMinor(Note.B).getNotes()).toEqual([Note.B, Note.Db, Note.D, Note.E, Note.Gb, Note.G, Note.Bb])
        expect(Scale.harmonicMinor(Note.Gb).getNotes()).toEqual([Note.Gb, Note.Ab, Note.A, Note.B, Note.Db, Note.D, Note.F])
        expect(Scale.harmonicMinor(Note.Db).getNotes()).toEqual([Note.Db, Note.Eb, Note.E, Note.Gb, Note.Ab, Note.A, Note.C])
        expect(Scale.harmonicMinor(Note.Ab).getNotes()).toEqual([Note.Ab, Note.Bb, Note.B, Note.Db, Note.Eb, Note.E, Note.G])
        expect(Scale.harmonicMinor(Note.Eb).getNotes()).toEqual([Note.Eb, Note.F, Note.Gb, Note.Ab, Note.Bb, Note.B, Note.D])
        expect(Scale.harmonicMinor(Note.Bb).getNotes()).toEqual([Note.Bb, Note.C, Note.Db, Note.Eb, Note.F, Note.Gb, Note.A])
        expect(Scale.harmonicMinor(Note.F).getNotes()).toEqual([Note.F, Note.G, Note.Ab, Note.Bb, Note.C, Note.Db, Note.E])
        expect(Scale.harmonicMinor(Note.C).getNotes()).toEqual([Note.C, Note.D, Note.Eb, Note.F, Note.G, Note.Ab, Note.B])
        expect(Scale.harmonicMinor(Note.G).getNotes()).toEqual([Note.G, Note.A, Note.Bb, Note.C, Note.D, Note.Eb, Note.Gb])
        expect(Scale.harmonicMinor(Note.D).getNotes()).toEqual([Note.D, Note.E, Note.F, Note.G, Note.A, Note.Bb, Note.Db])
    
        // Melodic Minor
        expect(Scale.melodicMinor(Note.A).getNotes()).toEqual([Note.A, Note.B, Note.C, Note.D, Note.E, Note.Gb, Note.Ab])
        expect(Scale.melodicMinor(Note.E).getNotes()).toEqual([Note.E, Note.Gb, Note.G, Note.A, Note.B, Note.Db, Note.Eb])
        expect(Scale.melodicMinor(Note.B).getNotes()).toEqual([Note.B, Note.Db, Note.D, Note.E, Note.Gb, Note.Ab, Note.Bb])
        expect(Scale.melodicMinor(Note.Gb).getNotes()).toEqual([Note.Gb, Note.Ab, Note.A, Note.B, Note.Db, Note.Eb, Note.F])
        expect(Scale.melodicMinor(Note.Db).getNotes()).toEqual([Note.Db, Note.Eb, Note.E, Note.Gb, Note.Ab, Note.Bb, Note.C])
        expect(Scale.melodicMinor(Note.Ab).getNotes()).toEqual([Note.Ab, Note.Bb, Note.B, Note.Db, Note.Eb, Note.F, Note.G])
        expect(Scale.melodicMinor(Note.Eb).getNotes()).toEqual([Note.Eb, Note.F, Note.Gb, Note.Ab, Note.Bb, Note.C, Note.D])
        expect(Scale.melodicMinor(Note.Bb).getNotes()).toEqual([Note.Bb, Note.C, Note.Db, Note.Eb, Note.F, Note.G, Note.A])
        expect(Scale.melodicMinor(Note.F).getNotes()).toEqual([Note.F, Note.G, Note.Ab, Note.Bb, Note.C, Note.D, Note.E])
        expect(Scale.melodicMinor(Note.C).getNotes()).toEqual([Note.C, Note.D, Note.Eb, Note.F, Note.G, Note.A, Note.B])
        expect(Scale.melodicMinor(Note.G).getNotes()).toEqual([Note.G, Note.A, Note.Bb, Note.C, Note.D, Note.E, Note.Gb])
        expect(Scale.melodicMinor(Note.D).getNotes()).toEqual([Note.D, Note.E, Note.F, Note.G, Note.A, Note.B, Note.Db])
    })

    test('should display scales with the right accidents', () => {

        // Major
        expect(Scale.major(Note.C).displayNotes()).toEqual(["C", "D", "E", "F", "G", "A", "B"])
        expect(Scale.major(Note.G).displayNotes()).toEqual(["G", "A", "B", "C", "D", "E", "F#"])
        expect(Scale.major(Note.D).displayNotes()).toEqual(["D", "E", "F#", "G", "A", "B", "C#"])
        expect(Scale.major(Note.A).displayNotes()).toEqual(["A", "B", "C#", "D", "E", "F#", "G#"])
        expect(Scale.major(Note.E).displayNotes()).toEqual(["E", "F#", "G#", "A", "B", "C#", "D#"])
        expect(Scale.major(Note.B).displayNotes()).toEqual(["B", "C#", "D#", "E", "F#", "G#", "A#"])
        expect(Scale.major(Note.Gb).displayNotes()).toEqual(["F#", "G#", "A#", "B", "C#", "D#", "F"])
        expect(Scale.major(Note.Db).displayNotes()).toEqual(["Db", "Eb", "F", "Gb", "Ab", "Bb", "C"])
        expect(Scale.major(Note.Ab).displayNotes()).toEqual(["Ab", "Bb", "C", "Db", "Eb", "F", "G"])
        expect(Scale.major(Note.Eb).displayNotes()).toEqual(["Eb", "F", "G", "Ab", "Bb", "C", "D"])
        expect(Scale.major(Note.Bb).displayNotes()).toEqual(["Bb", "C", "D", "Eb", "F", "G", "A"])
        expect(Scale.major(Note.F).displayNotes()).toEqual(["F", "G", "A", "Bb", "C", "D", "E"])

    })

    // TODO: Other scale types
    // TODO: Display differs depending on scale?

})