import {categories, listCategories} from "~/assets/data/categories";

const sleep = async () => {
  return new Promise((resolve) => {
    setTimeout(resolve, 500)
  })
}

const categoriesApi = {
  getListCategories: async () => {
    await sleep()
    return new Promise((resolve, reject) => {
      resolve(listCategories)
      reject('co loi xay ra')
    })
  },
  getCategoryBySlug: async (slug) => {
    const category = categories.find((category) => category.slug === slug);
    await sleep()
    return new Promise((resolve, reject) => {
      resolve(category)
      reject('co loi xay ra')
    })
  }
}

export default categoriesApi;