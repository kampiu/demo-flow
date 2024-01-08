module.exports = {
	presets: ["@babel/eslint", "@babel/preset-react", ["@babel/preset-env", { loose: true }]],
	plugins: [
		[
			"transform-react-remove-prop-types",
			{
				mode: "remove",
				removeImport: true,
				ignoreFilenames: ["node_modules"]
			}
		],
		"lodash"
	]
}
