import 'babel-polyfill'
import { validateUrl } from '../js/validateUrl'
// Resources helped me write this test
// https://www.youtube.com/watch?v=FgnxcUQ5vho
// matching and validate code expectation
// >>>> https://jestjs.io/docs/using-matchers

describe('check validateUrl function defined or not', () => {
    test('validateUrl to be defined', () => {
        expect(validateUrl).toBeDefined()
    })

    test('validateUrl function to return false for invalid url', () => {
        expect(validateUrl("some text...")).toBeFalsy()
    })

    test('validateUrl function to return true for valid url', () => {
        expect(validateUrl("https://www.udacity.com/")).toBeTruthy()
    })
})
