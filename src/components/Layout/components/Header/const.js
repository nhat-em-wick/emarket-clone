export const pages = [
  { path: '/', name: 'Home' },
  { path: '/about', name: 'About' },
  { path: '/contact', name: 'Contact' },
  { path: '/blog', name: 'Blog' },
];

export const categories = [
  {
    path: '/',
    name: 'Gift & Toys',
    icon : 'bx bxs-gift',
    subCategories: [
      {
        path: '/',
        name: 'smart phone',
        subCategories: [
          { path: '/', name: 'samsung' },
          { path: '/', name: 'apple' },
          { path: '/', name: 'oppo' },
          { path: '/', name: 'vivo' },
        ],
      },
      {
        path: '/',
        name: 'laptop',
        subCategories: [
          { path: '/', name: 'dell' },
          { path: '/', name: 'HP' },
          { path: '/', name: 'macbook' },
          { path: '/', name: 'vivo' },
        ],
      },
    ],
  },
  {
    path: '/',
    name: 'Electronics',
    icon : 'bx bxs-bolt',
    subCategories: [
      {
        path: '/',
        name: 'monitor',
      },
      {
        path: '/',
        name: 'camera',
      }

    ]
  }
];
