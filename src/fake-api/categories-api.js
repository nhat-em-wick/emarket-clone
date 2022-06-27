import {categories, listCategories} from "~/assets/data/categories";

const sleep = async () => {
  return new Promise((resolve) => {
    setTimeout(resolve, 2000)
  })
}

const categoriesApi = {
  getListCategories: async () => {
    return new Promise((resolve, reject) => {
      resolve(listCategories)
    })
  },
  getCategoryBySlug: async (slug) => {
    const category = categories.find((category) => category.slug === slug);
    return new Promise((resolve, reject) => {
      resolve(category)
    })
  }
}

export default categoriesApi;