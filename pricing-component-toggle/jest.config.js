module.exports = {
  verbose: true,
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/__test__/helper/setup.js"],
  transformIgnorePatterns: [
    '/node_modules/(?!(sucrase)/)',
  ],
  transform: {
    '^.+\\.(js|jsx|ts|tsx|mjs)$': 'babel-jest',
  }
}