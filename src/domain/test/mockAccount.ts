import { AccountModel } from '@/domain/models/account'
import { AddAccountParams } from '@/domain/usecases/account/add-account'
import { AuthenticationParams } from '@/domain/usecases/account/authentication'

export const mockAuthentication = (): AuthenticationParams => ({
  email: 'any_email@mail.com',
  password: 'any_password'
})

export const mockAccountParams = (): AddAccountParams => Object.assign({}, mockAuthentication(), {
  name: 'any_name'
})

export const mockAccountModel = (): AccountModel => Object.assign({}, mockAccountParams(), {
  id: 'any_id'
})
