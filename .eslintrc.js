module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['@typescript-eslint'],
  rules: {
    // Reglas adicionales de ESLint y TypeScript
    '@typescript-eslint/explicit-module-boundary-types': 'off', // Permite omitir tipos de retorno explícitos en funciones
    '@typescript-eslint/no-explicit-any': 'off', // Permite el uso de "any"
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }], // Ignora variables no usadas con el prefijo "_"
    'prettier/prettier': [
      'error',
      { singleQuote: true, trailingComma: 'all', printWidth: 100 },
    ],
  },
};
