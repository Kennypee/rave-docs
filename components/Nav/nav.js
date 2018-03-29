import React from 'react';
import style from './nav.scss';
import Icon from 'components/Icon';

const Nav = () => (
    <nav className={style.nav}>
        <div className={style.container}>
            <div className={style.navTop}>
                <a href="" className={style.brand}>
                    <img src="/static/flutterwave-logo.svg" alt="Flutterwave" />
                </a>
                <ul>
                    <li class={style.list}>Solutions</li>
                    <li>Products</li>
                    <li>Company</li>
                    <li>Blog</li>
                </ul>
                <ul className={style.pullRight}>
                    <li>Support</li>
                    <li>Login</li>
                </ul>
            </div>
            <div className={style.navBottom}>
                <a href="" className={style.brand}>
                    <img src="/static/rave.svg" alt="Flutterwave" />
                </a>
                <ul className={style.pullRight}>
                    <li>Pricing</li>
                    <li>Features</li>
                    <li>Enterprise</li>
                    <li>Developers</li>
                </ul>
            </div>
        </div>
    </nav>
);

export default Nav;
