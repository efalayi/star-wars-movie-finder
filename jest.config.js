module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  moduleNameMapper: {
    '\\@/scss/*': '<rootDir>/config/jest/styleMock.js'
  }
};
