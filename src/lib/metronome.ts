export type TimeSignature = {
    amountOfBeatsPerBar: number
    beatUnit: number
}

export namespace TimeSignature {
    export const commonTime: TimeSignature = { amountOfBeatsPerBar: 4, beatUnit: 4 }
}

export type BeatObserverFn = (beat: number) => void

export class Metronome {
    private intervalID: NodeJS.Timer
    private beat: number
    private beatObservers: BeatObserverFn[]

    constructor(
        private bpm: number,
        private timeSignature: TimeSignature
    ) {
        this.beat = 0
        this.beatObservers = []
    }

    start() {
        const minuteInMs = 1000 * 60
        const intervalBetweenBeatsInMs = minuteInMs / this.bpm
        this.intervalID = setInterval(this.handleBeat.bind(this), intervalBetweenBeatsInMs)
    }

    stop() {
        clearInterval(this.intervalID)
        this.intervalID = undefined
    }

    handleBeat() {
        this.beatObservers.forEach((observer: BeatObserverFn) => {
            observer(this.beat)
        })
        this.beat++
        if (this.beat >= this.timeSignature.amountOfBeatsPerBar) {
            this.beat = 0
        }
    }

    // Setters & Registers

    setTimeSignature(timeSignature: TimeSignature) {
        this.timeSignature = timeSignature
    }

    setBpm(bpm: number) {
        this.bpm = bpm
    }

    registerBeatObserver(beatHandler: BeatObserverFn) {
        this.beatObservers.push(beatHandler)
    }

    // Getters

    getBeat(): number { return this.beat }
    getBpm(): number { return this.bpm }
    getTimeSignature(): TimeSignature { return this.timeSignature }
}
