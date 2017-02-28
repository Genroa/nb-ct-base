Package.describe({
  name: 'genroa:nb-ct-base',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Base package used to define Content types in Nebula Builder',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: null
});

Package.onUse(function(api) {
  api.versionsFrom('1.4.3.1');
  api.use('ecmascript');
  api.use('mongo');
  api.use('jagi:astronomy');

  api.add_files("classes.js");
  api.export("Content");

  api.mainModule('nb-ct-base.js');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('genroa:nb-ct-base');
  api.mainModule('nb-ct-base-tests.js');
});
