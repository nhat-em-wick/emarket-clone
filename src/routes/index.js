import Home from '~/pages/Home';
import Following from '~/pages/Following';
import DetailCategory from '~/pages/DetailCategory'
import DetailProduct from '~/pages/DetailProduct'
import Cart from '~/pages/Cart'
const publicRoutes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/follow',
    component: Following,
  },
  {
    path: '/category/:id',
    component: DetailCategory
  },
  {
    path: '/product/:id',
    component: DetailProduct
  },
  {
    path: '/cart',
    component: Cart
  }
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
