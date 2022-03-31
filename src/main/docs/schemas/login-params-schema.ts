export const loginParamsSchema = {
  type: 'object',
  properties: {
    email: {
      type: 'string',
      format: 'email',
      description: 'Email do usuário'
    },
    password: {
      type: 'string',
      description: 'Senha do usuário'
    }
  },
  required: ['email', 'password']
}
