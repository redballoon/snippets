Object.defineProperty(window, 'GoogleAnalyticsObject', {
	get: function () {
		return window.proxyGA;
	},
	set: function (value) {
		console.log('test==============', value);
		if (value.toLowerCase() !== 'prga') {
			window.proxyGA = value;
		}
	}
});