import { WebpackConfig } from './webpack.config';

export default new WebpackConfig({ 
	isProd: true, 
	devtool: false as any
});