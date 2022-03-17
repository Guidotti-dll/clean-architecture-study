import { MissingParamError } from '../errors/missing-param-error'
import { badRequest } from '../helpers/http-helper'
import { HttpRequest, httpResponse } from '../protocols/http'

export class SignUoController {
  handle (httpRequest: HttpRequest): httpResponse {
    const requiredFields = ['name', 'email']
    for (const field of requiredFields) {
      if (!httpRequest.body[field]) {
        return badRequest(new MissingParamError(field))
      }
    }
    return {
      statusCode: 500,
      body: new Error('internal error')
    }
  }
}
