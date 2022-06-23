const products = [
  {
    id: 1,
    name: 'Product 1',
    slug: 'product-1',
    price_new: 100,
    price_old: 200,
    image_thumb:
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/15-800x800.webp',
    image_gallery: [
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/11-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/8-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/1-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/4-800x800.webp',
    ],
    overview: `<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>`,
    description: `<h3>Lorem ipsum dolor sit amet.</h3>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione dignissimos quae totam in, reprehenderit dolorum, voluptatem rerum aut numquam dolore quam. Enim sequi laboriosam, placeat quo vitae illum dignissimos fuga consequuntur cupiditate.</p>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, atque nostrum excepturi deserunt, at sed quo dicta quibusdam enim eligendi iusto tempora, nisi beatae quae praesentium quisquam numquam mollitia iure voluptatum quaerat? Voluptatem eos rerum doloremque temporibus aperiam officiis magni!</p>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet iusto aliquid inventore, nihil autem consequatur, dignissimos laudantium officia repellendus placeat tempora ipsa quae iure ipsum asperiores voluptatibus aut rerum nobis esse delectus deserunt impedit quos? Iste sequi obcaecati officiis vitae. Dolor voluptatibus, quaerat inventore excepturi hic possimus cum mollitia ipsa consectetur quod esse perferendis aspernatur laborum ullam illum et.</p>`,
    colors: ['black', 'yellow'],
    sizes: ['m'],
    rating: 4.5,
    categories: [
      {
        name: "women's wear",
        slug: "women's-wear",
      },
      {
        name: 'fashion',
        slug: 'fashion',
      },
    ],
  },
  {
    id: 2,
    name: 'Product 2',
    slug: 'product-2',
    price_new: 100,
    price_old: 200,
    image_thumb:
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/16-800x800.webp',
    image_gallery: [
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/11-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/8-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/1-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/4-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/5-800x800.webp',
    ],
    overview: `<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>`,
    description: `<h3>Lorem ipsum dolor sit amet.</h3>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione dignissimos quae totam in, reprehenderit dolorum, voluptatem rerum aut numquam dolore quam. Enim sequi laboriosam, placeat quo vitae illum dignissimos fuga consequuntur cupiditate.</p>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, atque nostrum excepturi deserunt, at sed quo dicta quibusdam enim eligendi iusto tempora, nisi beatae quae praesentium quisquam numquam mollitia iure voluptatum quaerat? Voluptatem eos rerum doloremque temporibus aperiam officiis magni!</p>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet iusto aliquid inventore, nihil autem consequatur, dignissimos laudantium officia repellendus placeat tempora ipsa quae iure ipsum asperiores voluptatibus aut rerum nobis esse delectus deserunt impedit quos? Iste sequi obcaecati officiis vitae. Dolor voluptatibus, quaerat inventore excepturi hic possimus cum mollitia ipsa consectetur quod esse perferendis aspernatur laborum ullam illum et.</p>`,
    colors: ['yellow','red'],
    sizes: ['l'],
    rating: 4.5,
    categories: [
      {
        name: "men's clothing",
        slug: "men's-clothing",
      },
      {
        name: 'fashion',
        slug: 'fashion',
      },
    ],
  },
  {
    id: 3,
    name: 'Product 3',
    slug: 'product-3',
    price_new: 100,
    price_old: 200,
    image_thumb:
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/17-800x800.webp',
    image_gallery: [
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/11-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/8-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/1-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/4-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/5-800x800.webp',
    ],
    overview: `<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>`,
    description: `<h3>Lorem ipsum dolor sit amet.</h3>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione dignissimos quae totam in, reprehenderit dolorum, voluptatem rerum aut numquam dolore quam. Enim sequi laboriosam, placeat quo vitae illum dignissimos fuga consequuntur cupiditate.</p>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, atque nostrum excepturi deserunt, at sed quo dicta quibusdam enim eligendi iusto tempora, nisi beatae quae praesentium quisquam numquam mollitia iure voluptatum quaerat? Voluptatem eos rerum doloremque temporibus aperiam officiis magni!</p>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet iusto aliquid inventore, nihil autem consequatur, dignissimos laudantium officia repellendus placeat tempora ipsa quae iure ipsum asperiores voluptatibus aut rerum nobis esse delectus deserunt impedit quos? Iste sequi obcaecati officiis vitae. Dolor voluptatibus, quaerat inventore excepturi hic possimus cum mollitia ipsa consectetur quod esse perferendis aspernatur laborum ullam illum et.</p>`,
    colors: ['black','red'],
    sizes: ['s', 'm'],
    rating: 2.5,
    categories: [
      { name: 'bags', slug: 'bags' },
      {
        name: 'fashion',
        slug: 'fashion',
      },
    ],
  },
  {
    id: 4,
    name: 'Product 4',
    slug: 'product-4',
    price_new: 100,
    price_old: 200,
    image_thumb:
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/11-800x800.webp',
    image_gallery: [
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/11-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/8-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/1-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/4-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/5-800x800.webp',
    ],
    overview: `<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>`,
    description: `<h3>Lorem ipsum dolor sit amet.</h3>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione dignissimos quae totam in, reprehenderit dolorum, voluptatem rerum aut numquam dolore quam. Enim sequi laboriosam, placeat quo vitae illum dignissimos fuga consequuntur cupiditate.</p>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, atque nostrum excepturi deserunt, at sed quo dicta quibusdam enim eligendi iusto tempora, nisi beatae quae praesentium quisquam numquam mollitia iure voluptatum quaerat? Voluptatem eos rerum doloremque temporibus aperiam officiis magni!</p>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet iusto aliquid inventore, nihil autem consequatur, dignissimos laudantium officia repellendus placeat tempora ipsa quae iure ipsum asperiores voluptatibus aut rerum nobis esse delectus deserunt impedit quos? Iste sequi obcaecati officiis vitae. Dolor voluptatibus, quaerat inventore excepturi hic possimus cum mollitia ipsa consectetur quod esse perferendis aspernatur laborum ullam illum et.</p>`,
    colors: ['red'],
    sizes: ['s', 'm', 'l'],
    rating: 3.5,
    categories: [{ name: 'electronics', slug: 'electronics' }, {}],
  },
  {
    id: 5,
    name: 'Product 5',
    slug: 'product-5',
    price_new: 100,
    price_old: 200,
    image_thumb:
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/17-800x800.webp',
    image_gallery: [
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/11-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/8-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/1-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/4-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/5-800x800.webp',
    ],
    overview: `<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>`,
    description: `<h3>Lorem ipsum dolor sit amet.</h3>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione dignissimos quae totam in, reprehenderit dolorum, voluptatem rerum aut numquam dolore quam. Enim sequi laboriosam, placeat quo vitae illum dignissimos fuga consequuntur cupiditate.</p>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, atque nostrum excepturi deserunt, at sed quo dicta quibusdam enim eligendi iusto tempora, nisi beatae quae praesentium quisquam numquam mollitia iure voluptatum quaerat? Voluptatem eos rerum doloremque temporibus aperiam officiis magni!</p>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet iusto aliquid inventore, nihil autem consequatur, dignissimos laudantium officia repellendus placeat tempora ipsa quae iure ipsum asperiores voluptatibus aut rerum nobis esse delectus deserunt impedit quos? Iste sequi obcaecati officiis vitae. Dolor voluptatibus, quaerat inventore excepturi hic possimus cum mollitia ipsa consectetur quod esse perferendis aspernatur laborum ullam illum et.</p>`,
    colors: ['black','yellow','red'],
    sizes: ['s', 'm', 'l'],
    rating: 4.5,
    categories: [
      { name: 'monitors', slug: 'monitors' },
      { name: 'electronics', slug: 'electronics' },
    ],
  },
  {
    id: 6,
    name: 'Product 6',
    slug: 'product-6',
    price_new: 100,
    price_old: 200,
    image_thumb:
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/8-800x800.webp',
    image_gallery: [
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/11-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/8-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/1-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/4-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/5-800x800.webp',
    ],
    overview: `<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>`,
    description: `<h3>Lorem ipsum dolor sit amet.</h3>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione dignissimos quae totam in, reprehenderit dolorum, voluptatem rerum aut numquam dolore quam. Enim sequi laboriosam, placeat quo vitae illum dignissimos fuga consequuntur cupiditate.</p>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, atque nostrum excepturi deserunt, at sed quo dicta quibusdam enim eligendi iusto tempora, nisi beatae quae praesentium quisquam numquam mollitia iure voluptatum quaerat? Voluptatem eos rerum doloremque temporibus aperiam officiis magni!</p>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet iusto aliquid inventore, nihil autem consequatur, dignissimos laudantium officia repellendus placeat tempora ipsa quae iure ipsum asperiores voluptatibus aut rerum nobis esse delectus deserunt impedit quos? Iste sequi obcaecati officiis vitae. Dolor voluptatibus, quaerat inventore excepturi hic possimus cum mollitia ipsa consectetur quod esse perferendis aspernatur laborum ullam illum et.</p>`,
    colors: ['black','yellow','red'],
    sizes: ['s', 'm', 'l'],
    rating: 2.5,
    categories: [{ name: 'monitors', slug: 'monitors' }],
  },
  {
    id: 7,
    name: 'Product 7',
    slug: 'product-7',
    price_new: 100,
    price_old: 200,
    image_thumb:
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/1-800x800.webp',
    image_gallery: [
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/11-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/8-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/1-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/4-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/5-800x800.webp',
    ],
    overview: `<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>`,
    description: `<h3>Lorem ipsum dolor sit amet.</h3>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione dignissimos quae totam in, reprehenderit dolorum, voluptatem rerum aut numquam dolore quam. Enim sequi laboriosam, placeat quo vitae illum dignissimos fuga consequuntur cupiditate.</p>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, atque nostrum excepturi deserunt, at sed quo dicta quibusdam enim eligendi iusto tempora, nisi beatae quae praesentium quisquam numquam mollitia iure voluptatum quaerat? Voluptatem eos rerum doloremque temporibus aperiam officiis magni!</p>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet iusto aliquid inventore, nihil autem consequatur, dignissimos laudantium officia repellendus placeat tempora ipsa quae iure ipsum asperiores voluptatibus aut rerum nobis esse delectus deserunt impedit quos? Iste sequi obcaecati officiis vitae. Dolor voluptatibus, quaerat inventore excepturi hic possimus cum mollitia ipsa consectetur quod esse perferendis aspernatur laborum ullam illum et.</p>`,
    colors: ['black','yellow','red'],
    sizes: ['s', 'm', 'l'],
    rating: 5,
    categories: [
      { name: 'smart phone', slug: 'smart-phone' },
      { name: 'samsung', slug: 'samsung' },
    ],
  },
  {
    id: 8,
    name: 'Product 8',
    slug: 'product-8',
    price_new: 100,
    price_old: 200,
    image_thumb:
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/4-800x800.webp',
    image_gallery: [
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/11-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/8-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/1-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/4-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/5-800x800.webp',
    ],
    overview: `<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>`,
    description: `<h3>Lorem ipsum dolor sit amet.</h3>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione dignissimos quae totam in, reprehenderit dolorum, voluptatem rerum aut numquam dolore quam. Enim sequi laboriosam, placeat quo vitae illum dignissimos fuga consequuntur cupiditate.</p>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, atque nostrum excepturi deserunt, at sed quo dicta quibusdam enim eligendi iusto tempora, nisi beatae quae praesentium quisquam numquam mollitia iure voluptatum quaerat? Voluptatem eos rerum doloremque temporibus aperiam officiis magni!</p>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet iusto aliquid inventore, nihil autem consequatur, dignissimos laudantium officia repellendus placeat tempora ipsa quae iure ipsum asperiores voluptatibus aut rerum nobis esse delectus deserunt impedit quos? Iste sequi obcaecati officiis vitae. Dolor voluptatibus, quaerat inventore excepturi hic possimus cum mollitia ipsa consectetur quod esse perferendis aspernatur laborum ullam illum et.</p>`,
    colors: ['black','yellow','red'],
    sizes: ['s', 'm', 'l'],
    rating: 2,
    categories: [
      { name: 'smart phone', slug: 'smart-phone' },
      { name: 'apple', slug: 'apple' },
    ],
  },
  {
    id: 9,
    name: 'Product 9',
    slug: 'product-9',
    price_new: 100,
    price_old: 200,
    image_thumb:
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/2-800x800.webp',
    image_gallery: [
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/11-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/8-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/1-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/4-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/5-800x800.webp',
    ],
    overview: `<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>`,
    description: `<h3>Lorem ipsum dolor sit amet.</h3>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione dignissimos quae totam in, reprehenderit dolorum, voluptatem rerum aut numquam dolore quam. Enim sequi laboriosam, placeat quo vitae illum dignissimos fuga consequuntur cupiditate.</p>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, atque nostrum excepturi deserunt, at sed quo dicta quibusdam enim eligendi iusto tempora, nisi beatae quae praesentium quisquam numquam mollitia iure voluptatum quaerat? Voluptatem eos rerum doloremque temporibus aperiam officiis magni!</p>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet iusto aliquid inventore, nihil autem consequatur, dignissimos laudantium officia repellendus placeat tempora ipsa quae iure ipsum asperiores voluptatibus aut rerum nobis esse delectus deserunt impedit quos? Iste sequi obcaecati officiis vitae. Dolor voluptatibus, quaerat inventore excepturi hic possimus cum mollitia ipsa consectetur quod esse perferendis aspernatur laborum ullam illum et.</p>`,
    colors: ['black','yellow','red'],
    sizes: ['s', 'm', 'l'],
    rating: 4,
    categories: [
      { name: 'smart phone', slug: 'smart-phone' },
      { name: 'xiaomi', slug: 'xiaomi' },
    ],
  },
  {
    id: 18,
    name: 'Product 18',
    slug: 'product-18',
    price_new: 100,
    price_old: 200,
    image_thumb:
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/17-800x800.webp',
    image_gallery: [
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/11-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/8-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/1-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/4-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/5-800x800.webp',
    ],
    overview: `<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>`,
    description: `<h3>Lorem ipsum dolor sit amet.</h3>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione dignissimos quae totam in, reprehenderit dolorum, voluptatem rerum aut numquam dolore quam. Enim sequi laboriosam, placeat quo vitae illum dignissimos fuga consequuntur cupiditate.</p>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, atque nostrum excepturi deserunt, at sed quo dicta quibusdam enim eligendi iusto tempora, nisi beatae quae praesentium quisquam numquam mollitia iure voluptatum quaerat? Voluptatem eos rerum doloremque temporibus aperiam officiis magni!</p>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet iusto aliquid inventore, nihil autem consequatur, dignissimos laudantium officia repellendus placeat tempora ipsa quae iure ipsum asperiores voluptatibus aut rerum nobis esse delectus deserunt impedit quos? Iste sequi obcaecati officiis vitae. Dolor voluptatibus, quaerat inventore excepturi hic possimus cum mollitia ipsa consectetur quod esse perferendis aspernatur laborum ullam illum et.</p>`,
    colors: ['black','yellow','red'],
    sizes: ['s', 'm', 'l'],
    rating: 3.5,
    categories: [
      { name: 'smart phone', slug: 'smart-phone' },
      { name: 'oppo', slug: 'oppo' },
    ],
  },
  {
    id: 10,
    name: 'Product 10',
    slug: 'product-10',
    price_new: 100,
    price_old: 200,
    image_thumb:
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/17-800x800.webp',
    image_gallery: [
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/11-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/8-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/1-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/4-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/5-800x800.webp',
    ],
    overview: `<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>`,
    description: `<h3>Lorem ipsum dolor sit amet.</h3>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione dignissimos quae totam in, reprehenderit dolorum, voluptatem rerum aut numquam dolore quam. Enim sequi laboriosam, placeat quo vitae illum dignissimos fuga consequuntur cupiditate.</p>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, atque nostrum excepturi deserunt, at sed quo dicta quibusdam enim eligendi iusto tempora, nisi beatae quae praesentium quisquam numquam mollitia iure voluptatum quaerat? Voluptatem eos rerum doloremque temporibus aperiam officiis magni!</p>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet iusto aliquid inventore, nihil autem consequatur, dignissimos laudantium officia repellendus placeat tempora ipsa quae iure ipsum asperiores voluptatibus aut rerum nobis esse delectus deserunt impedit quos? Iste sequi obcaecati officiis vitae. Dolor voluptatibus, quaerat inventore excepturi hic possimus cum mollitia ipsa consectetur quod esse perferendis aspernatur laborum ullam illum et.</p>`,
    colors: ['black','yellow','red'],
    sizes: ['s', 'm', 'l'],
    rating: 3.5,
    categories: [
      { name: 'smart phone', slug: 'smart-phone' },
      { name: 'oppo', slug: 'oppo' },
    ],
  },
  {
    id: 11,
    name: 'Product 11',
    slug: 'product-11',
    price_new: 100,
    price_old: 200,
    image_thumb:
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/17-800x800.webp',
    image_gallery: [
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/11-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/8-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/1-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/4-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/5-800x800.webp',
    ],
    overview: `<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>`,
    description: `<h3>Lorem ipsum dolor sit amet.</h3>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione dignissimos quae totam in, reprehenderit dolorum, voluptatem rerum aut numquam dolore quam. Enim sequi laboriosam, placeat quo vitae illum dignissimos fuga consequuntur cupiditate.</p>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, atque nostrum excepturi deserunt, at sed quo dicta quibusdam enim eligendi iusto tempora, nisi beatae quae praesentium quisquam numquam mollitia iure voluptatum quaerat? Voluptatem eos rerum doloremque temporibus aperiam officiis magni!</p>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet iusto aliquid inventore, nihil autem consequatur, dignissimos laudantium officia repellendus placeat tempora ipsa quae iure ipsum asperiores voluptatibus aut rerum nobis esse delectus deserunt impedit quos? Iste sequi obcaecati officiis vitae. Dolor voluptatibus, quaerat inventore excepturi hic possimus cum mollitia ipsa consectetur quod esse perferendis aspernatur laborum ullam illum et.</p>`,
    colors: ['black','yellow','red'],
    sizes: ['s', 'm', 'l'],
    rating: 3.5,
    categories: [
      { name: 'smart phone', slug: 'smart-phone' },
      { name: 'oppo', slug: 'oppo' },
    ],
  },
  {
    id: 12,
    name: 'Product 12',
    slug: 'product-12',
    price_new: 100,
    price_old: 200,
    image_thumb:
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/17-800x800.webp',
    image_gallery: [
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/11-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/8-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/1-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/4-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/5-800x800.webp',
    ],
    overview: `<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>`,
    description: `<h3>Lorem ipsum dolor sit amet.</h3>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione dignissimos quae totam in, reprehenderit dolorum, voluptatem rerum aut numquam dolore quam. Enim sequi laboriosam, placeat quo vitae illum dignissimos fuga consequuntur cupiditate.</p>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, atque nostrum excepturi deserunt, at sed quo dicta quibusdam enim eligendi iusto tempora, nisi beatae quae praesentium quisquam numquam mollitia iure voluptatum quaerat? Voluptatem eos rerum doloremque temporibus aperiam officiis magni!</p>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet iusto aliquid inventore, nihil autem consequatur, dignissimos laudantium officia repellendus placeat tempora ipsa quae iure ipsum asperiores voluptatibus aut rerum nobis esse delectus deserunt impedit quos? Iste sequi obcaecati officiis vitae. Dolor voluptatibus, quaerat inventore excepturi hic possimus cum mollitia ipsa consectetur quod esse perferendis aspernatur laborum ullam illum et.</p>`,
    colors: ['black','yellow','red'],
    sizes: ['s', 'm', 'l'],
    rating: 3.5,
    categories: [
      { name: 'smart phone', slug: 'smart-phone' },
      { name: 'oppo', slug: 'oppo' },
    ],
  },
  {
    id: 13,
    name: 'Product 13',
    slug: 'product-13',
    price_new: 100,
    price_old: 200,
    image_thumb:
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/17-800x800.webp',
    image_gallery: [
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/11-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/8-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/1-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/4-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/5-800x800.webp',
    ],
    overview: `<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>`,
    description: `<h3>Lorem ipsum dolor sit amet.</h3>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione dignissimos quae totam in, reprehenderit dolorum, voluptatem rerum aut numquam dolore quam. Enim sequi laboriosam, placeat quo vitae illum dignissimos fuga consequuntur cupiditate.</p>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, atque nostrum excepturi deserunt, at sed quo dicta quibusdam enim eligendi iusto tempora, nisi beatae quae praesentium quisquam numquam mollitia iure voluptatum quaerat? Voluptatem eos rerum doloremque temporibus aperiam officiis magni!</p>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet iusto aliquid inventore, nihil autem consequatur, dignissimos laudantium officia repellendus placeat tempora ipsa quae iure ipsum asperiores voluptatibus aut rerum nobis esse delectus deserunt impedit quos? Iste sequi obcaecati officiis vitae. Dolor voluptatibus, quaerat inventore excepturi hic possimus cum mollitia ipsa consectetur quod esse perferendis aspernatur laborum ullam illum et.</p>`,
    colors: ['black','yellow','red'],
    sizes: ['s', 'm', 'l'],
    rating: 3.5,
    categories: [
      { name: 'smart phone', slug: 'smart-phone' },
      { name: 'oppo', slug: 'oppo' },
    ],
  },
  {
    id: 14,
    name: 'Product 14',
    slug: 'product-14',
    price_new: 100,
    price_old: 200,
    image_thumb:
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/17-800x800.webp',
    image_gallery: [
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/11-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/8-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/1-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/4-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/5-800x800.webp',
    ],
    overview: `<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>`,
    description: `<h3>Lorem ipsum dolor sit amet.</h3>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione dignissimos quae totam in, reprehenderit dolorum, voluptatem rerum aut numquam dolore quam. Enim sequi laboriosam, placeat quo vitae illum dignissimos fuga consequuntur cupiditate.</p>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, atque nostrum excepturi deserunt, at sed quo dicta quibusdam enim eligendi iusto tempora, nisi beatae quae praesentium quisquam numquam mollitia iure voluptatum quaerat? Voluptatem eos rerum doloremque temporibus aperiam officiis magni!</p>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet iusto aliquid inventore, nihil autem consequatur, dignissimos laudantium officia repellendus placeat tempora ipsa quae iure ipsum asperiores voluptatibus aut rerum nobis esse delectus deserunt impedit quos? Iste sequi obcaecati officiis vitae. Dolor voluptatibus, quaerat inventore excepturi hic possimus cum mollitia ipsa consectetur quod esse perferendis aspernatur laborum ullam illum et.</p>`,
    colors: ['black','yellow','red'],
    sizes: ['s', 'm', 'l'],
    rating: 3.5,
    categories: [
      { name: 'smart phone', slug: 'smart-phone' },
      { name: 'oppo', slug: 'oppo' },
    ],
  },
  {
    id: 15,
    name: 'Product 15',
    slug: 'product-15',
    price_new: 100,
    price_old: 200,
    image_thumb:
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/17-800x800.webp',
    image_gallery: [
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/11-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/8-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/1-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/4-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/5-800x800.webp',
    ],
    overview: `<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>`,
    description: `<h3>Lorem ipsum dolor sit amet.</h3>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione dignissimos quae totam in, reprehenderit dolorum, voluptatem rerum aut numquam dolore quam. Enim sequi laboriosam, placeat quo vitae illum dignissimos fuga consequuntur cupiditate.</p>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, atque nostrum excepturi deserunt, at sed quo dicta quibusdam enim eligendi iusto tempora, nisi beatae quae praesentium quisquam numquam mollitia iure voluptatum quaerat? Voluptatem eos rerum doloremque temporibus aperiam officiis magni!</p>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet iusto aliquid inventore, nihil autem consequatur, dignissimos laudantium officia repellendus placeat tempora ipsa quae iure ipsum asperiores voluptatibus aut rerum nobis esse delectus deserunt impedit quos? Iste sequi obcaecati officiis vitae. Dolor voluptatibus, quaerat inventore excepturi hic possimus cum mollitia ipsa consectetur quod esse perferendis aspernatur laborum ullam illum et.</p>`,
    colors: ['black','yellow','red'],
    sizes: ['s', 'm', 'l'],
    rating: 3.5,
    categories: [
      { name: 'smart phone', slug: 'smart-phone' },
      { name: 'oppo', slug: 'oppo' },
    ],
  },
  {
    id: 16,
    name: 'Product 16',
    slug: 'product-16',
    price_new: 100,
    price_old: 250,
    image_thumb:
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/17-800x800.webp',
    image_gallery: [
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/11-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/8-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/1-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/4-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/5-800x800.webp',
    ],
    overview: `<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>`,
    description: `<h3>Lorem ipsum dolor sit amet.</h3>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione dignissimos quae totam in, reprehenderit dolorum, voluptatem rerum aut numquam dolore quam. Enim sequi laboriosam, placeat quo vitae illum dignissimos fuga consequuntur cupiditate.</p>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, atque nostrum excepturi deserunt, at sed quo dicta quibusdam enim eligendi iusto tempora, nisi beatae quae praesentium quisquam numquam mollitia iure voluptatum quaerat? Voluptatem eos rerum doloremque temporibus aperiam officiis magni!</p>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet iusto aliquid inventore, nihil autem consequatur, dignissimos laudantium officia repellendus placeat tempora ipsa quae iure ipsum asperiores voluptatibus aut rerum nobis esse delectus deserunt impedit quos? Iste sequi obcaecati officiis vitae. Dolor voluptatibus, quaerat inventore excepturi hic possimus cum mollitia ipsa consectetur quod esse perferendis aspernatur laborum ullam illum et.</p>`,
    colors: ['black','yellow','red'],
    sizes: ['s', 'm', 'l'],
    rating: 3.5,
    categories: [
      { name: 'smart phone', slug: 'smart-phone' },
      { name: 'oppo', slug: 'oppo' },
    ],
  },
  {
    id: 17,
    name: 'Product 17',
    slug: 'product-17',
    price_new: 90,
    price_old: 150,
    image_thumb:
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/17-800x800.webp',
    image_gallery: [
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/11-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/8-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/1-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/4-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/5-800x800.webp',
    ],
    overview: `<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>`,
    description: `<h3>Lorem ipsum dolor sit amet.</h3>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione dignissimos quae totam in, reprehenderit dolorum, voluptatem rerum aut numquam dolore quam. Enim sequi laboriosam, placeat quo vitae illum dignissimos fuga consequuntur cupiditate.</p>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, atque nostrum excepturi deserunt, at sed quo dicta quibusdam enim eligendi iusto tempora, nisi beatae quae praesentium quisquam numquam mollitia iure voluptatum quaerat? Voluptatem eos rerum doloremque temporibus aperiam officiis magni!</p>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet iusto aliquid inventore, nihil autem consequatur, dignissimos laudantium officia repellendus placeat tempora ipsa quae iure ipsum asperiores voluptatibus aut rerum nobis esse delectus deserunt impedit quos? Iste sequi obcaecati officiis vitae. Dolor voluptatibus, quaerat inventore excepturi hic possimus cum mollitia ipsa consectetur quod esse perferendis aspernatur laborum ullam illum et.</p>`,
    colors: ['black','yellow','red'],
    sizes: ['s', 'm', 'l'],
    rating: 3.5,
    categories: [
      { name: 'smart phone', slug: 'smart-phone' },
      { name: 'oppo', slug: 'oppo' },
    ],
  },
  {
    id: 18,
    name: 'Product 18',
    slug: 'product-18',
    price_new: 110,
    price_old: 120,
    image_thumb:
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/17-800x800.webp',
    image_gallery: [
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/11-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/8-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/1-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/4-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/5-800x800.webp',
    ],
    overview: `<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>`,
    description: `<h3>Lorem ipsum dolor sit amet.</h3>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione dignissimos quae totam in, reprehenderit dolorum, voluptatem rerum aut numquam dolore quam. Enim sequi laboriosam, placeat quo vitae illum dignissimos fuga consequuntur cupiditate.</p>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, atque nostrum excepturi deserunt, at sed quo dicta quibusdam enim eligendi iusto tempora, nisi beatae quae praesentium quisquam numquam mollitia iure voluptatum quaerat? Voluptatem eos rerum doloremque temporibus aperiam officiis magni!</p>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet iusto aliquid inventore, nihil autem consequatur, dignissimos laudantium officia repellendus placeat tempora ipsa quae iure ipsum asperiores voluptatibus aut rerum nobis esse delectus deserunt impedit quos? Iste sequi obcaecati officiis vitae. Dolor voluptatibus, quaerat inventore excepturi hic possimus cum mollitia ipsa consectetur quod esse perferendis aspernatur laborum ullam illum et.</p>`,
    colors: ['black','yellow','red'],
    sizes: ['s', 'm', 'l'],
    rating: 3.5,
    categories: [
      { name: 'electronics', slug: 'electronics' },
      { name: 'scanners', slug: 'scanners' },
    ],
  },
  {
    id: 1,
    name: 'Product 1',
    slug: 'product-1',
    price_new: 100,
    price_old: 200,
    image_thumb:
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/15-800x800.webp',
    image_gallery: [
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/11-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/8-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/1-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/4-800x800.webp',
    ],
    overview: `<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>`,
    description: `<h3>Lorem ipsum dolor sit amet.</h3>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione dignissimos quae totam in, reprehenderit dolorum, voluptatem rerum aut numquam dolore quam. Enim sequi laboriosam, placeat quo vitae illum dignissimos fuga consequuntur cupiditate.</p>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, atque nostrum excepturi deserunt, at sed quo dicta quibusdam enim eligendi iusto tempora, nisi beatae quae praesentium quisquam numquam mollitia iure voluptatum quaerat? Voluptatem eos rerum doloremque temporibus aperiam officiis magni!</p>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet iusto aliquid inventore, nihil autem consequatur, dignissimos laudantium officia repellendus placeat tempora ipsa quae iure ipsum asperiores voluptatibus aut rerum nobis esse delectus deserunt impedit quos? Iste sequi obcaecati officiis vitae. Dolor voluptatibus, quaerat inventore excepturi hic possimus cum mollitia ipsa consectetur quod esse perferendis aspernatur laborum ullam illum et.</p>`,
    colors: ['black', 'yellow'],
    sizes: ['m'],
    rating: 4.5,
    categories: [
      {
        name: "women's wear",
        slug: "women's-wear",
      },
      {
        name: 'fashion',
        slug: 'fashion',
      },
    ],
  },
  {
    id: 2,
    name: 'Product 2',
    slug: 'product-2',
    price_new: 100,
    price_old: 200,
    image_thumb:
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/16-800x800.webp',
    image_gallery: [
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/11-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/8-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/1-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/4-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/5-800x800.webp',
    ],
    overview: `<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>`,
    description: `<h3>Lorem ipsum dolor sit amet.</h3>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione dignissimos quae totam in, reprehenderit dolorum, voluptatem rerum aut numquam dolore quam. Enim sequi laboriosam, placeat quo vitae illum dignissimos fuga consequuntur cupiditate.</p>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, atque nostrum excepturi deserunt, at sed quo dicta quibusdam enim eligendi iusto tempora, nisi beatae quae praesentium quisquam numquam mollitia iure voluptatum quaerat? Voluptatem eos rerum doloremque temporibus aperiam officiis magni!</p>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet iusto aliquid inventore, nihil autem consequatur, dignissimos laudantium officia repellendus placeat tempora ipsa quae iure ipsum asperiores voluptatibus aut rerum nobis esse delectus deserunt impedit quos? Iste sequi obcaecati officiis vitae. Dolor voluptatibus, quaerat inventore excepturi hic possimus cum mollitia ipsa consectetur quod esse perferendis aspernatur laborum ullam illum et.</p>`,
    colors: ['yellow','red'],
    sizes: ['l'],
    rating: 4.5,
    categories: [
      {
        name: "men's clothing",
        slug: "men's-clothing",
      },
      {
        name: 'fashion',
        slug: 'fashion',
      },
    ],
  },
  {
    id: 3,
    name: 'Product 3',
    slug: 'product-3',
    price_new: 100,
    price_old: 200,
    image_thumb:
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/17-800x800.webp',
    image_gallery: [
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/11-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/8-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/1-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/4-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/5-800x800.webp',
    ],
    overview: `<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>`,
    description: `<h3>Lorem ipsum dolor sit amet.</h3>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione dignissimos quae totam in, reprehenderit dolorum, voluptatem rerum aut numquam dolore quam. Enim sequi laboriosam, placeat quo vitae illum dignissimos fuga consequuntur cupiditate.</p>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, atque nostrum excepturi deserunt, at sed quo dicta quibusdam enim eligendi iusto tempora, nisi beatae quae praesentium quisquam numquam mollitia iure voluptatum quaerat? Voluptatem eos rerum doloremque temporibus aperiam officiis magni!</p>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet iusto aliquid inventore, nihil autem consequatur, dignissimos laudantium officia repellendus placeat tempora ipsa quae iure ipsum asperiores voluptatibus aut rerum nobis esse delectus deserunt impedit quos? Iste sequi obcaecati officiis vitae. Dolor voluptatibus, quaerat inventore excepturi hic possimus cum mollitia ipsa consectetur quod esse perferendis aspernatur laborum ullam illum et.</p>`,
    colors: ['black','red'],
    sizes: ['s', 'm'],
    rating: 2.5,
    categories: [
      { name: 'bags', slug: 'bags' },
      {
        name: 'fashion',
        slug: 'fashion',
      },
    ],
  },
  {
    id: 4,
    name: 'Product 4',
    slug: 'product-4',
    price_new: 100,
    price_old: 200,
    image_thumb:
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/11-800x800.webp',
    image_gallery: [
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/11-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/8-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/1-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/4-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/5-800x800.webp',
    ],
    overview: `<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>`,
    description: `<h3>Lorem ipsum dolor sit amet.</h3>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione dignissimos quae totam in, reprehenderit dolorum, voluptatem rerum aut numquam dolore quam. Enim sequi laboriosam, placeat quo vitae illum dignissimos fuga consequuntur cupiditate.</p>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, atque nostrum excepturi deserunt, at sed quo dicta quibusdam enim eligendi iusto tempora, nisi beatae quae praesentium quisquam numquam mollitia iure voluptatum quaerat? Voluptatem eos rerum doloremque temporibus aperiam officiis magni!</p>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet iusto aliquid inventore, nihil autem consequatur, dignissimos laudantium officia repellendus placeat tempora ipsa quae iure ipsum asperiores voluptatibus aut rerum nobis esse delectus deserunt impedit quos? Iste sequi obcaecati officiis vitae. Dolor voluptatibus, quaerat inventore excepturi hic possimus cum mollitia ipsa consectetur quod esse perferendis aspernatur laborum ullam illum et.</p>`,
    colors: ['red'],
    sizes: ['s', 'm', 'l'],
    rating: 3.5,
    categories: [{ name: 'electronics', slug: 'electronics' }, {}],
  },
  {
    id: 5,
    name: 'Product 5',
    slug: 'product-5',
    price_new: 100,
    price_old: 200,
    image_thumb:
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/17-800x800.webp',
    image_gallery: [
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/11-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/8-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/1-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/4-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/5-800x800.webp',
    ],
    overview: `<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>`,
    description: `<h3>Lorem ipsum dolor sit amet.</h3>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione dignissimos quae totam in, reprehenderit dolorum, voluptatem rerum aut numquam dolore quam. Enim sequi laboriosam, placeat quo vitae illum dignissimos fuga consequuntur cupiditate.</p>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, atque nostrum excepturi deserunt, at sed quo dicta quibusdam enim eligendi iusto tempora, nisi beatae quae praesentium quisquam numquam mollitia iure voluptatum quaerat? Voluptatem eos rerum doloremque temporibus aperiam officiis magni!</p>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet iusto aliquid inventore, nihil autem consequatur, dignissimos laudantium officia repellendus placeat tempora ipsa quae iure ipsum asperiores voluptatibus aut rerum nobis esse delectus deserunt impedit quos? Iste sequi obcaecati officiis vitae. Dolor voluptatibus, quaerat inventore excepturi hic possimus cum mollitia ipsa consectetur quod esse perferendis aspernatur laborum ullam illum et.</p>`,
    colors: ['black','yellow','red'],
    sizes: ['s', 'm', 'l'],
    rating: 4.5,
    categories: [
      { name: 'monitors', slug: 'monitors' },
      { name: 'electronics', slug: 'electronics' },
    ],
  },
  {
    id: 6,
    name: 'Product 6',
    slug: 'product-6',
    price_new: 100,
    price_old: 200,
    image_thumb:
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/8-800x800.webp',
    image_gallery: [
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/11-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/8-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/1-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/4-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/5-800x800.webp',
    ],
    overview: `<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>`,
    description: `<h3>Lorem ipsum dolor sit amet.</h3>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione dignissimos quae totam in, reprehenderit dolorum, voluptatem rerum aut numquam dolore quam. Enim sequi laboriosam, placeat quo vitae illum dignissimos fuga consequuntur cupiditate.</p>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, atque nostrum excepturi deserunt, at sed quo dicta quibusdam enim eligendi iusto tempora, nisi beatae quae praesentium quisquam numquam mollitia iure voluptatum quaerat? Voluptatem eos rerum doloremque temporibus aperiam officiis magni!</p>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet iusto aliquid inventore, nihil autem consequatur, dignissimos laudantium officia repellendus placeat tempora ipsa quae iure ipsum asperiores voluptatibus aut rerum nobis esse delectus deserunt impedit quos? Iste sequi obcaecati officiis vitae. Dolor voluptatibus, quaerat inventore excepturi hic possimus cum mollitia ipsa consectetur quod esse perferendis aspernatur laborum ullam illum et.</p>`,
    colors: ['black','yellow','red'],
    sizes: ['s', 'm', 'l'],
    rating: 2.5,
    categories: [{ name: 'monitors', slug: 'monitors' }],
  },
  {
    id: 7,
    name: 'Product 7',
    slug: 'product-7',
    price_new: 100,
    price_old: 200,
    image_thumb:
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/1-800x800.webp',
    image_gallery: [
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/11-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/8-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/1-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/4-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/5-800x800.webp',
    ],
    overview: `<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>`,
    description: `<h3>Lorem ipsum dolor sit amet.</h3>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione dignissimos quae totam in, reprehenderit dolorum, voluptatem rerum aut numquam dolore quam. Enim sequi laboriosam, placeat quo vitae illum dignissimos fuga consequuntur cupiditate.</p>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, atque nostrum excepturi deserunt, at sed quo dicta quibusdam enim eligendi iusto tempora, nisi beatae quae praesentium quisquam numquam mollitia iure voluptatum quaerat? Voluptatem eos rerum doloremque temporibus aperiam officiis magni!</p>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet iusto aliquid inventore, nihil autem consequatur, dignissimos laudantium officia repellendus placeat tempora ipsa quae iure ipsum asperiores voluptatibus aut rerum nobis esse delectus deserunt impedit quos? Iste sequi obcaecati officiis vitae. Dolor voluptatibus, quaerat inventore excepturi hic possimus cum mollitia ipsa consectetur quod esse perferendis aspernatur laborum ullam illum et.</p>`,
    colors: ['black','yellow','red'],
    sizes: ['s', 'm', 'l'],
    rating: 5,
    categories: [
      { name: 'smart phone', slug: 'smart-phone' },
      { name: 'samsung', slug: 'samsung' },
    ],
  },
  {
    id: 8,
    name: 'Product 8',
    slug: 'product-8',
    price_new: 100,
    price_old: 200,
    image_thumb:
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/4-800x800.webp',
    image_gallery: [
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/11-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/8-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/1-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/4-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/5-800x800.webp',
    ],
    overview: `<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>`,
    description: `<h3>Lorem ipsum dolor sit amet.</h3>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione dignissimos quae totam in, reprehenderit dolorum, voluptatem rerum aut numquam dolore quam. Enim sequi laboriosam, placeat quo vitae illum dignissimos fuga consequuntur cupiditate.</p>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, atque nostrum excepturi deserunt, at sed quo dicta quibusdam enim eligendi iusto tempora, nisi beatae quae praesentium quisquam numquam mollitia iure voluptatum quaerat? Voluptatem eos rerum doloremque temporibus aperiam officiis magni!</p>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet iusto aliquid inventore, nihil autem consequatur, dignissimos laudantium officia repellendus placeat tempora ipsa quae iure ipsum asperiores voluptatibus aut rerum nobis esse delectus deserunt impedit quos? Iste sequi obcaecati officiis vitae. Dolor voluptatibus, quaerat inventore excepturi hic possimus cum mollitia ipsa consectetur quod esse perferendis aspernatur laborum ullam illum et.</p>`,
    colors: ['black','yellow','red'],
    sizes: ['s', 'm', 'l'],
    rating: 2,
    categories: [
      { name: 'smart phone', slug: 'smart-phone' },
      { name: 'apple', slug: 'apple' },
    ],
  },
  {
    id: 9,
    name: 'Product 9',
    slug: 'product-9',
    price_new: 100,
    price_old: 200,
    image_thumb:
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/2-800x800.webp',
    image_gallery: [
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/11-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/8-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/1-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/4-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/5-800x800.webp',
    ],
    overview: `<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>`,
    description: `<h3>Lorem ipsum dolor sit amet.</h3>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione dignissimos quae totam in, reprehenderit dolorum, voluptatem rerum aut numquam dolore quam. Enim sequi laboriosam, placeat quo vitae illum dignissimos fuga consequuntur cupiditate.</p>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, atque nostrum excepturi deserunt, at sed quo dicta quibusdam enim eligendi iusto tempora, nisi beatae quae praesentium quisquam numquam mollitia iure voluptatum quaerat? Voluptatem eos rerum doloremque temporibus aperiam officiis magni!</p>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet iusto aliquid inventore, nihil autem consequatur, dignissimos laudantium officia repellendus placeat tempora ipsa quae iure ipsum asperiores voluptatibus aut rerum nobis esse delectus deserunt impedit quos? Iste sequi obcaecati officiis vitae. Dolor voluptatibus, quaerat inventore excepturi hic possimus cum mollitia ipsa consectetur quod esse perferendis aspernatur laborum ullam illum et.</p>`,
    colors: ['black','yellow','red'],
    sizes: ['s', 'm', 'l'],
    rating: 4,
    categories: [
      { name: 'smart phone', slug: 'smart-phone' },
      { name: 'xiaomi', slug: 'xiaomi' },
    ],
  },
    {
    id: 1,
    name: 'Product 1',
    slug: 'product-1',
    price_new: 100,
    price_old: 200,
    image_thumb:
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/15-800x800.webp',
    image_gallery: [
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/11-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/8-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/1-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/4-800x800.webp',
    ],
    overview: `<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>`,
    description: `<h3>Lorem ipsum dolor sit amet.</h3>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione dignissimos quae totam in, reprehenderit dolorum, voluptatem rerum aut numquam dolore quam. Enim sequi laboriosam, placeat quo vitae illum dignissimos fuga consequuntur cupiditate.</p>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, atque nostrum excepturi deserunt, at sed quo dicta quibusdam enim eligendi iusto tempora, nisi beatae quae praesentium quisquam numquam mollitia iure voluptatum quaerat? Voluptatem eos rerum doloremque temporibus aperiam officiis magni!</p>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet iusto aliquid inventore, nihil autem consequatur, dignissimos laudantium officia repellendus placeat tempora ipsa quae iure ipsum asperiores voluptatibus aut rerum nobis esse delectus deserunt impedit quos? Iste sequi obcaecati officiis vitae. Dolor voluptatibus, quaerat inventore excepturi hic possimus cum mollitia ipsa consectetur quod esse perferendis aspernatur laborum ullam illum et.</p>`,
    colors: ['black', 'yellow'],
    sizes: ['m'],
    rating: 4.5,
    categories: [
      {
        name: "women's wear",
        slug: "women's-wear",
      },
      {
        name: 'fashion',
        slug: 'fashion',
      },
    ],
  },
  {
    id: 2,
    name: 'Product 2',
    slug: 'product-2',
    price_new: 100,
    price_old: 200,
    image_thumb:
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/16-800x800.webp',
    image_gallery: [
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/11-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/8-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/1-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/4-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/5-800x800.webp',
    ],
    overview: `<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>`,
    description: `<h3>Lorem ipsum dolor sit amet.</h3>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione dignissimos quae totam in, reprehenderit dolorum, voluptatem rerum aut numquam dolore quam. Enim sequi laboriosam, placeat quo vitae illum dignissimos fuga consequuntur cupiditate.</p>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, atque nostrum excepturi deserunt, at sed quo dicta quibusdam enim eligendi iusto tempora, nisi beatae quae praesentium quisquam numquam mollitia iure voluptatum quaerat? Voluptatem eos rerum doloremque temporibus aperiam officiis magni!</p>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet iusto aliquid inventore, nihil autem consequatur, dignissimos laudantium officia repellendus placeat tempora ipsa quae iure ipsum asperiores voluptatibus aut rerum nobis esse delectus deserunt impedit quos? Iste sequi obcaecati officiis vitae. Dolor voluptatibus, quaerat inventore excepturi hic possimus cum mollitia ipsa consectetur quod esse perferendis aspernatur laborum ullam illum et.</p>`,
    colors: ['yellow','red'],
    sizes: ['l'],
    rating: 4.5,
    categories: [
      {
        name: "men's clothing",
        slug: "men's-clothing",
      },
      {
        name: 'fashion',
        slug: 'fashion',
      },
    ],
  },
  {
    id: 3,
    name: 'Product 3',
    slug: 'product-3',
    price_new: 100,
    price_old: 200,
    image_thumb:
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/17-800x800.webp',
    image_gallery: [
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/11-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/8-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/1-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/4-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/5-800x800.webp',
    ],
    overview: `<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>`,
    description: `<h3>Lorem ipsum dolor sit amet.</h3>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione dignissimos quae totam in, reprehenderit dolorum, voluptatem rerum aut numquam dolore quam. Enim sequi laboriosam, placeat quo vitae illum dignissimos fuga consequuntur cupiditate.</p>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, atque nostrum excepturi deserunt, at sed quo dicta quibusdam enim eligendi iusto tempora, nisi beatae quae praesentium quisquam numquam mollitia iure voluptatum quaerat? Voluptatem eos rerum doloremque temporibus aperiam officiis magni!</p>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet iusto aliquid inventore, nihil autem consequatur, dignissimos laudantium officia repellendus placeat tempora ipsa quae iure ipsum asperiores voluptatibus aut rerum nobis esse delectus deserunt impedit quos? Iste sequi obcaecati officiis vitae. Dolor voluptatibus, quaerat inventore excepturi hic possimus cum mollitia ipsa consectetur quod esse perferendis aspernatur laborum ullam illum et.</p>`,
    colors: ['black','red'],
    sizes: ['s', 'm'],
    rating: 2.5,
    categories: [
      { name: 'bags', slug: 'bags' },
      {
        name: 'fashion',
        slug: 'fashion',
      },
    ],
  },
  {
    id: 4,
    name: 'Product 4',
    slug: 'product-4',
    price_new: 100,
    price_old: 200,
    image_thumb:
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/11-800x800.webp',
    image_gallery: [
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/11-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/8-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/1-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/4-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/5-800x800.webp',
    ],
    overview: `<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>`,
    description: `<h3>Lorem ipsum dolor sit amet.</h3>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione dignissimos quae totam in, reprehenderit dolorum, voluptatem rerum aut numquam dolore quam. Enim sequi laboriosam, placeat quo vitae illum dignissimos fuga consequuntur cupiditate.</p>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, atque nostrum excepturi deserunt, at sed quo dicta quibusdam enim eligendi iusto tempora, nisi beatae quae praesentium quisquam numquam mollitia iure voluptatum quaerat? Voluptatem eos rerum doloremque temporibus aperiam officiis magni!</p>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet iusto aliquid inventore, nihil autem consequatur, dignissimos laudantium officia repellendus placeat tempora ipsa quae iure ipsum asperiores voluptatibus aut rerum nobis esse delectus deserunt impedit quos? Iste sequi obcaecati officiis vitae. Dolor voluptatibus, quaerat inventore excepturi hic possimus cum mollitia ipsa consectetur quod esse perferendis aspernatur laborum ullam illum et.</p>`,
    colors: ['red'],
    sizes: ['s', 'm', 'l'],
    rating: 3.5,
    categories: [{ name: 'electronics', slug: 'electronics' }, {}],
  },
  {
    id: 5,
    name: 'Product 5',
    slug: 'product-5',
    price_new: 100,
    price_old: 200,
    image_thumb:
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/17-800x800.webp',
    image_gallery: [
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/11-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/8-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/1-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/4-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/5-800x800.webp',
    ],
    overview: `<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>`,
    description: `<h3>Lorem ipsum dolor sit amet.</h3>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione dignissimos quae totam in, reprehenderit dolorum, voluptatem rerum aut numquam dolore quam. Enim sequi laboriosam, placeat quo vitae illum dignissimos fuga consequuntur cupiditate.</p>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, atque nostrum excepturi deserunt, at sed quo dicta quibusdam enim eligendi iusto tempora, nisi beatae quae praesentium quisquam numquam mollitia iure voluptatum quaerat? Voluptatem eos rerum doloremque temporibus aperiam officiis magni!</p>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet iusto aliquid inventore, nihil autem consequatur, dignissimos laudantium officia repellendus placeat tempora ipsa quae iure ipsum asperiores voluptatibus aut rerum nobis esse delectus deserunt impedit quos? Iste sequi obcaecati officiis vitae. Dolor voluptatibus, quaerat inventore excepturi hic possimus cum mollitia ipsa consectetur quod esse perferendis aspernatur laborum ullam illum et.</p>`,
    colors: ['black','yellow','red'],
    sizes: ['s', 'm', 'l'],
    rating: 4.5,
    categories: [
      { name: 'monitors', slug: 'monitors' },
      { name: 'electronics', slug: 'electronics' },
    ],
  },
  {
    id: 6,
    name: 'Product 6',
    slug: 'product-6',
    price_new: 100,
    price_old: 200,
    image_thumb:
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/8-800x800.webp',
    image_gallery: [
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/11-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/8-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/1-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/4-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/5-800x800.webp',
    ],
    overview: `<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>`,
    description: `<h3>Lorem ipsum dolor sit amet.</h3>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione dignissimos quae totam in, reprehenderit dolorum, voluptatem rerum aut numquam dolore quam. Enim sequi laboriosam, placeat quo vitae illum dignissimos fuga consequuntur cupiditate.</p>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, atque nostrum excepturi deserunt, at sed quo dicta quibusdam enim eligendi iusto tempora, nisi beatae quae praesentium quisquam numquam mollitia iure voluptatum quaerat? Voluptatem eos rerum doloremque temporibus aperiam officiis magni!</p>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet iusto aliquid inventore, nihil autem consequatur, dignissimos laudantium officia repellendus placeat tempora ipsa quae iure ipsum asperiores voluptatibus aut rerum nobis esse delectus deserunt impedit quos? Iste sequi obcaecati officiis vitae. Dolor voluptatibus, quaerat inventore excepturi hic possimus cum mollitia ipsa consectetur quod esse perferendis aspernatur laborum ullam illum et.</p>`,
    colors: ['black','yellow','red'],
    sizes: ['s', 'm', 'l'],
    rating: 2.5,
    categories: [{ name: 'monitors', slug: 'monitors' }],
  },
  {
    id: 7,
    name: 'Product 7',
    slug: 'product-7',
    price_new: 100,
    price_old: 200,
    image_thumb:
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/1-800x800.webp',
    image_gallery: [
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/11-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/8-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/1-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/4-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/5-800x800.webp',
    ],
    overview: `<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>`,
    description: `<h3>Lorem ipsum dolor sit amet.</h3>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione dignissimos quae totam in, reprehenderit dolorum, voluptatem rerum aut numquam dolore quam. Enim sequi laboriosam, placeat quo vitae illum dignissimos fuga consequuntur cupiditate.</p>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, atque nostrum excepturi deserunt, at sed quo dicta quibusdam enim eligendi iusto tempora, nisi beatae quae praesentium quisquam numquam mollitia iure voluptatum quaerat? Voluptatem eos rerum doloremque temporibus aperiam officiis magni!</p>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet iusto aliquid inventore, nihil autem consequatur, dignissimos laudantium officia repellendus placeat tempora ipsa quae iure ipsum asperiores voluptatibus aut rerum nobis esse delectus deserunt impedit quos? Iste sequi obcaecati officiis vitae. Dolor voluptatibus, quaerat inventore excepturi hic possimus cum mollitia ipsa consectetur quod esse perferendis aspernatur laborum ullam illum et.</p>`,
    colors: ['black','yellow','red'],
    sizes: ['s', 'm', 'l'],
    rating: 5,
    categories: [
      { name: 'smart phone', slug: 'smart-phone' },
      { name: 'samsung', slug: 'samsung' },
    ],
  },
  {
    id: 8,
    name: 'Product 8',
    slug: 'product-8',
    price_new: 100,
    price_old: 200,
    image_thumb:
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/4-800x800.webp',
    image_gallery: [
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/11-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/8-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/1-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/4-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/5-800x800.webp',
    ],
    overview: `<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>`,
    description: `<h3>Lorem ipsum dolor sit amet.</h3>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione dignissimos quae totam in, reprehenderit dolorum, voluptatem rerum aut numquam dolore quam. Enim sequi laboriosam, placeat quo vitae illum dignissimos fuga consequuntur cupiditate.</p>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, atque nostrum excepturi deserunt, at sed quo dicta quibusdam enim eligendi iusto tempora, nisi beatae quae praesentium quisquam numquam mollitia iure voluptatum quaerat? Voluptatem eos rerum doloremque temporibus aperiam officiis magni!</p>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet iusto aliquid inventore, nihil autem consequatur, dignissimos laudantium officia repellendus placeat tempora ipsa quae iure ipsum asperiores voluptatibus aut rerum nobis esse delectus deserunt impedit quos? Iste sequi obcaecati officiis vitae. Dolor voluptatibus, quaerat inventore excepturi hic possimus cum mollitia ipsa consectetur quod esse perferendis aspernatur laborum ullam illum et.</p>`,
    colors: ['black','yellow','red'],
    sizes: ['s', 'm', 'l'],
    rating: 2,
    categories: [
      { name: 'smart phone', slug: 'smart-phone' },
      { name: 'apple', slug: 'apple' },
    ],
  },
  {
    id: 9,
    name: 'Product 9',
    slug: 'product-9',
    price_new: 100,
    price_old: 200,
    image_thumb:
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/2-800x800.webp',
    image_gallery: [
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/11-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/8-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/1-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/4-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/5-800x800.webp',
    ],
    overview: `<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>`,
    description: `<h3>Lorem ipsum dolor sit amet.</h3>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione dignissimos quae totam in, reprehenderit dolorum, voluptatem rerum aut numquam dolore quam. Enim sequi laboriosam, placeat quo vitae illum dignissimos fuga consequuntur cupiditate.</p>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, atque nostrum excepturi deserunt, at sed quo dicta quibusdam enim eligendi iusto tempora, nisi beatae quae praesentium quisquam numquam mollitia iure voluptatum quaerat? Voluptatem eos rerum doloremque temporibus aperiam officiis magni!</p>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet iusto aliquid inventore, nihil autem consequatur, dignissimos laudantium officia repellendus placeat tempora ipsa quae iure ipsum asperiores voluptatibus aut rerum nobis esse delectus deserunt impedit quos? Iste sequi obcaecati officiis vitae. Dolor voluptatibus, quaerat inventore excepturi hic possimus cum mollitia ipsa consectetur quod esse perferendis aspernatur laborum ullam illum et.</p>`,
    colors: ['black','yellow','red'],
    sizes: ['s', 'm', 'l'],
    rating: 4,
    categories: [
      { name: 'smart phone', slug: 'smart-phone' },
      { name: 'xiaomi', slug: 'xiaomi' },
    ],
  },
    {
    id: 1,
    name: 'Product 1',
    slug: 'product-1',
    price_new: 100,
    price_old: 200,
    image_thumb:
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/15-800x800.webp',
    image_gallery: [
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/11-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/8-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/1-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/4-800x800.webp',
    ],
    overview: `<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>`,
    description: `<h3>Lorem ipsum dolor sit amet.</h3>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione dignissimos quae totam in, reprehenderit dolorum, voluptatem rerum aut numquam dolore quam. Enim sequi laboriosam, placeat quo vitae illum dignissimos fuga consequuntur cupiditate.</p>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, atque nostrum excepturi deserunt, at sed quo dicta quibusdam enim eligendi iusto tempora, nisi beatae quae praesentium quisquam numquam mollitia iure voluptatum quaerat? Voluptatem eos rerum doloremque temporibus aperiam officiis magni!</p>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet iusto aliquid inventore, nihil autem consequatur, dignissimos laudantium officia repellendus placeat tempora ipsa quae iure ipsum asperiores voluptatibus aut rerum nobis esse delectus deserunt impedit quos? Iste sequi obcaecati officiis vitae. Dolor voluptatibus, quaerat inventore excepturi hic possimus cum mollitia ipsa consectetur quod esse perferendis aspernatur laborum ullam illum et.</p>`,
    colors: ['black', 'yellow'],
    sizes: ['m'],
    rating: 4.5,
    categories: [
      {
        name: "women's wear",
        slug: "women's-wear",
      },
      {
        name: 'fashion',
        slug: 'fashion',
      },
    ],
  },
  {
    id: 2,
    name: 'Product 2',
    slug: 'product-2',
    price_new: 100,
    price_old: 200,
    image_thumb:
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/16-800x800.webp',
    image_gallery: [
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/11-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/8-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/1-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/4-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/5-800x800.webp',
    ],
    overview: `<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>`,
    description: `<h3>Lorem ipsum dolor sit amet.</h3>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione dignissimos quae totam in, reprehenderit dolorum, voluptatem rerum aut numquam dolore quam. Enim sequi laboriosam, placeat quo vitae illum dignissimos fuga consequuntur cupiditate.</p>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, atque nostrum excepturi deserunt, at sed quo dicta quibusdam enim eligendi iusto tempora, nisi beatae quae praesentium quisquam numquam mollitia iure voluptatum quaerat? Voluptatem eos rerum doloremque temporibus aperiam officiis magni!</p>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet iusto aliquid inventore, nihil autem consequatur, dignissimos laudantium officia repellendus placeat tempora ipsa quae iure ipsum asperiores voluptatibus aut rerum nobis esse delectus deserunt impedit quos? Iste sequi obcaecati officiis vitae. Dolor voluptatibus, quaerat inventore excepturi hic possimus cum mollitia ipsa consectetur quod esse perferendis aspernatur laborum ullam illum et.</p>`,
    colors: ['yellow','red'],
    sizes: ['l'],
    rating: 4.5,
    categories: [
      {
        name: "men's clothing",
        slug: "men's-clothing",
      },
      {
        name: 'fashion',
        slug: 'fashion',
      },
    ],
  },
  {
    id: 3,
    name: 'Product 3',
    slug: 'product-3',
    price_new: 100,
    price_old: 200,
    image_thumb:
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/17-800x800.webp',
    image_gallery: [
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/11-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/8-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/1-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/4-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/5-800x800.webp',
    ],
    overview: `<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>`,
    description: `<h3>Lorem ipsum dolor sit amet.</h3>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione dignissimos quae totam in, reprehenderit dolorum, voluptatem rerum aut numquam dolore quam. Enim sequi laboriosam, placeat quo vitae illum dignissimos fuga consequuntur cupiditate.</p>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, atque nostrum excepturi deserunt, at sed quo dicta quibusdam enim eligendi iusto tempora, nisi beatae quae praesentium quisquam numquam mollitia iure voluptatum quaerat? Voluptatem eos rerum doloremque temporibus aperiam officiis magni!</p>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet iusto aliquid inventore, nihil autem consequatur, dignissimos laudantium officia repellendus placeat tempora ipsa quae iure ipsum asperiores voluptatibus aut rerum nobis esse delectus deserunt impedit quos? Iste sequi obcaecati officiis vitae. Dolor voluptatibus, quaerat inventore excepturi hic possimus cum mollitia ipsa consectetur quod esse perferendis aspernatur laborum ullam illum et.</p>`,
    colors: ['black','red'],
    sizes: ['s', 'm'],
    rating: 2.5,
    categories: [
      { name: 'bags', slug: 'bags' },
      {
        name: 'fashion',
        slug: 'fashion',
      },
    ],
  },
  {
    id: 4,
    name: 'Product 4',
    slug: 'product-4',
    price_new: 100,
    price_old: 200,
    image_thumb:
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/11-800x800.webp',
    image_gallery: [
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/11-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/8-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/1-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/4-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/5-800x800.webp',
    ],
    overview: `<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>`,
    description: `<h3>Lorem ipsum dolor sit amet.</h3>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione dignissimos quae totam in, reprehenderit dolorum, voluptatem rerum aut numquam dolore quam. Enim sequi laboriosam, placeat quo vitae illum dignissimos fuga consequuntur cupiditate.</p>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, atque nostrum excepturi deserunt, at sed quo dicta quibusdam enim eligendi iusto tempora, nisi beatae quae praesentium quisquam numquam mollitia iure voluptatum quaerat? Voluptatem eos rerum doloremque temporibus aperiam officiis magni!</p>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet iusto aliquid inventore, nihil autem consequatur, dignissimos laudantium officia repellendus placeat tempora ipsa quae iure ipsum asperiores voluptatibus aut rerum nobis esse delectus deserunt impedit quos? Iste sequi obcaecati officiis vitae. Dolor voluptatibus, quaerat inventore excepturi hic possimus cum mollitia ipsa consectetur quod esse perferendis aspernatur laborum ullam illum et.</p>`,
    colors: ['red'],
    sizes: ['s', 'm', 'l'],
    rating: 3.5,
    categories: [{ name: 'electronics', slug: 'electronics' }, {}],
  },
  {
    id: 5,
    name: 'Product 5',
    slug: 'product-5',
    price_new: 100,
    price_old: 200,
    image_thumb:
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/17-800x800.webp',
    image_gallery: [
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/11-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/8-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/1-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/4-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/5-800x800.webp',
    ],
    overview: `<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>`,
    description: `<h3>Lorem ipsum dolor sit amet.</h3>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione dignissimos quae totam in, reprehenderit dolorum, voluptatem rerum aut numquam dolore quam. Enim sequi laboriosam, placeat quo vitae illum dignissimos fuga consequuntur cupiditate.</p>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, atque nostrum excepturi deserunt, at sed quo dicta quibusdam enim eligendi iusto tempora, nisi beatae quae praesentium quisquam numquam mollitia iure voluptatum quaerat? Voluptatem eos rerum doloremque temporibus aperiam officiis magni!</p>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet iusto aliquid inventore, nihil autem consequatur, dignissimos laudantium officia repellendus placeat tempora ipsa quae iure ipsum asperiores voluptatibus aut rerum nobis esse delectus deserunt impedit quos? Iste sequi obcaecati officiis vitae. Dolor voluptatibus, quaerat inventore excepturi hic possimus cum mollitia ipsa consectetur quod esse perferendis aspernatur laborum ullam illum et.</p>`,
    colors: ['black','yellow','red'],
    sizes: ['s', 'm', 'l'],
    rating: 4.5,
    categories: [
      { name: 'monitors', slug: 'monitors' },
      { name: 'electronics', slug: 'electronics' },
    ],
  },
  {
    id: 6,
    name: 'Product 6',
    slug: 'product-6',
    price_new: 100,
    price_old: 200,
    image_thumb:
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/8-800x800.webp',
    image_gallery: [
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/11-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/8-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/1-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/4-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/5-800x800.webp',
    ],
    overview: `<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>`,
    description: `<h3>Lorem ipsum dolor sit amet.</h3>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione dignissimos quae totam in, reprehenderit dolorum, voluptatem rerum aut numquam dolore quam. Enim sequi laboriosam, placeat quo vitae illum dignissimos fuga consequuntur cupiditate.</p>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, atque nostrum excepturi deserunt, at sed quo dicta quibusdam enim eligendi iusto tempora, nisi beatae quae praesentium quisquam numquam mollitia iure voluptatum quaerat? Voluptatem eos rerum doloremque temporibus aperiam officiis magni!</p>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet iusto aliquid inventore, nihil autem consequatur, dignissimos laudantium officia repellendus placeat tempora ipsa quae iure ipsum asperiores voluptatibus aut rerum nobis esse delectus deserunt impedit quos? Iste sequi obcaecati officiis vitae. Dolor voluptatibus, quaerat inventore excepturi hic possimus cum mollitia ipsa consectetur quod esse perferendis aspernatur laborum ullam illum et.</p>`,
    colors: ['black','yellow','red'],
    sizes: ['s', 'm', 'l'],
    rating: 2.5,
    categories: [{ name: 'monitors', slug: 'monitors' }],
  },
  {
    id: 7,
    name: 'Product 7',
    slug: 'product-7',
    price_new: 100,
    price_old: 200,
    image_thumb:
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/1-800x800.webp',
    image_gallery: [
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/11-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/8-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/1-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/4-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/5-800x800.webp',
    ],
    overview: `<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>`,
    description: `<h3>Lorem ipsum dolor sit amet.</h3>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione dignissimos quae totam in, reprehenderit dolorum, voluptatem rerum aut numquam dolore quam. Enim sequi laboriosam, placeat quo vitae illum dignissimos fuga consequuntur cupiditate.</p>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, atque nostrum excepturi deserunt, at sed quo dicta quibusdam enim eligendi iusto tempora, nisi beatae quae praesentium quisquam numquam mollitia iure voluptatum quaerat? Voluptatem eos rerum doloremque temporibus aperiam officiis magni!</p>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet iusto aliquid inventore, nihil autem consequatur, dignissimos laudantium officia repellendus placeat tempora ipsa quae iure ipsum asperiores voluptatibus aut rerum nobis esse delectus deserunt impedit quos? Iste sequi obcaecati officiis vitae. Dolor voluptatibus, quaerat inventore excepturi hic possimus cum mollitia ipsa consectetur quod esse perferendis aspernatur laborum ullam illum et.</p>`,
    colors: ['black','yellow','red'],
    sizes: ['s', 'm', 'l'],
    rating: 5,
    categories: [
      { name: 'smart phone', slug: 'smart-phone' },
      { name: 'samsung', slug: 'samsung' },
    ],
  },
  {
    id: 8,
    name: 'Product 8',
    slug: 'product-8',
    price_new: 100,
    price_old: 200,
    image_thumb:
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/4-800x800.webp',
    image_gallery: [
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/11-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/8-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/1-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/4-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/5-800x800.webp',
    ],
    overview: `<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>`,
    description: `<h3>Lorem ipsum dolor sit amet.</h3>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione dignissimos quae totam in, reprehenderit dolorum, voluptatem rerum aut numquam dolore quam. Enim sequi laboriosam, placeat quo vitae illum dignissimos fuga consequuntur cupiditate.</p>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, atque nostrum excepturi deserunt, at sed quo dicta quibusdam enim eligendi iusto tempora, nisi beatae quae praesentium quisquam numquam mollitia iure voluptatum quaerat? Voluptatem eos rerum doloremque temporibus aperiam officiis magni!</p>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet iusto aliquid inventore, nihil autem consequatur, dignissimos laudantium officia repellendus placeat tempora ipsa quae iure ipsum asperiores voluptatibus aut rerum nobis esse delectus deserunt impedit quos? Iste sequi obcaecati officiis vitae. Dolor voluptatibus, quaerat inventore excepturi hic possimus cum mollitia ipsa consectetur quod esse perferendis aspernatur laborum ullam illum et.</p>`,
    colors: ['black','yellow','red'],
    sizes: ['s', 'm', 'l'],
    rating: 2,
    categories: [
      { name: 'smart phone', slug: 'smart-phone' },
      { name: 'apple', slug: 'apple' },
    ],
  },
  {
    id: 9,
    name: 'Product 9',
    slug: 'product-9',
    price_new: 100,
    price_old: 200,
    image_thumb:
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/2-800x800.webp',
    image_gallery: [
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/11-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/8-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/1-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/4-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/5-800x800.webp',
    ],
    overview: `<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>`,
    description: `<h3>Lorem ipsum dolor sit amet.</h3>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione dignissimos quae totam in, reprehenderit dolorum, voluptatem rerum aut numquam dolore quam. Enim sequi laboriosam, placeat quo vitae illum dignissimos fuga consequuntur cupiditate.</p>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, atque nostrum excepturi deserunt, at sed quo dicta quibusdam enim eligendi iusto tempora, nisi beatae quae praesentium quisquam numquam mollitia iure voluptatum quaerat? Voluptatem eos rerum doloremque temporibus aperiam officiis magni!</p>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet iusto aliquid inventore, nihil autem consequatur, dignissimos laudantium officia repellendus placeat tempora ipsa quae iure ipsum asperiores voluptatibus aut rerum nobis esse delectus deserunt impedit quos? Iste sequi obcaecati officiis vitae. Dolor voluptatibus, quaerat inventore excepturi hic possimus cum mollitia ipsa consectetur quod esse perferendis aspernatur laborum ullam illum et.</p>`,
    colors: ['black','yellow','red'],
    sizes: ['s', 'm', 'l'],
    rating: 4,
    categories: [
      { name: 'smart phone', slug: 'smart-phone' },
      { name: 'xiaomi', slug: 'xiaomi' },
    ],
  },
  {
    id: 1,
    name: 'Product 1',
    slug: 'product-1',
    price_new: 100,
    price_old: 200,
    image_thumb:
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/15-800x800.webp',
    image_gallery: [
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/11-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/8-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/1-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/4-800x800.webp',
    ],
    overview: `<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>`,
    description: `<h3>Lorem ipsum dolor sit amet.</h3>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione dignissimos quae totam in, reprehenderit dolorum, voluptatem rerum aut numquam dolore quam. Enim sequi laboriosam, placeat quo vitae illum dignissimos fuga consequuntur cupiditate.</p>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, atque nostrum excepturi deserunt, at sed quo dicta quibusdam enim eligendi iusto tempora, nisi beatae quae praesentium quisquam numquam mollitia iure voluptatum quaerat? Voluptatem eos rerum doloremque temporibus aperiam officiis magni!</p>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet iusto aliquid inventore, nihil autem consequatur, dignissimos laudantium officia repellendus placeat tempora ipsa quae iure ipsum asperiores voluptatibus aut rerum nobis esse delectus deserunt impedit quos? Iste sequi obcaecati officiis vitae. Dolor voluptatibus, quaerat inventore excepturi hic possimus cum mollitia ipsa consectetur quod esse perferendis aspernatur laborum ullam illum et.</p>`,
    colors: ['black', 'yellow'],
    sizes: ['m'],
    rating: 4.5,
    categories: [
      {
        name: "women's wear",
        slug: "women's-wear",
      },
      {
        name: 'fashion',
        slug: 'fashion',
      },
    ],
  },
  {
    id: 2,
    name: 'Product 2',
    slug: 'product-2',
    price_new: 100,
    price_old: 200,
    image_thumb:
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/16-800x800.webp',
    image_gallery: [
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/11-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/8-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/1-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/4-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/5-800x800.webp',
    ],
    overview: `<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>`,
    description: `<h3>Lorem ipsum dolor sit amet.</h3>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione dignissimos quae totam in, reprehenderit dolorum, voluptatem rerum aut numquam dolore quam. Enim sequi laboriosam, placeat quo vitae illum dignissimos fuga consequuntur cupiditate.</p>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, atque nostrum excepturi deserunt, at sed quo dicta quibusdam enim eligendi iusto tempora, nisi beatae quae praesentium quisquam numquam mollitia iure voluptatum quaerat? Voluptatem eos rerum doloremque temporibus aperiam officiis magni!</p>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet iusto aliquid inventore, nihil autem consequatur, dignissimos laudantium officia repellendus placeat tempora ipsa quae iure ipsum asperiores voluptatibus aut rerum nobis esse delectus deserunt impedit quos? Iste sequi obcaecati officiis vitae. Dolor voluptatibus, quaerat inventore excepturi hic possimus cum mollitia ipsa consectetur quod esse perferendis aspernatur laborum ullam illum et.</p>`,
    colors: ['yellow','red'],
    sizes: ['l'],
    rating: 4.5,
    categories: [
      {
        name: "men's clothing",
        slug: "men's-clothing",
      },
      {
        name: 'fashion',
        slug: 'fashion',
      },
    ],
  },
  {
    id: 3,
    name: 'Product 3',
    slug: 'product-3',
    price_new: 100,
    price_old: 200,
    image_thumb:
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/17-800x800.webp',
    image_gallery: [
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/11-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/8-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/1-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/4-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/5-800x800.webp',
    ],
    overview: `<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>`,
    description: `<h3>Lorem ipsum dolor sit amet.</h3>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione dignissimos quae totam in, reprehenderit dolorum, voluptatem rerum aut numquam dolore quam. Enim sequi laboriosam, placeat quo vitae illum dignissimos fuga consequuntur cupiditate.</p>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, atque nostrum excepturi deserunt, at sed quo dicta quibusdam enim eligendi iusto tempora, nisi beatae quae praesentium quisquam numquam mollitia iure voluptatum quaerat? Voluptatem eos rerum doloremque temporibus aperiam officiis magni!</p>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet iusto aliquid inventore, nihil autem consequatur, dignissimos laudantium officia repellendus placeat tempora ipsa quae iure ipsum asperiores voluptatibus aut rerum nobis esse delectus deserunt impedit quos? Iste sequi obcaecati officiis vitae. Dolor voluptatibus, quaerat inventore excepturi hic possimus cum mollitia ipsa consectetur quod esse perferendis aspernatur laborum ullam illum et.</p>`,
    colors: ['black','red'],
    sizes: ['s', 'm'],
    rating: 2.5,
    categories: [
      { name: 'bags', slug: 'bags' },
      {
        name: 'fashion',
        slug: 'fashion',
      },
    ],
  },
  {
    id: 4,
    name: 'Product 4',
    slug: 'product-4',
    price_new: 100,
    price_old: 200,
    image_thumb:
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/11-800x800.webp',
    image_gallery: [
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/11-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/8-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/1-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/4-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/5-800x800.webp',
    ],
    overview: `<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>`,
    description: `<h3>Lorem ipsum dolor sit amet.</h3>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione dignissimos quae totam in, reprehenderit dolorum, voluptatem rerum aut numquam dolore quam. Enim sequi laboriosam, placeat quo vitae illum dignissimos fuga consequuntur cupiditate.</p>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, atque nostrum excepturi deserunt, at sed quo dicta quibusdam enim eligendi iusto tempora, nisi beatae quae praesentium quisquam numquam mollitia iure voluptatum quaerat? Voluptatem eos rerum doloremque temporibus aperiam officiis magni!</p>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet iusto aliquid inventore, nihil autem consequatur, dignissimos laudantium officia repellendus placeat tempora ipsa quae iure ipsum asperiores voluptatibus aut rerum nobis esse delectus deserunt impedit quos? Iste sequi obcaecati officiis vitae. Dolor voluptatibus, quaerat inventore excepturi hic possimus cum mollitia ipsa consectetur quod esse perferendis aspernatur laborum ullam illum et.</p>`,
    colors: ['red'],
    sizes: ['s', 'm', 'l'],
    rating: 3.5,
    categories: [{ name: 'electronics', slug: 'electronics' }, {}],
  },
  {
    id: 5,
    name: 'Product 5',
    slug: 'product-5',
    price_new: 100,
    price_old: 200,
    image_thumb:
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/17-800x800.webp',
    image_gallery: [
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/11-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/8-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/1-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/4-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/5-800x800.webp',
    ],
    overview: `<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>`,
    description: `<h3>Lorem ipsum dolor sit amet.</h3>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione dignissimos quae totam in, reprehenderit dolorum, voluptatem rerum aut numquam dolore quam. Enim sequi laboriosam, placeat quo vitae illum dignissimos fuga consequuntur cupiditate.</p>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, atque nostrum excepturi deserunt, at sed quo dicta quibusdam enim eligendi iusto tempora, nisi beatae quae praesentium quisquam numquam mollitia iure voluptatum quaerat? Voluptatem eos rerum doloremque temporibus aperiam officiis magni!</p>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet iusto aliquid inventore, nihil autem consequatur, dignissimos laudantium officia repellendus placeat tempora ipsa quae iure ipsum asperiores voluptatibus aut rerum nobis esse delectus deserunt impedit quos? Iste sequi obcaecati officiis vitae. Dolor voluptatibus, quaerat inventore excepturi hic possimus cum mollitia ipsa consectetur quod esse perferendis aspernatur laborum ullam illum et.</p>`,
    colors: ['black','yellow','red'],
    sizes: ['s', 'm', 'l'],
    rating: 4.5,
    categories: [
      { name: 'monitors', slug: 'monitors' },
      { name: 'electronics', slug: 'electronics' },
    ],
  },
  {
    id: 6,
    name: 'Product 6',
    slug: 'product-6',
    price_new: 100,
    price_old: 200,
    image_thumb:
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/8-800x800.webp',
    image_gallery: [
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/11-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/8-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/1-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/4-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/5-800x800.webp',
    ],
    overview: `<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>`,
    description: `<h3>Lorem ipsum dolor sit amet.</h3>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione dignissimos quae totam in, reprehenderit dolorum, voluptatem rerum aut numquam dolore quam. Enim sequi laboriosam, placeat quo vitae illum dignissimos fuga consequuntur cupiditate.</p>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, atque nostrum excepturi deserunt, at sed quo dicta quibusdam enim eligendi iusto tempora, nisi beatae quae praesentium quisquam numquam mollitia iure voluptatum quaerat? Voluptatem eos rerum doloremque temporibus aperiam officiis magni!</p>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet iusto aliquid inventore, nihil autem consequatur, dignissimos laudantium officia repellendus placeat tempora ipsa quae iure ipsum asperiores voluptatibus aut rerum nobis esse delectus deserunt impedit quos? Iste sequi obcaecati officiis vitae. Dolor voluptatibus, quaerat inventore excepturi hic possimus cum mollitia ipsa consectetur quod esse perferendis aspernatur laborum ullam illum et.</p>`,
    colors: ['black','yellow','red'],
    sizes: ['s', 'm', 'l'],
    rating: 2.5,
    categories: [{ name: 'monitors', slug: 'monitors' }],
  },
  {
    id: 7,
    name: 'Product 7',
    slug: 'product-7',
    price_new: 100,
    price_old: 200,
    image_thumb:
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/1-800x800.webp',
    image_gallery: [
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/11-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/8-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/1-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/4-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/5-800x800.webp',
    ],
    overview: `<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>`,
    description: `<h3>Lorem ipsum dolor sit amet.</h3>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione dignissimos quae totam in, reprehenderit dolorum, voluptatem rerum aut numquam dolore quam. Enim sequi laboriosam, placeat quo vitae illum dignissimos fuga consequuntur cupiditate.</p>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, atque nostrum excepturi deserunt, at sed quo dicta quibusdam enim eligendi iusto tempora, nisi beatae quae praesentium quisquam numquam mollitia iure voluptatum quaerat? Voluptatem eos rerum doloremque temporibus aperiam officiis magni!</p>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet iusto aliquid inventore, nihil autem consequatur, dignissimos laudantium officia repellendus placeat tempora ipsa quae iure ipsum asperiores voluptatibus aut rerum nobis esse delectus deserunt impedit quos? Iste sequi obcaecati officiis vitae. Dolor voluptatibus, quaerat inventore excepturi hic possimus cum mollitia ipsa consectetur quod esse perferendis aspernatur laborum ullam illum et.</p>`,
    colors: ['black','yellow','red'],
    sizes: ['s', 'm', 'l'],
    rating: 5,
    categories: [
      { name: 'smart phone', slug: 'smart-phone' },
      { name: 'samsung', slug: 'samsung' },
    ],
  },
  {
    id: 8,
    name: 'Product 8',
    slug: 'product-8',
    price_new: 100,
    price_old: 200,
    image_thumb:
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/4-800x800.webp',
    image_gallery: [
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/11-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/8-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/1-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/4-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/5-800x800.webp',
    ],
    overview: `<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>`,
    description: `<h3>Lorem ipsum dolor sit amet.</h3>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione dignissimos quae totam in, reprehenderit dolorum, voluptatem rerum aut numquam dolore quam. Enim sequi laboriosam, placeat quo vitae illum dignissimos fuga consequuntur cupiditate.</p>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, atque nostrum excepturi deserunt, at sed quo dicta quibusdam enim eligendi iusto tempora, nisi beatae quae praesentium quisquam numquam mollitia iure voluptatum quaerat? Voluptatem eos rerum doloremque temporibus aperiam officiis magni!</p>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet iusto aliquid inventore, nihil autem consequatur, dignissimos laudantium officia repellendus placeat tempora ipsa quae iure ipsum asperiores voluptatibus aut rerum nobis esse delectus deserunt impedit quos? Iste sequi obcaecati officiis vitae. Dolor voluptatibus, quaerat inventore excepturi hic possimus cum mollitia ipsa consectetur quod esse perferendis aspernatur laborum ullam illum et.</p>`,
    colors: ['black','yellow','red'],
    sizes: ['s', 'm', 'l'],
    rating: 2,
    categories: [
      { name: 'smart phone', slug: 'smart-phone' },
      { name: 'apple', slug: 'apple' },
    ],
  },
  {
    id: 9,
    name: 'Product 9',
    slug: 'product-9',
    price_new: 100,
    price_old: 200,
    image_thumb:
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/2-800x800.webp',
    image_gallery: [
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/11-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/8-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/1-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/4-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/5-800x800.webp',
    ],
    overview: `<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>`,
    description: `<h3>Lorem ipsum dolor sit amet.</h3>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione dignissimos quae totam in, reprehenderit dolorum, voluptatem rerum aut numquam dolore quam. Enim sequi laboriosam, placeat quo vitae illum dignissimos fuga consequuntur cupiditate.</p>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, atque nostrum excepturi deserunt, at sed quo dicta quibusdam enim eligendi iusto tempora, nisi beatae quae praesentium quisquam numquam mollitia iure voluptatum quaerat? Voluptatem eos rerum doloremque temporibus aperiam officiis magni!</p>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet iusto aliquid inventore, nihil autem consequatur, dignissimos laudantium officia repellendus placeat tempora ipsa quae iure ipsum asperiores voluptatibus aut rerum nobis esse delectus deserunt impedit quos? Iste sequi obcaecati officiis vitae. Dolor voluptatibus, quaerat inventore excepturi hic possimus cum mollitia ipsa consectetur quod esse perferendis aspernatur laborum ullam illum et.</p>`,
    colors: ['black','yellow','red'],
    sizes: ['s', 'm', 'l'],
    rating: 4,
    categories: [
      { name: 'smart phone', slug: 'smart-phone' },
      { name: 'xiaomi', slug: 'xiaomi' },
    ],
  },
  {
    id: 1,
    name: 'Product 1',
    slug: 'product-1',
    price_new: 100,
    price_old: 200,
    image_thumb:
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/15-800x800.webp',
    image_gallery: [
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/11-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/8-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/1-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/4-800x800.webp',
    ],
    overview: `<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>`,
    description: `<h3>Lorem ipsum dolor sit amet.</h3>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione dignissimos quae totam in, reprehenderit dolorum, voluptatem rerum aut numquam dolore quam. Enim sequi laboriosam, placeat quo vitae illum dignissimos fuga consequuntur cupiditate.</p>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, atque nostrum excepturi deserunt, at sed quo dicta quibusdam enim eligendi iusto tempora, nisi beatae quae praesentium quisquam numquam mollitia iure voluptatum quaerat? Voluptatem eos rerum doloremque temporibus aperiam officiis magni!</p>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet iusto aliquid inventore, nihil autem consequatur, dignissimos laudantium officia repellendus placeat tempora ipsa quae iure ipsum asperiores voluptatibus aut rerum nobis esse delectus deserunt impedit quos? Iste sequi obcaecati officiis vitae. Dolor voluptatibus, quaerat inventore excepturi hic possimus cum mollitia ipsa consectetur quod esse perferendis aspernatur laborum ullam illum et.</p>`,
    colors: ['black', 'yellow'],
    sizes: ['m'],
    rating: 4.5,
    categories: [
      {
        name: "women's wear",
        slug: "women's-wear",
      },
      {
        name: 'fashion',
        slug: 'fashion',
      },
    ],
  },
  {
    id: 2,
    name: 'Product 2',
    slug: 'product-2',
    price_new: 100,
    price_old: 200,
    image_thumb:
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/16-800x800.webp',
    image_gallery: [
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/11-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/8-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/1-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/4-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/5-800x800.webp',
    ],
    overview: `<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>`,
    description: `<h3>Lorem ipsum dolor sit amet.</h3>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione dignissimos quae totam in, reprehenderit dolorum, voluptatem rerum aut numquam dolore quam. Enim sequi laboriosam, placeat quo vitae illum dignissimos fuga consequuntur cupiditate.</p>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, atque nostrum excepturi deserunt, at sed quo dicta quibusdam enim eligendi iusto tempora, nisi beatae quae praesentium quisquam numquam mollitia iure voluptatum quaerat? Voluptatem eos rerum doloremque temporibus aperiam officiis magni!</p>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet iusto aliquid inventore, nihil autem consequatur, dignissimos laudantium officia repellendus placeat tempora ipsa quae iure ipsum asperiores voluptatibus aut rerum nobis esse delectus deserunt impedit quos? Iste sequi obcaecati officiis vitae. Dolor voluptatibus, quaerat inventore excepturi hic possimus cum mollitia ipsa consectetur quod esse perferendis aspernatur laborum ullam illum et.</p>`,
    colors: ['yellow','red'],
    sizes: ['l'],
    rating: 4.5,
    categories: [
      {
        name: "men's clothing",
        slug: "men's-clothing",
      },
      {
        name: 'fashion',
        slug: 'fashion',
      },
    ],
  },
  {
    id: 3,
    name: 'Product 3',
    slug: 'product-3',
    price_new: 100,
    price_old: 200,
    image_thumb:
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/17-800x800.webp',
    image_gallery: [
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/11-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/8-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/1-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/4-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/5-800x800.webp',
    ],
    overview: `<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>`,
    description: `<h3>Lorem ipsum dolor sit amet.</h3>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione dignissimos quae totam in, reprehenderit dolorum, voluptatem rerum aut numquam dolore quam. Enim sequi laboriosam, placeat quo vitae illum dignissimos fuga consequuntur cupiditate.</p>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, atque nostrum excepturi deserunt, at sed quo dicta quibusdam enim eligendi iusto tempora, nisi beatae quae praesentium quisquam numquam mollitia iure voluptatum quaerat? Voluptatem eos rerum doloremque temporibus aperiam officiis magni!</p>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet iusto aliquid inventore, nihil autem consequatur, dignissimos laudantium officia repellendus placeat tempora ipsa quae iure ipsum asperiores voluptatibus aut rerum nobis esse delectus deserunt impedit quos? Iste sequi obcaecati officiis vitae. Dolor voluptatibus, quaerat inventore excepturi hic possimus cum mollitia ipsa consectetur quod esse perferendis aspernatur laborum ullam illum et.</p>`,
    colors: ['black','red'],
    sizes: ['s', 'm'],
    rating: 2.5,
    categories: [
      { name: 'bags', slug: 'bags' },
      {
        name: 'fashion',
        slug: 'fashion',
      },
    ],
  },
  {
    id: 4,
    name: 'Product 4',
    slug: 'product-4',
    price_new: 100,
    price_old: 200,
    image_thumb:
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/11-800x800.webp',
    image_gallery: [
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/11-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/8-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/1-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/4-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/5-800x800.webp',
    ],
    overview: `<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>`,
    description: `<h3>Lorem ipsum dolor sit amet.</h3>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione dignissimos quae totam in, reprehenderit dolorum, voluptatem rerum aut numquam dolore quam. Enim sequi laboriosam, placeat quo vitae illum dignissimos fuga consequuntur cupiditate.</p>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, atque nostrum excepturi deserunt, at sed quo dicta quibusdam enim eligendi iusto tempora, nisi beatae quae praesentium quisquam numquam mollitia iure voluptatum quaerat? Voluptatem eos rerum doloremque temporibus aperiam officiis magni!</p>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet iusto aliquid inventore, nihil autem consequatur, dignissimos laudantium officia repellendus placeat tempora ipsa quae iure ipsum asperiores voluptatibus aut rerum nobis esse delectus deserunt impedit quos? Iste sequi obcaecati officiis vitae. Dolor voluptatibus, quaerat inventore excepturi hic possimus cum mollitia ipsa consectetur quod esse perferendis aspernatur laborum ullam illum et.</p>`,
    colors: ['red'],
    sizes: ['s', 'm', 'l'],
    rating: 3.5,
    categories: [{ name: 'electronics', slug: 'electronics' }, {}],
  },
  {
    id: 5,
    name: 'Product 5',
    slug: 'product-5',
    price_new: 100,
    price_old: 200,
    image_thumb:
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/17-800x800.webp',
    image_gallery: [
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/11-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/8-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/1-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/4-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/5-800x800.webp',
    ],
    overview: `<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>`,
    description: `<h3>Lorem ipsum dolor sit amet.</h3>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione dignissimos quae totam in, reprehenderit dolorum, voluptatem rerum aut numquam dolore quam. Enim sequi laboriosam, placeat quo vitae illum dignissimos fuga consequuntur cupiditate.</p>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, atque nostrum excepturi deserunt, at sed quo dicta quibusdam enim eligendi iusto tempora, nisi beatae quae praesentium quisquam numquam mollitia iure voluptatum quaerat? Voluptatem eos rerum doloremque temporibus aperiam officiis magni!</p>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet iusto aliquid inventore, nihil autem consequatur, dignissimos laudantium officia repellendus placeat tempora ipsa quae iure ipsum asperiores voluptatibus aut rerum nobis esse delectus deserunt impedit quos? Iste sequi obcaecati officiis vitae. Dolor voluptatibus, quaerat inventore excepturi hic possimus cum mollitia ipsa consectetur quod esse perferendis aspernatur laborum ullam illum et.</p>`,
    colors: ['black','yellow','red'],
    sizes: ['s', 'm', 'l'],
    rating: 4.5,
    categories: [
      { name: 'monitors', slug: 'monitors' },
      { name: 'electronics', slug: 'electronics' },
    ],
  },
  {
    id: 6,
    name: 'Product 6',
    slug: 'product-6',
    price_new: 100,
    price_old: 200,
    image_thumb:
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/8-800x800.webp',
    image_gallery: [
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/11-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/8-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/1-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/4-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/5-800x800.webp',
    ],
    overview: `<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>`,
    description: `<h3>Lorem ipsum dolor sit amet.</h3>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione dignissimos quae totam in, reprehenderit dolorum, voluptatem rerum aut numquam dolore quam. Enim sequi laboriosam, placeat quo vitae illum dignissimos fuga consequuntur cupiditate.</p>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, atque nostrum excepturi deserunt, at sed quo dicta quibusdam enim eligendi iusto tempora, nisi beatae quae praesentium quisquam numquam mollitia iure voluptatum quaerat? Voluptatem eos rerum doloremque temporibus aperiam officiis magni!</p>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet iusto aliquid inventore, nihil autem consequatur, dignissimos laudantium officia repellendus placeat tempora ipsa quae iure ipsum asperiores voluptatibus aut rerum nobis esse delectus deserunt impedit quos? Iste sequi obcaecati officiis vitae. Dolor voluptatibus, quaerat inventore excepturi hic possimus cum mollitia ipsa consectetur quod esse perferendis aspernatur laborum ullam illum et.</p>`,
    colors: ['black','yellow','red'],
    sizes: ['s', 'm', 'l'],
    rating: 2.5,
    categories: [{ name: 'monitors', slug: 'monitors' }],
  },
  {
    id: 7,
    name: 'Product 7',
    slug: 'product-7',
    price_new: 100,
    price_old: 200,
    image_thumb:
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/1-800x800.webp',
    image_gallery: [
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/11-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/8-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/1-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/4-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/5-800x800.webp',
    ],
    overview: `<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>`,
    description: `<h3>Lorem ipsum dolor sit amet.</h3>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione dignissimos quae totam in, reprehenderit dolorum, voluptatem rerum aut numquam dolore quam. Enim sequi laboriosam, placeat quo vitae illum dignissimos fuga consequuntur cupiditate.</p>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, atque nostrum excepturi deserunt, at sed quo dicta quibusdam enim eligendi iusto tempora, nisi beatae quae praesentium quisquam numquam mollitia iure voluptatum quaerat? Voluptatem eos rerum doloremque temporibus aperiam officiis magni!</p>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet iusto aliquid inventore, nihil autem consequatur, dignissimos laudantium officia repellendus placeat tempora ipsa quae iure ipsum asperiores voluptatibus aut rerum nobis esse delectus deserunt impedit quos? Iste sequi obcaecati officiis vitae. Dolor voluptatibus, quaerat inventore excepturi hic possimus cum mollitia ipsa consectetur quod esse perferendis aspernatur laborum ullam illum et.</p>`,
    colors: ['black','yellow','red'],
    sizes: ['s', 'm', 'l'],
    rating: 5,
    categories: [
      { name: 'smart phone', slug: 'smart-phone' },
      { name: 'samsung', slug: 'samsung' },
    ],
  },
  {
    id: 8,
    name: 'Product 8',
    slug: 'product-8',
    price_new: 100,
    price_old: 200,
    image_thumb:
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/4-800x800.webp',
    image_gallery: [
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/11-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/8-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/1-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/4-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/5-800x800.webp',
    ],
    overview: `<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>`,
    description: `<h3>Lorem ipsum dolor sit amet.</h3>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione dignissimos quae totam in, reprehenderit dolorum, voluptatem rerum aut numquam dolore quam. Enim sequi laboriosam, placeat quo vitae illum dignissimos fuga consequuntur cupiditate.</p>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, atque nostrum excepturi deserunt, at sed quo dicta quibusdam enim eligendi iusto tempora, nisi beatae quae praesentium quisquam numquam mollitia iure voluptatum quaerat? Voluptatem eos rerum doloremque temporibus aperiam officiis magni!</p>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet iusto aliquid inventore, nihil autem consequatur, dignissimos laudantium officia repellendus placeat tempora ipsa quae iure ipsum asperiores voluptatibus aut rerum nobis esse delectus deserunt impedit quos? Iste sequi obcaecati officiis vitae. Dolor voluptatibus, quaerat inventore excepturi hic possimus cum mollitia ipsa consectetur quod esse perferendis aspernatur laborum ullam illum et.</p>`,
    colors: ['black','yellow','red'],
    sizes: ['s', 'm', 'l'],
    rating: 2,
    categories: [
      { name: 'smart phone', slug: 'smart-phone' },
      { name: 'apple', slug: 'apple' },
    ],
  },
  {
    id: 9,
    name: 'Product 9',
    slug: 'product-9',
    price_new: 100,
    price_old: 200,
    image_thumb:
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/2-800x800.webp',
    image_gallery: [
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/11-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/8-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/1-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/4-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/5-800x800.webp',
    ],
    overview: `<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>`,
    description: `<h3>Lorem ipsum dolor sit amet.</h3>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione dignissimos quae totam in, reprehenderit dolorum, voluptatem rerum aut numquam dolore quam. Enim sequi laboriosam, placeat quo vitae illum dignissimos fuga consequuntur cupiditate.</p>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, atque nostrum excepturi deserunt, at sed quo dicta quibusdam enim eligendi iusto tempora, nisi beatae quae praesentium quisquam numquam mollitia iure voluptatum quaerat? Voluptatem eos rerum doloremque temporibus aperiam officiis magni!</p>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet iusto aliquid inventore, nihil autem consequatur, dignissimos laudantium officia repellendus placeat tempora ipsa quae iure ipsum asperiores voluptatibus aut rerum nobis esse delectus deserunt impedit quos? Iste sequi obcaecati officiis vitae. Dolor voluptatibus, quaerat inventore excepturi hic possimus cum mollitia ipsa consectetur quod esse perferendis aspernatur laborum ullam illum et.</p>`,
    colors: ['black','yellow','red'],
    sizes: ['s', 'm', 'l'],
    rating: 4,
    categories: [
      { name: 'smart phone', slug: 'smart-phone' },
      { name: 'xiaomi', slug: 'xiaomi' },
    ],
  },
    {
    id: 1,
    name: 'Product 1',
    slug: 'product-1',
    price_new: 100,
    price_old: 200,
    image_thumb:
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/15-800x800.webp',
    image_gallery: [
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/11-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/8-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/1-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/4-800x800.webp',
    ],
    overview: `<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>`,
    description: `<h3>Lorem ipsum dolor sit amet.</h3>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione dignissimos quae totam in, reprehenderit dolorum, voluptatem rerum aut numquam dolore quam. Enim sequi laboriosam, placeat quo vitae illum dignissimos fuga consequuntur cupiditate.</p>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, atque nostrum excepturi deserunt, at sed quo dicta quibusdam enim eligendi iusto tempora, nisi beatae quae praesentium quisquam numquam mollitia iure voluptatum quaerat? Voluptatem eos rerum doloremque temporibus aperiam officiis magni!</p>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet iusto aliquid inventore, nihil autem consequatur, dignissimos laudantium officia repellendus placeat tempora ipsa quae iure ipsum asperiores voluptatibus aut rerum nobis esse delectus deserunt impedit quos? Iste sequi obcaecati officiis vitae. Dolor voluptatibus, quaerat inventore excepturi hic possimus cum mollitia ipsa consectetur quod esse perferendis aspernatur laborum ullam illum et.</p>`,
    colors: ['black', 'yellow'],
    sizes: ['m'],
    rating: 4.5,
    categories: [
      {
        name: "women's wear",
        slug: "women's-wear",
      },
      {
        name: 'fashion',
        slug: 'fashion',
      },
    ],
  },
  {
    id: 2,
    name: 'Product 2',
    slug: 'product-2',
    price_new: 100,
    price_old: 200,
    image_thumb:
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/16-800x800.webp',
    image_gallery: [
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/11-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/8-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/1-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/4-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/5-800x800.webp',
    ],
    overview: `<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>`,
    description: `<h3>Lorem ipsum dolor sit amet.</h3>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione dignissimos quae totam in, reprehenderit dolorum, voluptatem rerum aut numquam dolore quam. Enim sequi laboriosam, placeat quo vitae illum dignissimos fuga consequuntur cupiditate.</p>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, atque nostrum excepturi deserunt, at sed quo dicta quibusdam enim eligendi iusto tempora, nisi beatae quae praesentium quisquam numquam mollitia iure voluptatum quaerat? Voluptatem eos rerum doloremque temporibus aperiam officiis magni!</p>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet iusto aliquid inventore, nihil autem consequatur, dignissimos laudantium officia repellendus placeat tempora ipsa quae iure ipsum asperiores voluptatibus aut rerum nobis esse delectus deserunt impedit quos? Iste sequi obcaecati officiis vitae. Dolor voluptatibus, quaerat inventore excepturi hic possimus cum mollitia ipsa consectetur quod esse perferendis aspernatur laborum ullam illum et.</p>`,
    colors: ['yellow','red'],
    sizes: ['l'],
    rating: 4.5,
    categories: [
      {
        name: "men's clothing",
        slug: "men's-clothing",
      },
      {
        name: 'fashion',
        slug: 'fashion',
      },
    ],
  },
  {
    id: 3,
    name: 'Product 3',
    slug: 'product-3',
    price_new: 100,
    price_old: 200,
    image_thumb:
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/17-800x800.webp',
    image_gallery: [
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/11-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/8-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/1-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/4-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/5-800x800.webp',
    ],
    overview: `<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>`,
    description: `<h3>Lorem ipsum dolor sit amet.</h3>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione dignissimos quae totam in, reprehenderit dolorum, voluptatem rerum aut numquam dolore quam. Enim sequi laboriosam, placeat quo vitae illum dignissimos fuga consequuntur cupiditate.</p>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, atque nostrum excepturi deserunt, at sed quo dicta quibusdam enim eligendi iusto tempora, nisi beatae quae praesentium quisquam numquam mollitia iure voluptatum quaerat? Voluptatem eos rerum doloremque temporibus aperiam officiis magni!</p>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet iusto aliquid inventore, nihil autem consequatur, dignissimos laudantium officia repellendus placeat tempora ipsa quae iure ipsum asperiores voluptatibus aut rerum nobis esse delectus deserunt impedit quos? Iste sequi obcaecati officiis vitae. Dolor voluptatibus, quaerat inventore excepturi hic possimus cum mollitia ipsa consectetur quod esse perferendis aspernatur laborum ullam illum et.</p>`,
    colors: ['black','red'],
    sizes: ['s', 'm'],
    rating: 2.5,
    categories: [
      { name: 'bags', slug: 'bags' },
      {
        name: 'fashion',
        slug: 'fashion',
      },
    ],
  },
  {
    id: 4,
    name: 'Product 4',
    slug: 'product-4',
    price_new: 100,
    price_old: 200,
    image_thumb:
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/11-800x800.webp',
    image_gallery: [
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/11-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/8-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/1-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/4-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/5-800x800.webp',
    ],
    overview: `<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>`,
    description: `<h3>Lorem ipsum dolor sit amet.</h3>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione dignissimos quae totam in, reprehenderit dolorum, voluptatem rerum aut numquam dolore quam. Enim sequi laboriosam, placeat quo vitae illum dignissimos fuga consequuntur cupiditate.</p>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, atque nostrum excepturi deserunt, at sed quo dicta quibusdam enim eligendi iusto tempora, nisi beatae quae praesentium quisquam numquam mollitia iure voluptatum quaerat? Voluptatem eos rerum doloremque temporibus aperiam officiis magni!</p>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet iusto aliquid inventore, nihil autem consequatur, dignissimos laudantium officia repellendus placeat tempora ipsa quae iure ipsum asperiores voluptatibus aut rerum nobis esse delectus deserunt impedit quos? Iste sequi obcaecati officiis vitae. Dolor voluptatibus, quaerat inventore excepturi hic possimus cum mollitia ipsa consectetur quod esse perferendis aspernatur laborum ullam illum et.</p>`,
    colors: ['red'],
    sizes: ['s', 'm', 'l'],
    rating: 3.5,
    categories: [{ name: 'electronics', slug: 'electronics' }, {}],
  },
  {
    id: 5,
    name: 'Product 5',
    slug: 'product-5',
    price_new: 100,
    price_old: 200,
    image_thumb:
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/17-800x800.webp',
    image_gallery: [
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/11-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/8-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/1-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/4-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/5-800x800.webp',
    ],
    overview: `<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>`,
    description: `<h3>Lorem ipsum dolor sit amet.</h3>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione dignissimos quae totam in, reprehenderit dolorum, voluptatem rerum aut numquam dolore quam. Enim sequi laboriosam, placeat quo vitae illum dignissimos fuga consequuntur cupiditate.</p>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, atque nostrum excepturi deserunt, at sed quo dicta quibusdam enim eligendi iusto tempora, nisi beatae quae praesentium quisquam numquam mollitia iure voluptatum quaerat? Voluptatem eos rerum doloremque temporibus aperiam officiis magni!</p>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet iusto aliquid inventore, nihil autem consequatur, dignissimos laudantium officia repellendus placeat tempora ipsa quae iure ipsum asperiores voluptatibus aut rerum nobis esse delectus deserunt impedit quos? Iste sequi obcaecati officiis vitae. Dolor voluptatibus, quaerat inventore excepturi hic possimus cum mollitia ipsa consectetur quod esse perferendis aspernatur laborum ullam illum et.</p>`,
    colors: ['black','yellow','red'],
    sizes: ['s', 'm', 'l'],
    rating: 4.5,
    categories: [
      { name: 'monitors', slug: 'monitors' },
      { name: 'electronics', slug: 'electronics' },
    ],
  },
  {
    id: 6,
    name: 'Product 6',
    slug: 'product-6',
    price_new: 100,
    price_old: 200,
    image_thumb:
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/8-800x800.webp',
    image_gallery: [
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/11-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/8-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/1-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/4-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/5-800x800.webp',
    ],
    overview: `<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>`,
    description: `<h3>Lorem ipsum dolor sit amet.</h3>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione dignissimos quae totam in, reprehenderit dolorum, voluptatem rerum aut numquam dolore quam. Enim sequi laboriosam, placeat quo vitae illum dignissimos fuga consequuntur cupiditate.</p>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, atque nostrum excepturi deserunt, at sed quo dicta quibusdam enim eligendi iusto tempora, nisi beatae quae praesentium quisquam numquam mollitia iure voluptatum quaerat? Voluptatem eos rerum doloremque temporibus aperiam officiis magni!</p>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet iusto aliquid inventore, nihil autem consequatur, dignissimos laudantium officia repellendus placeat tempora ipsa quae iure ipsum asperiores voluptatibus aut rerum nobis esse delectus deserunt impedit quos? Iste sequi obcaecati officiis vitae. Dolor voluptatibus, quaerat inventore excepturi hic possimus cum mollitia ipsa consectetur quod esse perferendis aspernatur laborum ullam illum et.</p>`,
    colors: ['black','yellow','red'],
    sizes: ['s', 'm', 'l'],
    rating: 2.5,
    categories: [{ name: 'monitors', slug: 'monitors' }],
  },
  {
    id: 7,
    name: 'Product 7',
    slug: 'product-7',
    price_new: 100,
    price_old: 200,
    image_thumb:
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/1-800x800.webp',
    image_gallery: [
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/11-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/8-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/1-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/4-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/5-800x800.webp',
    ],
    overview: `<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>`,
    description: `<h3>Lorem ipsum dolor sit amet.</h3>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione dignissimos quae totam in, reprehenderit dolorum, voluptatem rerum aut numquam dolore quam. Enim sequi laboriosam, placeat quo vitae illum dignissimos fuga consequuntur cupiditate.</p>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, atque nostrum excepturi deserunt, at sed quo dicta quibusdam enim eligendi iusto tempora, nisi beatae quae praesentium quisquam numquam mollitia iure voluptatum quaerat? Voluptatem eos rerum doloremque temporibus aperiam officiis magni!</p>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet iusto aliquid inventore, nihil autem consequatur, dignissimos laudantium officia repellendus placeat tempora ipsa quae iure ipsum asperiores voluptatibus aut rerum nobis esse delectus deserunt impedit quos? Iste sequi obcaecati officiis vitae. Dolor voluptatibus, quaerat inventore excepturi hic possimus cum mollitia ipsa consectetur quod esse perferendis aspernatur laborum ullam illum et.</p>`,
    colors: ['black','yellow','red'],
    sizes: ['s', 'm', 'l'],
    rating: 5,
    categories: [
      { name: 'smart phone', slug: 'smart-phone' },
      { name: 'samsung', slug: 'samsung' },
    ],
  },
  {
    id: 8,
    name: 'Product 8',
    slug: 'product-8',
    price_new: 100,
    price_old: 200,
    image_thumb:
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/4-800x800.webp',
    image_gallery: [
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/11-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/8-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/1-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/4-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/5-800x800.webp',
    ],
    overview: `<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>`,
    description: `<h3>Lorem ipsum dolor sit amet.</h3>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione dignissimos quae totam in, reprehenderit dolorum, voluptatem rerum aut numquam dolore quam. Enim sequi laboriosam, placeat quo vitae illum dignissimos fuga consequuntur cupiditate.</p>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, atque nostrum excepturi deserunt, at sed quo dicta quibusdam enim eligendi iusto tempora, nisi beatae quae praesentium quisquam numquam mollitia iure voluptatum quaerat? Voluptatem eos rerum doloremque temporibus aperiam officiis magni!</p>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet iusto aliquid inventore, nihil autem consequatur, dignissimos laudantium officia repellendus placeat tempora ipsa quae iure ipsum asperiores voluptatibus aut rerum nobis esse delectus deserunt impedit quos? Iste sequi obcaecati officiis vitae. Dolor voluptatibus, quaerat inventore excepturi hic possimus cum mollitia ipsa consectetur quod esse perferendis aspernatur laborum ullam illum et.</p>`,
    colors: ['black','yellow','red'],
    sizes: ['s', 'm', 'l'],
    rating: 2,
    categories: [
      { name: 'smart phone', slug: 'smart-phone' },
      { name: 'apple', slug: 'apple' },
    ],
  },
  {
    id: 9,
    name: 'Product 9',
    slug: 'product-9',
    price_new: 100,
    price_old: 200,
    image_thumb:
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/2-800x800.webp',
    image_gallery: [
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/11-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/8-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/1-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/4-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/5-800x800.webp',
    ],
    overview: `<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>`,
    description: `<h3>Lorem ipsum dolor sit amet.</h3>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione dignissimos quae totam in, reprehenderit dolorum, voluptatem rerum aut numquam dolore quam. Enim sequi laboriosam, placeat quo vitae illum dignissimos fuga consequuntur cupiditate.</p>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, atque nostrum excepturi deserunt, at sed quo dicta quibusdam enim eligendi iusto tempora, nisi beatae quae praesentium quisquam numquam mollitia iure voluptatum quaerat? Voluptatem eos rerum doloremque temporibus aperiam officiis magni!</p>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet iusto aliquid inventore, nihil autem consequatur, dignissimos laudantium officia repellendus placeat tempora ipsa quae iure ipsum asperiores voluptatibus aut rerum nobis esse delectus deserunt impedit quos? Iste sequi obcaecati officiis vitae. Dolor voluptatibus, quaerat inventore excepturi hic possimus cum mollitia ipsa consectetur quod esse perferendis aspernatur laborum ullam illum et.</p>`,
    colors: ['black','yellow','red'],
    sizes: ['s', 'm', 'l'],
    rating: 4,
    categories: [
      { name: 'smart phone', slug: 'smart-phone' },
      { name: 'xiaomi', slug: 'xiaomi' },
    ],
  },
    {
    id: 1,
    name: 'Product 1',
    slug: 'product-1',
    price_new: 100,
    price_old: 200,
    image_thumb:
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/15-800x800.webp',
    image_gallery: [
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/11-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/8-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/1-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/4-800x800.webp',
    ],
    overview: `<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>`,
    description: `<h3>Lorem ipsum dolor sit amet.</h3>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione dignissimos quae totam in, reprehenderit dolorum, voluptatem rerum aut numquam dolore quam. Enim sequi laboriosam, placeat quo vitae illum dignissimos fuga consequuntur cupiditate.</p>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, atque nostrum excepturi deserunt, at sed quo dicta quibusdam enim eligendi iusto tempora, nisi beatae quae praesentium quisquam numquam mollitia iure voluptatum quaerat? Voluptatem eos rerum doloremque temporibus aperiam officiis magni!</p>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet iusto aliquid inventore, nihil autem consequatur, dignissimos laudantium officia repellendus placeat tempora ipsa quae iure ipsum asperiores voluptatibus aut rerum nobis esse delectus deserunt impedit quos? Iste sequi obcaecati officiis vitae. Dolor voluptatibus, quaerat inventore excepturi hic possimus cum mollitia ipsa consectetur quod esse perferendis aspernatur laborum ullam illum et.</p>`,
    colors: ['black', 'yellow'],
    sizes: ['m'],
    rating: 4.5,
    categories: [
      {
        name: "women's wear",
        slug: "women's-wear",
      },
      {
        name: 'fashion',
        slug: 'fashion',
      },
    ],
  },
  {
    id: 2,
    name: 'Product 2',
    slug: 'product-2',
    price_new: 100,
    price_old: 200,
    image_thumb:
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/16-800x800.webp',
    image_gallery: [
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/11-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/8-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/1-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/4-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/5-800x800.webp',
    ],
    overview: `<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>`,
    description: `<h3>Lorem ipsum dolor sit amet.</h3>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione dignissimos quae totam in, reprehenderit dolorum, voluptatem rerum aut numquam dolore quam. Enim sequi laboriosam, placeat quo vitae illum dignissimos fuga consequuntur cupiditate.</p>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, atque nostrum excepturi deserunt, at sed quo dicta quibusdam enim eligendi iusto tempora, nisi beatae quae praesentium quisquam numquam mollitia iure voluptatum quaerat? Voluptatem eos rerum doloremque temporibus aperiam officiis magni!</p>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet iusto aliquid inventore, nihil autem consequatur, dignissimos laudantium officia repellendus placeat tempora ipsa quae iure ipsum asperiores voluptatibus aut rerum nobis esse delectus deserunt impedit quos? Iste sequi obcaecati officiis vitae. Dolor voluptatibus, quaerat inventore excepturi hic possimus cum mollitia ipsa consectetur quod esse perferendis aspernatur laborum ullam illum et.</p>`,
    colors: ['yellow','red'],
    sizes: ['l'],
    rating: 4.5,
    categories: [
      {
        name: "men's clothing",
        slug: "men's-clothing",
      },
      {
        name: 'fashion',
        slug: 'fashion',
      },
    ],
  },
  {
    id: 3,
    name: 'Product 3',
    slug: 'product-3',
    price_new: 100,
    price_old: 200,
    image_thumb:
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/17-800x800.webp',
    image_gallery: [
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/11-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/8-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/1-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/4-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/5-800x800.webp',
    ],
    overview: `<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>`,
    description: `<h3>Lorem ipsum dolor sit amet.</h3>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione dignissimos quae totam in, reprehenderit dolorum, voluptatem rerum aut numquam dolore quam. Enim sequi laboriosam, placeat quo vitae illum dignissimos fuga consequuntur cupiditate.</p>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, atque nostrum excepturi deserunt, at sed quo dicta quibusdam enim eligendi iusto tempora, nisi beatae quae praesentium quisquam numquam mollitia iure voluptatum quaerat? Voluptatem eos rerum doloremque temporibus aperiam officiis magni!</p>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet iusto aliquid inventore, nihil autem consequatur, dignissimos laudantium officia repellendus placeat tempora ipsa quae iure ipsum asperiores voluptatibus aut rerum nobis esse delectus deserunt impedit quos? Iste sequi obcaecati officiis vitae. Dolor voluptatibus, quaerat inventore excepturi hic possimus cum mollitia ipsa consectetur quod esse perferendis aspernatur laborum ullam illum et.</p>`,
    colors: ['black','red'],
    sizes: ['s', 'm'],
    rating: 2.5,
    categories: [
      { name: 'bags', slug: 'bags' },
      {
        name: 'fashion',
        slug: 'fashion',
      },
    ],
  },
  {
    id: 4,
    name: 'Product 4',
    slug: 'product-4',
    price_new: 100,
    price_old: 200,
    image_thumb:
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/11-800x800.webp',
    image_gallery: [
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/11-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/8-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/1-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/4-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/5-800x800.webp',
    ],
    overview: `<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>`,
    description: `<h3>Lorem ipsum dolor sit amet.</h3>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione dignissimos quae totam in, reprehenderit dolorum, voluptatem rerum aut numquam dolore quam. Enim sequi laboriosam, placeat quo vitae illum dignissimos fuga consequuntur cupiditate.</p>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, atque nostrum excepturi deserunt, at sed quo dicta quibusdam enim eligendi iusto tempora, nisi beatae quae praesentium quisquam numquam mollitia iure voluptatum quaerat? Voluptatem eos rerum doloremque temporibus aperiam officiis magni!</p>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet iusto aliquid inventore, nihil autem consequatur, dignissimos laudantium officia repellendus placeat tempora ipsa quae iure ipsum asperiores voluptatibus aut rerum nobis esse delectus deserunt impedit quos? Iste sequi obcaecati officiis vitae. Dolor voluptatibus, quaerat inventore excepturi hic possimus cum mollitia ipsa consectetur quod esse perferendis aspernatur laborum ullam illum et.</p>`,
    colors: ['red'],
    sizes: ['s', 'm', 'l'],
    rating: 3.5,
    categories: [{ name: 'electronics', slug: 'electronics' }, {}],
  },
  {
    id: 5,
    name: 'Product 5',
    slug: 'product-5',
    price_new: 100,
    price_old: 200,
    image_thumb:
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/17-800x800.webp',
    image_gallery: [
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/11-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/8-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/1-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/4-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/5-800x800.webp',
    ],
    overview: `<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>`,
    description: `<h3>Lorem ipsum dolor sit amet.</h3>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione dignissimos quae totam in, reprehenderit dolorum, voluptatem rerum aut numquam dolore quam. Enim sequi laboriosam, placeat quo vitae illum dignissimos fuga consequuntur cupiditate.</p>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, atque nostrum excepturi deserunt, at sed quo dicta quibusdam enim eligendi iusto tempora, nisi beatae quae praesentium quisquam numquam mollitia iure voluptatum quaerat? Voluptatem eos rerum doloremque temporibus aperiam officiis magni!</p>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet iusto aliquid inventore, nihil autem consequatur, dignissimos laudantium officia repellendus placeat tempora ipsa quae iure ipsum asperiores voluptatibus aut rerum nobis esse delectus deserunt impedit quos? Iste sequi obcaecati officiis vitae. Dolor voluptatibus, quaerat inventore excepturi hic possimus cum mollitia ipsa consectetur quod esse perferendis aspernatur laborum ullam illum et.</p>`,
    colors: ['black','yellow','red'],
    sizes: ['s', 'm', 'l'],
    rating: 4.5,
    categories: [
      { name: 'monitors', slug: 'monitors' },
      { name: 'electronics', slug: 'electronics' },
    ],
  },
  {
    id: 6,
    name: 'Product 6',
    slug: 'product-6',
    price_new: 100,
    price_old: 200,
    image_thumb:
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/8-800x800.webp',
    image_gallery: [
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/11-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/8-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/1-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/4-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/5-800x800.webp',
    ],
    overview: `<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>`,
    description: `<h3>Lorem ipsum dolor sit amet.</h3>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione dignissimos quae totam in, reprehenderit dolorum, voluptatem rerum aut numquam dolore quam. Enim sequi laboriosam, placeat quo vitae illum dignissimos fuga consequuntur cupiditate.</p>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, atque nostrum excepturi deserunt, at sed quo dicta quibusdam enim eligendi iusto tempora, nisi beatae quae praesentium quisquam numquam mollitia iure voluptatum quaerat? Voluptatem eos rerum doloremque temporibus aperiam officiis magni!</p>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet iusto aliquid inventore, nihil autem consequatur, dignissimos laudantium officia repellendus placeat tempora ipsa quae iure ipsum asperiores voluptatibus aut rerum nobis esse delectus deserunt impedit quos? Iste sequi obcaecati officiis vitae. Dolor voluptatibus, quaerat inventore excepturi hic possimus cum mollitia ipsa consectetur quod esse perferendis aspernatur laborum ullam illum et.</p>`,
    colors: ['black','yellow','red'],
    sizes: ['s', 'm', 'l'],
    rating: 2.5,
    categories: [{ name: 'monitors', slug: 'monitors' }],
  },
  {
    id: 7,
    name: 'Product 7',
    slug: 'product-7',
    price_new: 100,
    price_old: 200,
    image_thumb:
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/1-800x800.webp',
    image_gallery: [
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/11-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/8-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/1-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/4-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/5-800x800.webp',
    ],
    overview: `<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>`,
    description: `<h3>Lorem ipsum dolor sit amet.</h3>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione dignissimos quae totam in, reprehenderit dolorum, voluptatem rerum aut numquam dolore quam. Enim sequi laboriosam, placeat quo vitae illum dignissimos fuga consequuntur cupiditate.</p>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, atque nostrum excepturi deserunt, at sed quo dicta quibusdam enim eligendi iusto tempora, nisi beatae quae praesentium quisquam numquam mollitia iure voluptatum quaerat? Voluptatem eos rerum doloremque temporibus aperiam officiis magni!</p>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet iusto aliquid inventore, nihil autem consequatur, dignissimos laudantium officia repellendus placeat tempora ipsa quae iure ipsum asperiores voluptatibus aut rerum nobis esse delectus deserunt impedit quos? Iste sequi obcaecati officiis vitae. Dolor voluptatibus, quaerat inventore excepturi hic possimus cum mollitia ipsa consectetur quod esse perferendis aspernatur laborum ullam illum et.</p>`,
    colors: ['black','yellow','red'],
    sizes: ['s', 'm', 'l'],
    rating: 5,
    categories: [
      { name: 'smart phone', slug: 'smart-phone' },
      { name: 'samsung', slug: 'samsung' },
    ],
  },
  {
    id: 8,
    name: 'Product 8',
    slug: 'product-8',
    price_new: 100,
    price_old: 200,
    image_thumb:
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/4-800x800.webp',
    image_gallery: [
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/11-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/8-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/1-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/4-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/5-800x800.webp',
    ],
    overview: `<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>`,
    description: `<h3>Lorem ipsum dolor sit amet.</h3>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione dignissimos quae totam in, reprehenderit dolorum, voluptatem rerum aut numquam dolore quam. Enim sequi laboriosam, placeat quo vitae illum dignissimos fuga consequuntur cupiditate.</p>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, atque nostrum excepturi deserunt, at sed quo dicta quibusdam enim eligendi iusto tempora, nisi beatae quae praesentium quisquam numquam mollitia iure voluptatum quaerat? Voluptatem eos rerum doloremque temporibus aperiam officiis magni!</p>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet iusto aliquid inventore, nihil autem consequatur, dignissimos laudantium officia repellendus placeat tempora ipsa quae iure ipsum asperiores voluptatibus aut rerum nobis esse delectus deserunt impedit quos? Iste sequi obcaecati officiis vitae. Dolor voluptatibus, quaerat inventore excepturi hic possimus cum mollitia ipsa consectetur quod esse perferendis aspernatur laborum ullam illum et.</p>`,
    colors: ['black','yellow','red'],
    sizes: ['s', 'm', 'l'],
    rating: 2,
    categories: [
      { name: 'smart phone', slug: 'smart-phone' },
      { name: 'apple', slug: 'apple' },
    ],
  },
  {
    id: 9,
    name: 'Product 9',
    slug: 'product-9',
    price_new: 100,
    price_old: 200,
    image_thumb:
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/2-800x800.webp',
    image_gallery: [
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/11-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/8-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/1-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/4-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/5-800x800.webp',
    ],
    overview: `<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>`,
    description: `<h3>Lorem ipsum dolor sit amet.</h3>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione dignissimos quae totam in, reprehenderit dolorum, voluptatem rerum aut numquam dolore quam. Enim sequi laboriosam, placeat quo vitae illum dignissimos fuga consequuntur cupiditate.</p>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, atque nostrum excepturi deserunt, at sed quo dicta quibusdam enim eligendi iusto tempora, nisi beatae quae praesentium quisquam numquam mollitia iure voluptatum quaerat? Voluptatem eos rerum doloremque temporibus aperiam officiis magni!</p>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet iusto aliquid inventore, nihil autem consequatur, dignissimos laudantium officia repellendus placeat tempora ipsa quae iure ipsum asperiores voluptatibus aut rerum nobis esse delectus deserunt impedit quos? Iste sequi obcaecati officiis vitae. Dolor voluptatibus, quaerat inventore excepturi hic possimus cum mollitia ipsa consectetur quod esse perferendis aspernatur laborum ullam illum et.</p>`,
    colors: ['black','yellow','red'],
    sizes: ['s', 'm', 'l'],
    rating: 4,
    categories: [
      { name: 'smart phone', slug: 'smart-phone' },
      { name: 'xiaomi', slug: 'xiaomi' },
    ],
  },
    {
    id: 1,
    name: 'Product 1',
    slug: 'product-1',
    price_new: 100,
    price_old: 200,
    image_thumb:
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/15-800x800.webp',
    image_gallery: [
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/11-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/8-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/1-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/4-800x800.webp',
    ],
    overview: `<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>`,
    description: `<h3>Lorem ipsum dolor sit amet.</h3>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione dignissimos quae totam in, reprehenderit dolorum, voluptatem rerum aut numquam dolore quam. Enim sequi laboriosam, placeat quo vitae illum dignissimos fuga consequuntur cupiditate.</p>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, atque nostrum excepturi deserunt, at sed quo dicta quibusdam enim eligendi iusto tempora, nisi beatae quae praesentium quisquam numquam mollitia iure voluptatum quaerat? Voluptatem eos rerum doloremque temporibus aperiam officiis magni!</p>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet iusto aliquid inventore, nihil autem consequatur, dignissimos laudantium officia repellendus placeat tempora ipsa quae iure ipsum asperiores voluptatibus aut rerum nobis esse delectus deserunt impedit quos? Iste sequi obcaecati officiis vitae. Dolor voluptatibus, quaerat inventore excepturi hic possimus cum mollitia ipsa consectetur quod esse perferendis aspernatur laborum ullam illum et.</p>`,
    colors: ['black', 'yellow'],
    sizes: ['m'],
    rating: 4.5,
    categories: [
      {
        name: "women's wear",
        slug: "women's-wear",
      },
      {
        name: 'fashion',
        slug: 'fashion',
      },
    ],
  },
  {
    id: 2,
    name: 'Product 2',
    slug: 'product-2',
    price_new: 150,
    price_old: 400,
    image_thumb:
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/16-800x800.webp',
    image_gallery: [
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/11-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/8-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/1-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/4-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/5-800x800.webp',
    ],
    overview: `<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>`,
    description: `<h3>Lorem ipsum dolor sit amet.</h3>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione dignissimos quae totam in, reprehenderit dolorum, voluptatem rerum aut numquam dolore quam. Enim sequi laboriosam, placeat quo vitae illum dignissimos fuga consequuntur cupiditate.</p>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, atque nostrum excepturi deserunt, at sed quo dicta quibusdam enim eligendi iusto tempora, nisi beatae quae praesentium quisquam numquam mollitia iure voluptatum quaerat? Voluptatem eos rerum doloremque temporibus aperiam officiis magni!</p>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet iusto aliquid inventore, nihil autem consequatur, dignissimos laudantium officia repellendus placeat tempora ipsa quae iure ipsum asperiores voluptatibus aut rerum nobis esse delectus deserunt impedit quos? Iste sequi obcaecati officiis vitae. Dolor voluptatibus, quaerat inventore excepturi hic possimus cum mollitia ipsa consectetur quod esse perferendis aspernatur laborum ullam illum et.</p>`,
    colors: ['yellow','red'],
    sizes: ['l'],
    rating: 4.5,
    categories: [
      {
        name: "men's clothing",
        slug: "men's-clothing",
      },
      {
        name: 'fashion',
        slug: 'fashion',
      },
    ],
  },
  {
    id: 3,
    name: 'Product 3',
    slug: 'product-3',
    price_new: 800,
    price_old: 1200,
    image_thumb:
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/17-800x800.webp',
    image_gallery: [
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/11-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/8-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/1-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/4-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/5-800x800.webp',
    ],
    overview: `<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>`,
    description: `<h3>Lorem ipsum dolor sit amet.</h3>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione dignissimos quae totam in, reprehenderit dolorum, voluptatem rerum aut numquam dolore quam. Enim sequi laboriosam, placeat quo vitae illum dignissimos fuga consequuntur cupiditate.</p>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, atque nostrum excepturi deserunt, at sed quo dicta quibusdam enim eligendi iusto tempora, nisi beatae quae praesentium quisquam numquam mollitia iure voluptatum quaerat? Voluptatem eos rerum doloremque temporibus aperiam officiis magni!</p>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet iusto aliquid inventore, nihil autem consequatur, dignissimos laudantium officia repellendus placeat tempora ipsa quae iure ipsum asperiores voluptatibus aut rerum nobis esse delectus deserunt impedit quos? Iste sequi obcaecati officiis vitae. Dolor voluptatibus, quaerat inventore excepturi hic possimus cum mollitia ipsa consectetur quod esse perferendis aspernatur laborum ullam illum et.</p>`,
    colors: ['black','red'],
    sizes: ['s', 'm'],
    rating: 2.5,
    categories: [
      { name: 'bags', slug: 'bags' },
      {
        name: 'fashion',
        slug: 'fashion',
      },
    ],
  },
  {
    id: 4,
    name: 'Product 4',
    slug: 'product-4',
    price_new: 199,
    price_old: 599,
    image_thumb:
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/11-800x800.webp',
    image_gallery: [
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/11-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/8-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/1-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/4-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/5-800x800.webp',
    ],
    overview: `<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>`,
    description: `<h3>Lorem ipsum dolor sit amet.</h3>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione dignissimos quae totam in, reprehenderit dolorum, voluptatem rerum aut numquam dolore quam. Enim sequi laboriosam, placeat quo vitae illum dignissimos fuga consequuntur cupiditate.</p>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, atque nostrum excepturi deserunt, at sed quo dicta quibusdam enim eligendi iusto tempora, nisi beatae quae praesentium quisquam numquam mollitia iure voluptatum quaerat? Voluptatem eos rerum doloremque temporibus aperiam officiis magni!</p>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet iusto aliquid inventore, nihil autem consequatur, dignissimos laudantium officia repellendus placeat tempora ipsa quae iure ipsum asperiores voluptatibus aut rerum nobis esse delectus deserunt impedit quos? Iste sequi obcaecati officiis vitae. Dolor voluptatibus, quaerat inventore excepturi hic possimus cum mollitia ipsa consectetur quod esse perferendis aspernatur laborum ullam illum et.</p>`,
    colors: ['red'],
    sizes: ['s', 'm', 'l'],
    rating: 3.5,
    categories: [{ name: 'electronics', slug: 'electronics' }, {}],
  },
  {
    id: 5,
    name: 'Product 5',
    slug: 'product-5',
    price_new: 1200,
    price_old: 2400,
    image_thumb:
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/17-800x800.webp',
    image_gallery: [
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/11-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/8-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/1-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/4-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/5-800x800.webp',
    ],
    overview: `<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>`,
    description: `<h3>Lorem ipsum dolor sit amet.</h3>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione dignissimos quae totam in, reprehenderit dolorum, voluptatem rerum aut numquam dolore quam. Enim sequi laboriosam, placeat quo vitae illum dignissimos fuga consequuntur cupiditate.</p>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, atque nostrum excepturi deserunt, at sed quo dicta quibusdam enim eligendi iusto tempora, nisi beatae quae praesentium quisquam numquam mollitia iure voluptatum quaerat? Voluptatem eos rerum doloremque temporibus aperiam officiis magni!</p>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet iusto aliquid inventore, nihil autem consequatur, dignissimos laudantium officia repellendus placeat tempora ipsa quae iure ipsum asperiores voluptatibus aut rerum nobis esse delectus deserunt impedit quos? Iste sequi obcaecati officiis vitae. Dolor voluptatibus, quaerat inventore excepturi hic possimus cum mollitia ipsa consectetur quod esse perferendis aspernatur laborum ullam illum et.</p>`,
    colors: ['black','yellow','red'],
    sizes: ['s', 'm', 'l'],
    rating: 4.5,
    categories: [
      { name: 'monitors', slug: 'monitors' },
      { name: 'electronics', slug: 'electronics' },
    ],
  },
  {
    id: 6,
    name: 'Product 6',
    slug: 'product-6',
    price_new: 140,
    price_old: 300,
    image_thumb:
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/8-800x800.webp',
    image_gallery: [
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/11-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/8-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/1-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/4-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/5-800x800.webp',
    ],
    overview: `<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>`,
    description: `<h3>Lorem ipsum dolor sit amet.</h3>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione dignissimos quae totam in, reprehenderit dolorum, voluptatem rerum aut numquam dolore quam. Enim sequi laboriosam, placeat quo vitae illum dignissimos fuga consequuntur cupiditate.</p>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, atque nostrum excepturi deserunt, at sed quo dicta quibusdam enim eligendi iusto tempora, nisi beatae quae praesentium quisquam numquam mollitia iure voluptatum quaerat? Voluptatem eos rerum doloremque temporibus aperiam officiis magni!</p>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet iusto aliquid inventore, nihil autem consequatur, dignissimos laudantium officia repellendus placeat tempora ipsa quae iure ipsum asperiores voluptatibus aut rerum nobis esse delectus deserunt impedit quos? Iste sequi obcaecati officiis vitae. Dolor voluptatibus, quaerat inventore excepturi hic possimus cum mollitia ipsa consectetur quod esse perferendis aspernatur laborum ullam illum et.</p>`,
    colors: ['black','yellow','red'],
    sizes: ['s', 'm', 'l'],
    rating: 2.5,
    categories: [{ name: 'monitors', slug: 'monitors' }],
  },
  {
    id: 7,
    name: 'Product 7',
    slug: 'product-7',
    price_new: 240,
    price_old: 350,
    image_thumb:
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/1-800x800.webp',
    image_gallery: [
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/11-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/8-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/1-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/4-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/5-800x800.webp',
    ],
    overview: `<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>`,
    description: `<h3>Lorem ipsum dolor sit amet.</h3>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione dignissimos quae totam in, reprehenderit dolorum, voluptatem rerum aut numquam dolore quam. Enim sequi laboriosam, placeat quo vitae illum dignissimos fuga consequuntur cupiditate.</p>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, atque nostrum excepturi deserunt, at sed quo dicta quibusdam enim eligendi iusto tempora, nisi beatae quae praesentium quisquam numquam mollitia iure voluptatum quaerat? Voluptatem eos rerum doloremque temporibus aperiam officiis magni!</p>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet iusto aliquid inventore, nihil autem consequatur, dignissimos laudantium officia repellendus placeat tempora ipsa quae iure ipsum asperiores voluptatibus aut rerum nobis esse delectus deserunt impedit quos? Iste sequi obcaecati officiis vitae. Dolor voluptatibus, quaerat inventore excepturi hic possimus cum mollitia ipsa consectetur quod esse perferendis aspernatur laborum ullam illum et.</p>`,
    colors: ['black','yellow','red'],
    sizes: ['s', 'm', 'l'],
    rating: 5,
    categories: [
      { name: 'smart phone', slug: 'smart-phone' },
      { name: 'samsung', slug: 'samsung' },
    ],
  },
  {
    id: 8,
    name: 'Product 8',
    slug: 'product-8',
    price_new: 1300,
    price_old: 2900,
    image_thumb:
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/4-800x800.webp',
    image_gallery: [
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/11-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/8-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/1-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/4-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/5-800x800.webp',
    ],
    overview: `<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>`,
    description: `<h3>Lorem ipsum dolor sit amet.</h3>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione dignissimos quae totam in, reprehenderit dolorum, voluptatem rerum aut numquam dolore quam. Enim sequi laboriosam, placeat quo vitae illum dignissimos fuga consequuntur cupiditate.</p>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, atque nostrum excepturi deserunt, at sed quo dicta quibusdam enim eligendi iusto tempora, nisi beatae quae praesentium quisquam numquam mollitia iure voluptatum quaerat? Voluptatem eos rerum doloremque temporibus aperiam officiis magni!</p>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet iusto aliquid inventore, nihil autem consequatur, dignissimos laudantium officia repellendus placeat tempora ipsa quae iure ipsum asperiores voluptatibus aut rerum nobis esse delectus deserunt impedit quos? Iste sequi obcaecati officiis vitae. Dolor voluptatibus, quaerat inventore excepturi hic possimus cum mollitia ipsa consectetur quod esse perferendis aspernatur laborum ullam illum et.</p>`,
    colors: ['black','yellow','red'],
    sizes: ['s', 'm', 'l'],
    rating: 2,
    categories: [
      { name: 'smart phone', slug: 'smart-phone' },
      { name: 'apple', slug: 'apple' },
    ],
  },
  {
    id: 9,
    name: 'Product 9',
    slug: 'product-9',
    price_new: 1000,
    price_old: 2000,
    image_thumb:
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/2-800x800.webp',
    image_gallery: [
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/11-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/8-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/1-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/4-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/5-800x800.webp',
    ],
    overview: `<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>`,
    description: `<h3>Lorem ipsum dolor sit amet.</h3>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione dignissimos quae totam in, reprehenderit dolorum, voluptatem rerum aut numquam dolore quam. Enim sequi laboriosam, placeat quo vitae illum dignissimos fuga consequuntur cupiditate.</p>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, atque nostrum excepturi deserunt, at sed quo dicta quibusdam enim eligendi iusto tempora, nisi beatae quae praesentium quisquam numquam mollitia iure voluptatum quaerat? Voluptatem eos rerum doloremque temporibus aperiam officiis magni!</p>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet iusto aliquid inventore, nihil autem consequatur, dignissimos laudantium officia repellendus placeat tempora ipsa quae iure ipsum asperiores voluptatibus aut rerum nobis esse delectus deserunt impedit quos? Iste sequi obcaecati officiis vitae. Dolor voluptatibus, quaerat inventore excepturi hic possimus cum mollitia ipsa consectetur quod esse perferendis aspernatur laborum ullam illum et.</p>`,
    colors: ['black','yellow','red'],
    sizes: ['s', 'm', 'l'],
    rating: 4,
    categories: [
      { name: 'smart phone', slug: 'smart-phone' },
      { name: 'xiaomi', slug: 'xiaomi' },
    ],
  },
    {
    id: 1,
    name: 'Product 1',
    slug: 'product-1',
    price_new: 60,
    price_old: 120,
    image_thumb:
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/15-800x800.webp',
    image_gallery: [
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/11-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/8-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/1-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/4-800x800.webp',
    ],
    overview: `<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>`,
    description: `<h3>Lorem ipsum dolor sit amet.</h3>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione dignissimos quae totam in, reprehenderit dolorum, voluptatem rerum aut numquam dolore quam. Enim sequi laboriosam, placeat quo vitae illum dignissimos fuga consequuntur cupiditate.</p>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, atque nostrum excepturi deserunt, at sed quo dicta quibusdam enim eligendi iusto tempora, nisi beatae quae praesentium quisquam numquam mollitia iure voluptatum quaerat? Voluptatem eos rerum doloremque temporibus aperiam officiis magni!</p>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet iusto aliquid inventore, nihil autem consequatur, dignissimos laudantium officia repellendus placeat tempora ipsa quae iure ipsum asperiores voluptatibus aut rerum nobis esse delectus deserunt impedit quos? Iste sequi obcaecati officiis vitae. Dolor voluptatibus, quaerat inventore excepturi hic possimus cum mollitia ipsa consectetur quod esse perferendis aspernatur laborum ullam illum et.</p>`,
    colors: ['black', 'yellow'],
    sizes: ['m'],
    rating: 4.5,
    categories: [
      {
        name: "women's wear",
        slug: "women's-wear",
      },
      {
        name: 'fashion',
        slug: 'fashion',
      },
    ],
  },
  {
    id: 2,
    name: 'Product 2',
    slug: 'product-2',
    price_new: 30,
    price_old: 150,
    image_thumb:
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/16-800x800.webp',
    image_gallery: [
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/11-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/8-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/1-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/4-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/5-800x800.webp',
    ],
    overview: `<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>`,
    description: `<h3>Lorem ipsum dolor sit amet.</h3>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione dignissimos quae totam in, reprehenderit dolorum, voluptatem rerum aut numquam dolore quam. Enim sequi laboriosam, placeat quo vitae illum dignissimos fuga consequuntur cupiditate.</p>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, atque nostrum excepturi deserunt, at sed quo dicta quibusdam enim eligendi iusto tempora, nisi beatae quae praesentium quisquam numquam mollitia iure voluptatum quaerat? Voluptatem eos rerum doloremque temporibus aperiam officiis magni!</p>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet iusto aliquid inventore, nihil autem consequatur, dignissimos laudantium officia repellendus placeat tempora ipsa quae iure ipsum asperiores voluptatibus aut rerum nobis esse delectus deserunt impedit quos? Iste sequi obcaecati officiis vitae. Dolor voluptatibus, quaerat inventore excepturi hic possimus cum mollitia ipsa consectetur quod esse perferendis aspernatur laborum ullam illum et.</p>`,
    colors: ['yellow','red'],
    sizes: ['l'],
    rating: 4.5,
    categories: [
      {
        name: "men's clothing",
        slug: "men's-clothing",
      },
      {
        name: 'fashion',
        slug: 'fashion',
      },
    ],
  },
  {
    id: 3,
    name: 'Product 3',
    slug: 'product-3',
    price_new: 400,
    price_old: 500,
    image_thumb:
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/17-800x800.webp',
    image_gallery: [
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/11-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/8-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/1-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/4-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/5-800x800.webp',
    ],
    overview: `<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>`,
    description: `<h3>Lorem ipsum dolor sit amet.</h3>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione dignissimos quae totam in, reprehenderit dolorum, voluptatem rerum aut numquam dolore quam. Enim sequi laboriosam, placeat quo vitae illum dignissimos fuga consequuntur cupiditate.</p>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, atque nostrum excepturi deserunt, at sed quo dicta quibusdam enim eligendi iusto tempora, nisi beatae quae praesentium quisquam numquam mollitia iure voluptatum quaerat? Voluptatem eos rerum doloremque temporibus aperiam officiis magni!</p>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet iusto aliquid inventore, nihil autem consequatur, dignissimos laudantium officia repellendus placeat tempora ipsa quae iure ipsum asperiores voluptatibus aut rerum nobis esse delectus deserunt impedit quos? Iste sequi obcaecati officiis vitae. Dolor voluptatibus, quaerat inventore excepturi hic possimus cum mollitia ipsa consectetur quod esse perferendis aspernatur laborum ullam illum et.</p>`,
    colors: ['black','red'],
    sizes: ['s', 'm'],
    rating: 2.5,
    categories: [
      { name: 'bags', slug: 'bags' },
      {
        name: 'fashion',
        slug: 'fashion',
      },
    ],
  },
  {
    id: 4,
    name: 'Product 4',
    slug: 'product-4',
    price_new: 350,
    price_old: 700,
    image_thumb:
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/11-800x800.webp',
    image_gallery: [
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/11-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/8-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/1-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/4-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/5-800x800.webp',
    ],
    overview: `<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>`,
    description: `<h3>Lorem ipsum dolor sit amet.</h3>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione dignissimos quae totam in, reprehenderit dolorum, voluptatem rerum aut numquam dolore quam. Enim sequi laboriosam, placeat quo vitae illum dignissimos fuga consequuntur cupiditate.</p>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, atque nostrum excepturi deserunt, at sed quo dicta quibusdam enim eligendi iusto tempora, nisi beatae quae praesentium quisquam numquam mollitia iure voluptatum quaerat? Voluptatem eos rerum doloremque temporibus aperiam officiis magni!</p>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet iusto aliquid inventore, nihil autem consequatur, dignissimos laudantium officia repellendus placeat tempora ipsa quae iure ipsum asperiores voluptatibus aut rerum nobis esse delectus deserunt impedit quos? Iste sequi obcaecati officiis vitae. Dolor voluptatibus, quaerat inventore excepturi hic possimus cum mollitia ipsa consectetur quod esse perferendis aspernatur laborum ullam illum et.</p>`,
    colors: ['red'],
    sizes: ['s', 'm', 'l'],
    rating: 3.5,
    categories: [{ name: 'electronics', slug: 'electronics' }, {}],
  },
  {
    id: 5,
    name: 'Product 5',
    slug: 'product-5',
    price_new: 499,
    price_old: 999,
    image_thumb:
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/17-800x800.webp',
    image_gallery: [
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/11-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/8-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/1-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/4-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/5-800x800.webp',
    ],
    overview: `<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>`,
    description: `<h3>Lorem ipsum dolor sit amet.</h3>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione dignissimos quae totam in, reprehenderit dolorum, voluptatem rerum aut numquam dolore quam. Enim sequi laboriosam, placeat quo vitae illum dignissimos fuga consequuntur cupiditate.</p>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, atque nostrum excepturi deserunt, at sed quo dicta quibusdam enim eligendi iusto tempora, nisi beatae quae praesentium quisquam numquam mollitia iure voluptatum quaerat? Voluptatem eos rerum doloremque temporibus aperiam officiis magni!</p>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet iusto aliquid inventore, nihil autem consequatur, dignissimos laudantium officia repellendus placeat tempora ipsa quae iure ipsum asperiores voluptatibus aut rerum nobis esse delectus deserunt impedit quos? Iste sequi obcaecati officiis vitae. Dolor voluptatibus, quaerat inventore excepturi hic possimus cum mollitia ipsa consectetur quod esse perferendis aspernatur laborum ullam illum et.</p>`,
    colors: ['black','yellow','red'],
    sizes: ['s', 'm', 'l'],
    rating: 4.5,
    categories: [
      { name: 'monitors', slug: 'monitors' },
      { name: 'electronics', slug: 'electronics' },
    ],
  },
  {
    id: 6,
    name: 'Product 6',
    slug: 'product-6',
    price_new: 50,
    price_old: 230,
    image_thumb:
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/8-800x800.webp',
    image_gallery: [
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/11-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/8-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/1-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/4-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/5-800x800.webp',
    ],
    overview: `<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>`,
    description: `<h3>Lorem ipsum dolor sit amet.</h3>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione dignissimos quae totam in, reprehenderit dolorum, voluptatem rerum aut numquam dolore quam. Enim sequi laboriosam, placeat quo vitae illum dignissimos fuga consequuntur cupiditate.</p>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, atque nostrum excepturi deserunt, at sed quo dicta quibusdam enim eligendi iusto tempora, nisi beatae quae praesentium quisquam numquam mollitia iure voluptatum quaerat? Voluptatem eos rerum doloremque temporibus aperiam officiis magni!</p>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet iusto aliquid inventore, nihil autem consequatur, dignissimos laudantium officia repellendus placeat tempora ipsa quae iure ipsum asperiores voluptatibus aut rerum nobis esse delectus deserunt impedit quos? Iste sequi obcaecati officiis vitae. Dolor voluptatibus, quaerat inventore excepturi hic possimus cum mollitia ipsa consectetur quod esse perferendis aspernatur laborum ullam illum et.</p>`,
    colors: ['black','yellow','red'],
    sizes: ['s', 'm', 'l'],
    rating: 2.5,
    categories: [{ name: 'monitors', slug: 'monitors' }],
  },
  {
    id: 7,
    name: 'Product 7',
    slug: 'product-7',
    price_new: 180,
    price_old: 560,
    image_thumb:
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/1-800x800.webp',
    image_gallery: [
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/11-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/8-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/1-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/4-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/5-800x800.webp',
    ],
    overview: `<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>`,
    description: `<h3>Lorem ipsum dolor sit amet.</h3>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione dignissimos quae totam in, reprehenderit dolorum, voluptatem rerum aut numquam dolore quam. Enim sequi laboriosam, placeat quo vitae illum dignissimos fuga consequuntur cupiditate.</p>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, atque nostrum excepturi deserunt, at sed quo dicta quibusdam enim eligendi iusto tempora, nisi beatae quae praesentium quisquam numquam mollitia iure voluptatum quaerat? Voluptatem eos rerum doloremque temporibus aperiam officiis magni!</p>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet iusto aliquid inventore, nihil autem consequatur, dignissimos laudantium officia repellendus placeat tempora ipsa quae iure ipsum asperiores voluptatibus aut rerum nobis esse delectus deserunt impedit quos? Iste sequi obcaecati officiis vitae. Dolor voluptatibus, quaerat inventore excepturi hic possimus cum mollitia ipsa consectetur quod esse perferendis aspernatur laborum ullam illum et.</p>`,
    colors: ['black','yellow','red'],
    sizes: ['s', 'm', 'l'],
    rating: 5,
    categories: [
      { name: 'smart phone', slug: 'smart-phone' },
      { name: 'samsung', slug: 'samsung' },
    ],
  },
  {
    id: 8,
    name: 'Product 8',
    slug: 'product-8',
    price_new: 300,
    price_old: 600,
    image_thumb:
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/4-800x800.webp',
    image_gallery: [
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/11-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/8-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/1-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/4-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/5-800x800.webp',
    ],
    overview: `<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>`,
    description: `<h3>Lorem ipsum dolor sit amet.</h3>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione dignissimos quae totam in, reprehenderit dolorum, voluptatem rerum aut numquam dolore quam. Enim sequi laboriosam, placeat quo vitae illum dignissimos fuga consequuntur cupiditate.</p>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, atque nostrum excepturi deserunt, at sed quo dicta quibusdam enim eligendi iusto tempora, nisi beatae quae praesentium quisquam numquam mollitia iure voluptatum quaerat? Voluptatem eos rerum doloremque temporibus aperiam officiis magni!</p>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet iusto aliquid inventore, nihil autem consequatur, dignissimos laudantium officia repellendus placeat tempora ipsa quae iure ipsum asperiores voluptatibus aut rerum nobis esse delectus deserunt impedit quos? Iste sequi obcaecati officiis vitae. Dolor voluptatibus, quaerat inventore excepturi hic possimus cum mollitia ipsa consectetur quod esse perferendis aspernatur laborum ullam illum et.</p>`,
    colors: ['black','yellow','red'],
    sizes: ['s', 'm', 'l'],
    rating: 2,
    categories: [
      { name: 'smart phone', slug: 'smart-phone' },
      { name: 'apple', slug: 'apple' },
    ],
  },
  {
    id: 9,
    name: 'Product 9',
    slug: 'product-9',
    price_new: 500,
    price_old: 700,
    image_thumb:
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/2-800x800.webp',
    image_gallery: [
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/11-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/8-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/1-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/4-800x800.webp',
      'https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/5-800x800.webp',
    ],
    overview: `<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>`,
    description: `<h3>Lorem ipsum dolor sit amet.</h3>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione dignissimos quae totam in, reprehenderit dolorum, voluptatem rerum aut numquam dolore quam. Enim sequi laboriosam, placeat quo vitae illum dignissimos fuga consequuntur cupiditate.</p>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, atque nostrum excepturi deserunt, at sed quo dicta quibusdam enim eligendi iusto tempora, nisi beatae quae praesentium quisquam numquam mollitia iure voluptatum quaerat? Voluptatem eos rerum doloremque temporibus aperiam officiis magni!</p>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet iusto aliquid inventore, nihil autem consequatur, dignissimos laudantium officia repellendus placeat tempora ipsa quae iure ipsum asperiores voluptatibus aut rerum nobis esse delectus deserunt impedit quos? Iste sequi obcaecati officiis vitae. Dolor voluptatibus, quaerat inventore excepturi hic possimus cum mollitia ipsa consectetur quod esse perferendis aspernatur laborum ullam illum et.</p>`,
    colors: ['black','yellow','red'],
    sizes: ['s', 'm', 'l'],
    rating: 4,
    categories: [
      { name: 'smart phone', slug: 'smart-phone' },
      { name: 'xiaomi', slug: 'xiaomi' },
    ],
  },
];

export default products;
