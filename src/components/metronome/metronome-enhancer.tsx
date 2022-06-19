import { composer } from "@/utils";
import { useEffect } from "react";
import { useMetronome } from "../../hooks/useMetronome";
import { useMetronomeAudio } from "./useMetronomeAudio";


const metronomeEnhancer = () => {
    const {
        isPlaying, bpm, beat, timeSignature, increaseBpm, decreaseBpm, togglePlay, setBpm, setTimeSignature, registerBeatObserver
    } = useMetronome();
    const { beatObserver } = useMetronomeAudio();

    useEffect(() => {
        registerBeatObserver(beatObserver);
        registerBeatObserver(console.log);
    }, []);

    const handleBpm = (e) => setBpm(Number(e.target.value));
    const handleTimeSignatureAmountOfBeatsPerBar = (e) => setTimeSignature(ts => ({ ...ts, amountOfBeatsPerBar: e.target.value }));
    const handleTimeSignatureBeatUnit = (e) => setTimeSignature(ts => ({ ...ts, beatUnit: e.target.value }));

    return {
        isPlaying,
        beat,
        bpm,
        timeSignature,
        increaseBpm,
        decreaseBpm,
        togglePlay,
        setBpm,
        setTimeSignature,
        registerBeatObserver,
        handleBpm,
        handleTimeSignatureAmountOfBeatsPerBar,
        handleTimeSignatureBeatUnit,
    };
};

export default composer(metronomeEnhancer)