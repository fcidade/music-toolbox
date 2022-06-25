import { Note } from "@/lib/note"
import { ScaleCategory } from "@/lib/scale-category"
import { GuessTheNoteMissingScaleGame } from "./guess-the-note-missing-scale-game"
import { GameState } from "./common"

const makeSut = () => {
    const sut = new GuessTheNoteMissingScaleGame()
    return {
        sut
    }
}

describe('GuessTheNoteMissingScaleGame', () => {


    beforeEach(() => {
        jest.spyOn(global.Math, 'random').mockReturnValue(.2);
    });

    afterEach(() => {
        jest.spyOn(global.Math, 'random').mockRestore();
    })

    test('should create a new round with random values', () => {
        // const { sut } = makeSut()
        // sut.newRound()

        // expect(sut.indexOfTheNoteToBeHidden).toEqual(1)

        // const presenter = sut.present()
        // expect(presenter.state).toEqual(GameState.Playing)
        // expect(presenter.scale.getRoot()).toEqual(Note.B)
        // expect(presenter.scale.getCategory()).toEqual(ScaleCategory.Minor)
        // expect(presenter.hiddenNote).toEqual(Note.Db)
        // expect(presenter.avaliableAnswerOptions).toEqual(Note.allNotes())
        // expect(presenter.notesDisplayed).toEqual(["B", "_", "D", "E", "F#/Gb", "G", "A"])
    })

    // test('should validate input, change the game state and increment counters', () => {
    //     const { sut } = makeSut()
    //     sut.newRound()
    //     expect(sut.state).toEqual(GameState.Playing)

    //     sut.validateInput(Note.Db)

    //     expect(sut.state).toEqual(GameState.Success)
    //     expect(sut.guessedRight).toEqual(1)
    //     expect(sut.guessedWrong).toEqual(0)

    //     sut.newRound()
    //     expect(sut.state).toEqual(GameState.Playing)

    //     sut.validateInput(Note.C)

    //     expect(sut.state).toEqual(GameState.Fail)
    //     expect(sut.guessedRight).toEqual(1)
    //     expect(sut.guessedWrong).toEqual(1)
    // })
})