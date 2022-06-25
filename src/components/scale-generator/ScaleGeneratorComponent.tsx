import { Scale } from "@/lib/scale"
import { allScaleCategories, ScaleCategory } from "@/lib/scale-category"
import React, { useEffect, useState } from "react"
import {  Note } from "../../lib/note"
import { Section, Select, SelectOption } from "../common"

export const ScaleGeneratorComponent = () => {

    const [rootNote, setRootNote] = useState(Note.A)
    const [scaleCategory, setScaleCategory] = useState(ScaleCategory.Major)
    const [scale, setScale] = useState(new Scale(rootNote, scaleCategory))

    useEffect(() => {
        setScale(new Scale(rootNote, scaleCategory))
    }, [rootNote, scaleCategory])

    const handleSetRootNote = (e) => setRootNote(new Note(e.target.value))
    const handleSetScaleCategory = (e) => setScaleCategory(e.target.value)

    const notes = Note.allNotes()
    const scaleCategories = allScaleCategories()

    return <Section title="Scale Generator">
        <span className="fs-3 text-primary">{scale.displayNotes().join(' ')}</span>
        <div className="row">
            <span className="fs-5">Select scale root</span>
            <Select value={rootNote} onChange={handleSetRootNote}>
                {notes.map(({note}) => (
                    <SelectOption value={note}>{note}</SelectOption>
                ))}
            </Select>
        </div>
        <div className="row">
            <span className="fs-5">Select scale category</span>
            <Select value={scaleCategory} onChange={handleSetScaleCategory}>
                {scaleCategories.map(scaleCategory => (
                    <SelectOption value={scaleCategory}>{scaleCategory}</SelectOption>
                ))}
            </Select>
        </div>
    </Section>
}

// TODO: 
//  - Flats or sharps, not both
//  - Not let users choose no scale or just put a message bellow
//  - Save preferences on local storage