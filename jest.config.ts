import { Config } from "@jest/types"

const jestConfig: Config.InitialOptions = {
  coveragePathIgnorePatterns: ["<rootDir>/node_modules", "<rootDir>/test"],
  moduleFileExtensions: ["ts", "js"],
  testMatch: ["**/*.spec.ts"],
  testEnvironment: "node",
  transform: {
    "^.+\\.(ts|tsx)$": [
      "ts-jest",
      {
        tsconfig: "tsconfig.json",
        isolatedModules: true,
      },
    ],
  },
}

export default jestConfig
