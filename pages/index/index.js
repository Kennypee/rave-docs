import React from "react";
import Head from "components/head";
import Nav from "components/Nav";
import Drift from "components/Drift";
import Link from "next/link";
import style from './index.scss';

export default class Index extends React.Component {
    _renderHeader() {
        return (
            <section className={style.header}>
                <Nav/>
                <div className={style.container}>
                    <h2>Developers</h2>
                    <p>
                        Fastest way to learn how to integrate our APIs to your products. You are covered with everything from SDKs in your preferred language to sample apps for Web and Mobile.
                    </p>

                    <div className={style.question}>What are you building for?</div>

                    <div className={style.gridContainer}>
                        <div class={style.gridColumn}>
                            <Link prefetch as="/guides/web" href="/web">
                                <a>
                                    <img src="/static/web.svg" alt="tutorial" />
                                    <h4>Web</h4>
                                </a>
                            </Link>
                        </div>
                        <div className={style.gridColumn}>
                            <Link prefetch as="/guides/mobile" href="/mobile">
                                <a>
                                    <img src="/static/android.svg" alt="tutorial" />
                                    <h4>Mobile</h4>
                                </a>
                            </Link>
                        </div>
                        <div className={style.gridColumn}>
                            <Link prefetch as="/guides/api/home" href="/api/sections?section=home">
                                <a>
                                    <img src="/static/apis.svg" alt="tutorial" />
                                    <h4>API Reference</h4>
                                </a>
                            </Link>
                        </div>

                    </div>
                    <Link prefetch href="/guides">
                        <a className={style.headerButton}>SEE ALL INTEGRATIONS</a>
                    </Link>
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

    _renderGuidesAndResources() {
        return (
            <section className={style.tutorial}>
                <div className={style.container}>
                    <h2>Guides and resources</h2>
                    <p>
                        Learn and explore best practices and the different ways to work with
                        the Rave APIs to enable amazing ways to innovate.
            </p>

                    <div className={style.gridContainer}>
                        <div class={style.gridColumn}>
                            <div className={style.tutorialImage}>
                                <img src="/static/vue.svg" alt="tutorial" />
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
                                <img src="/static/vue.svg" alt="tutorial" />
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
                                <img src="/static/vue.svg" alt="tutorial" />
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

    _renderIntro() {
        return (
            <section className={style.intro}>
                <div className={style.container}>
                    <div className={style.gridContainer}>
                        <div class={style.gridColumn}>
                            <h4>Payments 101</h4>
                            <p>
                                Our proprietary fraud system, checks every transaction to
        ensure you’re covered and protected. With over
        200 fraud rules built over time, it
        does a good job of protecting you.
                        </p>
                            <a href="">Learn about payments</a>
                        </div>
                        <div class={style.gridColumn}>
                            <h4>Fraud Protection</h4>
                            <p>
                                Our proprietary fraud system, checks every transaction to
        ensure you’re covered and protected. With over
        200 fraud rules built over time, it
        does a good job of protecting you.
                        </p>
                            <a href="">Learn about payments</a>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    render() {
        return (
            <React.Fragment>
                <Head />
                {this._renderHeader()}
                {this._renderIntro()}
                {this._renderGuidesAndResources()}
                {this._renderSlack()}
                <Drift />
            </React.Fragment>
        )
    }
}