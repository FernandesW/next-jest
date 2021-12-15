module.exports = {
    roots: ['tests'],
    transform: {
        '\\.(js|jsx)?$': 'babel-jest',
    },
    testMatch: ['**.test.js'], 
    testEnvironment: 'jsdom',
    moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
    testPathIgnorePatterns: ['/node_modules/', '/public/'],
    setupFilesAfterEnv: [
        './jest.setup.js'
    ],
    moduleNameMapper: {
        "\\.(css|less|scss|sass)$": "identity-obj-proxy"
    },
    
};