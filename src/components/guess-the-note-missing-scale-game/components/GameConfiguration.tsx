import React from "react";
import { Checkbox } from "../../common";


export const GameConfiguration = ({ avaliableRootNotes, avaliableScaleCategories, handleAllowedNotesChecked, handleAllowedScaleCategoriesChecked, isNoteAlreadyChecked, isScaleCategoryAlreadyChecked }) => {
    return (
        <div>
            <div>
                <span>Scales:</span> <br />
                {avaliableRootNotes.map(note => (
                    <Checkbox
                        label={note}
                        value={note}
                        onChange={handleAllowedNotesChecked}
                        checked={isNoteAlreadyChecked(note)} />
                ))}
            </div>
            <div>
                <span>Scale Categories:</span> <br />
                {avaliableScaleCategories.map(category => (
                    <Checkbox
                        label={category}
                        value={category}
                        onChange={handleAllowedScaleCategoriesChecked}
                        checked={isScaleCategoryAlreadyChecked(category)} />
                ))}
            </div>
        </div>
    );
};
