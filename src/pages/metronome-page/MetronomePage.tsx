import { MetronomePedal } from "@/components/metronome"
import { ScaleGeneratorComponent } from "@/components/scale-generator"
import React from "react"

export const MetronomePage = () => {
    return (<div>
        <aside>
            aside
        </aside>
        <hr />
        <div>
            <MetronomePedal/>
            <hr />
            <ScaleGeneratorComponent/>
        </div>
    </div>)
}