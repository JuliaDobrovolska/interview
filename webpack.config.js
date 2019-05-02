const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const fs = require('fs');

function generateHtmlPlugins(templateDir) {
  const templateFiles = fs.readdirSync(path.resolve(__dirname, templateDir));
  return templateFiles.map(item => {
    const parts = item.split('.');
    const name = parts[0];
    const extension = parts[1];
    return new HtmlWebpackPlugin({
      filename: `${name}.html`,
      template: path.resolve(__dirname, `${templateDir}/${name}.${extension}`),
      inject: false,
    })
  })
}

const htmlPlugins = generateHtmlPlugins('./src/html/views');

module.exports = [{
  entry: {
    "main":'./src/js/index.js',
    "interview":'./src/js/interview.js',
    

  },
  output: {
    filename: './js/[name].bundle.js'
  },
  devtool: "source-map",
  module: {
    rules: [{
        test: /\.js$/,
        include: path.resolve(__dirname, 'src/js'),
        use: {
          loader: 'babel-loader',
          options: {
            presets: 'env'
          }
        }
      },
      {
        test: /\.html$/,
        include: path.resolve(__dirname, 'src/html/includes'),
        use: ['raw-loader']
      },
    ]
  },
  
  plugins: [
    new CopyWebpackPlugin([{
        from: './src/fonts',
        to: './fonts'
      },
      {
        from: './src/img',
        to: './img'
      }
    ]),
  ].concat(htmlPlugins)
},
{
  entry: {
  "default_mob": './src/scss/default_mob.scss',
  "default_desktop":'./src/scss/default_desktop.scss',
  "interview_mob": './src/scss/interview_mob.scss',
  "interview_desktop": './src/scss/interview_desktop.scss'

},
output: {
  filename: './css/[name].bundle.css'
},
module: {
  rules: [
    {
      test: /\.(sass|scss)$/,
      include: path.resolve(__dirname, 'src/scss'),
      use: ExtractTextPlugin.extract({
        use: [{
            loader: "css-loader",
            options: {
              sourceMap: true,
              minimize: true,
              url: false
            }
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true
            }
          }
        ]
      })
    }
  ]},
  plugins: [
    new ExtractTextPlugin({
      filename: './css/[name].bundle.css',
      allChunks: true,
    })
  ]

}];