const config = {
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: `module`,
  },
  plugins: [
   `import`,
  ],
  rules: {
    "import/no-cycle": [
      `error`,
      {
        ignoreExternal: true,
      },
    ],
  },
};

module.exports = config;
