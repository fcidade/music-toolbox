import React, { useEffect, useState } from "react"
import { TimeSignature } from "@/lib/metronome"

type MetronomeBeatReactorProps = {
    beat: number
    timeSignature: TimeSignature
}

export const MetronomeBeatDisplay = ({ beat, timeSignature }: MetronomeBeatReactorProps) => {

    let display = ''
    for (let i = 0; i < timeSignature.amountOfBeatsPerBar; i++) {
        display += i === beat ? 'o' : '.'
    }

    return (
        <div>
            {display}
        </div>
    )
}