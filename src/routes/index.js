import Home from '~/pages/Home';
import Following from '~/pages/Following';
import DetailCategory from '~/pages/DetailCategory'
import DetailProduct from '~/pages/DetailProduct'
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
  }
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
