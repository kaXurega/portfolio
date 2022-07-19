const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig = {
  roots: ['<rootDir>/'],
  moduleDirectories: ['node_modules', '<rootDir>/src'],
  testEnvironment: 'jest-environment-jsdom',
  collectCoverageFrom: [
    '!**/_*.tsx',
    '!**/*.d.ts',
    '!**/node_modules/**',
    '!**/.next/**',
    '!**/coverage/**',
    '!**/public/**',
    '!**/__tests__/**',
    '!**/*rc',
    '!**/*.json',
  ],
};

module.exports = createJestConfig(customJestConfig);
