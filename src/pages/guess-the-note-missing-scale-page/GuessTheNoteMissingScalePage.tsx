import { GuessTheNoteMissingScaleGameComponent } from "@/components/guess-the-note-missing-scale-game"
import { ScaleGeneratorComponent } from "@/components/scale-generator"
import React from "react"

export const GuessTheNoteMissingScalePage = () => {



    return (
        <div className="container">
            <aside className="pt-2">
                <span className="fs-6">
                    Music Toolbox - <a href="https://www.instagram.com/fran.city/" target="_blank">@fran.city</a>
                </span>
            </aside>
            <hr />
            {/* <GuessTheNoteMissingScaleGameComponent /> */}
            <hr/>
            <ScaleGeneratorComponent/>

            {/* TODO: 
                - Add some king of aside with a checkbox to witch "pedals" you want in the screen?
            */}
        </div >
    )
}