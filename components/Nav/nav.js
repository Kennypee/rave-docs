import style from './nav.scss'
import Icon from 'components/Icon'
import Link from 'next/link'

const Nav = () => (
    <nav className={style.nav}>
        <div className={style.navTop}>
            <Link href="/">
                <a className={style.brand}>
                    <img src="/static/rave-white.svg" alt="Flutterwave" />
                </a>
            </Link>
            <ul>
                <li className={style.list}>Concepts</li>
                <li><Link href="/tutorials"><a>Tutorials</a></Link></li>
                <li>Documentations</li>
                <li>Blog</li>
                <li>Support</li>
            </ul>
            <ul className={style.pullRight}>
                <li>
                    <form action="" method=""
                        className={style.searchForm}>
                        {/* TODO: Add search icon here */}
                        <input type="text" placeholder="Search Docs" />
                    </form>
                </li>
                <li>
                    <a href="" className={style.keyButton}>Get API Keys</a>
                </li>
            </ul>
        </div>
    </nav>
);

export default Nav;
