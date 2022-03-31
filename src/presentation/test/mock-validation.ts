import { Validation } from '@/presentation/protocols'

export const mockValidation = (): Validation => {
  class ValidationStub implements Validation {
    validate (input: any): Error {
      return null as any as Error
    }
  }

  return new ValidationStub()
}
