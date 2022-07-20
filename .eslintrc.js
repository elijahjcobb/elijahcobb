const { join, resolve } = require("path");

const project = resolve(__dirname, "tsconfig.json");

module.exports = {
  root: true,
  extends: [
    "@vercel/style-guide/eslint/react",
    "@vercel/style-guide/eslint/next",
    "@vercel/style-guide/eslint/typescript",
  ].map(require.resolve),
  parserOptions: {
    project,
  },
  settings: {
    "import/resolver": {
      typescript: {
        project,
      },
    },
  },
  overrides: [
    {
      files: [`pages/**`],
      rules: {
        // This isn't supported in Next.js today.
        // https://github.com/vercel/next.js/discussions/35725
        "import/no-default-export": 0,
      },
    },
    {
      files: ["*"],
      rules: {
        "jsx-a11y/anchor-is-valid": 0,
        "@typescript-eslint/no-unsafe-assignment": 0,
      },
    },
  ],
};
