var hbs= require('hbs');

hbs.registerHelper('entered', function(options) {
	return new hbs.SafeString(options.fn(this).replace(/\r\n/g, '<br>'));
});