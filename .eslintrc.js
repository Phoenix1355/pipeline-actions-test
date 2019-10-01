const INDENT_SIZE = 2;

module.exports = {
  parser: 'babel-eslint',
  extends: ['airbnb'],
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true,
  },
  globals: {
    __IS_BROWSER__: true,
  },
  rules: {
    'no-console': 'off',
    indent: ['error', INDENT_SIZE, { SwitchCase: 1 }],
    'comma-dangle': ['error', 'always-multiline'],
    'no-plusplus': 'off',
    'no-underscore-dangle': 0,
    'react/jsx-indent': ['error', INDENT_SIZE],
    'react/jsx-indent-props': ['error', INDENT_SIZE],
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx'],
      },
    ],
    'react/jsx-props-no-spreading': 0,
    'react/static-property-placement': 0,
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['hrefLeft', 'hrefRight'],
        aspects: ['invalidHref', 'preferButton'],
      },
    ],
    'jsx-a11y/label-has-for': [
      2,
      {
        required: {
          every: ['id'],
        },
      },
    ],
  },
  plugins: [
    'react',
    'react-hooks',
    'import',
    'jsx-a11y',
    'promise',
    'security',
    'flowtype',
  ],
  parserOptions: {
    ecmaVersion: 9,
    sourceType: 'module',
    ecmaFeatures: {},
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['./'],
      },
    },
  },
};
