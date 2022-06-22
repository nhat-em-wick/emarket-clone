import products from '~/assets/data/products';

const sleep = async () => {
  return new Promise((resolve) => setTimeout(resolve, 2000));
};

const productsApi = {
  pagination: (products, page, perPage) => {
    const start = (page - 1) * perPage;
    const end = page * perPage;
    return products.slice(start, end);
  },

  getProductBySlug: async (slug) => {
    const product = products.find((product) => product.slug === slug);
    await sleep();
    return new Promise((resolve, reject) => {
      resolve(product);
      reject('co loi xay ra');
    });
  },

  getAllProducts: async (filter) => {
    const allProducts = products;
    await sleep();
    if (filter) {
      const page = filter.page || 1;
      const limit = filter.limit || 10;
      const products = productsApi.pagination(allProducts, page, limit);
      return new Promise((resolve, reject) => {
        resolve({
          products,
          pagination: {
            page,
            limit,
            total: allProducts.length,
          },
        });
        reject('co loi xay ra');
      });
    }
    return new Promise((resolve) => {
      resolve(allProducts);
    });
  },

  findProductByName: async (name) => {
    await sleep();
    const results = products.filter((product) => product.name.toLowerCase().includes(name.toLowerCase()));
    return new Promise((resolve, reject) => {
      resolve(results);
      reject('co loi xay ra');
    });
  },
  findProductByCategory: async (categorySlug) => {
    await sleep();
    let arr = [];
    for (const product of products) {
      for (const cate of product.categories) {
        if (cate.slug === categorySlug) {
          arr.push(product);
        }
      }
    }
    return new Promise((resolve, reject) => {
      resolve({products: arr})
      reject('co loi xay ra')
    })
  },
};

export default productsApi;
