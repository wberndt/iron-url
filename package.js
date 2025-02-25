Package.describe({
  name: 'iron:url',
  summary: 'Url utilities and support for compiling a url into a regular expression.',
  version: '1.1.0',
  git: 'https://github.com/iron-meteor/iron-url'
});

Package.onUse(function (api) {
  api.versionsFrom('METEOR@0.9.2');

  api.use('underscore');

  api.use('iron:core@1.0.11');
  api.imply('iron:core');

  api.addFiles('lib/compiler.js');
  api.addFiles('lib/url.js');
});

Package.onTest(function (api) {
  api.use('iron:url');
  api.use('tinytest');
  api.use('test-helpers');
  api.addFiles('test/url_test.js', ['client', 'server']);
});
