module.exports={
    entry: "./public/javascripts/index.js",
    output: {
       filename: "./public/javascripts/webpackbundle.js"
    },

    watch:true,

    watchOptions:{
        aggregateTimeout:180
    },
    module:{
        loaders:[{
            test: /\.js$/,
            exclude: "/node-modules",
            loader: 'babel-loader',
            query: {
                presets: ['es2015']
            }
        }]
    }
};