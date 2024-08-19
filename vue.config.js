const fs = require('fs');

module.exports = {
  configureWebpack: {
    devtool: "source-map"
  },
  devServer: {
    host: "127.0.0.1",
    //host: "localhost"
    https: {
      key: fs.readFileSync('C:\\Users\\Lior\\Desktop\\Semester 6\\Web\\openssl\\server.key'), 
      cert: fs.readFileSync('C:\\Users\\Lior\\Desktop\\Semester 6\\Web\\openssl\\server.cert'), 
    },
    port: 8080
  }
  // publicPath: process.env.NODE_ENV === "production" ? "/LAB12/" : "/"
};
