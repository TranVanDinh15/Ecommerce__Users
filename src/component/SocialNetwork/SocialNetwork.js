import styles from './SocialNetwork.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
function SocialNetwork() {
    const menuSocialNetwork = [
        {
            name: 'zalo',
            icon: 'https://file.hstatic.net/200000259495/file/zalo_d9dc3417eb744b91a44643f29b8c7161.svg',
        },
        {
            name: 'Messenger',
            icon: 'https://file.hstatic.net/200000259495/file/messager_208d7389c4ac46b5a01afad457684cd6.svg',
        },
        {
            name: 'Youtube',
            icon: 'https://file.hstatic.net/200000259495/file/youtube_479e81022bcb432f89376b2fea8f08ef.svg',
        },
        {
            name: 'Instagram',
            icon: 'https://file.hstatic.net/200000259495/file/instagram_81b9ae8829a940a7aa5b7926152ed378.svg',
        },
        {
            name: 'Tiktok',
            icon: 'https://file.hstatic.net/200000259495/file/tik-tok_b5d2fcfc430f4022b3af5051c2f54cfd.svg',
        },
        {
            name: 'Shopee',
            icon: 'https://file.hstatic.net/200000259495/file/shopee_952f4029f86748deb7b954cfdc1cdfda.svg',
        },
    ];
    return (
        <div className={cx('SocialNetworkWrapper')}>
            {menuSocialNetwork.map((item, index) => {
                return (
                    <a href="" key={index}>
                        <img src={item.icon} />
                        {item.name}
                    </a>
                );
            })}
        </div>
    );
}

export default SocialNetwork;
