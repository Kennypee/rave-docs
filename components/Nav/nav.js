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
                    <li>
                        <Link href=''>
                            TUTORIALS
                        </Link>
                    </li>
                    <li>
                        <Link prefetch href='/guides/api/home'>
                            API REFERENCE
                        </Link>
                    </li>
                    <li>
                        <Link href=''>
                            BLOG
                        </Link>
                    </li>
                    <li>
                        <Link href=''>
                            FAQs
                        </Link>
                    </li>
                </ul>
                <ul className={style.pullRight}>
                    <li><a href="" className={style.navButton}>GET API KEYS</a></li>
                </ul>
            </div>
        </div>
    </nav>
);

export default Nav;
