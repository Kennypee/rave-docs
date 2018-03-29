import style from './footer.scss';

const Footer = () => (
    <footer className={style.footer}>
        <div className={style.container}>
            <ul className={style.footerTop}>
                <li>Solution</li>
                <li>Company</li>
                <li>Product</li>
                <li>Blog</li>
                <li>Support</li>
            </ul>
            <div className={style.gridContainer}>
                <div className={style.gridColumn}>
                    <img src="/static/rave-logo.svg" alt="" />
                </div>
                <div className={style.gridColumn}>
                    <header className={style.footerHeading}>
                        Rave Concepts
                        </header>
                    <ul className={style.footerLinks}>
                        <li>
                            <a href="">Adding Rave Checkout</a>
                        </li>
                        <li>
                            <a href="">Rave Inline</a>
                        </li>
                        <li>
                            <a href="">Rave embed script</a>
                        </li>
                        <li>
                            <a href="">WordPress</a>
                        </li>
                        <li>
                            <a href="">Joomla</a>
                        </li>
                        <li>
                            <a href="">Prestashop</a>
                        </li>
                    </ul>
                </div>
                <div className={style.gridColumn}>
                    <header className={style.footerHeading}>
                        API REFERENCE
                        </header>
                    <ul className={style.footerLinks}>
                        <li>
                            <a href="">Node</a>
                        </li>
                        <li>
                            <a href="">Ruby</a>
                        </li>
                        <li>
                            <a href="">Javascript</a>
                        </li>
                        <li>
                            <a href="">Python</a>
                        </li>
                    </ul>
                </div>
                <div className={style.gridColumn}>
                    <header className={style.footerHeading}>
                        COMMUNITY DOCs
                    </header>
                    <ul className={style.footerLinks}>
                        <li>
                            <a href="">Rave Key Plugins</a>
                        </li>
                        <li>
                            <a href="">Using Rave In Joomla</a>
                        </li>
                        <li>
                            <a href="">Using Rave In Cordova</a>
                        </li>
                        <li>
                            <a href="">Rave In PrestaShop</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div className={style.footerBottom}>
            <div className={style.container}>
                <span>&copy; 2018 Rave Documentation</span>
                <ul className={style.socialMenu}>
                    <li>
                        <a href="">
                            <img src="/static/google-plus.svg" alt="" />
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <img src="/static/twitter.svg" alt="" />
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <img src="/static/facebook.svg" alt="" />
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <img src="/static/instagram.svg" alt="" />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </footer>
);

export default Footer;