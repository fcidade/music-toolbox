module.exports = {
  collectCoverageFrom: [
    '<rootDir>/src/**/*.ts',
    '<rootDir>/src/**/*.tsx',
    '!<rootDir>/src/main/**'
  ],
  coverageDirectory: 'coverage',
  coverageProvider: 'babel',
  globals: {
    'ts-jest': {
      isolatedModules: true
    }
  },
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/src/$1'
  },
  testEnvironment: 'jest-environment-node',
  transform: {
    '.+\\.ts$': 'ts-jest',
    '.+\\.tsx$': 'ts-jest',
  },
}
