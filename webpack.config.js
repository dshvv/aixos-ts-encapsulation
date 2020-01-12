const path = require('path');
const Hwp = require('html-webpack-plugin');
const hwp = new Hwp({
    template:'./src/index.html'
});

module.exports = {
    // 编译模式，开发or生产，若生产，代码会被压缩，调试不利
    mode: "development",
    entry: './src/main.ts',
    resolve: {
        extensions: [".js", ".json",".ts"]
    },
    module:{
        rules:[
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    plugins: [hwp],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
};