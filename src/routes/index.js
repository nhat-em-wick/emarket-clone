import Home from '~/pages/Home';
import Following from '~/pages/Following';
import DetailCategory from '~/pages/DetailCategory'
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
  }
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
