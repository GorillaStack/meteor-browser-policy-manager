Package.describe({
  name: 'gorillastack:manage-browser-policy',
  version: '0.1.0',
  summary: 'Administer browser-policy in your UI and update without a release',
  git: '',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.3');
  api.use([
    'templating',
    'mongo'
  ]);

  api.addFiles([
    'lib/browser_policy_store.js'
  ]);

  api.addFiles([
    'lib/client/component.html',
    'lib/client/component.js'
  ], 'client');

  api.addFiles([
    'lib/server/methods.js',
    'lib/server/publications.js',
    'lib/server/server_start.js'
  ], 'server');
});

// Package.onTest(function(api) {
//   api.use('tinytest');
//   api.use('gorillastack:manage-browser-policy');
//   api.addFiles('manage-browser-policy-tests.js');
// });
