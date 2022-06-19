import { allNotes, Note } from "@/lib/note"
import { Scale } from "@/lib/scale"
import { ScaleCategory } from "@/lib/scale-category"
import { GameState, GuessTheNoteMissingScaleGame } from "./guess-the-note-missing-scale-game"

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
        const { sut } = makeSut()
        sut.newRound()

        const presenter = sut.present()
        expect(presenter.state).toEqual(GameState.Playing)
        expect(presenter.scale.getRoot()).toEqual(Note.B)
        expect(presenter.scale.getCategory()).toEqual(ScaleCategory.Minor)
        expect(presenter.hiddenNote).toEqual(Note.Db)
        expect(presenter.noteOptions).toEqual(allNotes())
        expect(presenter.showNotes).toEqual(["B", "_", "D", "E", "F#/Ab", "G", "A"])
    })
})