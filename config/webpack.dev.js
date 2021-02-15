
module.exports = {
  devtool: 'inline-source-map',
  devServer: {
    contentBase: "dist",
    overlay: true,
    stats: {//웹팩의 상태값에 색상을 부여한다.
      colors: true
    },
    hot: true
  }
}