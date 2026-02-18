module.exports = {
    roots: ['<rootDir>/src'],
    collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}', '!src/**/*.d.ts', '!src/mocks/**'],
    coveragePathIgnorePatterns: [],
    /* setup after, when needed for testing context and mocking libraries */
    // setupFilesAfterEnv: ['./config/jest/setupTests.js'],
    testEnvironment: 'jsdom',
    modulePaths: ['<rootDir>/src'],
    transform: {
        '^.+\\.(ts|js|tsx|jsx)$': '@swc/jest',
    },
    transformIgnorePatterns: [
        '[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs|cjs|ts|tsx)$',
        '^.+\\.module\\.(css|sass|scss)$',
    ],
    modulePaths: ['<rootDir>/src'],
    moduleNameMapper: {
        '^react-native$': 'react-native-web',
        '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
    },
    moduleFileExtensions: [
        'tsx',
        'ts',
        'js',
        'json',
        'jsx',
    ],
    resetMocks: true,
}
