import { Interval } from "./interval";

export enum ScaleCategory {
    Major = 'Major',
    Minor = 'Minor',
    HarmonicMinor = 'Harmonic Minor',
    MelodicMinor = 'Melodic Minor',
    PentatonicMajor = 'Pentatonic Major',
    PentatonicMinor = 'Pentatonic Minor'
}

export namespace ScaleCategory {

    export const allScaleCategories = (): ScaleCategory[] => {
        return [
            ScaleCategory.Major,
            ScaleCategory.Minor,
            ScaleCategory.HarmonicMinor,
            ScaleCategory.MelodicMinor,
            ScaleCategory.PentatonicMajor,
            ScaleCategory.PentatonicMinor,
        ]
    }

    export const getFormula = (scaleCategory: ScaleCategory): Interval[] => {
        switch (scaleCategory) {
            case ScaleCategory.Major:
                return [
                    Interval.Root,
                    Interval.MajorSecond,
                    Interval.MajorThird,
                    Interval.PerfectForth,
                    Interval.PerfectFifth,
                    Interval.Sixth,
                    Interval.MajorSeventh,
                ]
            case ScaleCategory.Minor:
                return [
                    Interval.Root,
                    Interval.MajorSecond,
                    Interval.MinorThird,
                    Interval.PerfectForth,
                    Interval.PerfectFifth,
                    Interval.AugmentedFifth,
                    Interval.MinorSeventh,
                ]
            case ScaleCategory.PentatonicMajor:
                return [
                    Interval.Root,
                    Interval.MajorSecond,
                    Interval.MajorThird,
                    Interval.PerfectFifth,
                    Interval.Sixth,
                ]
            case ScaleCategory.PentatonicMinor:
                return [
                    Interval.Root,
                    Interval.MinorThird,
                    Interval.PerfectForth,
                    Interval.PerfectFifth,
                    Interval.MinorSeventh,
                ]
            case ScaleCategory.HarmonicMinor:
                return [
                    Interval.Root,
                    Interval.MajorSecond,
                    Interval.MinorThird,
                    Interval.PerfectForth,
                    Interval.PerfectFifth,
                    Interval.AugmentedFifth,
                    Interval.MajorSeventh,
                ]
            case ScaleCategory.MelodicMinor:
                return [
                    Interval.Root,
                    Interval.MajorSecond,
                    Interval.MinorThird,
                    Interval.PerfectForth,
                    Interval.PerfectFifth,
                    Interval.Sixth,
                    Interval.MajorSeventh,
                ]
        }
    }

}
