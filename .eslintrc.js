module.exports = {
  root: true,
  ignorePatterns: ["dist/", "*.js"],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: "tsconfig.json",
  },
  extends: ["@saberhq"],
  env: {
    node: true,
  },
};
