
var path = require('path');
entryPath = path.join(__dirname, 'app', 'app.js');
distPath = path.join(__dirname, 'public', 'dist');

module.exports = {
    mode: 'development',

    entry: {
        app: entryPath
    },

    output: {
        path: distPath,
        filename: '[name].js'
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['es2015']
                        }
                    }
                ]
            }
        ]
    },

    plugins: []
};