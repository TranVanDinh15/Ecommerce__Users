import styles from './MenuNavBar.module.scss';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { categoryAction } from '../../../actions';
import 'tippy.js/dist/tippy.css';
import './MenuNavBar.css';
import 'react-tippy/dist/tippy.css';
import { Card, Spinner } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
const cx = classNames.bind(styles);
function MenuNavBar() {
    // const { _id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const categoryList = useSelector((state) => state.category);
    const [isCategoryList, setIscategoryList] = useState('');
    console.log(categoryList);
    // console.log(_id);
    useEffect(() => {
        dispatch(categoryAction());
    }, []);
    const renderCategories =
        categoryList.category && categoryList.loading == false ? (
            categoryList.category.map((item, index) => {
                return (
                    <li
                        key={index}
                        onMouseOver={(event) => {
                            setIscategoryList(item.children);
                        }}
                    >
                        <span>
                            <img src={process.env.REACT_APP_SERVER_URL + item.categoryImage} />
                            {item.name}
                        </span>
                    </li>
                );
            })
        ) : (
            <Spinner animation="border" variant="dark" />
        );
    const renderCategoryList = isCategoryList ? (
        isCategoryList.map((item, index) => {
            return (
                <div className={cx('category__list')} key={index}>
                    <span>{item.name}</span>
                    <ul>
                        {item.children.map((item, index) => {
                            return (
                                <li
                                    key={index}
                                    onClick={(event) => {
                                        navigate(`/Product/${item.slug}/${item._id}`);
                                    }}
                                >
                                    {item.name}
                                </li>
                            );
                        })}
                    </ul>
                </div>
            );
        })
    ) : (
        <Spinner animation="border" variant="dark" />
    );
    return (
        <div className={cx('MenuNavBarWrapper__Lager')}>
            <div className={cx('MenuNavBarWrapper')}>
                <ul className={'MenuNavBarWrapper__list'}>
                    {renderCategories}

                    <Card body className="cart__navBar">
                        <div className={cx('wrapper__category')}>{renderCategoryList}</div>
                    </Card>
                </ul>
            </div>
        </div>
    );
}

export default MenuNavBar;
