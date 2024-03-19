module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'unused-imports'],
  extends: ['eslint:recommended', 'next/core-web-vitals', 'prettier'],
  rules: {
    'unused-imports/no-unused-imports': 'warn', // Enable with 'error' for fixes
    semi: 'error', // Add other rules here as needed (e.g., semicolons)
    quotes: ['error', 'single'], // Enforce single quotes
    'no-console': 'warn', // Warn for console logs (adjust severity),
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parserOptions: {
        project: ['./tsconfig.json'],
        tsconfigRootDir: __dirname,
      },
      extends: [
        'plugin:@typescript-eslint/recommended',
        // 'plugin:@typescript-eslint/recommended-requiring-type-checking',

        //declaring 'next/core-web-vitals' and 'prettier' again in case
        //the two plugin:... configs above overrode any of their rules
        //Also, 'prettier' needs to be last in any extends array
        'next/core-web-vitals',
        'prettier',
      ],
    },
  ],
};
