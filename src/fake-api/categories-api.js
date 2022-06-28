import {categories} from "~/assets/data/categories";


const categoriesApi = {
  createCategories: (arr, parentId = null) => {
    const cateList = []
    let categories
    if(parentId === null) {
      categories = arr.filter(cate => cate.parentId === null)
    }else {
      categories = arr.filter(cate => cate.parentId === parentId)
    }
    for(let cate of (categories)) {
      cateList.push({
        id: cate.id,
        name: cate.name,
        slug: cate.slug,
        thumbnail: cate.thumbnail || '',
        children: categoriesApi.createCategories(arr, cate.id)
      })
    }
    return cateList
  },
  getListCategories: async () => {
    const cateList = categoriesApi.createCategories(categories)
    return new Promise((resolve, reject) => {
      resolve({categories: cateList})
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