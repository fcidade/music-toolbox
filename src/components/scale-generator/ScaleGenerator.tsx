import { Scale } from "@/lib/scale"
import { ScaleCategory } from "@/lib/scale-category"
import React, { useState } from "react"
import { Note } from "../../lib/note"

export const noteArray = Object.values(Note)
const scaleCategoryArray = Object.values(ScaleCategory)

export const ScaleGeneratorPedal = () => {

    const [rootNote, setRootNote] = useState(Note.A)
    const [scaleCategory, setScaleCategory] = useState(ScaleCategory.Major)

    const handleSetRootNote = (e) => setRootNote(e.target.value)
    const handleSetScaleCategory = (e) => setScaleCategory(e.target.value)


    const scale = new Scale(rootNote, scaleCategory)

    return <div>
        Select scale:
        <select value={rootNote} onChange={handleSetRootNote}>
            {noteArray.map(note => (
                <option value={note}>{note}</option>
            ))}
        </select>

        Select scale category:
        <select value={scaleCategory} onChange={handleSetScaleCategory}>
            {scaleCategoryArray.map(scaleCategory => (
                <option value={scaleCategory}>{scaleCategory}</option>
            ))}
        </select>
        <br />...<br />
        Scale: {scale.getRoot()} {scale.getCategory()}<br />
        {scale.getNotes().join(' ')}
    </div>
}