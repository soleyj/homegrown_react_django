module.exports = {
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
        {
          test: /\.(png|jpg|gif)$/i,
          use: [
           { loader: 'url-loader', options: { limit: 8192 } } 
           // limit => file.size =< 8192 bytes ? DataURI : File
          ]
        }
      ]
    }
  }