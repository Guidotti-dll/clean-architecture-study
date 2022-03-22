import { MissingParamError } from '../../errors'
import { Validation } from './validation'
import { ValidationComposite } from './validation-composite'

describe('Validation Composite', () => {
  const makeSut = (): ValidationComposite => {
    class ValidationStub implements Validation {
      validate (input: any): Error {
        return new MissingParamError('field')
      }
    }

    return new ValidationComposite([
      new ValidationStub()
    ])
  }

  test('Should return an error if any validation fails ', () => {
    const sut = makeSut()
    const error = sut.validate({ field: 'any_value' })

    expect(error).toEqual(new MissingParamError('field'))
  })
})
