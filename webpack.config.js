//entry=>output

const path=require('path');

module.exports={
    entry:'./public/src/app.js',
    output:{
        path:path.join(__dirname,'public'),
        filename:'bundle.js'
    },
    module:{
        rules:[{    //rules -babel lai convert garne
            loader:'babel-loader',  //babel-loader use gareko
            test:/\.js$/,   //sabai .js ma end hune file haru
            exclude:/node_modules/  //node_modules bahek
        },
        {
            test:/\.s?css$/,
            use:[
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }]
    },
    devtool:'eval-cheap-module-source-map',
    devServer:{
        contentBase:path.join(__dirname,'public'),
        historyApiFallback:true
    }
};

