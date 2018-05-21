import React from "react";
import Head from "components/head";
import Nav from "components/Nav";
import Search from "components/Search";
import Drift from "components/Drift";
import Link from "next/link";
import style from './web.scss';

export default class Web extends React.Component {
    _renderHeader() {
        return (
            <section className={style.header}>
                <Nav/>
                <div className={style.container}>
                    <h2>What technology are you using for your web app?</h2>
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
                <Search />

                <div className={style.jsBlock}>
                    <div className={style.gridContainer}>
                        <div className={style.gridColumn}>
                            <Link prefetch as="/guides/web/react" href="/web/sections?section=react">
                                <a className={style.gridBox}>
                                    <img src="/static/react.svg" alt="" />
                                    <h5>ReactJs</h5>
                                </a>
                            </Link>
                        </div>
                        <div className={style.gridColumn}>
                             <Link prefetch as="/guides/web/angular" href="/web/sections?section=angular">
                                <a className={style.gridBox}>
                                    <img src="/static/angular.svg" alt="" />
                                    <h5>AngularJs</h5>
                                </a>
                            </Link>
                        </div>
                        <div className={style.gridColumn}>
                             <Link prefetch as="/guides/web/vue" href="/web/sections?section=vue">
                                <a className={style.gridBox}>
                                    <img src="/static/vue-logo.svg" alt="" />
                                    <h5>VueJs</h5>
                                </a>
                            </Link>
                        </div>
                        <div className={style.gridColumn}>
                             <Link prefetch as="/guides/web/node" href="/web/sections?section=node">
                                <a className={style.gridBox}>
                                    <img src="/static/nodejs.svg" alt="" />
                                    <h5>NodeJs</h5>
                                </a>
                            </Link>
                        </div>
                        <div className={style.gridColumn}>
                            <Link prefetch as="/guides/web/php" href="/web/sections?section=php">
                                <a className={style.gridBox}>
                                    <img src="/static/php.svg" alt="" />
                                    <h5>PHP</h5>
                                </a>
                            </Link>
                        </div>
                        <div className={style.gridColumn}>
                            <Link prefetch as="/guides/web/go" href="/web/sections?section=go">
                                <a className={style.gridBox}>
                                    <img src="/static/golang.svg" alt="" />
                                    <h5>GO</h5>
                                </a>
                            </Link>
                        </div>
                        <div className={style.gridColumn}>
                            <Link prefetch as="/guides/web/python" href="/web/sections?section=python">
                                <a className={style.gridBox}>
                                    <img src="/static/python.svg" alt="" />
                                    <h5>Python</h5>
                                </a>
                            </Link>
                        </div>
                        <div className={style.gridColumn}>
                            <Link prefetch as="/guides/web/csharp" href="/web/sections?section=csharp">
                                <a className={style.gridBox}>
                                    <img src="/static/csharp.svg" alt="" />
                                    <h5>C#</h5>
                                </a>
                            </Link>
                        </div>
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
                <Drift />
            </React.Fragment>
        )
    }
}
