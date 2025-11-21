// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt({
  rules: {
    // Indentation - enforce 2 spaces
    'indent': ['error', 2, {
      'SwitchCase': 1,
      'VariableDeclarator': 1,
      'outerIIFEBody': 1,
      'MemberExpression': 1,
      'FunctionDeclaration': { 'parameters': 1, 'body': 1 },
      'FunctionExpression': { 'parameters': 1, 'body': 1 },
      'CallExpression': { 'arguments': 1 },
    }],

    // End of line - enforce consistent line endings
    'eol-last': ['error', 'always'],

    // Line break style
    'linebreak-style': ['error', process.platform === 'win32' ? 'windows' : 'unix'],

    // Semi-colons
    'semi': ['error', 'always'],

    // Quotes
    'quotes': ['error', 'single'],

    // Trailing commas
    'comma-dangle': ['error', 'always-multiline'],

    'no-trailing-spaces': 'error',
    'no-multiple-empty-lines': ['error', { 'max': 2, 'maxEOF': 1 }],
  },
});
