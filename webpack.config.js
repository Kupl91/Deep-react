import path from 'path';

export default {
    mode: 'production', // или 'development' 
    entry: path.resolve('src/index.js'),
    output: {
        filename: '[name].js',
        path: path.resolve('build'),
    },
};