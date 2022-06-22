import React, { useState, useRef, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import purify from "dompurify";
import styles from './DetailProduct.module.scss';
import ProductImages from '~/components/ProductImages';
import ModTitle from '~/components/ModTitle';
import { ListCardSlider } from '~/components/ListCard';
import { useClickOutside } from '~/custom-hook';
import { ProductInfoFull } from '~/components/ProductInfo';
import Loading from '~/components/Loading';
import Overlay from '~/components/Overlay';
import { images } from './const';
import products from '~/assets/data/products';

import productsApi from '~/fake-api/products-api';

const categories = [
  {
    path: '/',
    name: 'Gift & Toys',
    icon: 'bx bxs-gift',
    subCategories: [
      {
        path: '/',
        name: 'smart phone',
        subCategories: [
          { path: '/', name: 'samsung' },
          { path: '/', name: 'apple' },
          { path: '/', name: 'oppo' },
          { path: '/', name: 'vivo' },
        ],
      },
      {
        path: '/',
        name: 'laptop',
        subCategories: [
          { path: '/', name: 'dell' },
          { path: '/', name: 'HP' },
          { path: '/', name: 'macbook' },
          { path: '/', name: 'vivo' },
          { path: '/', name: 'dell' },
          { path: '/', name: 'HP' },
          { path: '/', name: 'macbook' },
          { path: '/', name: 'vivo' },
          { path: '/', name: 'dell' },
          { path: '/', name: 'HP' },
          { path: '/', name: 'macbook' },
          { path: '/', name: 'vivo' },
          { path: '/', name: 'dell' },
          { path: '/', name: 'HP' },
          { path: '/', name: 'macbook' },
          { path: '/', name: 'vivo' },
          { path: '/', name: 'dell' },
          { path: '/', name: 'HP' },
          { path: '/', name: 'macbook' },
          { path: '/', name: 'vivo' },
        ],
      },
    ],
  },
  {
    path: '/',
    name: 'Electronics',
    icon: 'bx bxs-bolt',
    subCategories: [
      {
        path: '/',
        name: 'monitor',
      },
      {
        path: '/',
        name: 'camera',
      },
    ],
  },
];

const cx = classNames.bind(styles);
const DetailProduct = (props) => {

  const params = useParams();
  
  const [product, setProduct] = useState({})
  const [loading, setLoading] = useState(false)
  
  const sidebarRef = useRef(null);

  const [activeSidebarMobile, setActiveSidebarMobile] = useState(false);

  useClickOutside(sidebarRef, () => setActiveSidebarMobile(false));

  useEffect(() => {
    setLoading(true)
    const fetchProduct = async () => {
      try {
        const product = await productsApi.getProductBySlug(params.slug);
        setProduct(product);
        setLoading(false)
      }catch (error) {
        setLoading(true)
        throw Error(error)
      }
    }
    fetchProduct();
  }, [params])

  return (
    <div className={cx('wrapper')}>
      {
        loading ? <Loading loading={loading} /> : <>
         <Overlay active={activeSidebarMobile} />
        <div ref={sidebarRef} className={`${cx('sidebar-mobile-wrapper')} ${activeSidebarMobile ? cx('active') : ''}`}>
          <span onClick={() => setActiveSidebarMobile(false)} class={cx('sidebar-mobile__close')}>
            <i class="bx bx-x"></i>
          </span>
          <div class={cx('sidebar-mobile__content')}>
            <Sidebar />
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col col lg-3 md-0 sm-0 xs-0">
              <Sidebar />
            </div>
            <div className="col lg-9 md-12 sm-12 xs-12">
              <div className={cx('content')}>
                <div onClick={() => setActiveSidebarMobile(true)} className={cx('btn-sidebar')}>
                  <i className="bx bx-menu"></i>Sidebar
                </div>
                <div className={cx('content__header')}>
                  <div className="row">
                    <div className="col lg-6 md-12 sm-12 xs-12">
                      <ProductImages images={product?.image_gallery} />
                    </div>
                    <div className="col lg-6 md-12 sm-12 xs-12">
                      <ProductInfoFull product={product} />
                    </div>
                  </div>
                </div>
                <div className={cx('content__body')}>
                  <TabUI product={product} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={cx('related')}>
          <div className="container">
            <ModTitle title="related products" />
            <ListCardSlider list={products} type="product" slidesPerView={6} />
          </div>
        </div> 
        </>
      }
      
    </div>
  );
};

DetailProduct.propTypes = {};

const Sidebar = (props) => {
  return (
    <div className={cx('sidebar')}>
      <h3 className={cx('sidebar__title')}>Categories</h3>
      <ul className={cx('sidebar__list')}>
        {categories.map((item, index) => (
          <SideBarItem key={index} item={item} paddingLeft={2} />
        ))}
      </ul>
    </div>
  );
};

const SideBarItem = ({ item, paddingLeft }) => {
  const [activeSub, setActiveSub] = useState(true);
  const paddingLeftStyle = paddingLeft + 1;
  const handleActiveSub = () => {
    setActiveSub(!activeSub);
  };

  return (
    <li className={`${cx('sidebar__item-wrapper')} ${activeSub ? cx('active') : ''}`}>
      <div className={cx('sidebar__item')}>
        <Link to={'#'} className={cx('sidebar__link')}>
          {item.name}
        </Link>
        {item?.subCategories?.length > 0 && (
          <span onClick={handleActiveSub} className={`${cx('sidebar__icon')} ${activeSub ? cx('active') : ''}`}>
            <i className="bx bx-chevron-right"></i>
          </span>
        )}
      </div>
      {item?.subCategories?.length > 0 && (
        <SubCategoryList active={activeSub} paddingLeft={paddingLeftStyle} categories={item?.subCategories} />
      )}
    </li>
  );
};

const SubCategoryItem = ({ item, paddingLeft }) => {
  const [activeSub, setActiveSub] = useState(false);
  const handleActiveSub = () => {
    setActiveSub(!activeSub);
  };
  const paddingLeftStyle = paddingLeft + 1;

  return (
    <li className={`${cx('sidebar__sub-item-wrapper')} ${activeSub ? cx('active') : ''}`}>
      <div style={{ paddingLeft: `${paddingLeft}rem` }} className={cx('sidebar__sub-item')}>
        <Link to="#" className={cx('sidebar__sub-link')}>
          {item.name}
        </Link>
        {item?.subCategories?.length > 0 && (
          <span onClick={handleActiveSub} className={`${cx('sidebar__sub-icon')} ${activeSub ? cx('active') : ''}`}>
            <i className="bx bx-chevron-right"></i>
          </span>
        )}
      </div>
      {item?.subCategories?.length > 0 && (
        <SubCategoryList paddingLeft={paddingLeftStyle} active={activeSub} categories={item?.subCategories} />
      )}
    </li>
  );
};

const SubCategoryList = ({ categories, active, paddingLeft }) => {
  return (
    <ul className={`${cx('sidebar__sub-list')} ${active ? cx('active') : ''}`}>
      {categories?.map((item, index) => (
        <SubCategoryItem paddingLeft={paddingLeft} key={index} item={item} />
      ))}
    </ul>
  );
};

const TabUI = ({ product }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [expaned, setExpanded] = useState(false);

  return (
    <div className={cx('tab')}>
      <div className="row no-gutters">
        <div className="col lg-3 md-3 sm-4 xs-12">
          <ul className={cx('tab__nav')}>
            <li
              onClick={() => setActiveTab(0)}
              className={`${cx('tab__nav-item')} ${activeTab === 0 ? cx('active') : ''}`}
            >
              Description
            </li>
            <li
              onClick={() => setActiveTab(1)}
              className={`${cx('tab__nav-item')} ${activeTab === 1 ? cx('active') : ''}`}
            >
              Shipping Methods
            </li>
          </ul>
        </div>
        <div className="col lg-9 md-9 sm-8 xs-12">
          <div className={`${cx('tab__content')} ${expaned ? cx('expanded') : ''}`}>
            <div className={`${cx('tab__content-item')} ${activeTab === 0 ? cx('active') : ''}`}>
              <h3 className={cx('tab__content-title')}>Product description</h3>
              <div className="tab__content-desc" dangerouslySetInnerHTML={{ __html: purify.sanitize(product.description) }}></div>
              <div onClick={() => setExpanded(!expaned)} className={cx('tab__content-btn--toggle')}>
                {expaned ? <>
                  show less <i className='bx bx-chevron-up'></i>
                </> : <>
                show more <i className='bx bx-chevron-down'></i>
                </> }
              </div>
            </div>
            <div className={`${cx('tab__content-item')} ${activeTab === 1 ? cx('active') : ''}`}>mahvsjhdafsdasd</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailProduct;
