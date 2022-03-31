import { loginPah } from './paths/login-path'
import { accountSchema } from './schemas/account-schema'
import { loginParamsSchema } from './schemas/login-params-schema'

export default {
  openapi: '3.0.0',
  info: {
    title: 'Clean Architecture Study',
    description: 'API curso para estudo de arquitetura de software',
    version: '1.0.0'
  },
  servers: [{
    url: '/api'
  }],
  tags: [{
    name: 'Login'
  }],
  paths: {
    '/login': loginPah
  },
  schemas: {
    account: accountSchema,
    loginParams: loginParamsSchema
  }
}
