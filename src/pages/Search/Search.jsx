import React, { useState, useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import { useSearchParams, Link } from 'react-router-dom';
import productsApi from '~/fake-api/products-api';
import { useRef } from 'react';
import Pagination from '~/components/Pagination';
import { ListCardGrid } from '~/components/ListCard';
import Loading from '~/components/Loading';
const cx = classNames.bind(styles);

const Search = (props) => {
  const [products, setProducts] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = useState(false);
  const [filters, setFilters] = useState({
    page: 1,
    limit: 12,
  });
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 12,
    total: 0,
  });

  const loadingTimer = useRef();

  useLayoutEffect(() => {
    const fetchSearchProducts = async () => {
      setLoading(true);
      try {
        const res = await productsApi.findProductByName({
          ...filters,
          q: searchParams.get('q'),
        });

        loadingTimer.current = setTimeout(() => {
          setProducts(res.products);
          setPagination(res.pagination);
          setLoading(false);
        }, 1000);
      } catch (error) {
        setLoading(true);
        throw Error(error);
      }
    };
    if (searchParams.get('q') !== undefined) {
      fetchSearchProducts();
    }
    return () => clearTimeout(loadingTimer.current);
  }, [searchParams, filters]);

  const handlePageChange = (page) => {
    setFilters({
      ...filters,
      page: page,
    });
  };

  return (
    <div className={cx('wrapper')}>
      <div className="container">
        <h1 className={cx('heading')}>Search</h1>
        <div className={cx('content')}>
          <div className={cx('results')}>
            <span>Search with keyword: {`"${searchParams.get('q')}"`}</span>
          </div>
          <section className={cx('products')}>
            {loading ? (
              <Loading loading={loading} />
            ) : (
              <>{products.length <= 0 ? 'Not products' : <ListCardGrid type="product" list={products} grid={6} />}</>
            )}
          </section>
          {products.length > 0 && (
            <div className={cx('pagination-wrapper')}>
              <Pagination pagination={pagination} onPageChange={(page) => handlePageChange(page)} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

Search.propTypes = {};

export default Search;
