import 'babel-polyfill'
import { handleSubmit } from '../js/formHandler'

// Resources helped me write this test
// https://www.youtube.com/watch?v=FgnxcUQ5vho
// matching and validate code expectation
// >>>> https://jestjs.io/docs/using-matchers

describe('check handleSubmit function defined or not', () => {
    test('handleSubmit to be defined', () => {
        expect(handleSubmit).toBeDefined() 
    })
})
