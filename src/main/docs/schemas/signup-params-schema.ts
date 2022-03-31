export const signUpParamsSchema = {
  type: 'object',
  properties: {
    name: {
      type: 'string',
      description: 'Nome do usuário'
    },
    email: {
      type: 'string',
      format: 'email',
      description: 'Email do usuário'
    },
    password: {
      type: 'string',
      description: 'Senha do usuário'
    },
    passwordConfirmation: {
      type: 'string',
      description: 'Confirmação da senha do usuário'
    }
  },
  required: ['name', 'email', 'password', 'passwordConfirmation']
}
