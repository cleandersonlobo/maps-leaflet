Package.describe({
  name: 'cleandersonlobo:maps-leaflet',
  version: '1.0.0',
  // Brief, one-line summary of the package.
  summary: 'Leaflet is the leading open-source JavaScript library for mobile-friendly interactive maps',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/cleandersonlobo/maps-leaflet.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.addFiles([
    'leaflet.css',
    'leaflet-src.js',
    'leaflet.js'
    'leaflet-src.map'
  ], 'client');
  api.addAssets([
        'images/layers-2x.png',
        'images/layers.png',
        'images/marker-icon-2x.png',
        'images/marker-icon.png',
        'images/marker-shadow.png'
    ], 'client');
});
