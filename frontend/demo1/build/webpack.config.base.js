
module.exports = {
    entry: {
        "bundle": "./src/app.js"
    },    
    output: {
        path: __dirname + "/dist",
        filename: "[name].js",        
        publicPath: '/'
    },
    module: {
        rules: [           
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015','react']
                    }
                }
            },  
        ]
    }
   
}