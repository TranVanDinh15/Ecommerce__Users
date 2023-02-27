import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import HeaderOne from './HeaderOne/HeaderOne';
import HeaderTwo from './HeaderTwo/HeaderTwo';
const cx = classNames.bind(styles);
function Header() {
    return (
        <div className={cx('wrapperHeader')}>
            <HeaderOne />
            <HeaderTwo />
        </div>
    );
}

export default Header;
