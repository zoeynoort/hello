'use strict';

module.exports = {

  // Friendly name
  name: 'Hello',

  // Brief description of this plugin
  purpose: 'Hello widget for Webdesq CMS',

  // Version of this plugin
  version: '1.0.0',

  // Name of the plugin author
  author: 'Zoëy Noort',

  // Name of vendor of this plugin
  vendor: 'Zoëy Noort',

  // Array of plugins this plugin depends on
  requires: [],

  icon: '<path d="M4 21v-2.5c0-3 2.5-5.5 5.5-5.5h3.4c2.4 0 4.6-1.6 5.2-4l.6-2.1a1.2 1.2 0 0 1 2.4.6l-1.7 7a2 2 0 0 1-1.9 1.5M8 21v-3m8-11.5a4 4 0 1 1-8 0 4 4 0 0 1 8 0Zm0 0" style="fill:none;stroke-width:1.4;stroke-linecap:round;stroke-linejoin:miter;stroke:#000;stroke-opacity:1;stroke-miterlimit:4" transform="scale(32)"/>',

  gui: {
    widgets: () => [
      {
        path: 'hello.svelte',
        title: 'Hello',
        mandatory: false,
      },
    ],
  },

  routes: ({ server }) => [
    {
      route: '/hello',
      method: 'post',
      handler: async (req, res, user) => {
        const url = 'https://www.greetingsapi.com/random';
        const data = await server.get(url);
        res.json(data);
      },
    },
  ],
};
