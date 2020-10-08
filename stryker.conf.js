/**
 * @type {import('@stryker-mutator/api/core').StrykerOptions}
 */
module.exports = {
  _comment:
    "This config was generated using a preset. Please see the handbook for more information: https://github.com/stryker-mutator/stryker-handbook/blob/master/stryker/guides/react.md#react",
  testRunner: "jest",
  mutate: [
    "src/App.js"
  ],
  commandRunner: {
    "command": "CI=true npm test 'src/App.test.js'"
  },
  // excludedMutations: [
  //   "ArithmeticOperator",
  //   "ArrayDeclaration",
  //   "ArrowFunction",
  //   "BlockStatement",
  //   "BooleanLiteral",
  //   "ConditionalExpression",
  //   "EqualityOperator",
  //   "LogicalOperator",
  //   "ObjectLiteral",
  //   "UnaryOperator",
  //   "UpdateOperator"
  // ],
  reporters: ["progress", "clear-text", "html"],
  coverageAnalysis: "off",
  jest: {
    projectType: "create-react-app",
  },
};
