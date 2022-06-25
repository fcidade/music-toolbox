import { Note } from "@/lib/note"
import { Scale } from "@/lib/scale"
import { ScaleCategory } from "@/lib/scale-category"
import { GameState } from "./common"

export class GuessTheNoteMissingScaleGame {
    state: GameState
    scale: Scale
    indexOfTheNoteToBeHidden: number
    guessedRight: number = 0
    guessedWrong: number = 0
    observers: GuessTheNoteMissingScaleGame.ObserverFn[] = []

    constructor(private config: GuessTheNoteMissingScaleGame.Config = {}) {
        this.newRound()
    }

    setConfig(config: GuessTheNoteMissingScaleGame.Config) {
        this.config = config
        this.newRound()
        this.notifyObservers()
    }

    newRound() {
        this.scale = this.getRandomScale()
        this.state = GameState.Playing

        this.indexOfTheNoteToBeHidden = Math.floor(Math.random() * this.scale.getNotes().length)
        this.notifyObservers()
    }

    private getRandomScale(): Scale {
        const { allowedScaleCategories, allowedNotes } = this.config
        return Scale.getRandomScaleCustom(allowedScaleCategories, allowedNotes)
    }

    validateInput(input: Note) {
        const note = this.scale.getNote(this.indexOfTheNoteToBeHidden)
        if (input === note) {
            this.state = GameState.Success
            this.guessedRight++
        } else {
            this.state = GameState.Fail
            this.guessedWrong++
        }
        this.notifyObservers()
    }

    present(): GuessTheNoteMissingScaleGame.Presenter {
        const notesDisplayed = this.scale.getNotesAsStrings()
        const hiddenNote = new Note(notesDisplayed[this.indexOfTheNoteToBeHidden])
        notesDisplayed[this.indexOfTheNoteToBeHidden] = "_"
        const avaliableAnswerOptions = Note.allNotes()
        return {
            state: this.state,
            avaliableAnswerOptions,
            scale: this.scale,
            notesDisplayed,
            hiddenNote,
            guessedRight: this.guessedRight,
            guessedWrong: this.guessedWrong,
        }
    }

    // Observers

    addObserver(fn: (presenter: GuessTheNoteMissingScaleGame.Presenter) => void) {
        this.observers.push(fn)
    }

    private notifyObservers() {
        this.observers.forEach(fn => fn(
            this.present()
        ))
    }
}


export namespace GuessTheNoteMissingScaleGame {
    export type Config = {
        allowedScaleCategories?: ScaleCategory[]
        allowedNotes?: Note[]
    }

    export type Presenter = {
        state: GameState
        avaliableAnswerOptions: Note[]
        scale: Scale
        notesDisplayed: string[]
        hiddenNote: Note
        guessedRight: number
        guessedWrong: number
    }

    export type ObserverFn = ((presenter: GuessTheNoteMissingScaleGame.Presenter) => void)
}