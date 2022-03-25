import { DbAddAccount } from '../../../../data/usecases/add-account/db-add-account'
import { BcryptAdapter } from '../../../../infra/criptography/bcrypter-adapter/bcrypt-adapter'
import { AccountMongoRepository } from '../../../../infra/db/mongodb/account/account-mongo-repository'
import { AddAccount } from '../../../../domain/usecases/add-account'

export const makeDbAddAccount = (): AddAccount => {
  const salt = 12
  const accountMongoRepository = new AccountMongoRepository()
  const bcryptAdapter = new BcryptAdapter(salt)

  return new DbAddAccount(bcryptAdapter, accountMongoRepository, accountMongoRepository)
}