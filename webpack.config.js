const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
  // 진입점 - webpack은 js파일이 진입점이다.
  entry: './js/main.js',

  // 결과물(번들) 반환 설정
  output: {
    // path 속성은 따로 명시하지 않은 경우 dist 폴더를 사용하고
    // filename 속성은 entry에서 지정한 파일을 사용한다.

    // __dirname은 현재 파일이 있는 경로를 의미한다.
    // path: path.resolve(__dirname, 'dist'),
    // filename: 'main.js',
    // 기존생성된 번들을 지운다.
    clean: true,
  },

  module: {
    rules: [
      {
        test: /\.s?css$/, // scss or css
        use: [
          'style-loader',
          'css-loader', // css-loader 먼저 해석된다. 순서가 중요!
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.js$/,
        use: ['babel-loader'],
      },
    ],
  },

  // 번들링 후 결과물 처리 방식등의 플러그인들을 설정한다.
  plugins: [
    // entry로 설정한 js와 html파일이 같이 합쳐진 결과를 번들로 만든다.
    new HtmlPlugin({
      template: './index.html',
    }),

    // from에 지정되어 있는 폴더를 dist (번들)에 copy 하여 들어갈 수 있도록 한다.
    new CopyPlugin({
      patterns: [
        {
          from: 'static',
        },
      ],
    }),
  ],

  devServer: {
    host: 'localhost',
  },
}
