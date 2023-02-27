import styles from './Slider.module.scss';
import './Slider.css';
import classNames from 'classnames/bind';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import MenuNavBar from './MenuNavBar/MenuNavBar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Card } from 'react-bootstrap';
const cx = classNames.bind(styles);
function SliderComponent() {
    const settings = {
        dots: true,
        lazyLoad: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 2,
        autoPlay: false,
    };
    const imageadvertisement = [
        {
            src: 'https://phongvu.vn/cong-nghe/wp-content/uploads/sites/2/2020/11/01A-VN-Gaming-Chair-Sale-Nov2020-FB-Post-1920x1080px.jpg',
        },
        {
            src: 'https://theme.hstatic.net/200000306751/1000695789/14/slideShow_f1_2.png?v=2835',
        },
        {
            src: 'https://theme.hstatic.net/200000306751/1000695789/14/slideShow_f1_1.png?v=2835',
        },
    ];
    const sliderRight = [
        {
            src: 'https://theme.hstatic.net/200000306751/1000695789/14/banner_right_2.png?v=2835',
        },
        {
            src: 'https://www.notebookcheck.net/fileadmin/Notebooks/MSI/special/BTS_2022/US_BTS_1200x628.jpg',
        },
    ];
    const banner = [
        {
            src: 'https://theme.hstatic.net/200000306751/1000695789/14/home-four-banner-image-item-1.png?v=2835',
        },
        {
            src: 'https://theme.hstatic.net/200000306751/1000695789/14/home-four-banner-image-item-2.png?v=2835',
        },
        {
            src: 'https://theme.hstatic.net/200000306751/1000695789/14/home-four-banner-image-item-3.png?v=2835',
        },
        {
            src: 'https://theme.hstatic.net/200000306751/1000695789/14/home-four-banner-image-item-4.png?v=2835',
        },
    ];
    return (
        <>
            <div className={cx('wrapperSlider')}>
                <Slider {...settings}>
                    {imageadvertisement.map((item, index) => {
                        return (
                            <div className={cx('wrapperSlider__Item')} key={index}>
                                <img src={item.src} />
                            </div>
                        );
                    })}
                </Slider>
                <MenuNavBar />
                <div className={cx('Slider__right')}>
                    {sliderRight.map((item, index) => {
                        return (
                            <a href="" key={index}>
                                <img src={item.src} />
                            </a>
                        );
                    })}
                </div>
            </div>
            <div className={cx('Slider__Banner')}>
                <div className={cx('Slider__Banner__Container')}>
                    <Row>
                        {banner.map((item, index) => {
                            return (
                                <Col key={index}>
                                    <a href="">
                                        <img src={item.src} />
                                    </a>
                                </Col>
                            );
                        })}
                    </Row>
                </div>
            </div>
        </>
    );
}

export default SliderComponent;
