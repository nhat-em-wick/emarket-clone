import { BrowserRouter as RouterWeb, Routes, Route, Navigate } from 'react-router-dom';

import Layout from '~/components/Layout';
import Home from '~/pages/Home';
import DetailCategory from '~/pages/DetailCategory'
import DetailProduct from '~/pages/DetailProduct'
import Cart from '~/pages/Cart'
import Services from '~/pages/Services/Services';
import Search from '~/pages/Search';

function Router() {
  return (
    <RouterWeb>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />}/>
            <Route path='category'>
              <Route path='/category' element={<Navigate replace to={'/'} />}/>
              <Route path=':slug' element={<DetailCategory/>}/>
            </Route>
            <Route path='product'>
              <Route path='/product' element={<Navigate replace to={'/'} />}/>
              <Route path=':slug' element={<DetailProduct/>}/>
            </Route>
            <Route path='cart' element={<Cart />}/>
            <Route path='services' element={<Services />}/>
            <Route path='search' element={<Search />}></Route>
          </Route>
        </Routes>
    </RouterWeb>
  );
}

export default Router;
