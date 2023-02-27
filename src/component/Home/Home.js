import styles from './Home.module.scss';
import classNames from 'classnames/bind';
import Header from '../Header/Header';
import SocialNetwork from '../SocialNetwork/SocialNetwork';
import SliderComponent from '../Slider/Slider';
const cx = classNames.bind(styles);
function Home() {
    return (
        <div className={cx('wrapperHome')}>
            <Header />
            <SocialNetwork />
            <SliderComponent />
        </div>
    );
}

export default Home;
