import { RequiredFieldValidation } from './required-field-validation'
import { MissingParamError } from '@/presentation/errors'

const makeSut = (): RequiredFieldValidation => {
  return new RequiredFieldValidation('any_field')
}

describe('RequiredField Validation', () => {
  test('Should return a MissingParamErro if validation fails', () => {
    const sut = makeSut()
    const error = sut.validate({ name: 'any_name' })
    expect(error).toEqual(new MissingParamError('any_field'))
  })

  test('Should not return a MissingParamErro if validation succeeds', () => {
    const sut = makeSut()
    const error = sut.validate({ any_field: 'any_name' })
    expect(error).toBeFalsy()
  })
})
