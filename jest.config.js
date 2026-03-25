module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  transform: {
    '^.+\\.(ts|tsx)$': [
      'ts-jest',
      {
        tsconfig: {
          jsx: 'react-jsx',
          esModuleInterop: true,
          allowJs: true,
          strict: true,
          module: 'esnext',
          moduleResolution: 'bundler',
          target: 'es2019',
          lib: ['dom', 'dom.iterable', 'es2020'],
          skipLibCheck: true,
          isolatedModules: true,
        },
      },
    ],
  },
  coverageProvider: 'v8',
}
