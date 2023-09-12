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

  icon: '<path d="M217 486c-6 0-11-1-17-5-37-28-59-70-59-116 0-81 66-146 149-146 68 0 128 44 145 108 4 16-5 31-20 35-16 4-31-5-35-20a93 93 0 00-90-67c-52 0-94 40-94 89 0 28 13 54 37 71 12 9 15 27 6 39-4 8-13 12-22 12zm0 0"/><path d="M637 690l-364-1c-70-6-118-64-118-143 0-77 69-139 154-139l25 2c13-76 80-135 159-135 89 0 161 73 161 162v9c32 7 59 23 78 50 18 21 28 50 28 78 0 64-52 114-123 117zm-360-56h359c33-1 67-23 67-59 0-15-6-31-15-44l-1-2a69 69 0 00-56-28h-7l-38 1 8-37a106 106 0 00-101-134c-58 1-105 48-105 107v7l2 44-41-16c-13-5-27-8-42-8-54 0-97 37-97 83 2 36 19 80 67 86zm0 0M275 190c-15 0-28-12-28-28v-56c0-15 12-28 28-28s28 12 28 28v56c0 16-13 28-28 28zm0 0M92 402H36c-15 0-28-13-28-29s12-27 28-27h56c16 0 29 12 29 28s-13 28-29 28zm0 0M436 248c-7 0-14-3-20-8a29 29 0 010-40l44-44c11-11 28-11 40 0 11 11 11 29 0 40l-44 44c-6 5-13 8-20 8zm0 0M142 248c-7 0-15-3-20-8l-44-44a29 29 0 010-40c11-11 30-11 40 0l44 44c11 10 11 29 0 40-5 5-12 8-20 8zm0 0"/>',

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
      handler: async (req, res) => {
        const url = 'https://greetingsapi.com/random';
        const data = await server.get(url);
        res.json(data);
      },
    },
  ],
};
