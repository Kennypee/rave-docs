import style from './nav.scss';
import Link from "next/link";
import Icon from 'components/Icon';

const Nav = () => (
    <nav className={style.nav}>
        <div className={style.container}>
            <div className={style.navTop}>
                <Link prefetch href="/">
                    <a className={style.brand}>
                        <img src="/static/rave-white.svg" alt="Flutterwave" />
                    </a>
                </Link>
                <ul>
                    <li className={style.list}>Solutions</li>
                    <li>Products</li>
                    <li>Company</li>
                    <li>Blog</li>
                </ul>
                <ul className={style.pullRight}>
                    <li><a href="" className={style.navButton}>GET API KEYS</a></li>
                </ul>
            </div>
            {/* <div className={style.navBottom}>
                <a href="" className={style.brand}>
                    <img src="/static/rave.svg" alt="Flutterwave" />
                </a>
                <ul className={style.pullRight}>
                    <li>Pricing</li>
                    <li>Features</li>
                    <li>Enterprise</li>
                    <li>Developers</li>
                </ul>
            </div> */}
        </div>
    </nav>
);

export default Nav;
