import paths from './paths'
import components from './components'

import schemas from './schemas'

export default {
  openapi: '3.0.0',
  info: {
    title: 'Clean Architecture Study',
    description: 'API curso para estudo de arquitetura de software',
    version: '1.0.0'
  },
  license: {
    name: 'ISC',
    url: 'https://opensource.org/licenses/ISC'
  },
  servers: [{
    url: '/api'
  }],
  tags: [{
    name: 'Login'
  }, {
    name: 'Enquete'
  }],
  paths,
  schemas,
  components
}
