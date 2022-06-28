const categories = [
  { id: 1, name: 'Apparel', slug: 'apparel', parentId: null, thumbnail: 'http://assets.myntassets.com/v1/images/style/properties/2fc776b82eaaf82497f1a13cf63eb073_images.jpg' },
  { name: 'Topwear', slug: 'topwear', id: 2, parentId: 1 },
  { name: 'Bottomwear', slug: 'bottomwear', id: 3, parentId: 1 },
  { name: 'Dress', slug: 'dress', id: 4, parentId: 1 },

  { name: 'Accessories', slug: 'accessories', id: 5, parentId: null, thumbnail: 'http://assets.myntassets.com/v1/images/style/properties/2fd1e51862bc8aa0d81e367449280608_images.jpg' },
  { name: 'Headwear', slug: 'headwear', id: 6, parentId: 5 },
  { name: 'Watches', slug: 'watches', id: 7, parentId: 5 },
  { name: 'Bags', slug: 'bags', id: 8, parentId: 5 },

  { id: 9, name: 'Footwear', slug: 'footwear', parentId: null, thumbnail: 'http://assets.myntassets.com/v1/images/style/properties/ca06d73e7eabdfe68bcdee9c3a8739fc_images.jpg' },
  { id: 10, name: 'Shoes', slug: 'shoes', parentId: 9 },
  { id: 11, name: 'Flip Flops', slug: 'flip-flops', parentId: 9 },
];

export { categories };
