import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './DetailCategory.module.scss';
import ModTitle from '~/components/ModTitle';
import { ListCardGrid } from '~/components/ListCard';
import SelectDropdown from '~/components/SelectDropdown';
import Pagination from '~/components/Pagination';
import { optionsColor, optionsSize, optionsSort, optionsShowItem } from './const';
import Overlay from '~/components/Overlay';
import Loading from '~/components/Loading';
import { useClickOutside } from '~/custom-hook';
import { useParams } from 'react-router-dom';
import productsApi from '~/fake-api/products-api';
import categoriesApi from '~/fake-api/categories-api';

const cx = classNames.bind(styles);
const Category = (props) => {
  const [numberGrid, setNumberGrid] = useState(4);
  const [openSidebar, setOpenSidebar] = useState(false);
  const [loadingPage, setLoadingPage] = useState(false);
  const [category, setCategory] = useState();
  const [products, setProducts] = useState([]);
  const params = useParams();
  const sidebarRef = useRef(null);

  const handleShowGrid = (number) => {
    setNumberGrid(number);
  };

  useClickOutside(sidebarRef, () => setOpenSidebar(false));
  console.log(params.slug)
  useEffect(() => {
    setLoadingPage(true);
    const fetchProductAndCate = async () => {
      try {
        const resCate = await categoriesApi.getCategoryBySlug(params.slug) 
        const productByCate = await productsApi.findProductByCategory(resCate.slug)
        
        setCategory(resCate);
        setProducts(productByCate.products);
        setLoadingPage(false);
      } catch (error) {
        throw Error(error);
      }
    };
    fetchProductAndCate();
  }, [params]);

  return (
    <div className={cx('wrapper')}>
      {loadingPage ? (
        <Loading loading={loadingPage} />
      ) : (
        <>
          <Overlay active={openSidebar} />
          <div ref={sidebarRef} className={`${cx('sidebar-mobile')} ${openSidebar ? cx('active') : ''}`}>
            <span onClick={() => setOpenSidebar(false)} class={cx('sidebar-mobile__close')}>
              <i class="bx bx-x"></i>
            </span>

            <Sidebar />
          </div>
          <div className="container">
            <div className="row">
              <div className="col lg-3 md-0 sm-0 xs-0">
                <Sidebar />
              </div>
              <div className="col lg-9 md-12 sm-12 xs-12">
                <div className={cx('content')}>
                  <section>
                    <ModTitle title={category?.name} />
                    <div className={cx('filter-top-panel')}>
                      <div className={cx('filter-top-panel__left')}>
                        <div onClick={() => setOpenSidebar(true)} className={cx('filter-top-panel__btn-show-sidebar')}>
                          <i className="bx bx-menu"></i>
                          Sidebar
                        </div>
                        <div className={cx('filter-top-panel__grid')}>
                          <span className={cx('filter-top-panel__grid-text')}>Grid View:</span>
                          <div className={cx('filter-top-panel__grid-list')}>
                            {[2, 3, 4, 5].map((item, index) => (
                              <div
                                key={index}
                                onClick={() => handleShowGrid(item)}
                                className={`${cx('filter-top-panel__grid-item')} ${
                                  numberGrid === item ? cx('active') : ''
                                }`}
                              >
                                <span>{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className={cx('filter-top-panel__right')}>
                        <div className={cx('filter-top-panel__sort')}>
                          <span className={cx('filter-top-panel__sort-text')}>Sort By:</span>
                          <div className={cx('filter-top-panel__dropdown')}>
                            <SelectDropdown defaultValue="default" options={optionsSort.attributes} type="sort" />
                          </div>
                        </div>
                        <div className={cx('filter-top-panel__show-item')}>
                          <span className={cx('filter-top-panel__show-item-text')}>show:</span>
                          <div className={cx('filter-top-panel__dropdown')}>
                            <SelectDropdown
                              defaultValue="default"
                              options={optionsShowItem.attributes}
                              type="show-item"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={cx('content__product')}>
                      <ListCardGrid type="product" list={products} grid={numberGrid} />

                      <div className={cx('pagination-wrapper')}>
                        <Pagination />
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

Category.propTypes = {};

const Sidebar = () => {
  const [priceFilter, setPriceFilter] = useState({
    min: 1000,
    max: 7500,
  });

  const [checkedColor, setCheckedColor] = useState([]);
  const [checkedSize, setCheckedSize] = useState([]);

  const minRangeRef = useRef(null);
  const maxRangeRef = useRef(null);
  const progressRef = useRef(null);

  const handleCheckedColor = (value) => {
    setCheckedColor((prev) => {
      const isChecked = checkedColor.includes(value);
      if (isChecked) {
        return checkedColor.filter((item) => item !== value);
      } else {
        return [...prev, value];
      }
    });
  };
  const handleCheckedSize = (value) => {
    setCheckedSize((prev) => {
      const isChecked = checkedSize.includes(value);
      if (isChecked) {
        return checkedSize.filter((item) => item !== value);
      } else {
        return [...prev, value];
      }
    });
  };

  const handleTypingFilterPrice = (e) => {
    if (e.target.className === 'input-price-min') {
      setPriceFilter({
        ...priceFilter,
        min: e.target.value.trim(),
      });
    } else {
      setPriceFilter({
        ...priceFilter,
        max: e.target.value.trim(),
      });
    }
  };

  const handleRangeInput = (e) => {
    const priceGap = 1000;
    let minValue = +minRangeRef.current.value;
    let maxValue = +maxRangeRef.current.value;

    if (maxValue - minValue < priceGap) {
      if (e.target.className === 'range-min') {
        setPriceFilter({
          ...priceFilter,
          min: maxValue - priceGap,
        });
      } else {
        setPriceFilter({
          ...priceFilter,
          max: minValue + priceGap,
        });
      }
    } else {
      setPriceFilter({
        min: minValue,
        max: maxValue,
      });
    }
  };
  useEffect(() => {
    progressRef.current.style.left = (priceFilter.min / maxRangeRef.current.max) * 100 + '%';
    progressRef.current.style.right = 100 - (priceFilter.max / minRangeRef.current.max) * 100 + '%';
  }, [priceFilter]);

  return (
    <div className={cx('filter-wrapper')}>
      <h3 className={cx('filter__heading')}>Shop by</h3>
      <div className={cx('filter__list')}>
        <SidebarItem option={'search'}>
          <div className={cx('filter__item-opt')}>
            <div className={cx('filter__item-opt__search')}>
              <input type={'text'} placeholder="search" />
              <button className={cx('search-btn')}>
                <i className="bx bx-search"></i>
              </button>
            </div>
          </div>
        </SidebarItem>
        <SidebarItem option={'color'}>
          {optionsColor?.values?.map((opt, index) => (
            <div key={index} className={cx('filter__item-opt')}>
              <div className={cx('filter__item-opt__checkbox')}>
                <input
                  type="checkbox"
                  checked={checkedColor.includes(opt.value)}
                  onChange={() => handleCheckedColor(opt.value)}
                />
                <span className={cx('checkmark')}>
                  <i className="bx bx-check"></i>
                </span>
                <label>{opt.description}</label>
              </div>
            </div>
          ))}
        </SidebarItem>
        <SidebarItem option={'size'}>
          {optionsSize?.values?.map((opt, index) => (
            <div key={index} className={cx('filter__item-opt')}>
              <div className={cx('filter__item-opt__checkbox')}>
                <input
                  type="checkbox"
                  checked={checkedSize.includes(opt.value)}
                  onChange={() => handleCheckedSize(opt.value)}
                />
                <span className={cx('checkmark')}>
                  <i className="bx bx-check"></i>
                </span>
                <label>{opt.description}</label>
              </div>
            </div>
          ))}
        </SidebarItem>

        <SidebarItem option={'price'}>
          <div className={cx('filter__item-opt')}>
            <div className={cx('filter__item-opt__price')}>
              <div className={cx('filter__item-opt__price-input')}>
                <div className={cx('filter__item-opt__price-field')}>
                  <input
                    onChange={handleTypingFilterPrice}
                    type={'number'}
                    className="input-price-min"
                    value={priceFilter.min}
                  />
                  <span>$</span>
                </div>
                <div className={cx('filter__item-opt__price-field')}>
                  <input
                    onChange={handleTypingFilterPrice}
                    type={'number'}
                    className="input-price-max"
                    value={priceFilter.max}
                  />
                  <span>$</span>
                </div>
              </div>
              <div className={cx('filter__item-opt__price-slider')}>
                <div ref={progressRef} className={cx('filter__item-opt__price-progress')}></div>
              </div>
              <div className={cx('filter__item-opt__price-range')}>
                <input
                  ref={minRangeRef}
                  onChange={handleRangeInput}
                  type={'range'}
                  className={cx('range-min')}
                  min="0"
                  max="10000"
                  value={priceFilter.min || 0}
                  step="500"
                />
                <input
                  ref={maxRangeRef}
                  onChange={handleRangeInput}
                  type={'range'}
                  className={cx('range-max')}
                  min="0"
                  max="10000"
                  value={priceFilter.max}
                  step="500"
                />
              </div>
            </div>
          </div>
        </SidebarItem>
      </div>
      <div className={cx('clear-filter')}>
        <button className={cx('clear-filter__btn')}>reset all</button>
      </div>
    </div>
  );
};

const SidebarItem = (props) => {
  const [active, setActive] = useState(true);

  const handleActive = () => {
    setActive(!active);
  };

  return (
    <div className={`${cx('filter__item')} ${active ? cx('active') : ''}`}>
      <div className={cx('filter__item-heading')} onClick={handleActive}>
        <span className={cx('filter__item-text')}>{props.option}</span>
        <span className={`${cx('filter__item-icon')} ${active ? cx('active') : ''}`}>
          <i className="bx bx-chevron-right"></i>
        </span>
      </div>
      <div className={cx('filter__item-list-opt')}>{props.children}</div>
    </div>
  );
};

export default Category;
