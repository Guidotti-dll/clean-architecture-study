import { SignUpController } from '../../../../presentation/controllers/SignUp/signup-controller'
import { Controller } from '../../../../presentation/protocols'
import { makeSignUpValidation } from './signup-validation-factory'
import { makeDbAuthentication } from '../../usecases/authentication/db-auhentication-factory'
import { makeDbAddAccount } from '../../usecases/add-account/db-add-account-factory.'
import { makeLogControllerDecorator } from '../../decorators/log-controller-decorator-factory'

export const makeSignUpController = (): Controller => {
  const controller = new SignUpController(makeDbAddAccount(), makeDbAuthentication(), makeSignUpValidation())
  return makeLogControllerDecorator(controller)
}
