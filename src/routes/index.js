import { BrowserRouter as RouterWeb, Routes, Route, Navigate } from 'react-router-dom';

import Layout from '~/components/Layout';
import Home from '~/pages/Home/Home';
import DetailCategory from '~/pages/DetailCategory/DetailCategory'
import DetailProduct from '~/pages/DetailProduct/DetailProduct'
import Cart from '~/pages/Cart/Cart'
import Services from '~/pages/Services/Services';
import Search from '~/pages/Search';
import Error from '~/pages/Error';
import About from '~/pages/About';
import Contact from '~/pages/Contact'
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
            <Route path='search' element={<Search />}>
            </Route>
            <Route path='about' element={<About />}/>
            <Route path='contact' element={<Contact />}/>

            <Route path='*' element={<Error />}/>
          </Route>
        </Routes>
    </RouterWeb>
  );
}

export default Router;
