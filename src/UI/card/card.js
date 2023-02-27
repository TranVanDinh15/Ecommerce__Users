import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faBasketShopping, faCodeCompare, faGear, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import classNames from 'classnames/bind';
import styles from './card.module.scss';
const cx = classNames.bind(styles);
function CardCol(props) {
    const [changerImage, setChangerImage] = useState('');
    const [isSetting, setIsSetting] = useState(false);
    return (
        <>
            {props.product.map((item, index) => {
                return (
                    <Card
                        style={{ width: '18rem' }}
                        className={cx('cardProductShow')}
                        key={index}
                        onMouseOver={() => {
                            console.log(item);
                            setChangerImage(item._id);
                        }}
                        onMouseOut={() => {
                            setChangerImage('');
                        }}
                    >
                        <Card.Img
                            variant="top"
                            src={
                                changerImage == item._id && item.productPicture.length > 0
                                    ? process.env.REACT_APP_SERVER_URL + item.productPicture[1].img
                                    : process.env.REACT_APP_SERVER_URL + item.productPicture[0].img
                            }
                        />
                        <Card.Body>
                            <Card.Text>Phân loại: {item.category.name}</Card.Text>
                            <Card.Title className={cx('cardProductShow__name')}>{item.name}</Card.Title>
                            <Card.Text>
                                <div className={cx('PriceBox')}>
                                    <span>Giá: {item.price}</span>
                                </div>
                                <div className={cx('PriceBox')}>
                                    <span>Khuyến mãi: 229310</span>
                                </div>
                            </Card.Text>
                            <div className={cx('footerBtn')}>
                                <Button variant="primary">
                                    <FontAwesomeIcon icon={faBasketShopping} />
                                    Thêm vào giỏ hàng
                                </Button>
                                <Button
                                    className={cx('footerBtn__setting')}
                                    variant="primary"
                                    onMouseOver={() => {
                                        if (item._id == changerImage) {
                                            setIsSetting(true);
                                        }
                                    }}
                                    onMouseOut={() => {
                                        if (item._id == changerImage) {
                                            setIsSetting(false);
                                        }
                                    }}
                                >
                                    {isSetting && item._id == changerImage ? (
                                        <div className={cx('footerBtn__setting__btn')}>
                                            <Button className={cx('footerBtn__setting')} variant="primary">
                                                <FontAwesomeIcon icon={faHeart} />
                                            </Button>
                                            <Button className={cx('footerBtn__setting')} variant="primary">
                                                <FontAwesomeIcon icon={faSearch} />
                                            </Button>
                                            <Button className={cx('footerBtn__setting')} variant="primary">
                                                <FontAwesomeIcon icon={faCodeCompare} />
                                            </Button>
                                        </div>
                                    ) : (
                                        ''
                                    )}
                                    <FontAwesomeIcon icon={faGear} />
                                </Button>
                            </div>
                        </Card.Body>
                    </Card>
                );
            })}
        </>
    );
}
export default CardCol;
