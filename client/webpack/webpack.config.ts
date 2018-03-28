
import * as webpack from 'webpack';
import * as path from 'path';
import * as HtmlWebpackPlugin from 'html-webpack-plugin';
import * as FriendlyErrorsWebpackPlugin from 'friendly-errors-webpack-plugin';
import * as SimpleProgressPlugin from 'webpack-simple-progress-plugin';
import * as ExtractTextPlugin from 'extract-text-webpack-plugin';
import * as CleanWebpackPlugin from 'clean-webpack-plugin';
import * as Visualizer from 'webpack-visualizer-plugin';



export class WebpackConfig {

	/**
	 * Initialize config with params for diff build mods
	 */
	public constructor({ isServer = false, isProd = false, devtool = '#cheap-module-eval-source-map' }) {
		this.module.rules.push(WebpackConfig.styleRule(isProd) as any);
		this.devtool = devtool;

		if (isProd) {
			this.plugins.push(
				new ExtractTextPlugin('style.css'),
				new CleanWebpackPlugin(['dist'], { root: process.cwd() }),
				new webpack.optimize.CommonsChunkPlugin({
					name: 'vendor',
					minChunks: (module, count) => {
						return (
							module.resource &&
							/\.js$/.test(module.resource) &&
							module.resource.indexOf(
								path.join(__dirname, '../node_modules')
							) === 0
						)
					}
				}),
				WebpackConfig.uglifyJsPlugin(),
				new Visualizer()
			);

		}

		if (isServer) {
			this.plugins.push(
				new webpack.HotModuleReplacementPlugin(),
				new webpack.NamedModulesPlugin()
			);
		}
	}
	/**
	 * Resolve path from root dir
	 */
	private static root = (pathname) => path.join(__dirname, '../' + pathname);
	/**
	 * Get tsx loader
	 */
	private static tsxRule = () => ({
		test: /\.(ts|tsx)$/,
		use: ['react-hot-loader/webpack', 'awesome-typescript-loader'],
		include: WebpackConfig.root('src'),
		exclude: /node_modules/
	});
	/**
	 * Image loaders configuration
	 */
	private static imageRule = () => ({
		test: /\.(jpe?g|png|gif|svg)$/i,
		use: [
			{
				loader: 'file-loader',
				options: { name: 'img/[name].[ext]' }
			},
			{
				loader: 'image-webpack-loader',
				options: {
					pngquant: { quality: '90', speed: 4 },
					mozjpeg: { progressive: true, quality: 70 },
					svgo: {}
				}
			}
		]
	});

	/**
	 * Font rule -> output required fonts to fonts dir
	 */
	private static fontRule = () => ({
		test: /\.(woff|woff2|otf|eot|ico|ttf)(\?[a-z0-9=.]+)?$/,
		use: [{
			loader: 'file-loader',
			options: { name: 'fonts/[name].[ext]' }
		}]
	});


	/**
	 * Style rules
	 */
	private static styleRule = (isProd: boolean) => {
		// Minimize if prod, use sourcemap if dev
		const cssLoader = {
			loader: 'css-loader',
			options: { sourceMap: !isProd, minimize: isProd }
		};
		// autoprefixed loader
		const autoprefixer = {
			loader: 'autoprefixer-loader',
			options: { browsers: ['last 5 versions'] }
		};

		let use = [
			'style-loader',
			cssLoader,
			autoprefixer,
			'sass-loader',
		];

		if (isProd) {
			use = ExtractTextPlugin['extract']({
				fallback: 'style-loader',
				use: [
					cssLoader,
					autoprefixer,
					'sass-loader'
				]
			});
		}

		console.log(use);

		return {
			test: /\.(css|scss)$/,
			use
		};
	}


	/**
	 * Ugllify js plugin for prod
	 */
	private static uglifyJsPlugin = () => (
		new webpack.optimize.UglifyJsPlugin({
			output: {
				comments: false
			},
			drop_console: true,
			minimize: true,
			sourceMap: false
		} as any)
	);
	/**
	 * Dev server config
	 */
	public devServer = {
		inline: true,
		quiet: true,
		hot: true,
		historyApiFallback: true,
		host: 'localhost',
		port: process.env.PORT,
		contentBase: WebpackConfig.root('dist'),
		publicPath: '/',
	};


	/**
	 * Devtool mode
	 */
	public devtool: string = '#cheap-module-eval-source-map';

	/**
	 * Entry 
	 */
	public entry = [
		WebpackConfig.root('src/app/vendor.ts'),
		WebpackConfig.root('src/app/app.tsx')
	];
	/**
	 * Build output configuration
	 */
	public output = {
		path: WebpackConfig.root('dist'),
		filename: 'js/[name].js',
		publicPath: '/',
		devtoolModuleFilenameTemplate: '[absolute-resource-path]',
		devtoolFallbackModuleFilenameTemplate: '[absolute-resource-path]?[hash]'
	};

	/**
	 * Resolve configuration
	 * @memberof WebpackConfig
	 */
	public resolve = {
		alias: {
			img: WebpackConfig.root('src/public/img'),
			fonts: WebpackConfig.root('src/public/fonts'),
			styles: WebpackConfig.root('src/styles'),
			components: WebpackConfig.root('src/app/components'),
			'@': WebpackConfig.root('src/app')
		},
		modules: [
			WebpackConfig.root('src/app'),
			'node_modules'
		],
		extensions: ['.ts', '.css', '.scss', '.tsx', '.js', '.json', '.pug', '.png', '.svg', '.jpg', '.*']
	}
	/**
	 * 
	 * @memberof WebpackConfig
	 */
	public module = {
		rules: [
			WebpackConfig.tsxRule(),
			WebpackConfig.imageRule(),
			WebpackConfig.fontRule()
		]
	}



	/**
	 * Configuration plugins 
	 */
	public plugins = [
		// Inject global variables in every file, but not files provided with this plugin	
		new webpack.ProvidePlugin({
			React: 'react',
			ReactDOM: 'react-dom'
		}),
		// Generates html in output dir based on template in public dir
		new HtmlWebpackPlugin({
			template: WebpackConfig.root('src/public/index.html'),
			filename: 'index.html',
			inject: true,
			minify: process.env.NODE_ENV === 'production' && {
				removeComments: true,
				collapseWhitespace: true,
				removeRedundantAttributes: true,
				useShortDoctype: true,
				removeEmptyAttributes: true,
				removeStyleLinkTypeAttributes: true,
				keepClosingSlash: true,
				minifyJS: true,
				minifyCSS: true,
				minifyURLs: true,
			}
		}),
		// Global env variables ( to use it with ts declare it in d.ts  )
		new webpack.DefinePlugin({
			// node env var used by most of libs to determine prod build
			'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
			// variable to determine is in dev mode
			'DEV': process.env.DEV,
			// variable to determine which api use
			'LOCAL': process.env.LOCAL
		}),
		// Need to cut moment locales 
		new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /ru|en/),
		// Show pretty message in terminal
		new FriendlyErrorsWebpackPlugin(),
		// Show progress bar in terminal during build
		new SimpleProgressPlugin({ progressOptions: { clear: true } })
	];

}