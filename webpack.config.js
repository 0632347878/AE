/* global require __dirname module */
let path = require('path');

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.join(__dirname, "/dist"),
        filename: "main.js"
    },
    devServer: {
        overlay: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                // loader: 'babel-loader',
                exclude: '/node_modules/',
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    }
};



// module.exports = (env, options) => {
//     conf.devtool = options.mode === "production" ? false : "cheap-module-eval-source-map";
//     return conf;
// };
