import React, { useState, useEffect, useRef } from 'react';
import purify from 'dompurify';
import HeroSlider from '~/components/HeroSlider';
import { ListCardGrid, ListCardSlider } from '~/components/ListCard';
import ModTitle from '~/components/ModTitle/ModTitle';
import Banner from '~/components/Banner/Banner';
import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import { policy } from './const';
import Loading from '~/components/Loading/Loading';
import banner1 from '~/assets/images/banner1.jpg';
import banner2 from '~/assets/images/banner2.jpg';
import productsApi from '~/fake-api/products-api';
import categoriesApi from '~/fake-api/categories-api';

const cx = classNames.bind(styles);

const Home = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filters, setFilters] = useState({
    page: 1,
    limit: 12,
  });

  const loadingTimer = useRef();

  useEffect(() => {
    const fetchProductsAndCate = async () => {
      setLoading(true);
      const [resProducts, resCate] = await Promise.all([
        productsApi.getAllProducts(filters),
        categoriesApi.getListCategories(),
      ]);
      loadingTimer.current = setTimeout(() => {
        setProducts(resProducts.products);
        setCategories(resCate.categories);
        setLoading(false);
      }, 1000);
    };
    fetchProductsAndCate();
    return () => clearTimeout(loadingTimer.current);
  }, []);

  return (
    <div className={cx('wrapper')}>
      {loading ? (
        <Loading loading={loading} />
      ) : (
        <>
          <HeroSlider />
          <section className={cx('policy')}>
            <div className="container">
              <div className={cx('policy__content')}>
                {policy.map((item, index) => (
                  <div className={cx('policy__item')} key={index}>
                    <div
                      className={cx('policy__item-icon')}
                      dangerouslySetInnerHTML={{ __html: purify.sanitize(item.icon) }}
                    ></div>
                    <div className={cx('policy__item-text')}>
                      <h3 className={cx('policy__item-title')}>{item.title}</h3>
                      <span className={cx('policy__item-desc')}>{item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
          <section className={cx('categories')}>
            <div className="container">
              <ModTitle title="shop by categories" />
              <ListCardSlider type="category" list={categories} slidesPerView={6} />
            </div>
          </section>

          <section className={cx('banner')}>
            <div className="container">
              <Banner image={banner1} />
            </div>
          </section>

          <section className={cx('best-seller')}>
            <div className="container">
              <ModTitle title="best seller" />
              <ListCardGrid type="product" list={products} grid={6} />
            </div>
          </section>

          <section className={cx('banner')}>
            <div className="container">
              <Banner image={banner2} link={'/abc'} />
            </div>
          </section>

          <section className={cx('trending')}>
            <div className="container">
              <ModTitle title="trending items" />
              <ListCardSlider type="product" list={products} slidesPerView={6} />
            </div>
          </section>
        </>
      )}
    </div>
  );
};

export default Home;
