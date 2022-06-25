import { Note } from "./note"
import { Scale } from "./scale"
import { ScaleCategory } from "./scale-category"

describe('Scale', () => {

    beforeEach(() => {
        jest.spyOn(global.Math, 'random').mockReturnValue(.2);
    });

    afterEach(() => {
        jest.spyOn(global.Math, 'random').mockRestore();
    })

    test('should return the right scale root', () => {
        expect(Scale.major(new Note('C')).getRoot()).toEqual(Note.C)
        expect(Scale.minor(new Note('D')).getRoot()).toEqual(Note.D)
    })

    test('should return the right scale category', () => {
        expect(Scale.major(new Note('C')).getCategory()).toEqual(ScaleCategory.Major)
        expect(Scale.minor(new Note('C#/Db')).getCategory()).toEqual(ScaleCategory.Minor)
    })

    test('should return the right note of the scale degree', () => {
        expect(Scale.major(new Note('C')).getNote(0)).toEqual(Note.C)
    })

    test('should return the right notes of the scales', () => {

        // Major
        expect(Scale.major(new Note('C')).getNotes()).toEqual([Note.C, Note.D, Note.E, Note.F, Note.G, Note.A, Note.B])
        expect(Scale.major(new Note('G')).getNotes()).toEqual([Note.G, Note.A, Note.B, Note.C, Note.D, Note.E, Note.Gb])
        expect(Scale.major(new Note('D')).getNotes()).toEqual([Note.D, Note.E, Note.Gb, Note.G, Note.A, Note.B, Note.Db])
        expect(Scale.major(new Note('A')).getNotes()).toEqual([Note.A, Note.B, Note.Db, Note.D, Note.E, Note.Gb, Note.Ab])
        expect(Scale.major(new Note('E')).getNotes()).toEqual([Note.E, Note.Gb, Note.Ab, Note.A, Note.B, Note.Db, Note.Eb])
        expect(Scale.major(new Note('B')).getNotes()).toEqual([Note.B, Note.Db, Note.Eb, Note.E, Note.Gb, Note.Ab, Note.Bb])
        expect(Scale.major(new Note('F#/Gb')).getNotes()).toEqual([Note.Gb, Note.Ab, Note.Bb, Note.B, Note.Db, Note.Eb, Note.F])
        expect(Scale.major(new Note('C#/Db')).getNotes()).toEqual([Note.Db, Note.Eb, Note.F, Note.Gb, Note.Ab, Note.Bb, Note.C])
        expect(Scale.major(new Note('G#/Ab')).getNotes()).toEqual([Note.Ab, Note.Bb, Note.C, Note.Db, Note.Eb, Note.F, Note.G])
        expect(Scale.major(new Note('D#/Eb')).getNotes()).toEqual([Note.Eb, Note.F, Note.G, Note.Ab, Note.Bb, Note.C, Note.D])
        expect(Scale.major(new Note('A#/Bb')).getNotes()).toEqual([Note.Bb, Note.C, Note.D, Note.Eb, Note.F, Note.G, Note.A])
        expect(Scale.major(new Note('F')).getNotes()).toEqual([Note.F, Note.G, Note.A, Note.Bb, Note.C, Note.D, Note.E])

        // Minor
        expect(Scale.minor(new Note('A')).getNotes()).toEqual([Note.A, Note.B, Note.C, Note.D, Note.E, Note.F, Note.G])
        expect(Scale.minor(new Note('E')).getNotes()).toEqual([Note.E, Note.Gb, Note.G, Note.A, Note.B, Note.C, Note.D])
        expect(Scale.minor(new Note('B')).getNotes()).toEqual([Note.B, Note.Db, Note.D, Note.E, Note.Gb, Note.G, Note.A])
        expect(Scale.minor(new Note('F#/Gb')).getNotes()).toEqual([Note.Gb, Note.Ab, Note.A, Note.B, Note.Db, Note.D, Note.E])
        expect(Scale.minor(new Note('C#/Db')).getNotes()).toEqual([Note.Db, Note.Eb, Note.E, Note.Gb, Note.Ab, Note.A, Note.B])
        expect(Scale.minor(new Note('G#/Ab')).getNotes()).toEqual([Note.Ab, Note.Bb, Note.B, Note.Db, Note.Eb, Note.E, Note.Gb])
        expect(Scale.minor(new Note('D#/Eb')).getNotes()).toEqual([Note.Eb, Note.F, Note.Gb, Note.Ab, Note.Bb, Note.B, Note.Db])
        expect(Scale.minor(new Note('A#/Bb')).getNotes()).toEqual([Note.Bb, Note.C, Note.Db, Note.Eb, Note.F, Note.Gb, Note.Ab])
        expect(Scale.minor(new Note('F')).getNotes()).toEqual([Note.F, Note.G, Note.Ab, Note.Bb, Note.C, Note.Db, Note.Eb])
        expect(Scale.minor(new Note('C')).getNotes()).toEqual([Note.C, Note.D, Note.Eb, Note.F, Note.G, Note.Ab, Note.Bb])
        expect(Scale.minor(new Note('G')).getNotes()).toEqual([Note.G, Note.A, Note.Bb, Note.C, Note.D, Note.Eb, Note.F])
        expect(Scale.minor(new Note('D')).getNotes()).toEqual([Note.D, Note.E, Note.F, Note.G, Note.A, Note.Bb, Note.C])

        // Pentatonic Major
        expect(Scale.pentatonicMajor(new Note('C')).getNotes()).toEqual([Note.C, Note.D, Note.E, Note.G, Note.A])
        expect(Scale.pentatonicMajor(new Note('C')).getNotes()).toEqual([Note.C, Note.D, Note.E, Note.G, Note.A])
        expect(Scale.pentatonicMajor(new Note('G')).getNotes()).toEqual([Note.G, Note.A, Note.B, Note.D, Note.E])
        expect(Scale.pentatonicMajor(new Note('D')).getNotes()).toEqual([Note.D, Note.E, Note.Gb, Note.A, Note.B])
        expect(Scale.pentatonicMajor(new Note('A')).getNotes()).toEqual([Note.A, Note.B, Note.Db, Note.E, Note.Gb])
        expect(Scale.pentatonicMajor(new Note('E')).getNotes()).toEqual([Note.E, Note.Gb, Note.Ab, Note.B, Note.Db])
        expect(Scale.pentatonicMajor(new Note('B')).getNotes()).toEqual([Note.B, Note.Db, Note.Eb, Note.Gb, Note.Ab])
        expect(Scale.pentatonicMajor(new Note('F#/Gb')).getNotes()).toEqual([Note.Gb, Note.Ab, Note.Bb, Note.Db, Note.Eb])
        expect(Scale.pentatonicMajor(new Note('C#/Db')).getNotes()).toEqual([Note.Db, Note.Eb, Note.F, Note.Ab, Note.Bb])
        expect(Scale.pentatonicMajor(new Note('G#/Ab')).getNotes()).toEqual([Note.Ab, Note.Bb, Note.C, Note.Eb, Note.F])
        expect(Scale.pentatonicMajor(new Note('D#/Eb')).getNotes()).toEqual([Note.Eb, Note.F, Note.G, Note.Bb, Note.C])
        expect(Scale.pentatonicMajor(new Note('A#/Bb')).getNotes()).toEqual([Note.Bb, Note.C, Note.D, Note.F, Note.G])
        expect(Scale.pentatonicMajor(new Note('F')).getNotes()).toEqual([Note.F, Note.G, Note.A, Note.C, Note.D])

        // Pentatonic Minor
        expect(Scale.pentatonicMinor(new Note('A')).getNotes()).toEqual([Note.A, Note.C, Note.D, Note.E, Note.G])
        expect(Scale.pentatonicMinor(new Note('E')).getNotes()).toEqual([Note.E, Note.G, Note.A, Note.B, Note.D])
        expect(Scale.pentatonicMinor(new Note('B')).getNotes()).toEqual([Note.B, Note.D, Note.E, Note.Gb, Note.A])
        expect(Scale.pentatonicMinor(new Note('F#/Gb')).getNotes()).toEqual([Note.Gb, Note.A, Note.B, Note.Db, Note.E])
        expect(Scale.pentatonicMinor(new Note('C#/Db')).getNotes()).toEqual([Note.Db, Note.E, Note.Gb, Note.Ab, Note.B])
        expect(Scale.pentatonicMinor(new Note('G#/Ab')).getNotes()).toEqual([Note.Ab, Note.B, Note.Db, Note.Eb, Note.Gb])
        expect(Scale.pentatonicMinor(new Note('D#/Eb')).getNotes()).toEqual([Note.Eb, Note.Gb, Note.Ab, Note.Bb, Note.Db])
        expect(Scale.pentatonicMinor(new Note('A#/Bb')).getNotes()).toEqual([Note.Bb, Note.Db, Note.Eb, Note.F, Note.Ab])
        expect(Scale.pentatonicMinor(new Note('F')).getNotes()).toEqual([Note.F, Note.Ab, Note.Bb, Note.C, Note.Eb])
        expect(Scale.pentatonicMinor(new Note('C')).getNotes()).toEqual([Note.C, Note.Eb, Note.F, Note.G, Note.Bb])
        expect(Scale.pentatonicMinor(new Note('G')).getNotes()).toEqual([Note.G, Note.Bb, Note.C, Note.D, Note.F])
        expect(Scale.pentatonicMinor(new Note('D')).getNotes()).toEqual([Note.D, Note.F, Note.G, Note.A, Note.C])
    
        // Harmonic Minor
        expect(Scale.harmonicMinor(new Note('A')).getNotes()).toEqual([Note.A, Note.B, Note.C, Note.D, Note.E, Note.F, Note.Ab])
        expect(Scale.harmonicMinor(new Note('E')).getNotes()).toEqual([Note.E, Note.Gb, Note.G, Note.A, Note.B, Note.C, Note.Eb])
        expect(Scale.harmonicMinor(new Note('B')).getNotes()).toEqual([Note.B, Note.Db, Note.D, Note.E, Note.Gb, Note.G, Note.Bb])
        expect(Scale.harmonicMinor(new Note('F#/Gb')).getNotes()).toEqual([Note.Gb, Note.Ab, Note.A, Note.B, Note.Db, Note.D, Note.F])
        expect(Scale.harmonicMinor(new Note('C#/Db')).getNotes()).toEqual([Note.Db, Note.Eb, Note.E, Note.Gb, Note.Ab, Note.A, Note.C])
        expect(Scale.harmonicMinor(new Note('G#/Ab')).getNotes()).toEqual([Note.Ab, Note.Bb, Note.B, Note.Db, Note.Eb, Note.E, Note.G])
        expect(Scale.harmonicMinor(new Note('D#/Eb')).getNotes()).toEqual([Note.Eb, Note.F, Note.Gb, Note.Ab, Note.Bb, Note.B, Note.D])
        expect(Scale.harmonicMinor(new Note('A#/Bb')).getNotes()).toEqual([Note.Bb, Note.C, Note.Db, Note.Eb, Note.F, Note.Gb, Note.A])
        expect(Scale.harmonicMinor(new Note('F')).getNotes()).toEqual([Note.F, Note.G, Note.Ab, Note.Bb, Note.C, Note.Db, Note.E])
        expect(Scale.harmonicMinor(new Note('C')).getNotes()).toEqual([Note.C, Note.D, Note.Eb, Note.F, Note.G, Note.Ab, Note.B])
        expect(Scale.harmonicMinor(new Note('G')).getNotes()).toEqual([Note.G, Note.A, Note.Bb, Note.C, Note.D, Note.Eb, Note.Gb])
        expect(Scale.harmonicMinor(new Note('D')).getNotes()).toEqual([Note.D, Note.E, Note.F, Note.G, Note.A, Note.Bb, Note.Db])
    
        // Melodic Minor
        expect(Scale.melodicMinor(new Note('A')).getNotes()).toEqual([Note.A, Note.B, Note.C, Note.D, Note.E, Note.Gb, Note.Ab])
        expect(Scale.melodicMinor(new Note('E')).getNotes()).toEqual([Note.E, Note.Gb, Note.G, Note.A, Note.B, Note.Db, Note.Eb])
        expect(Scale.melodicMinor(new Note('B')).getNotes()).toEqual([Note.B, Note.Db, Note.D, Note.E, Note.Gb, Note.Ab, Note.Bb])
        expect(Scale.melodicMinor(new Note('F#/Gb')).getNotes()).toEqual([Note.Gb, Note.Ab, Note.A, Note.B, Note.Db, Note.Eb, Note.F])
        expect(Scale.melodicMinor(new Note('C#/Db')).getNotes()).toEqual([Note.Db, Note.Eb, Note.E, Note.Gb, Note.Ab, Note.Bb, Note.C])
        expect(Scale.melodicMinor(new Note('G#/Ab')).getNotes()).toEqual([Note.Ab, Note.Bb, Note.B, Note.Db, Note.Eb, Note.F, Note.G])
        expect(Scale.melodicMinor(new Note('D#/Eb')).getNotes()).toEqual([Note.Eb, Note.F, Note.Gb, Note.Ab, Note.Bb, Note.C, Note.D])
        expect(Scale.melodicMinor(new Note('A#/Bb')).getNotes()).toEqual([Note.Bb, Note.C, Note.Db, Note.Eb, Note.F, Note.G, Note.A])
        expect(Scale.melodicMinor(new Note('F')).getNotes()).toEqual([Note.F, Note.G, Note.Ab, Note.Bb, Note.C, Note.D, Note.E])
        expect(Scale.melodicMinor(new Note('C')).getNotes()).toEqual([Note.C, Note.D, Note.Eb, Note.F, Note.G, Note.A, Note.B])
        expect(Scale.melodicMinor(new Note('G')).getNotes()).toEqual([Note.G, Note.A, Note.Bb, Note.C, Note.D, Note.E, Note.Gb])
        expect(Scale.melodicMinor(new Note('D')).getNotes()).toEqual([Note.D, Note.E, Note.F, Note.G, Note.A, Note.B, Note.Db])
    })

    test('should display scales with the right accidents', () => {

        // Major
        expect(Scale.major(new Note('C')).displayNotes()).toEqual(["C", "D", "E", "F", "G", "A", "B"])
        expect(Scale.major(new Note('G')).displayNotes()).toEqual(["G", "A", "B", "C", "D", "E", "F#"])
        expect(Scale.major(new Note('D')).displayNotes()).toEqual(["D", "E", "F#", "G", "A", "B", "C#"])
        expect(Scale.major(new Note('A')).displayNotes()).toEqual(["A", "B", "C#", "D", "E", "F#", "G#"])
        expect(Scale.major(new Note('E')).displayNotes()).toEqual(["E", "F#", "G#", "A", "B", "C#", "D#"])
        expect(Scale.major(new Note('B')).displayNotes()).toEqual(["B", "C#", "D#", "E", "F#", "G#", "A#"])
        expect(Scale.major(new Note('F#/Gb')).displayNotes()).toEqual(["F#", "G#", "A#", "B", "C#", "D#", "F"])
        expect(Scale.major(new Note('C#/Db')).displayNotes()).toEqual(["Db", "Eb", "F", "Gb", "Ab", "Bb", "C"])
        expect(Scale.major(new Note('G#/Ab')).displayNotes()).toEqual(["Ab", "Bb", "C", "Db", "Eb", "F", "G"])
        expect(Scale.major(new Note('D#/Eb')).displayNotes()).toEqual(["Eb", "F", "G", "Ab", "Bb", "C", "D"])
        expect(Scale.major(new Note('A#/Bb')).displayNotes()).toEqual(["Bb", "C", "D", "Eb", "F", "G", "A"])
        expect(Scale.major(new Note('F')).displayNotes()).toEqual(["F", "G", "A", "Bb", "C", "D", "E"])

    })

    // TODO: Other scale types
    // TODO: Display differs depending on scale?

    test('should generate a random scale', () => {
        expect(Scale.getRandomScaleCustom()).toEqual(Scale.minor(Note.B))
    })

    test('should generate a random scale but limited by the received scale categories', () => {
        const allowedScaleCategories = [ScaleCategory.Major]
        expect(Scale.getRandomScaleCustom(allowedScaleCategories)).toEqual(Scale.major(Note.B))
    })

    test('should generate a random scale but limited by the received scale root notes', () => {
        const allowedScaleCategories = [ScaleCategory.Major]
        const allowedNotes = [new Note('C'), new Note('A')]
        expect(Scale.getRandomScaleCustom(allowedScaleCategories, allowedNotes)).toEqual(Scale.major(Note.A))
    })

})