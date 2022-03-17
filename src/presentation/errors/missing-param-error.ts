export class MissingParamError extends Error {
  constructor (paramName: string) {
    super(`Missing param: ${paramName}`)
    this.name = 'missingParamName'
  }
}
export class InvalidParamError extends Error {
  constructor (paramName: string) {
    super(`Invalid param: ${paramName}`)
    this.name = 'invalidParamName'
  }
}
