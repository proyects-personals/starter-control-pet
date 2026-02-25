module.exports = {
  root: true,
  extends: [
    '@react-native',             // Base de React Native
    'eslint:recommended',        // Reglas recomendadas de ESLint
    'plugin:@typescript-eslint/recommended', // Reglas de TypeScript
    'plugin:react/recommended',  // Reglas de React
    'plugin:react-hooks/recommended', // Reglas para hooks
    'plugin:prettier/recommended', // Integra Prettier para formato
  ],
  parser: '@typescript-eslint/parser', // Parser para TS
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['@typescript-eslint', 'react', 'react-hooks', 'import'],
  env: {
    es2022: true,
    node: true,
    'react-native/react-native': true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    // ✅ Buenas prácticas TS
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',

    // ✅ React y hooks
    'react/prop-types': 'off', // Usamos TS, no prop-types
    'react/react-in-jsx-scope': 'off', // React 17+
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',

    // ✅ Importaciones
    'import/order': ['warn', {
      groups: [['builtin', 'external'], 'internal', ['parent', 'sibling', 'index']],
      'newlines-between': 'always',
      alphabetize: { order: 'asc', caseInsensitive: true },
    }],

    // ✅ Estilo de código
    'no-console': 'warn',
    'semi': ['error', 'always'],
    'quotes': ['error', 'single', { avoidEscape: true }],
    'indent': ['error', 2],
    'comma-dangle': ['error', 'always-multiline'],
    'object-curly-spacing': ['error', 'always'],
    'array-bracket-spacing': ['error', 'never'],

    // ✅ React Native específico
    'react-native/no-inline-styles': 'warn',
    'react-native/split-platform-components': 'warn',
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'no-undef': 'off', // TS maneja los tipos
      },
    },
  ],
};
