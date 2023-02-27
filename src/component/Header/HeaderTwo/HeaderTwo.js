import styles from './HeaderTwo.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSearch, faXmark } from '@fortawesome/free-solid-svg-icons';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
const cx = classNames.bind(styles);
function HeaderTwo() {
    const deviceArr = [
        {
            name: 'Android',
        },
        {
            name: 'Airpod',
        },
        {
            name: 'Ios',
        },
        {
            name: 'Gear',
        },
        {
            name: 'Msi',
        },
        {
            name: 'Lenovo',
        },
        {
            name: 'Dell',
        },
        {
            name: 'Asuz',
        },
        {
            name: 'Hp',
        },
        {
            name: 'Macbook',
        },
    ];
    const menuRight = [
        {
            id: 1,
            name: 'So sánh',
            icon: 'https://theme.hstatic.net/200000306751/1000695789/14/compare.png?v=2835',
            count: true,
        },
        {
            id: 2,
            name: 'Yêu thích',
            icon: 'https://theme.hstatic.net/200000306751/1000695789/14/wishlist.png?v=2835',
            count: true,
        },
        {
            id: 3,
            name: 'Tài khoản',
            icon: 'https://theme.hstatic.net/200000306751/1000695789/14/account.png?v=2835',
        },
        {
            id: 4,
            name: 'Giỏ hàng',
            icon: 'https://theme.hstatic.net/200000306751/1000695789/14/cart-new.png?v=2835',
            count: true,
        },
    ];
    const menuBottom = [
        {
            name: 'Trang chủ',
        },
        {
            name: 'Giới thiệu',
        },
        {
            name: 'Blog',
        },
        {
            name: 'Kinh nghiệm mua sắm',
        },
        {
            name: 'Chính sách-Hướng dẫn',
        },
        {
            name: 'Liên Hệ',
        },
    ];
    const [isSignUp, setIsSignUp] = useState(false);
    const [isSignIn, setIsSignIn] = useState(false);
    const [isChangePassword, setIsChangePassword] = useState(false);
    const [isForm, setIsForm] = useState(false);
    return (
        <div className={cx('wrapperHeaderTwo')}>
            <div className={cx('wrapperHeaderTwo__Container')}>
                <div className={cx('wrapperHeaderTwo__Container__Top')}>
                    <div className={cx('wrapperHeaderTwo__Container__Top__Logo')}>
                        <a href="/">
                            <img src="https://raw.githubusercontent.com/TranVanDinh15/ImageProject/main/UploadImageProject/image/COMPUTER.png" />
                        </a>
                    </div>
                    <div className={cx('wrapperHeaderTwo__Container__Top__Search')}>
                        <div className={cx('wrapperHeaderTwo__Container__Top__Search__Top')}>
                            <div className={cx('wrapperHeaderTwo__Container__Top__Search__Top__Input')}>
                                <input type={'text'} placeholder="Tìm kiếm sản phẩm" />
                            </div>
                            <div className={cx('wrapperHeaderTwo__Container__Top__Search__Top__Icon')}>
                                <FontAwesomeIcon icon={faSearch} />
                            </div>
                        </div>
                        <div className={cx('wrapperHeaderTwo__Container__Top__Device')}>
                            <ul>
                                {deviceArr.map((item, index) => {
                                    return (
                                        <li key={index}>
                                            <a href="">{item.name}</a>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                    <div className={cx('wrapperHeaderTwo__Container__Top__Right')}>
                        {menuRight.map((item, index) => {
                            return (
                                <div
                                    className={cx('wrapperHeaderTwo__Container__Top__Right__Item')}
                                    key={index}
                                    onClick={() => {
                                        if (item.id == 3) {
                                            setIsForm(true);
                                            setIsSignIn(true);
                                        }
                                    }}
                                >
                                    <img src={item.icon} />
                                    <span className={cx('wrapperHeaderTwo__Container__Top__Right__Item__name')}>
                                        {item.name}
                                    </span>
                                    {item.count ? (
                                        <span className={cx('wrapperHeaderTwo__Container__Top__Right__Item__count')}>
                                            0
                                        </span>
                                    ) : (
                                        ''
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className={cx('wrapperHeaderTwo__Container__Bottom')}>
                    <div className={cx('wrapperHeaderTwo__Container__Bottom__Category')}>
                        <FontAwesomeIcon icon={faBars} />
                        <span>Danh mục sản phẩm</span>
                    </div>
                    <div className={cx('wrapperHeaderTwo__Container__Bottom__MenuBottom')}>
                        <ul>
                            {menuBottom.map((item, index) => {
                                return (
                                    <li key={index}>
                                        <a href="">{item.name}</a>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </div>
            {isForm ? (
                <div className={cx('wrapperHeaderTwo__Login')}>
                    <div className={cx('wrapperHeaderTwo__Login__Item')}>
                        <div className={cx('Modal_content')}>
                            <div className={cx('Modal_body')}>
                                <div className={cx('Row')}>
                                    <div className={cx('Col_lg_3')}>
                                        <div className={cx('Col_lg_3_Logo')}>
                                            <a href="">
                                                <img src="https://raw.githubusercontent.com/TranVanDinh15/ImageProject/main/UploadImageProject/image/COMPUTER.png" />
                                            </a>
                                        </div>
                                        <div className={cx('flex_collum')}>
                                            <span
                                                className={cx(isSignIn ? 'action' : '')}
                                                onClick={() => {
                                                    setIsSignUp(false);
                                                    setIsChangePassword(false);
                                                    setIsSignIn(true);
                                                }}
                                            >
                                                Đăng nhập
                                            </span>
                                            <span
                                                className={cx(isChangePassword ? 'action' : '')}
                                                onClick={() => {
                                                    setIsSignUp(false);
                                                    setIsChangePassword(true);
                                                    setIsSignIn(false);
                                                }}
                                            >
                                                Quên mật khẩu
                                            </span>
                                            <span
                                                className={cx(isSignUp ? 'action' : '')}
                                                onClick={() => {
                                                    setIsSignUp(true);
                                                    setIsChangePassword(false);
                                                    setIsSignIn(false);
                                                }}
                                            >
                                                Đăng ký
                                            </span>
                                        </div>
                                    </div>
                                    {isSignIn ? (
                                        <div className={cx('Col_lg_6')}>
                                            <div className={cx('Col_lg_6__Heding')}>
                                                <h5>Đăng nhập</h5>
                                            </div>
                                            <div className={cx('Col_lg_6__form')}>
                                                <label for="Email">
                                                    Email
                                                    <input type="text" id="Email" />
                                                </label>
                                                <label for="Password">
                                                    Password
                                                    <input type="text" id="Password" />
                                                </label>
                                            </div>
                                            <div className={cx('form__Btn')}>
                                                <button type="submit">Đăng nhập</button>
                                            </div>
                                        </div>
                                    ) : (
                                        ''
                                    )}
                                    {isChangePassword ? (
                                        <div className={cx('Col_lg_6')}>
                                            <div className={cx('Col_lg_6__Heding')}>
                                                <h5>Quên mật khẩu</h5>
                                            </div>
                                            <div className={cx('Col_lg_6__form')}>
                                                <label for="Email">
                                                    Email
                                                    <input type="text" id="Email" />
                                                </label>
                                            </div>
                                            <div className={cx('form__Btn')}>
                                                <button type="submit">Đăng nhập</button>
                                            </div>
                                        </div>
                                    ) : (
                                        ''
                                    )}
                                    {isSignUp ? (
                                        <div className={cx('Col_lg_6')}>
                                            <div className={cx('Col_lg_6__Heding')}>
                                                <h5>Đăng ký</h5>
                                            </div>
                                            <div className={cx('Col_lg_6__form')}>
                                                <label for="FistName">
                                                    Họ của bạn
                                                    <input type="text" id="FistName" />
                                                </label>
                                            </div>
                                            <div className={cx('Col_lg_6__form')}>
                                                <label for="LastName">
                                                    Tên của bạn
                                                    <input type="text" id="LastName" />
                                                </label>
                                            </div>
                                            <div className={cx('Col_lg_6__form')}>
                                                <label for="Phone">
                                                    Số điện thoại
                                                    <input type="text" id="Phone" />
                                                </label>
                                            </div>
                                            <div className={cx('Col_lg_6__form')}>
                                                <label for="Phone">Giới tính</label>
                                            </div>
                                            <Form className={cx('form__Gender')}>
                                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                    <Form.Label>Nữ</Form.Label>
                                                    <Form.Check type="radio" />
                                                </Form.Group>
                                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                    <Form.Label>Nam</Form.Label>
                                                    <Form.Check type="radio" />
                                                </Form.Group>
                                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                    <Form.Label>Khác</Form.Label>
                                                    <Form.Check type="radio" />
                                                </Form.Group>
                                            </Form>
                                            <div className={cx('Col_lg_6__form')}>
                                                <label for="Email">
                                                    Email
                                                    <input type="text" id="Email" />
                                                </label>
                                            </div>
                                            <div className={cx('Col_lg_6__form')}>
                                                <label for="Password">
                                                    Mật khẩu
                                                    <input type="text" id="Password" />
                                                </label>
                                            </div>
                                            <div className={cx('form__Btn')}>
                                                <button type="submit">Đăng nhập</button>
                                            </div>
                                        </div>
                                    ) : (
                                        ''
                                    )}
                                </div>
                            </div>
                            <div
                                className={cx('xmark')}
                                onClick={() => {
                                    setIsForm(false);
                                }}
                            >
                                <FontAwesomeIcon icon={faXmark} />
                            </div>
                        </div>
                        <div
                            className={cx('before')}
                            onClick={() => {
                                setIsForm(false);
                            }}
                        ></div>
                    </div>
                </div>
            ) : (
                ''
            )}
        </div>
    );
}

export default HeaderTwo;
