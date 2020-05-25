module.exports = function() {
    return {
      module: {
        rules: [
          {
            test: /\.ts(x?)$/,
            exclude: /node_modules/,
            use: [
                {
                loader: "ts-loader"
                }
            ]
          },
        ],
      },
    };
  };