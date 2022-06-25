import { Interval } from "./interval"
import { Note } from "./note"

describe('Note', () => {

    test('should return the right relative note', () => {
        expect(Note.C.getRelative(Interval.Root)).toEqual(Note.C)
        expect(Note.C.getRelative(Interval.MinorSecond)).toEqual(Note.Db)
        expect(Note.C.getRelative(Interval.MajorSecond)).toEqual(Note.D)
        expect(Note.C.getRelative(Interval.MinorThird)).toEqual(Note.Eb)
        expect(Note.C.getRelative(Interval.MajorThird)).toEqual(Note.E)
        expect(Note.C.getRelative(Interval.PerfectForth)).toEqual(Note.F)
        expect(Note.C.getRelative(Interval.DiminishedFifth)).toEqual(Note.Gb)
        expect(Note.C.getRelative(Interval.PerfectFifth)).toEqual(Note.G)
        expect(Note.C.getRelative(Interval.AugmentedFifth)).toEqual(Note.Ab)
        expect(Note.C.getRelative(Interval.Sixth)).toEqual(Note.A)
        expect(Note.C.getRelative(Interval.MinorSeventh)).toEqual(Note.Bb)
        expect(Note.C.getRelative(Interval.MajorSeventh)).toEqual(Note.B)
        expect(Note.C.getRelative(Interval.Octave)).toEqual(Note.C)
        expect(Note.C.getRelative(Interval.MinorNinth)).toEqual(Note.Db)
        expect(Note.C.getRelative(Interval.MajorNinth)).toEqual(Note.D)
    })

})