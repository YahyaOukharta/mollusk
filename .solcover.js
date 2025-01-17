module.exports = {
  norpc: true,
  testCommand: 'node ../node_modules/.bin/hardhat --show-stack-traces test --network coverage',
  compileCommand: 'node ../node_modules/.bin/hardhat --show-stack-traces compile --network coverage',
  buildDirPath: '/artifacts',
  skipFiles: [
    'Migrations.sol',
    'Token.sol',
    'oz',
    'gnosis-safe'
  ]
}
