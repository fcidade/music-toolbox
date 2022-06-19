import { allNotes, Note } from "@/lib/note"
import { Scale } from "@/lib/scale"
import { allScaleCategories, ScaleCategory } from "@/lib/scale-category"
import { oneOf } from "@/utils"

export enum GameState {
    Playing,
    Success,
    Fail
}

export class GuessTheNoteMissingScaleGame {
    observers: ((presenter: GuessTheNoteMissingScaleGame.Presenter) => void)[] = []
    state: GameState
    scale: Scale
    indexOfTheNoteToBeHidden: number
    guessedRight: number = 0
    guessedWrong: number = 0

    constructor(private config: GuessTheNoteMissingScaleGame.Config = {}) {
        this.newRound()
    }

    setConfig(config: GuessTheNoteMissingScaleGame.Config) {
        this.config = config
        this.newRound()
        this.notifyObservers()
    }

    notifyObservers() {
        this.observers.forEach(fn => fn(
            this.present()
        ))
    }

    addObserver(fn: (presenter: GuessTheNoteMissingScaleGame.Presenter) => void) {
        this.observers.push(fn)
    }

    newRound() {
        this.scale = this.getRandomScale()

        this.state = GameState.Playing
        this.indexOfTheNoteToBeHidden = Math.floor(Math.random() * this.scale.getNotes().length)
        this.notifyObservers()
    }

    getRandomScale() {
        const { allowedScaleCategories, allowedNotes } = this.config
        const notes = allNotes()
            .filter(note => allowedNotes ? allowedNotes.includes(note) : true)
        const scaleCategories = allScaleCategories()
            .filter(category => allowedScaleCategories ? allowedScaleCategories.includes(category) : true)
            
        const randomRoot = oneOf(notes)
        const randomScaleCategory = oneOf(scaleCategories)
        return new Scale(randomRoot, randomScaleCategory)
    }

    validateInput(input: Note) {
        const note = this.scale.getNotes()[this.indexOfTheNoteToBeHidden]
        if ((input === note)) {
            this.state = GameState.Success
            this.guessedRight++
        } else {
            this.state = GameState.Fail
            this.guessedWrong++
        }
        this.notifyObservers()
    }

    present(): GuessTheNoteMissingScaleGame.Presenter {
        const showNotes = this.scale.getNotes().map(n => String(n))
        const hiddenNote = showNotes[this.indexOfTheNoteToBeHidden]
        showNotes[this.indexOfTheNoteToBeHidden] = "_"
        const noteOptions = allNotes()
        return {
            state: this.state,
            noteOptions,
            scale: this.scale,
            showNotes,
            hiddenNote,
            guessedRight: this.guessedRight,
            guessedWrong: this.guessedWrong,
        }
    }
}


export namespace GuessTheNoteMissingScaleGame {
    export type Config = {
        allowedScaleCategories?: ScaleCategory[]
        allowedNotes?: Note[]
    }

    export type Presenter = {
        state: GameState
        noteOptions: string[]
        scale: Scale
        showNotes: string[]
        hiddenNote: string
        guessedRight: number
        guessedWrong: number
    }
}