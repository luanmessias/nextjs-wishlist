module.exports = {
  presets: ['next/babel'],
  plugins: [
    [
      'styled-components',
      {
        ssr: true,
        minify: true,
        transpileTemplateLiterals: true,
        pure: true,
        displayName: true,
        preprocess: false
      }
    ]
  ]
}
