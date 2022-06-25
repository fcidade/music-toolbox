import { Interval } from "./interval"
import { Note } from "./note"

describe('Note', () => {

    test('should return the right relative note', () => {
        expect(new Note('C').getRelative(Interval.Root)).toEqual(Note.C)
        expect(new Note('C').getRelative(Interval.MinorSecond)).toEqual(Note.Db)
        expect(new Note('C').getRelative(Interval.MajorSecond)).toEqual(Note.D)
        expect(new Note('C').getRelative(Interval.MinorThird)).toEqual(Note.Eb)
        expect(new Note('C').getRelative(Interval.MajorThird)).toEqual(Note.E)
        expect(new Note('C').getRelative(Interval.PerfectForth)).toEqual(Note.F)
        expect(new Note('C').getRelative(Interval.DiminishedFifth)).toEqual(Note.Gb)
        expect(new Note('C').getRelative(Interval.PerfectFifth)).toEqual(Note.G)
        expect(new Note('C').getRelative(Interval.AugmentedFifth)).toEqual(Note.Ab)
        expect(new Note('C').getRelative(Interval.Sixth)).toEqual(Note.A)
        expect(new Note('C').getRelative(Interval.MinorSeventh)).toEqual(Note.Bb)
        expect(new Note('C').getRelative(Interval.MajorSeventh)).toEqual(Note.B)
        expect(new Note('C').getRelative(Interval.Octave)).toEqual(Note.C)
        expect(new Note('C').getRelative(Interval.MinorNinth)).toEqual(Note.Db)
        expect(new Note('C').getRelative(Interval.MajorNinth)).toEqual(Note.D)
    })

    test('should return true if the compared note is the same ', () => {
        expect(new Note('C').isTheSameNoteAs(Note.C)).toBeTruthy()
    })

})