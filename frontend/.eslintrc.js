const commonEnv = {
  browser: true,
  es2021: true,
};

const commonExtends = [
  'plugin:react/recommended',
  'plugin:react-hooks/recommended',
];

const commonParserOptions = {
  ecmaFeatures: { jsx: true },
  sourceType: 'module',
};

const commonPlugins = [
  'react',
];

const commonRules = {
  'import/no-extraneous-dependencies': 'off',
  'import/prefer-default-export': 'off',
  'jsx-a11y/click-events-have-key-events': 'off',
  'jsx-a11y/label-has-associated-control': 'off',
  'jsx-a11y/no-noninteractive-element-interactions': 'off',
  'lines-between-class-members': 'off',
  'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
  'max-len': ['warn', { code: 200 }],
  'object-curly-newline': ['error', { multiline: true }],
  'react/destructuring-assignment': 'off',
  'react/jsx-filename-extension': 'off',
  'react/jsx-max-props-per-line': ['error', { maximum: 3 }],
  'react/jsx-one-expression-per-line': 'off',
  'react/require-default-props': 'off',
  'react/state-in-constructor': 'off',
  'react-hooks/exhaustive-deps': 'off',
};

module.exports = {
  // JavaScript
  parser: '@babel/eslint-parser',
  env: commonEnv,
  extends: [...commonExtends, 'airbnb'],
  parserOptions: {
    ...commonParserOptions,
    ecmaVersion: 'latest',
  },
  plugins: commonPlugins,
  rules: commonRules,
  ignorePatterns: 'build/',

  // TypeScript
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      parser: '@typescript-eslint/parser',
      env: commonEnv,
      extends: [
        ...commonExtends,
        'airbnb-typescript',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
      ],
      parserOptions: {
        ...commonParserOptions,
        project: './tsconfig.json',
      },
      plugins: [...commonPlugins, '@typescript-eslint'],
      rules: {
        ...commonRules,
        'import/extensions': 'off',
        'no-use-before-define': 'off',
        'no-void': ['error', { allowAsStatement: true }],
        'react/prop-types': 'off',
        '@typescript-eslint/ban-ts-comment': ['error', { 'ts-ignore': 'allow-with-description' }],
        '@typescript-eslint/explicit-module-boundary-types': 'error',
        '@typescript-eslint/member-delimiter-style': 'error',
        '@typescript-eslint/no-floating-promises': ['error', { ignoreVoid: true }],
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/no-use-before-define': 'error',
        '@typescript-eslint/restrict-template-expressions': ['error', { allowNullish: true }],
      },
    },
  ],
};
