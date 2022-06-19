export enum Note {
    A = 'A',
    Bb = 'A#/Bb',
    B = 'B',
    C = 'C',
    Db = 'C#/Db',
    D = 'D',
    Eb = 'D#/Eb',
    E = 'E',
    F = 'F',
    Gb = 'F#/Ab',
    G = 'G',
    Ab = 'G#/Ab'
}

export const allNotes = (): Note[] => {
    return Object.values(Note)
}