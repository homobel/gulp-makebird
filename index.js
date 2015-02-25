var through = require('through2'),
	PluginError = require('gulp-util').PluginError,
	makebird = require('makebird');

const PLUGIN_NAME = 'gulp-makebird';

module.exports = function (options) {
	options = options || {};

	function compile(file, enc, cb) {
		var that = this;

		if (file.isNull()) {
			return cb(null, file);
		}

		if (file.isStream()) {
			return cb(new PluginError(PLUGIN_NAME, 'Streams not supported'));
		}

		if (file.isBuffer()) {
			options.input = String(file.path);
			makebird.build(options, function (err, data) {
				if (err) {
					return cb(new PluginError(PLUGIN_NAME, err.message));
				}

				file.contents = new Buffer(data);
			});
		}

		this.push(file);
		cb();

	}

	return through.obj(compile);

};
