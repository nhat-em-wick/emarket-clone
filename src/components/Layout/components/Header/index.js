import React, { useEffect, useState, memo } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import logo from '~/assets/images/logo.png';
import { pages } from './const';
import { useDispatch, useSelector } from 'react-redux';
import { updateItem, updateCart, removeItem } from '~/redux/CartSlice';
import { useClickOutside, useDebounce } from '~/custom-hook';
import categoriesApi from '~/fake-api/categories-api';
import productsApi from '~/fake-api/products-api';
import { useRef } from 'react';

const cx = classNames.bind(styles);

const Header = (props) => {
  const [headerDynamic, setHeaderDynamic] = useState(false);
  const [categories, setCategories] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalProducts, setTotalProducts] = useState(0);
  const cartItems = useSelector((state) => state.cartStore.cart);
  const dispatch = useDispatch();
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

  useEffect(() => {
    const slugItems = cartItems.map((item) => item.slug);
    const fetchCategories = async () => {
      try {
        const [categories, products] = await Promise.all([
          categoriesApi.getListCategories(),
          productsApi.findItemsCart(slugItems),
        ]);
        const resultsProductCart = cartItems.filter((item) => {
          return products.find((product) => product.slug === item.slug);
        });
        setCategories(categories);
        dispatch(updateCart(resultsProductCart));
      } catch (error) {
        throw Error(error);
      }
    };
    fetchCategories();
  }, []);

  useEffect(() => {
    setTotalProducts(cartItems.reduce((total, item) => total + Number(item.quantity), 0));
    setTotalPrice(cartItems.reduce((total, item) => total + Number(item.quantity) * Number(item.price), 0));
  }, [cartItems]);
  let activeStyle = {
    color: 'var(--primary-color)',
  };
  return (
    <>
      <header className={`${cx('header-wrapper')}`}>
        <div className="container">
          <div className={cx('header-mobile')}>
            <div className={cx('header-mobile__content')}>
              <span onClick={() => props.onSideBar()} className={`${cx('header-mobile__icon')} ${cx('icon--menu')}`}>
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
              <Search />
              <div className={cx('header-desktop__cart')}>
                <span className={cx('header-desktop__cart-icon')}>
                  <i className="bx bxs-shopping-bag"></i>
                  <span className={cx('header-desktop__cart-badge')}>{totalProducts}</span>
                </span>
                <span className={cx('header-desktop__cart-text')}>my cart</span>
                <span className={cx('header-desktop__cart-price')}>- ${totalPrice}</span>
                <CartItems items={cartItems} />
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
                  <NavLink
                    to={item.path}
                    className={`${cx('header-desktop__page')}`}
                    style={({ isActive }) => (isActive ? activeStyle : undefined)}
                    key={index}
                  >
                    {item.name}
                  </NavLink>
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
                  <NavLink
                    style={({ isActive }) => (isActive ? activeStyle : undefined)}
                    to={item.path}
                    className={cx('header-dynamic__page')}
                    key={index}
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>
            </div>
            <div className={cx('header-dynamic__content-right')}>
              <div className={cx('header-dynamic__cart')}>
                <span className={cx('header-dynamic__cart-icon')}>
                  <i className="bx bxs-shopping-bag"></i>
                  <span className={cx('header-dynamic__cart-badge')}>{totalProducts}</span>
                </span>
                <CartItems items={cartItems} />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

const Search = () => {
  const loadingTimer = useRef(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);
  const [showResults, setShowResults] = useState(true);
  const debounceSearch = useDebounce(searchTerm, 700);
  const searchResultsRef = useRef(null);
  const inputRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSearch = async () => {
      setLoading(true);
      const results = await productsApi.findProductByName({
        q: debounceSearch.trim(),
      });
      loadingTimer.current = setTimeout(() => {
        setResults(results.products);
        setShowResults(true);
        setLoading(false);
      }, 1000);
    };
    if (!debounceSearch.trim()) {
      setResults([]);
      return;
    } else {
      fetchSearch();
    }
  }, [debounceSearch]);

  const handleSearchTerm = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
  };
  const handleClearInput = () => {
    setSearchTerm('');
    setResults([]);
    inputRef.current.focus();
  };

  useClickOutside(searchResultsRef, () => setShowResults(false));
  const handleNavigateSearch = () => {
    if (!debounceSearch.trim()) {
      return;
    } else {
      navigate(`/search?q=${debounceSearch.trim()}`);
    }
  };

  return (
    <div className={cx('header-desktop__search')}>
      <div className={cx('header-desktop__search-input')}>
        <input
          ref={inputRef}
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => handleSearchTerm(e)}
          onFocus={() => setShowResults(true)}
        />
        {loading && (
          <span className={cx('header-desktop__search-clear')}>
            <i className="bx bx-loader-circle bx-spin"></i>
          </span>
        )}
        {!!searchTerm && !loading && (
          <span onClick={() => setSearchTerm('')} className={cx('header-desktop__search-clear')}>
            <i className="bx bx-x"></i>
          </span>
        )}
        <ul
          ref={searchResultsRef}
          className={`${cx('header-desktop__search-results')} ${showResults && results.length > 0 ? cx('active') : ''}`}
        >
          <div className={cx('header-desktop__search-results__inner')}>
            {results.map((item, index) => (
              <li className={cx('header-desktop__search-results__item')}>
                <Link to={`/product/${item.slug}`} className={cx('header-desktop__search-results__link')}>
                  {item.name}
                </Link>
              </li>
            ))}
          </div>
        </ul>
      </div>
      <button onClick={handleNavigateSearch} className={cx('header-desktop__search-button')}>
        <i className="bx bx-search"></i>
      </button>
    </div>
  );
};

