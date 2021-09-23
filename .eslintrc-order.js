const config = {
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: `module`,
  },
  plugins: [
   `import`,
  ],
  rules: {
    "import/order": `error`,
  },
};

module.exports = config;
