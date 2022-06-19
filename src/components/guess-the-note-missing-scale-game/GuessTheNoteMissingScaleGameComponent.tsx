import React, { useEffect, useState } from "react"
import { allNotes, Note } from "@/lib/note"
import { GuessTheNoteMissingScaleGame } from "@/games/guess-the-note-missing-scale-game"
import { GameState } from "@/games/common"
import { allScaleCategories, ScaleCategory } from "@/lib/scale-category"
import { Section } from "../common"
import { GameConfiguration } from "./components/GameConfiguration"
import { GamePanel } from "./components/GamePanel"

export const GuessTheNoteMissingScaleGameComponent = () => {

    const [game] = useState(new GuessTheNoteMissingScaleGame())
    const [gamePresentation, setGamePresentation] = useState(game.present())
    const [allowedNotesCheckboxes, setAllowedNotes] = useState(allNotes().reduce((prev, curr) => ({ ...prev, [curr]: true }), {}))
    const [allowedScaleCategoriesCheckboxes, setAllowedScaleCategories] = useState({ [ScaleCategory.Major]: true })

    const {
        state,
        avaliableAnswerOptions,
        scale,
        notesDisplayed,
        guessedRight,
        guessedWrong
    } = gamePresentation


    useEffect(() => {
        game.addObserver(presenter => setGamePresentation(presenter))
    }, [])

    const handleOptionClick = (e) => {
        const note = e.target.innerText as Note
        game.validateInput(note)
    }

    const handleTryAgain = () => {
        game.newRound()
    }

    const handleAllowedNotesChecked = ({ target: { checked, value } }) => {
        setAllowedNotes(allowedNotes => ({ ...allowedNotes, [value]: checked }))
    }

    const handleAllowedScaleCategoriesChecked = ({ target: { checked, value } }) => {
        setAllowedScaleCategories(allowedScaleCategories => ({ ...allowedScaleCategories, [value]: checked }))
    }

    useEffect(() => {
        const allowedNotes = Object.keys(allowedNotesCheckboxes).filter((v) => allowedNotesCheckboxes[v]) as Note[]
        const allowedScaleCategories = Object.keys(allowedScaleCategoriesCheckboxes).filter((v) => allowedScaleCategoriesCheckboxes[v]) as ScaleCategory[]
        game.setConfig({
            allowedNotes,
            allowedScaleCategories,
        })
    }, [allowedNotesCheckboxes, allowedScaleCategoriesCheckboxes])

    const isNoteAlreadyChecked = (note: Note) => {
        return allowedNotesCheckboxes[note]
    }

    const isScaleCategoryAlreadyChecked = (category: ScaleCategory) => {
        return allowedScaleCategoriesCheckboxes[category]
    }

    const avaliableRootNotes = allNotes()
    const avaliableScaleCategories = allScaleCategories()

    return (
        <div>
            <Section title="Guess The Note Missing In The Scale">
                <GamePanel 
                    scaleCategory={scale.getCategory()}
                    notesDisplayed={notesDisplayed.join(' ')}
                    avaliableAnswerOptions={avaliableAnswerOptions}
                    handleOptionClick={handleOptionClick}
                    isPlaying={state === GameState.Playing}
                    handleTryAgain={handleTryAgain}
                    isSuccess={state === GameState.Success}
                    isFailure={state === GameState.Fail}
                    guessedRight={guessedRight}
                    guessedWrong={guessedWrong}
                />
            </Section>
            <Section title="Configuration">
                <GameConfiguration
                    avaliableRootNotes={avaliableRootNotes}
                    avaliableScaleCategories={avaliableScaleCategories}
                    handleAllowedNotesChecked={handleAllowedNotesChecked}
                    handleAllowedScaleCategoriesChecked={handleAllowedScaleCategoriesChecked}
                    isNoteAlreadyChecked={isNoteAlreadyChecked}
                    isScaleCategoryAlreadyChecked={isScaleCategoryAlreadyChecked}
                />
            </Section>
        </div>
    )
}

// TODO: 
//  - Flats or sharps, not both
//  - Not let users choose no scale or just put a message bellow
//  - Save preferences on local storage