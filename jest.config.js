/**
 * @type {import("@jest/types").Config.InitialOptions}
 */
module.exports = {
  coveragePathIgnorePatterns: ["<rootDir>/node_modules", "<rootDir>/test"],
  moduleFileExtensions: ["ts", "js"],
  testMatch: ["**/*.spec.ts"],
  testEnvironment: "node",
}
