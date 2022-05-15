module.exports = {
  extends: [
    'airbnb',
    'next/core-web-vitals',
    'plugin:@next/next/recommended',
  ],
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true,
  },
  parser: '@babel/eslint-parser',
  rules: {
    'array-element-newline': [
      'error',
      {
        ArrayExpression: 'consistent',
      },
    ],
    'global-require': ['off'],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'import/no-extraneous-dependencies': [
      'error',
      { devDependencies: ['**/*.test.js', '**/*.spec.js', '**/jest*.js'] },
    ],
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal'],
        pathGroups: [
          {
            pattern: 'react',
            group: 'external',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: ['react'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
    indent: ['warn', 2, {
      ignoredNodes: ['ConditionalExpression'],
      SwitchCase: 1,
    }],
    'jsx-a11y/anchor-is-valid': ['error', {
      components: ['Link'],
      specialLink: ['hrefLeft', 'hrefRight'],
      aspects: ['invalidHref', 'preferButton'],
    }],
    'jsx-a11y/href-no-hash': ['off'],
    'react/jsx-filename-extension': ['warn', { extensions: ['.js', '.jsx'] }],
    'react/jsx-props-no-spreading': ['off'],
    'react/prefer-stateless-function': ['off'],
    'max-len': [
      'warn',
      {
        code: 120,
        tabWidth: 2,
        comments: 120,
        ignoreComments: true,
        ignoreTrailingComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
      },
    ],
    'no-trailing-spaces': ['error', {
      skipBlankLines: true,
      ignoreComments: true,
    }],
    'no-restricted-exports': ['off'],
    'no-unused-vars': ['warn'],
    'no-use-before-define': ['error', 'nofunc'],
    'object-curly-newline': ['error', {
      consistent: true,
    }],
    'padded-blocks': ['off'],
    'react/destructuring-assignment': ['off'],
    'react/jsx-no-useless-fragment': ['error', {
      allowExpressions: true,
    }],
    'react/prop-types': ['off'],
    'react/react-in-jsx-scope': ['off'],
    semi: ['error', 'never'],
    'sort-imports': ['off'],
    'spaced-comment': ['off'],
    'quote-props': ['error', 'as-needed'],
    quotes: ['error', 'single', { avoidEscape: true, allowTemplateLiterals: true }],
  },
  overrides: [
    {
      files: ['*.test.js', '*.spec.js'],
      rules: {
        'global-require': 'off',
      },
    },
  ],
}
