var WebpackObfuscator = require('webpack-obfuscator');

module.exports = {
    // Make sure the entry file is correct for your app:
    entry: './dist/index.js',
    externals: ['tabris', 'tabris-decorators', 'crypto-js', 'hashids', 'lodash'],
    output: {
        libraryTarget: 'commonjs2',
        filename: "index.js",
        path: __dirname + "/dist"
    },
    // If you don't use any TypeScript code, you don't need to include the extensions 
    // ".ts" and ".tsx" and can also omit the "module" configuration below.
    resolve: { extensions: [".js", ".jsx"] },
    module: {
        rules: [
            { test: /\.(j|t)sx?$/, loader: "ts-loader" }
        ]
    },

    configureWebpack: {
        plugins: [
            new WebpackObfuscator({
                compact: true,
                simplify: true,
                renameGlobals: true,
                renameProperties: true,
                sourceMap: false,
                debugProtection: true,
                debugProtectionInterval: true,
                splitStrings: true,
                identifierNamesGenerator: 'hexadecimal',
                sourceMapBaseUrl: '',
                sourceMapFileName: '',
                selfDefending: true,
                sourceMapMode: 'separate',
                stringArray: true,
                stringArrayEncoding: true,
            })
        ]
    }
}
