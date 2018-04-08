import style from './nav.scss';
import Icon from 'components/Icon';

const Nav = () => (
    <nav className={style.nav}>
        <div className={style.navTop}>
            <a href="" className={style.brand}>
                <img src="/static/rave-white.svg" alt="Flutterwave" />
            </a>
            <ul>
                <li class={style.list}>Concepts</li>
                <li>Tutorials</li>
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
