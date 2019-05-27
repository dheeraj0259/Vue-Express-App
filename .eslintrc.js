module.exports = {
    parserOptions: {
      parser: 'babel-eslint',
      "ecmaFeatures": {
        "jsx": true,
        "experimentalObjectRestSpread": true,
    },
    'ecmaVersion': 2018,
    'sourceType': 'module',
    },
    extends: [
      'plugin:vue/recommended',
      'standard'
    ],
    plugins: [
      'vue',
      'arca',
      'import',
      'compat'
    ],
    "env": {
      "browser": true,
      "node": true,
      "es6": true
  },
  'rules':         {
    'max-len':                           [1, 120, 2, { ignoreComments: true }],
    'object-curly-newline':              ["error", { 'multiline': true }],
    'arrow-parens':                      ["error", "as-needed"],
    'indent':                            ['error', 4, { SwitchCase: 1 }],
    'key-spacing':                       ['error', { 'align': 'value' }],
    'linebreak-style':                   ['error', 'unix'],
    'quotes':                            ['error', 'double'],
    'semi':                              ['error', 'always'],
    'comma-dangle':                      ['error', 'always-multiline'],
    'strict':                            ['error', 'global'],
    'arca/import-align':                 2,
    'no-multi-spaces':                   [
      'error', {
        exceptions: {
          'ImportDeclaration':  true,
          'VariableDeclarator': true,
        },
      }
    ],
  }, 
'settings': {
  "polyfills": [
    "Promise",
    "fetch",
    "document",
    "Object.assign",
  ]
}
  }