import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import logo from '~/assets/images/logo.png';
import { pages, categories } from './const';
const cx = classNames.bind(styles);

const Header = (props) => {
  const [headerDynamic, setHeaderDynamic] = useState(false);

  useEffect(() => {
    const handleHeaderDynamic = () => {
      if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
        setHeaderDynamic(true);
      } else {
        setHeaderDynamic(false);
      }
    };
    window.addEventListener('scroll', handleHeaderDynamic);
    return () => {
      window.removeEventListener('scroll', handleHeaderDynamic);
    };
  }, []);

  return (
    <>
      <header className={`${cx('header-wrapper')}`}>
        <div className="container">
          <div className={cx('header-mobile')}>
            <div className={cx('header-mobile__content')}>
              <span className={`${cx('header-mobile__icon')} ${cx('icon--menu')}`}>
                <i className="bx bx-menu-alt-left"></i>
              </span>
              <Link to="/" className={cx('header-mobile__logo')}>
                <img src={logo} alt="" />
              </Link>
              <span className={`${cx('header-mobile__icon')} ${cx('icon--cart')}`}>
                <i className="bx bxs-cart"></i>
                <span>0</span>
              </span>
            </div>
          </div>
          <div className={cx('header-desktop')}>
            <div className={cx('header-desktop__top')}>
              <Link to="/" className={cx('header-desktop__logo')}>
                <img src={logo} alt="" />
              </Link>
              <div className={cx('header-desktop__search')}>
                <input type="text" placeholder="Search" />
                <button className={cx('header-desktop__search-button')}>
                  <i className="bx bx-search"></i>
                </button>
              </div>
              <div className={cx('header-desktop__cart')}>
                <span className={cx('header-desktop__cart-icon')}>
                  <i className="bx bxs-shopping-bag"></i>
                  <span className={cx('header-desktop__cart-badge')}>0</span>
                </span>
                <span className={cx('header-desktop__cart-text')}>my cart</span>
                <span className={cx('header-desktop__cart-price')}>- $0.00</span>
                <CartItems items={[]} />
              </div>
            </div>
            <div className={cx('header-desktop__bottom')}>
              <div className={cx('header-desktop__categories')}>
                <span className={cx('header-desktop__categories-icon')}>
                  <i className="bx bx-menu"></i>
                </span>
                <h3 className={cx('header-desktop__categories-title')}>All Categories</h3>
                <span className={cx('header-desktop__categories-icon')}>
                  <i class="bx bx-chevron-down"></i>
                </span>
                <MegaMenu categories={categories} />
              </div>
              <div className={cx('header-desktop__pages')}>
                {pages.map((item, index) => (
                  <Link to={item.path} className={cx('header-desktop__page')} key={index}>
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className={cx('header-desktop__auth')}>
                <i className="bx bxs-lock-alt"></i>
                <Link to="/login" className={cx('header-desktop__auth-link')}>
                  Login
                </Link>
                <span> or </span>
                <Link to="/register" className={cx('header-desktop__auth-link')}>
                  Register
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
      <header className={`${cx('header-dynamic')} ${headerDynamic ? cx('active') : ''}`}>
        <div className="container">
          <div className={cx('header-dynamic__content')}>
            <div className={cx('header-dynamic__content-left')}>
              <Link to="/" className={cx('header-dynamic__logo')}>
                <img src={logo} alt="" />
              </Link>
            </div>
            <div className={cx('header-dynamic__content-center')}>
              <div className={cx('header-dynamic__pages')}>
                {pages.map((item, index) => (
                  <Link to={item.path} className={cx('header-dynamic__page')} key={index}>
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
            <div className={cx('header-dynamic__content-right')}>
              <div className={cx('header-dynamic__cart')}>
                <span className={cx('header-dynamic__cart-icon')}>
                  <i className="bx bxs-shopping-bag"></i>
                  <span className={cx('header-dynamic__cart-badge')}>0</span>
                </span>
                <CartItems items={[]} />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

const MegaMenu = (props) => {
  const categories = props.categories;
  return (
    <>
      <ul className={cx('mega-menu')}>
        {categories.map((category, index) => (
          <li className={cx('mega-menu__item')} key={index}>
            <span className={cx('mega-menu__icon')}>
              <i className={category.icon}></i>
            </span>
            <Link to={category.path} className={cx('mega-menu__link')}>
              {category.name}
            </Link>
            {category?.subCategories?.length > 0 && (
              <>
                <span className={`${cx('mega-menu__icon')} ${cx('icon--sub')}`}>
                  <i className="bx bx-chevron-right"></i>
                </span>
                <SubCategory categories={category?.subCategories} />
              </>
            )}
          </li>
        ))}
      </ul>
    </>
  );
};

const SubCategory = (props) => {
  const categories = props.categories;
  return (
    <ul className={cx('mega-menu__sub')}>
      {categories?.map((category, index) => (
        <li className={cx('mega-menu__sub-item')} key={index}>
          <Link to={category.path} className={cx('mega-menu__sub-link')}>
            {category.name}
          </Link>

          {category?.subCategories?.length > 0 && (
            <>
              <span className={cx('mega-menu__sub-icon--sub')}>
                <i className="bx bx-chevron-right"></i>
              </span>
              <SubCategory categories={category.subCategories} />
            </>
          )}
        </li>
      ))}
    </ul>
  );
};

const CartItems = ({items}) => {
  return (
    <div className={cx('header-cart-dropdown')}>
      <div className={cx('header-cart-dropdown__content')}>
        {
          items.length > 0 ? <>
          <ul className={cx('header-cart-dropdown__list')}>
          <li className={cx('header-cart-dropdown__item')}>
            <div className={cx('header-cart-dropdown__item-image')}>
              <img src="https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/17-270x270.webp" alt="" />
            </div>
            <div className={cx('header-cart-dropdown__item-info')}>
              <Link to="#" className={cx('header-cart-dropdown__item-name')}>
                Product Name asdasf efsdsdf asdasd asdvfvf sdas
              </Link>
              <span className={cx('header-cart-dropdown__item-qty')}>x1</span>
              <span className={cx('header-cart-dropdown__item-price')}>$100.00</span>
              <span className={cx('header-cart-dropdown__item-remove')}>
                <i className="bx bx-trash"></i>
              </span>
            </div>
          </li>
          <li className={cx('header-cart-dropdown__item')}>
            <div className={cx('header-cart-dropdown__item-image')}>
              <img src="https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/17-270x270.webp" alt="" />
            </div>
            <div className={cx('header-cart-dropdown__item-info')}>
              <Link to="#" className={cx('header-cart-dropdown__item-name')}>
                Product Name asdasf efsdsdf asdasd asdvfvf sdas
              </Link>
              <span className={cx('header-cart-dropdown__item-qty')}>x1</span>
              <span className={cx('header-cart-dropdown__item-price')}>$100.00</span>
              <span className={cx('header-cart-dropdown__item-remove')}>
                <i className="bx bx-trash"></i>
              </span>
            </div>
          </li>
          <li className={cx('header-cart-dropdown__item')}>
            <div className={cx('header-cart-dropdown__item-image')}>
              <img src="https://opencart.opencartworks.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/17-270x270.webp" alt="" />
            </div>
            <div className={cx('header-cart-dropdown__item-info')}>
              <Link to="#" className={cx('header-cart-dropdown__item-name')}>
                Product Name asdasf efsdsdf asdasd asdvfvf sdas
              </Link>
              <span className={cx('header-cart-dropdown__item-qty')}>x1</span>
              <span className={cx('header-cart-dropdown__item-price')}>$100.00</span>
              <span className={cx('header-cart-dropdown__item-remove')}>
                <i className="bx bx-trash"></i>
              </span>
            </div>
          </li>
        </ul>
        <div className={cx('header-cart-dropdown__action')}>
          <Link to="/cart" className={`${cx('header-cart-dropdown__action-link')} ${cx('action--view-cart')}`}>
            View Cart
          </Link>
          <Link to="/checkout" className={`${cx('header-cart-dropdown__action-link')} ${cx('action--checkout')}`}>
            Checkout
          </Link>
        </div>
          </> : 
          <>
            <div className={cx('header-cart-dropdown__empty')}>
              <p className={cx('header-cart-dropdown__empty-text')}>
                Your cart is empty
              </p>
            </div>
          </> 
        }
        
      </div>
    </div>
  );
};

export default Header;
