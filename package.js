Package.describe({
	name: 'genroa:nb-ct-base',
	version: '0.0.2',
	// Brief, one-line summary of the package.
	summary: 'Base package used to define Content types in Nebula Builder',
	// URL to the Git repository containing the source code for this package.
	git: 'https://github.com/Genroa/nb-ct-base',
	// By default, Meteor will default to using README.md for documentation.
	// To avoid submitting documentation, set this field to null.
	documentation: 'README.md'
});

Package.onUse(function(api) {
	api.versionsFrom('1.4.3.1');
	api.use('ecmascript');
	api.use('mongo');
	api.use('blaze-html-templates');
	api.use("templating", "client");
	api.use('jagi:astronomy@2.4.0');
	api.use("genroa:nb-admin");

	api.addFiles("classes.js");
	api.addFiles("helpers.js");
	api.export("Content");
	api.export("ContentTypes");
	api.export("ContentCreationOptions");
	api.export("getConvertedContent");
	
	api.addFiles("inserting_existing_content_template.html", "client");
	api.addFiles("inserting_existing_content_template.js", "client");

	api.addFiles("content_management_template.html", "client");
	api.addFiles("content_management_template.js", "client");
	api.addFiles("content.css", "client");

	api.mainModule('nb-ct-base.js');
});

Package.onTest(function(api) {
	api.use('ecmascript');
	api.use('tinytest');
	api.use('genroa:nb-ct-base');
	api.mainModule('nb-ct-base-tests.js');
});
