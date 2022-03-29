
import { EmailInUseError } from '@/presentation/errors'
import { badRequest, forbidden, ok, serverError } from '@/presentation/helpers/http/http-helper'
import { Controller, HttpRequest, HttpResponse, AddAccount, Validation, Authentication } from './signup-controller-protocols'

export class SignUpController implements Controller {
  constructor (
    private readonly addAccount: AddAccount,
    private readonly authentication: Authentication,
    private readonly validation: Validation

  ) {
    this.authentication = authentication
    this.addAccount = addAccount
    this.validation = validation
  }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(httpRequest.body)
      if (error) {
        return badRequest(error)
      }

      const { name, email, password } = httpRequest.body

      const account = await this.addAccount.add({
        name, email, password
      })

      if (!account) {
        return forbidden(new EmailInUseError())
      }

      const accessToken = await this.authentication.auth({ email, password })

      return ok({ accessToken })
    } catch (error) {
      return serverError(error as Error)
    }
  }
}
