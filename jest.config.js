export default {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  testPathIgnorePatterns: ["dist"],
  resolver: "jest-ts-webcompat-resolver",
};
