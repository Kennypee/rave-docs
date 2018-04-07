import React from "react";
import Head from "components/head";
import style from './index.scss'
export default class Index extends React.Component {

    renderPlatform() {
        return (
            <section className={style.platform}>
                <div className={style.gridContainer}>
                    <div class={style.gridColumn}>
                        <img src="/static/web.svg" alt="tutorial" />
                        <h4>Web</h4>
                    </div>
                    <div class={style.gridColumn}>
                        <img src="/static/ios.svg" alt="tutorial" />
                        <h4>Apple iOS</h4>
                    </div>
                    <div class={style.gridColumn}>
                        <img src="/static/android.svg" alt="tutorial" />
                        <h4>Android</h4>
                    </div>
                </div>

                <a href="" className={style.platformLink}>Explore Integrations</a>
            </section>
        );
    }

    renderGuidesAndResources() {
        return (
            <section className={style.guides}>
                <div className={style.container}>
                    <h2>Guides and Resources</h2>
                    <p>
                        Fastest way to learn how to integrate to our APIs to your product. You are with everything from SDKs in your preferred language, to sample apps for Web and Mobile.
                    </p>

                    <div className={style.gridContainer}>
                        <div class={style.gridColumn}>
                            <div className={style.guidesImage}>
                                <img src="/static/payment-101.svg" alt="tutorial" />
                            </div>
                            <div className={style.guidesContent}>
                                <h4>Payment 101</h4>
                                <p>
                                    Lorem ipsum dolor sit amet, consecte adipiscing elit. Donec sollicitudin arcu
                                    at elementum velit accumen pulvinar.
                                </p>
                            </div>
                            <div className={style.guidesLink}>
                                <a href="">See More
                                    {/* TODO: add chevron-right.svg */}
                                </a>
                            </div>
                        </div>
                        <div class={style.gridColumn}>
                            <div className={style.guidesImage}>
                                <img src="/static/documentation.svg" alt="tutorial" />
                            </div>
                            <div className={style.guidesContent}>
                                <h4>Documentations</h4>
                                <p>
                                    Lorem ipsum dolor sit amet, consecte adipiscing elit. Donec sollicitudin arcu
                                    at elementum velit accumen pulvinar.
                                </p>
                            </div>
                            <div className={style.guidesLink}>
                                <a href="">See More
                                {/* TODO: add chevron-right.svg */}
                                </a>
                            </div>
                        </div>
                        <div class={style.gridColumn}>
                            <div className={style.guidesImage}>
                                <img src="/static/apis.svg" alt="tutorial" />
                            </div>
                            <div className={style.guidesContent}>
                                <h4>APIs</h4>
                                <p>
                                    Lorem ipsum dolor sit amet, consecte adipiscing elit. Donec sollicitudin arcu
                                    at elementum velit accumen pulvinar.
                                </p>
                            </div>
                            <div className={style.guidesLink}>
                                <a href="">See More
                                {/* TODO: add chevron-right.svg */}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    renderTutorials() {
        return (
            <section className={style.tutorial}>
                <div className={style.container}>
                    <h2>Tutorials</h2>
                    <p>
                        Fastest way to learn how to integrate to our APIs to your product. You are with everything from SDKs in your preferred language, to sample apps for Web and Mobile.
                    </p>

                    <div className={style.gridContainer}>
                        <div class={style.gridColumn}>
                            <div className={style.tutorialImage}>
                                <img src="/static/" alt="tutorial" />
                            </div>
                            <div className={style.tutorialContent}>
                                <h4>Building a complete checkout system using Rave, Vuejs & Nodejs</h4>
                                <p>
                                    Lorem ipsum dolor sit amet, consecte adipiscing elit. Donec sollicitudin arcu
                                    at elementum velit accumen pulvinar.
                                </p>
                            </div>
                            <div className={style.tutorialLink}>
                                <a href="">Read More</a>
                            </div>
                        </div>
                        <div class={style.gridColumn}>
                            <div className={style.tutorialImage}>
                                <img src="/static/" alt="tutorial" />
                            </div>
                            <div className={style.tutorialContent}>
                                <h4>Building a complete checkout system using Rave, Vuejs & Nodejs</h4>
                                <p>
                                    Lorem ipsum dolor sit amet, consecte adipiscing elit. Donec sollicitudin arcu
                                    at elementum velit accumen pulvinar.
                                </p>
                            </div>
                            <div className={style.tutorialLink}>
                                <a href="">Read More</a>
                            </div>
                        </div>
                        <div class={style.gridColumn}>
                            <div className={style.tutorialImage}>
                                <img src="/static/" alt="tutorial" />
                            </div>
                            <div className={style.tutorialContent}>
                                <h4>Building a complete checkout system using Rave, Vuejs & Nodejs</h4>
                                <p>
                                    Lorem ipsum dolor sit amet, consecte adipiscing elit. Donec sollicitudin arcu
                                    at elementum velit accumen pulvinar.
                                </p>
                            </div>
                            <div className={style.tutorialLink}>
                                <a href="">Read More</a>
                            </div>
                        </div>
                        <div class={style.gridColumn}>
                            <div className={style.tutorialImage}>
                                <img src="/static/" alt="tutorial" />
                            </div>
                            <div className={style.tutorialContent}>
                                <h4>Building a complete checkout system using Rave, Vuejs & Nodejs</h4>
                                <p>
                                    Lorem ipsum dolor sit amet, consecte adipiscing elit. Donec sollicitudin arcu
                                    at elementum velit accumen pulvinar.
                                </p>
                            </div>
                            <div className={style.tutorialLink}>
                                <a href="">Read More</a>
                            </div>
                        </div>
                        <div class={style.gridColumn}>
                            <div className={style.tutorialImage}>
                                <img src="/static/" alt="tutorial" />
                            </div>
                            <div className={style.tutorialContent}>
                                <h4>Building a complete checkout system using Rave, Vuejs & Nodejs</h4>
                                <p>
                                    Lorem ipsum dolor sit amet, consecte adipiscing elit. Donec sollicitudin arcu
                                    at elementum velit accumen pulvinar.
                                </p>
                            </div>
                            <div className={style.tutorialLink}>
                                <a href="">Read More</a>
                            </div>
                        </div>
                        <div class={style.gridColumn}>
                            <div className={style.tutorialImage}>
                                <img src="/static/" alt="tutorial" />
                            </div>
                            <div className={style.tutorialContent}>
                                <h4>Building a complete checkout system using Rave, Vuejs & Nodejs</h4>
                                <p>
                                    Lorem ipsum dolor sit amet, consecte adipiscing elit. Donec sollicitudin arcu
                                    at elementum velit accumen pulvinar.
                                </p>
                            </div>
                            <div className={style.tutorialLink}>
                                <a href="">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
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
                    <h1>Welcome to the Rave</h1>
                    <p>
                        Fastest way to learn how to integrate our APIs to your products. You are covered with everything from SDKs in your preferred language to sample apps for Web and Mobile.
                    </p>

                    <div className={style.question}>What are you building for?</div>
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
                {this.renderPlatform()}
                {this.renderGuidesAndResources()}
                {this.renderTutorials()}
                {this.renderSlack()}
                {this.renderFooter()}
            </React.Fragment>
        );
    }
}