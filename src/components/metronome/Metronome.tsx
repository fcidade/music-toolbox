import { TimeSignature } from "@/lib/metronome";
import React from "react";
import metronomeEnhancer from "./metronome-enhancer";
import { MetronomeBeatDisplay } from "./MetronomeBeatReactor";

export type MetronomeProps = {
    isPlaying: boolean
    beat: number
    bpm: number
    timeSignature: TimeSignature
    increaseBpm: () => {}
    decreaseBpm: () => {}
    togglePlay: () => {}
    handleBpm: () => {}
    handleTimeSignatureAmountOfBeatsPerBar: () => {}
    handleTimeSignatureBeatUnit: () => {}
}

const MetronomeComponent = (props: MetronomeProps) => {

    const {
        isPlaying,
        beat,
        bpm,
        timeSignature,
        increaseBpm,
        decreaseBpm,
        togglePlay,
        handleBpm,
        handleTimeSignatureAmountOfBeatsPerBar,
        handleTimeSignatureBeatUnit,
    } = props

    return (<>
        <div >
            <div >
                <h4 > Metronome </h4>
                <h5 > Practice. Practice. Practice.</h5>
                <MetronomeBeatDisplay beat={beat} timeSignature={timeSignature}/>
                <p > Controls: </p>
                <div >
                    <label>BPM</label>
                    <input type="number" value={bpm} onChange={handleBpm} max={300} />
                    <label htmlFor="amountOfBeatsPerBar"> Time Signature </label>
                    <input type="number" value={timeSignature.amountOfBeatsPerBar} onChange={handleTimeSignatureAmountOfBeatsPerBar} max={128} />
                    <input type="number" value={timeSignature.beatUnit} onChange={handleTimeSignatureBeatUnit} max={128} />
                </div>
                <button onClick={increaseBpm}> +5 </button>
                <button onClick={decreaseBpm}> -5 </button>
                <button onClick={togglePlay}>{isPlaying ? "Stop" : "Play"}</button>
                {/* <button onClick={increaseBpm}> Tap </button> */}
            </div>
        </div>
    </>)
}

export const MetronomePedal = metronomeEnhancer(MetronomeComponent)