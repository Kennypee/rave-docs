import React from "react";
import Head from "components/head";
import Nav from "components/Nav";
import Link from "next/link";
import style from './others.scss';

export default class Others extends React.Component {
    _renderHeader() {
        return (
            <section className={style.header}>
                <Nav/>
                <div className={style.container}>
                    <h2>What technology are you using for your app?</h2>
                    <p>
                        We’ve got comprehensive guides for each platform that should help out with anything you need. You can also take a look at the detailed API references and tutorials for a better idea of how it all comes together.
                    </p>
                </div>
            </section>
        );
    }

    _renderSlack() {
        return (
            <section className={style.slack}>
                <div className={style.container}>
                    <img src="/static/slack-rgb.svg" alt="" />
                    <p>
                        Get help from other developers and get product news before anyone.
                    </p>

                    <button type="submit" className={style.slackButton}>JOIN SLACK NOW</button>

                </div>
            </section>
        );
    }

    _renderContent() {
        return (
            <div className={style.content}>
                <form action="">
                    <input type="text" name="search" id="search" placeholder='Search technology name' />
                </form>

                <div className={style.gridContainer}>
                    <div className={style.gridColumn}>
                        <Link prefetch as="/guides/others/joomla" href="/others/sections?section=joomla">
                            <a>
                                <img src="/static/joomla.svg" alt="" />
                                <h5>Joomla</h5>
                            </a>
                        </Link>
                    </div>
                    <div className={style.gridColumn}>
                        <Link prefetch as="/guides/others/prestashop" href="/others/sections?section=prestashop">
                            <a>
                                <img src="/static/prestashop.svg" alt="" />
                                <h5>Prestashop</h5>
                            </a>
                        </Link>
                    </div>
                    <div className={style.gridColumn}>
                        <Link prefetch as="/guides/others/woocommerce" href="/others/sections?section=woocommerce">
                            <a>
                                <img src="/static/woocommerce.svg" alt="" />
                                <h5>Woocommerce</h5>
                            </a>
                        </Link>
                    </div>
                    <div className={style.gridColumn}>
                        <Link prefetch as="/guides/others/wordpress" href="/others/sections?section=wordpress">
                            <a>
                                <img src="/static/wordpress.svg" alt="" />
                                <h5>Wordpress</h5>
                            </a>
                        </Link>
                    </div>
                </div>

                <div className={style.gridContainer}>
                    <div className={style.gridColumn}>
                        <Link prefetch as="/guides/others/hosted-page" href="/others/sections?section=hosted-page">
                            <a>
                                <img src="" alt="" />
                                <h5>Hosted Page</h5>
                            </a>
                        </Link>
                    </div>
                    <div className={style.gridColumn}>
                        <Link prefetch as="/guides/others/enhancing-security-with-integrity-hashes" href="/others/sections?section=enhancing-security-with-integrity-hashes">
                            <a>
                                <img src="" alt="" />
                                <h5>Enhancing Security <br/>With Integrity <br/>Hashes</h5>
                            </a>
                        </Link>
                    </div>
                    <div className={style.gridColumn}>
                        <Link prefetch as="/guides/others/server-side-validation-with-nodejs" href="/others/sections?section=server-side-validation-with-nodejs">
                            <a>
                                <img src="" alt="" />
                                <h5>Server-Side <br />Validation With <br/>Nodejs</h5>
                            </a>
                        </Link>
                    </div>
                    <div className={style.gridColumn}>
                        <Link>
                            <a>
                                <img src="" alt="" />
                                <h5></h5>
                            </a>
                        </Link>
                    </div>
                </div>

                <div className={style.contentFooter}>
                    <h5>Need Help?</h5>
                    <p>
                        We are always happy to help with any issues you have. Search the documentation, <a href="" className={style.link}>Contact Support</a>. You can also chat with other developers on our <a href="" className={style.link}>Slack channel</a>.
                    </p>
                </div>

            </div>
        );
    }


    render() {
        return (
            <React.Fragment>
                <Head />
                {this._renderHeader()}
                {this._renderContent()}
                {this._renderSlack()}
            </React.Fragment>
        )
    }
}
