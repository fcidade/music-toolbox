import { useEffect, useState } from "react";
import { BeatObserverFn, Metronome, TimeSignature } from "../lib/metronome"

export type UseMetronomeProps = {
    defaultBpm?: number,
    defaultTimeSignature?: TimeSignature,
}

export const useMetronome = ({
    defaultBpm = 80,
    defaultTimeSignature = TimeSignature.commonTime,
}: UseMetronomeProps = {}) => {
    const [isPlaying, setPlaying] = useState(false);
    const [bpm, setBpm] = useState(defaultBpm);
    const [beat, setBeat] = useState(0);
    const [timeSignature, setTimeSignature] = useState(defaultTimeSignature);
    const [metronome] = useState(new Metronome(bpm, timeSignature));

    const increaseBpm = () => setBpm((previousBpm: number) => previousBpm + 5);
    const decreaseBpm = () => setBpm((previousBpm: number) => previousBpm - 5);
    const togglePlay = () => setPlaying(isCurrPlaying => !isCurrPlaying);

    const registerBeatObserver = (observer: BeatObserverFn) => {
        metronome.registerBeatObserver(observer)
    }

    useEffect(() => {
        registerBeatObserver((currBeat) => { setBeat(currBeat) })
    }, [])

    useEffect(() => {
        metronome.setBpm(bpm)
        metronome.setTimeSignature(timeSignature)

        if (isPlaying) {
            metronome.stop()
            metronome.start()
        } else {
            metronome.stop()
        }
    }, [bpm, timeSignature, isPlaying])

    return {
        beat,
        bpm,
        timeSignature,
        isPlaying,
        increaseBpm,
        decreaseBpm,
        togglePlay,
        setBpm,
        setTimeSignature,
        registerBeatObserver,
    };
};
