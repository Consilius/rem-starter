const nodeExternals = require("webpack-node-externals");
const { CheckerPlugin } = require("awesome-typescript-loader");

module.exports = {
    mode: "production",
    target: "node",
    watchOptions: {
        ignored: /node_modules/
    },
    devtool: "source-map",
    entry: [
        "./src/server.ts"
    ],
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx"]
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [
                    {
                        loader: "awesome-typescript-loader",
                        options : {
                            reportFiles: [
                                'src/**/*'
                            ]
                        }
                    }
                ]
            }
        ]
    },
    externals: [nodeExternals()],
    plugins: [
        new CheckerPlugin()
    ],
    node: {
        console: true,
        global: true,
        process: true,
        Buffer: true,
        __filename: true,
        __dirname: true
    }
};
