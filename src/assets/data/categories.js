const listCategories = [
  {
    name: 'fashion',
    slug: 'fashion',
    image:
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/13-800x800.webp',
    children: [
      { name: "women's wear", slug: "women's-wear" },
      { name: "men's clothing", slug: "men's-clothing" },
      { name: 'bags', slug: 'bags' },
    ],
  },
  {
    name: 'electronics',
    slug: 'electronics',
    image:
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/15-800x800.webp',
    children: [
      { name: 'monitors', slug: 'monitors' },
      { name: 'scanners', slug: 'scanners' },
      { name: 'printers', slug: 'printers' },
    ],
  },
  {
    name: 'smart phone',
    slug: 'smart-phone',
    image:
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/20-800x800.webp',
    children: [
      { name: 'samsung', slug: 'samsung' },
      { name: 'apple', slug: 'apple' },
      { name: 'xiaomi', slug: 'xiaomi' },
      { name: 'oppo', slug: 'oppo' },
    ],
  },
];

const categories = [
  {
    name: 'fashion',
    slug: 'fashion',
    image:
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/13-800x800.webp',
    children: [
      { name: "women's wear", slug: "women's-wear" },
      { name: "men's clothing", slug: "men's-clothing" },
      { name: 'bags', slug: 'bags' },
    ],
  },
  {
    name: "women's wear",
    slug: "women's-wear",
    image:
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/category/cate3-210x210.webp',
    parent: { name: 'fashion', slug: 'fashion' },
    children: [],
  },
  {
    name: "men's clothing",
    slug: "men's-clothing",
    image:
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/category/cate3-210x210.webp',
    parent: { name: 'fashion', slug: 'fashion' },
    children: [],
  },
  {
    name: 'bags',
    slug: 'bags',
    image:
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/category/cate3-210x210.webp',
    parent: { name: 'fashion', slug: 'fashion' },
    children: [],
  },
  {
    name: 'electronics',
    slug: 'electronics',
    image:
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/15-800x800.webp',
    children: [
      { name: 'monitors', slug: 'monitors' },
      { name: 'scanners', slug: 'scanners' },
      { name: 'printers', slug: 'printers' },
    ],
  },
  {
    name: 'monitors',
    slug: 'monitors',
    image:
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/category/cate1-210x210.webp',
    children: [],
    parent: { name: 'electronics', slug: 'electronics' },
  },
  {
    name: 'scanners',
    slug: 'scanners',
    image:
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/category/cate1-210x210.webp',
    children: [],
    parent: { name: 'electronics', slug: 'electronics' },
  },
  {
    name: 'printers',
    slug: 'printers',
    image:
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/category/cate1-210x210.webp',
    children: [],
    parent: { name: 'electronics', slug: 'electronics' },
  },
  {
    name: 'smart phone',
    slug: 'smart-phone',
    image:
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/20-800x800.webp',
    children: [
      { name: 'samsung', slug: 'samsung' },
      { name: 'apple', slug: 'apple' },
      { name: 'xiaomi', slug: 'xiaomi' },
      { name: 'oppo', slug: 'oppo' },
    ],
  },
  {
    name: 'samsung',
    slug: 'samsung',
    image:
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/category/cate5-210x210.webp',
    children: [],
    parent: { name: 'smart phone', slug: 'smart-phone' },
  },
  {
    name: 'oppo',
    slug: 'oppo',
    image:
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/category/cate5-210x210.webp',
    children: [],
    parent: { name: 'smart phone', slug: 'smart-phone' },
  },
  {
    name: 'apple',
    slug: 'apple',
    image:
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/category/cate5-210x210.webp',
    children: [],
    parent: { name: 'smart phone', slug: 'smart-phone' },
  },
  {
    name: 'xiaomi',
    slug: 'xiaomi',
    image:
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/category/cate5-210x210.webp',
    children: [],
    parent: { name: 'smart phone', slug: 'smart-phone' },
  },
];

export { listCategories, categories }