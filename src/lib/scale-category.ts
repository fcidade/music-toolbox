import { Interval } from "./interval";

export enum ScaleCategory {
    Major = 'Major',
    Minor = 'Minor',
    HarmonicMinor = 'Harmonic Minor',
    MelodicMinor = 'Melodic Minor',
    PentatonicMajor = 'Pentatonic Major',
    PentatonicMinor = 'Pentatonic Minor'
}

export const allScaleCategories = (): ScaleCategory[] => {
    return Object.values(ScaleCategory)
}

export const getFormula = (scale: ScaleCategory): Interval[] => {
    switch (scale) {
        case ScaleCategory.Major:
            return [
                Interval.Root,
                Interval.MajorSecond,
                Interval.MajorSecond,
                Interval.MinorSecond,
                Interval.MajorSecond,
                Interval.MajorSecond,
                Interval.MajorSecond,
            ];
        case ScaleCategory.Minor:
            return [
                Interval.Root,
                Interval.MajorSecond,
                Interval.MinorSecond,
                Interval.MajorSecond,
                Interval.MajorSecond,
                Interval.MinorSecond,
                Interval.MajorSecond,
            ];
            case ScaleCategory.PentatonicMajor:
                return [
                    Interval.Root,
                    Interval.MajorSecond,
                    Interval.MajorSecond,
                    Interval.MinorThird,
                    Interval.MajorSecond,
                ];
        case ScaleCategory.PentatonicMinor:
            return [
                Interval.Root,
                Interval.MinorThird,
                Interval.MajorSecond,
                Interval.MajorSecond,
                Interval.MinorThird,
            ];
            case ScaleCategory.HarmonicMinor:
                return [
                    Interval.Root,
                    Interval.MajorSecond,
                    Interval.MinorSecond,
                    Interval.MajorSecond,
                    Interval.MajorSecond,
                    Interval.MinorSecond,
                    Interval.MinorThird,
                ];
                case ScaleCategory.MelodicMinor:
                    return [
                        Interval.Root,
                        Interval.MajorSecond,
                        Interval.MinorSecond,
                        Interval.MajorSecond,
                        Interval.MajorSecond,
                        Interval.MajorSecond,
                        Interval.MajorSecond,
                    ];
    }
    return [Interval.Root];
};
