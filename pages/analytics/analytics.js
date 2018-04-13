import React from "react";
import Head from "components/head";
import style from './analytics.scss'
export default class Analytics extends React.Component {
    renderContent() {
        return (
            <div className={style.content}>
                <form action="">
                    <input type="text" name="search" id="search" placeholder='Search technology name' />
                </form>

                <div className={style.jsBlock}>
                    <h4>Javascript</h4>
                    <div className={style.gridContainer}>
                        <div className={style.gridColumn}>
                            <img src="/static/react.svg" alt="" />
                            <h4>ReactJs</h4>
                        </div>
                        <div className={style.gridColumn}>
                            <img src="/static/angular.svg" alt="" />
                            <h4>AngularJs</h4>
                        </div>
                        <div className={style.gridColumn}>
                            <img src="/static/vue-logo.svg" alt="" />
                            <h4>VueJs</h4>
                        </div>
                        <div className={style.gridColumn}>
                            <img src="/static/nodejs.svg" alt="" />
                            <h4>NodeJs</h4>
                        </div>
                    </div>
                </div>

                <h4>Mobile SDK</h4>
                <div className={style.gridContainer}>
                    <div className={style.gridColumn}>
                        <img src="/static/android-black.svg" alt="" />
                        <h4>Android</h4>
                    </div>
                    <div className={style.gridColumn}>
                        <img src="/static/ios-black.svg" alt="" />
                        <h4>Apple</h4>
                    </div>
                    <div className={style.gridColumn}>
                        <img src="/static/cordova.svg" alt="" />
                        <h4>Cordova</h4>
                    </div>
                    <div className={style.gridColumn}>
                        
                    </div>
                </div>

                <h4>Others</h4>
                <div className={style.gridContainer}>
                    <div className={style.gridColumn}>
                        <img src="/static/php.svg" alt="" />
                        <h4>PHP SDK</h4>
                    </div>
                    <div className={style.gridColumn}>
                        <img src="/static/golang.svg" alt="" />
                        <h4>GO</h4>
                    </div>
                    <div className={style.gridColumn}>
                        <img src="/static/woocommerce.svg" alt="" />
                        <h4>Woo commerce</h4>
                    </div>
                    <div className={style.gridColumn}>
                        <img src="/static/wordpress.svg" alt="" />
                        <h4>Wordpress</h4>
                    </div>
                </div>

                <h5>Need Help?</h5>
                <p>
                    We are always happy to help with any issues you have. Search the documentation, <a href="" className={style.link}>Contact Support</a>. You can also chat with other developers on our <a href="" className={style.link}>Slack channel</a>.
                </p>

            </div>
        );
    }

    renderSlack() {
        return (
            <section className={style.slack}>
                <div className={style.container}>
                    <img src="/static/slack.svg" alt="" />
                    <p>Join our Growing Slack Channel to connect with
                        other smart developers like you!
                    </p>

                    <form action="">
                        <input type="text" placeholder='Enter email your address' />
                        <button type="submit" className={style.slackButton}>JOIN SLACK</button>
                    </form>
                </div>
            </section>
        );
    }

    renderHeader() {
        return (
            <section className={style.header}>
                <nav className={style.nav}>
                    <div className={style.container}>
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
                                <li>LOGIN</li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className={style.headerContainer}>
                    <h1>What Technology are you using for your app?</h1>
                    <p>
                        We’ve got comprehensive guides for each platform that should help out with anything you need. You can also take a look at the detailed API references and tutorials for a better idea of how it all comes together.
                    </p>
                </div>

                <div className={style.headerBgLeft}>
                    <img src="/static/left-bg.svg" />
                </div>
                <div className={style.headerBgRight}>
                    <img src="/static/right-bg.svg" />
                </div>
            </section>
        );
    }

    renderFooter() {
        return (
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
    }

    render() {
        return (
            <React.Fragment>
                <Head />
                {this.renderHeader()}
                {this.renderContent()}
                {this.renderSlack()}
                {this.renderFooter()}
            </React.Fragment>
        );
    }
}