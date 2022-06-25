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
    return new Promise((resolve, reject) => {
      resolve(product);
    });
  },

  getAllProducts: async (filters) => {
    let temp = products;
    if (filters) {
      const page = filters?.page || 1;
      const limit = filters?.limit || 10;
      const colors = filters?.colors;
      const sizes = filters?.sizes;
      const category = filters?.category;
      const q = filters?.q;
      const priceGte = filters.price_gte;
      const priceLte = filters.price_lte;
      if (category) {
        temp = temp.filter((product) => {
          return product.categories.find((itemCate) => {
            return category.includes(itemCate.slug);
          });
        });
      }
      if (colors?.length > 0) {
        temp = temp.filter((product) => {
          return product.colors.find((color) => colors.includes(color));
        });
      }
      if (sizes?.length > 0) {
        temp = temp.filter((product) => {
          return product.sizes.find((size) => sizes.includes(size));
        });
      }
      if (q !== '' && q!==undefined) {
        const keyword = q.trim();
        temp = temp.filter((product) => product.name.toLowerCase().includes(keyword.toLowerCase()));
      }
      if (priceGte !== undefined && priceLte !== undefined) {
        temp = temp.filter((product) => product.price_new >= priceGte && product.price_new <= priceLte);
      }
      const products = productsApi.pagination(temp, page, limit);
      return new Promise((resolve, reject) => {
        resolve({
          products: products,
          pagination: {
            page,
            limit,
            total: temp.length,
          },
        });
      });
    }
    return new Promise((resolve) => {
      resolve({ products: temp });
    });
  },

  findProductByName: async (name) => {
    const results = products.filter((product) => product.name.toLowerCase().includes(name.toLowerCase()));
    return new Promise((resolve, reject) => {
      resolve(results);
    });
  },

  findItemsCart: async (arr) => {
    let temp = [];
    if (arr.length > 0) {
      for (const item of arr) {
        const product = await productsApi.getProductBySlug(item);
        if (product) {
          temp.push(product);
        }
      }
    }
    return new Promise((resolve) => {
      resolve({ products: temp });
    });
  },
};

export default productsApi;
