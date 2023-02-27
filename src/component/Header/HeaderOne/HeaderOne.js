import styles from './HeaderOne.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
function HeaderOne() {
    const menuArr = [
        {
            name: 'Trang chủ',
            linkIcon: 'https://theme.hstatic.net/200000306751/1000695789/14/header-top-image-item-1.png?v=2835',
        },
        {
            name: 'Hotline',
            linkIcon: 'https://theme.hstatic.net/200000306751/1000695789/14/header-top-image-item-2.png?v=2835',
        },
        {
            name: 'Hotline2',
            linkIcon: 'https://theme.hstatic.net/200000306751/1000695789/14/header-top-image-item-2.png?v=2835',
        },
        {
            name: 'Hỗ trợ kĩ thuật',
            linkIcon: 'https://theme.hstatic.net/200000306751/1000695789/14/header-top-image-item-4.png?v=2835',
        },
        {
            name: 'Khuyến mãi',
            linkIcon: 'https://theme.hstatic.net/200000306751/1000695789/14/header-top-image-item-5.png?v=2835',
        },
    ];
    return (
        <div className={cx('wrapperHeaderOne')}>
            <div className={cx('wrapperHeaderOne__Box')}>
                <div className={cx('wrapperHeaderOne__Box__Left')}>
                    <marquee>
                        F1GENZ Computer xin kính chào quý khách. Chúc quý khách có một ngày thật là vui vẻ.!
                    </marquee>
                </div>
                <div className={cx('wrapperHeaderOne__Box__right')}>
                    {menuArr.map((item, index) => {
                        return (
                            <a href="" key={index}>
                                <img src={item.linkIcon} />
                                <span>{item.name}</span>
                            </a>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default HeaderOne;
