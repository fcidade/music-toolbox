import React from "react";
import { Button } from "../../common";


export const AnswerOptions = ({ avaliableAnswerOptions, handleOptionClick, isPlaying }) => {
    return (
        <div className="options row">
            {avaliableAnswerOptions.map(note => (
                <span className="col-6 col-md-2 p-1">
                    <Button
                        onClick={handleOptionClick}
                        disabled={!isPlaying}
                        text={note}
                        fullWidth />
                </span>
            ))}
        </div>
    );
};
