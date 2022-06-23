import React, { useState, useEffect } from 'react';
import purify from 'dompurify';
import HeroSlider from '~/components/HeroSlider';
import { ListCardGrid, ListCardSlider } from '~/components/ListCard';
import ModTitle from '~/components/ModTitle';
import Banner from '~/components/Banner';
import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import { policy } from './const';

import banner1 from '~/assets/images/banner1.jpg';
import banner2 from '~/assets/images/banner2.jpg';
import productsApi from '~/fake-api/products-api';
import categoriesApi from '~/fake-api/categories-api';

const cx = classNames.bind(styles);

const Home = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    page: 1,
    limit: 12,
  });
  useEffect(() => {
    const fetchProducts = async () => {
      const { products } = await productsApi.getAllProducts(filters);
      setProducts(products);
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    const fetchCategories = async () => {
      const categories = await categoriesApi.getListCategories();
      setCategories(categories);
      setLoading(false);
    };
    fetchCategories();
  }, []);

  return (
    <div>
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
          <ListCardSlider type="category" list={categories} slidesPerView={6} loading={loading} />
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
    </div>
  );
};

export default Home;
