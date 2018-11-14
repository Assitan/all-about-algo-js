module.exports = {
  lang: 'en-US',
  title: 'Algorithm and data structures in JavaScript',
  description: 'Show multiple code in JavaScript',
  serviceWorker: true,
  evergreen: true,
  themeConfig: {
    docsDir: 'docs',
    sidebar: {
      '/resources/': [
        {
          title: 'Theory',
          collapsable: false,
          children: [
            'theory/runtime-complexity',
            'theory/big-o-notation',
            'theory/data-structures',
            'practical/functional-programming',
          ],
        },
        {
          title: 'Practical',
          collapsable: false,
          children: [
            'practical/data-structures',
            'practical/algorithms',
          ],
        },
      ],
      '/': [''],
    },
    nav: [
      {text: 'Resources', link: '/resources/'},
    ],
  },
};
