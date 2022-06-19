import React from "react";
import { Button, Hide, Show } from "../../common";
import { AnswerOptions } from "./AnswerOptions";


export const GamePanel = ({ scaleCategory, notesDisplayed, avaliableAnswerOptions, handleOptionClick, isPlaying, handleTryAgain, isSuccess, isFailure, guessedRight, guessedWrong }) => {
    return (
        <div className="container-fluid p-0">
            <h1 className="text-primary ">{notesDisplayed}</h1>
            <h3 className="text-info ">{scaleCategory} scale</h3>
            <AnswerOptions
                avaliableAnswerOptions={avaliableAnswerOptions}
                handleOptionClick={handleOptionClick}
                isPlaying={isPlaying} />
            <hr />
            <div className="row">
                <Hide when={isPlaying}>
                    <Button
                        onClick={handleTryAgain}
                        text="Try again" />
                </Hide>
                <Show when={isSuccess}><span className="fs-2 badge bg-success full-width mt-2">Right!</span></Show>
                <Show when={isFailure}><span className="fs-2 badge bg-danger full-width mt-2">Wrong!</span></Show>
            </div>
            <hr />
            <span>Guessed right: {guessedRight} </span> <br />
            <span>Guessed wrong: {guessedWrong}</span> <br />
            <span>You guessed: {guessedRight + guessedWrong}</span> <br />
        </div>
    );
};
