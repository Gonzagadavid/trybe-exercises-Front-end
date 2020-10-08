/**
 * @type {import('@stryker-mutator/api/core').StrykerOptions}
 */
module.exports = {
  $schema: "./node_modules/@stryker-mutator/core/schema/stryker-schema.json",
  _comment:
    "This config was generated using a preset. Please see the handbook for more information: https://github.com/stryker-mutator/stryker-handbook/blob/master/stryker/guides/react.md#react",
  //testRunner: "jest",
  testRunner: "command",
  commandRunner: {
    command: "CI=true npm test 'src/tests/App.test.js'"
  },
  mutate: ['src/App.js?(x)', 'src/Digimon.js?(x)'],
  reporters: ["progress", "clear-text", "html"],
  mutator: {
    name: "javascript",
    excludedMutations: [
      "ArithmeticOperator",
      "ArrayDeclaration",
      "ArrowFunction",
      "BlockStatement",
      "BooleanLiteral",
      "ConditionalExpression",
      "EqualityOperator",
      "LogicalOperator",
      "ObjectLiteral",
      "UnaryOperator",
      "UpdateOperator"
    ]
  },
  coverageAnalysis: "off",
  jest: {
    projectType: "create-react-app",
  },
};
