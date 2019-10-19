module.exports = {
  rootDir: '../../',
  roots: ['<rootDir>', '<rootDir>/app/api'],
  collectCoverageFrom: ['<rootDir>/app/api/**/*.{js,jsx,ts,tsx}'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
  },
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(js|jsx|ts|tsx)$'],
  testMatch: ['<rootDir>/app/api/**/*.(spec|test).{js,jsx,ts,tsx}'],
  testEnvironment: 'node',
}
