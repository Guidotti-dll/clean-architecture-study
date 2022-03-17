import { MissingParamError } from '../errors/missing-param-error'
import { HttpRequest, httpResponse } from '../prottocols/http'

export class SignUoController {
  handle (httpRequest: HttpRequest): httpResponse {
    if (!httpRequest.body.name) {
      return {
        body: new MissingParamError('name'),
        statusCode: 400
      }
    }
    if (!httpRequest.body.email) {
      return {
        body: new MissingParamError('email'),
        statusCode: 400
      }
    }

    return {
      statusCode: 500,
      body: {}
    }
  }
}
