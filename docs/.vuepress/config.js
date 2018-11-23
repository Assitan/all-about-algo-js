module.exports = {
  lang: 'en-US',
  title: 'Algorithm and data structures in JavaScript',
  description: 'Show multiple code in JavaScript',
  serviceWorker: true,
  evergreen: true,
  themeConfig: {
    docsDir: 'docs',
    sidebar: [
      '/',
      {
        title: 'Theory',
        collapsable: false,
        children: [
          'resources/theory/runtime-complexity',
          'resources/theory/big-o-notation',
          'resources/theory/data-structures',
          'resources/theory/functional-programming',
        ],
      },
      {
        title: 'Practical',
        collapsable: false,
        children: [
          'resources/practical/data-structures',
          'resources/practical/algorithms',
        ],
      },
    ],
    nav: [
      // {text: 'Resources', link: '/resources/'},
    ],
  },
};
