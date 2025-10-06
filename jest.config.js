module.exports = {
  testEnvironment: 'node',
  collectCoverage: true,
  coverageDirectory: 'coverage',
  collectCoverageFrom: [
    'src/**/*.js',
    '!src/index.js'  
  ],
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
};
