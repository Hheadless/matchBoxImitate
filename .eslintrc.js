module.exports = {
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 6, //也就是ES6语法支持的意思
		sourceType: 'module',
		ecmaFeatures: {
			modules: true
		},
		project: './tsconfig.json'
	},
	plugins: [ '@typescript-eslint' ],
	rules: {
		// 禁止使用 var
		'no-var': 'error',
		// 优先使用 interface 而不是 type
		'@typescript-eslint/consistent-type-definitions': [ 'error', 'interface' ],
		// 不允许出现多个空格
		'no-multi-spaces': [ 'error', { ignoreEOLComments: true } ],
		camelcase: 0,
		// 对象字面量的键值空格风格
		'key-spacing': 2,
		// if语句包含一个return语句， else就多余
		'no-else-return': 2,
		// 允许使用tab
		'no-tabs': 0,
		// 函数圆括号之前没有空格
		'space-before-function-paren': [ 2, 'never' ],
		// 不要求块内空格填充格式
		'padded-blocks': 0,
		semi: [ 0, 'never' ] // 使用分号
	}
};