const MegaMenu = (props) => {
  const categories = props.categories;
  return (
    <>
      <ul className={cx('mega-menu')}>
        {categories.map((category, index) => (
          <li className={cx('mega-menu__item')} key={index}>
            <Link to={`/category/${category.slug}`} className={cx('mega-menu__link')}>
              {category.name}
            </Link>
            {category?.children?.length > 0 && (
              <>
                <span className={`${cx('mega-menu__icon')} ${cx('icon--sub')}`}>
                  <i className="bx bx-chevron-right"></i>
                </span>
                <SubCategory categories={category?.children} />
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
          <Link to={`/category/${category.slug}`} className={cx('mega-menu__sub-link')}>
            {category.name}
          </Link>

          {category?.children?.length > 0 && (
            <>
              <span className={cx('mega-menu__sub-icon--sub')}>
                <i className="bx bx-chevron-right"></i>
              </span>
              <SubCategory categories={category.children} />
            </>
          )}
        </li>
      ))}
    </ul>
  );
};

const CartItems = ({ items }) => {
  const dispatch = useDispatch();

  const handleRemove = (product) => {
    dispatch(removeItem(product));
  };

  return (
    <div className={cx('header-cart-dropdown')}>
      <div className={cx('header-cart-dropdown__content')}>
        {items.length > 0 ? (
          <>
            <ul className={cx('header-cart-dropdown__list')}>
              {items.map((item, index) => (
                <li key={index} className={cx('header-cart-dropdown__item')}>
                  <div className={cx('header-cart-dropdown__item-image')}>
                    <img src={item.thumbnail} alt="" />
                  </div>
                  <div className={cx('header-cart-dropdown__item-info')}>
                    <Link to={`/product/${item.slug}`} className={cx('header-cart-dropdown__item-name')}>
                      {item.name}
                    </Link>
                    <span className={cx('header-cart-dropdown__item-qty')}>x{item.quantity}</span>
                    <span className={cx('header-cart-dropdown__item-price')}>${item.price}</span>
                    <span onClick={() => handleRemove(item)} className={cx('header-cart-dropdown__item-remove')}>
                      <i className="bx bx-trash"></i>
                    </span>
                  </div>
                </li>
              ))}
            </ul>
            <div className={cx('header-cart-dropdown__action')}>
              <Link to="/cart" className={`${cx('header-cart-dropdown__action-link')} ${cx('action--view-cart')}`}>
                View Cart
              </Link>
              <Link to="/checkout" className={`${cx('header-cart-dropdown__action-link')} ${cx('action--checkout')}`}>
                Checkout
              </Link>
            </div>
          </>
        ) : (
          <>
            <div className={cx('header-cart-dropdown__empty')}>
              <p className={cx('header-cart-dropdown__empty-text')}>Your cart is empty</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default memo(Header);
