var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var ProvidePlugin = require('webpack/lib/ProvidePlugin');

module.exports = {
    entry: './src/index.tsx',
    output: {
        path: './dist',
        filename: 'app.bundle.js',
        sourceMapFilename: 'app.bundle.map'
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: 'source-map',
    debug: true,

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: ["", ".ts", ".tsx", ".js", '.html', '.css', '.scss', '.json'],
    },

    module: {
        preLoaders: [
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { test: /\.js$/, loader: "source-map-loader" }
        ],

        loaders: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'.
            { test: /\.ts$|.tsx$/, loader: 'ts-loader', exclude: './node_modules' },
            // { test: /\.tsx?$/, loader: "ts-loader", exclude: './node_modules' },
            { test: /\.html$/, loader: 'raw' },
            { test: /\.css$/, loader: 'raw' },
            { test: /\.scss$/, loaders: ['raw', 'sass'] },
            { test: /\.json$/, loader: 'json-loader' }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new CopyWebpackPlugin([
            { from: 'src/assets', to: 'assets' }
        ]),
        new webpack.DefinePlugin({
            app: {
                environment: JSON.stringify(process.env.APP_ENVIRONMENT || 'development')
            }
        })
    ],
    tslint: {
        emitErrors: true,
        failOnHint: true,
        resourcePath: 'src'
    },
    devServer: {
        port: 7000,
        host: 'localhost',
    }
}

// module.exports = {
//     entry: "./src/index.tsx",
//     output: {
//         filename: "./dist/bundle.js",
//     },

//     // Enable sourcemaps for debugging webpack's output.
//     devtool: "source-map",

//     resolve: {
//         // Add '.ts' and '.tsx' as resolvable extensions.
//         extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
//     },

//     module: {
//         loaders: [
//             // All files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'.
//             { test: /\.tsx?$/, loader: "ts-loader" }
//         ],

//         preLoaders: [
//             // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
//             { test: /\.js$/, loader: "source-map-loader" }
//         ]
//     },

//     // When importing a module whose path matches one of the following, just
//     // assume a corresponding global variable exists and use that instead.
//     // This is important because it allows us to avoid bundling all of our
//     // dependencies, which allows browsers to cache those libraries between builds.
//     externals: {
//         "react": "React",
//         "react-dom": "ReactDOM"
//     },
// };