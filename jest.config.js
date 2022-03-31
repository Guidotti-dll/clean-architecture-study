module.exports = {
  collectCoverageFrom: ['<rootDir>/src/**/*.ts',
    '!<rootDir>/src/main/*.ts',
    '!**/test/**.ts',
    '!<rootDir>/src/**/*-protocols.ts',
    '!<rootDir>/src/**/protocols/*.ts'
  ],
  coverageDirectory: 'coverage',
  coverageProvider: 'babel',
  roots: [
    '<rootDir>/src'
  ],
  preset: '@shelf/jest-mongodb',
  testEnvironment: 'node',
  transform: {
    '.+\\.ts$': 'ts-jest'
  },
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/src/$1'
  }
}
