module.exports = {
  configureWebpack: {
    devtool: "source-map"
  },
  devServer: {
    host: "127.0.0.1"
    //host: "localhost"
  }
  // publicPath: process.env.NODE_ENV === "production" ? "/LAB12/" : "/"
};
