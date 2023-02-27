import styles from './Product.module.scss';
import classNames from 'classnames/bind';
import Card from 'react-bootstrap/Card';
import Header from '../Header/Header';
import { Button, Spinner } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBasketShopping, faCodeCompare, faGear, faSearch } from '@fortawesome/free-solid-svg-icons';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getProductAction, updateProductAction } from '../../actions/action.product';
import { useDispatch, useSelector } from 'react-redux';
import Tippy from '@tippyjs/react';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import CardCol from '../../UI/card/card';
const cx = classNames.bind(styles);
function Product() {
    const sortArray = [
        {
            id: 1,
            name: 'Mặc định',
        },
        {
            id: 2,
            name: 'Theo Giá',
        },
        {
            id: 3,
            name: 'Tên: A - Z',
        },
        {
            id: 4,
            name: 'Tên: Z - A',
        },
        {
            id: 5,
            name: 'Cũ nhất',
        },
        {
            id: 6,
            name: 'Mới nhất',
        },
        {
            id: 7,
            name: 'Bán chạy nhất',
        },
    ];
    const { _id } = useParams();
    const dispatch = useDispatch();
    const product = useSelector((state) => state.product);
    const [changerImage, setChangerImage] = useState('');
    const [isSetting, setIsSetting] = useState(false);
    console.log(product);
    console.log(_id);
    const renderListCol =
        product.product && product.loading == false ? (
            <CardCol product={product.product} />
        ) : (
            <Spinner animation="border" variant="dark" />
        );
    const renderProductByPrice =
        product.productByPrice && product.loading == false
            ? product.productByPrice.map((item, index) => {
                  return (
                      <div
                          className={cx('listPrice')}
                          key={index}
                          onClick={() => {
                              dispatch(updateProductAction(item.product));
                              console.log(item.product);
                          }}
                      >
                          <Button className={cx('buttonProduct')} variant="primary">
                              {item.name}
                          </Button>
                      </div>
                  );
              })
            : '';

    useEffect(() => {
        dispatch(getProductAction(_id));
    }, []);

    return (
        <div className={cx('wrapperProduct')}>
            <Header />
            <div className={cx('Product__Item')}>
                <div className={cx('Product__Item__box')}>
                    <div className={cx('Product__Item__box__title')}>
                        <span>SẮP XẾP</span>
                    </div>
                    <Card body className={cx('wrapper__cart')}>
                        <div className={cx('wrapper__cart__Item')}>
                            <div className={cx('wrapper__cart__SortHeading')}>
                                <span>Sắp xếp</span>
                            </div>
                            {sortArray.map((item, index) => {
                                return item.id == 2 ? (
                                    <Tippy
                                        content={renderProductByPrice}
                                        arrow={false}
                                        interactive={true}
                                        placement={'bottom-start'}
                                    >
                                        <Button className={cx('buttonProduct')} variant="secondary" key={index}>
                                            {item.name}
                                        </Button>
                                    </Tippy>
                                ) : (
                                    <Button
                                        className={cx('buttonProduct')}
                                        variant="secondary"
                                        key={index}
                                        onClick={(event) => {
                                            if (item.id == 1) {
                                                dispatch(getProductAction(_id));
                                            }
                                        }}
                                    >
                                        {item.name}
                                    </Button>
                                );
                            })}
                        </div>
                    </Card>
                </div>
                <div className={cx('Product__Item__box__title')}>
                    <span>SẢN PHẨM</span>
                </div>
                <div className={cx('Product__Container')}>{renderListCol}</div>
            </div>
        </div>
    );
}

export default Product;
