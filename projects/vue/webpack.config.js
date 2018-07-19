module.exports = {
	entry: "./src/app.js",
	output: {
		path: __dirname + "/dist",
		filename: "vue.dist.js"
	},
	resolve: {
    alias: {
      "vue$": "vue/dist/vue.esm.js"
    }
	},
	mode: "development"
};