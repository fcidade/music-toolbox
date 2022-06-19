import React, { useEffect, useState } from "react"
import { allNotes, Note } from "@/lib/note"
import { GuessTheNoteMissingScaleGame, GameState } from "@/games/guess-the-note-missing-scale-game"
import { allScaleCategories, ScaleCategory } from "@/lib/scale-category"
import { Button, Hide, Section, Show } from "../common"

export const GamePanel = ({scaleCategory, showNotes, noteOptions, handleOptionClick, areOptionsDisabled, isPlaying, handleTryAgain, isSuccess, isFailure, guessedRight, guessedWrong}) => {
    return (
        <div className="container-fluid p-0">
            <h1 className="nes-text is-primary">{showNotes}</h1>
            <h3>Scale type: {scaleCategory}</h3>

            <div className="options row">
                {noteOptions.map(note => (
                    <span className="col-6 col-md-2 p-1">
                    <Button
                        onClick={handleOptionClick}
                        disabled={areOptionsDisabled}
                        text={note}
                    />
                    </span>
                ))}
            </div>
            <hr />
            <div className="row">
                <Hide when={isPlaying}>
                    <Button
                        onClick={handleTryAgain}
                        text="Try again"
                        disabled={false}
                    // REMOVE IT 
                    />
                    <hr />
                </Hide>
                <Show when={isSuccess}><span className="fs-2 badge bg-success full-width">Right!</span></Show>
                <Show when={isFailure}><span className="fs-2 badge bg-danger full-width">Wrong!</span></Show>
            </div>
            <hr />
            <span>Guessed right: {guessedRight} </span> <br/>
            <span>Guessed wrong: {guessedWrong}</span> <br/>
            <span>You guessed: {guessedRight + guessedWrong}</span> <br/>
        </div>
    )
}

export const GuessTheNoteMissingScaleGameComponent = () => {

    const [game] = useState(new GuessTheNoteMissingScaleGame())
    const [gamePresentation, setGamePresentation] = useState(game.present())
    const [allowedNotesCheckboxes, setAllowedNotes] = useState(allNotes().reduce((prev, curr) => ({ ...prev, [curr]: true }), {}))
    const [allowedScaleCategoriesCheckboxes, setAllowedScaleCategories] = useState({[ScaleCategory.Major]: true})

    const {
        state,
        noteOptions,
        scale,
        showNotes,
        guessedRight,
        guessedWrong
    } = gamePresentation


    useEffect(() => {
        game.addObserver(presenter => setGamePresentation(presenter))
        // game.addObserver(console.log)
    })

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

    const isPlaying = state === GameState.Playing
    const areOptionsDisabled = state !== GameState.Playing
    const isSuccess = state === GameState.Success
    const isFailure = state === GameState.Fail
    const scaleCategory = scale.getCategory()

    return (
        <div>
            <Section title="Guess The Note Missing In The Scale">
                <GamePanel {...{scaleCategory, showNotes: showNotes.join(' '), noteOptions, handleOptionClick, areOptionsDisabled, isPlaying, handleTryAgain, isSuccess, isFailure, guessedRight, guessedWrong}}/>
            </Section>
            <Section title="Configuration">
                <div>
                    <span className="">Scales:</span> <br />
                    {
                        allNotes().map(note => (
                            <div className="form-check form-check-inline">
                                <input className="form-check-input"
                                    type="checkbox"
                                    id={`checkbox-${note}`}
                                    value={note}
                                    checked={allowedNotesCheckboxes[note]}
                                    onChange={handleAllowedNotesChecked}
                                />
                                <label className="form-check-label" htmlFor={`checkbox-${note}`} > {note}</label>
                            </div>
                        ))
                    }
                </div>
                <div>

                    <span className="">Scale Categories:</span> <br />
                    {
                        allScaleCategories().map(category => (
                            <div className="form-check form-check-inline">
                                <input className="form-check-input"
                                    type="checkbox"
                                    id={`checkbox-${category}`}
                                    value={category}
                                    checked={allowedScaleCategoriesCheckboxes[category]}
                                    onChange={handleAllowedScaleCategoriesChecked}
                                />
                                <label className="form-check-label" htmlFor={`checkbox-${category}`} > {category}</label>
                            </div>
                        ))
                    }
                </div>
            </Section>
        </div>
    )
}

// TODO: 
//  - Flats or sharps, not both
//  - Not let users choose no scale or just put a message bellow
//  - Save preferences on local storage