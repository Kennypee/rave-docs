import React from "react";
import Head from "components/head";
import Nav from "components/Nav";
import style from './integrations.scss';

export default class Analytics extends React.Component {
    _renderHeader() {
        return (
            <section className={style.header}>
                <Nav />
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

                <div className={style.jsBlock}>
                    <h4>Javascript</h4>
                    <div className={style.gridContainer}>
                        <div className={style.gridColumn}>
                            <img src="/static/react.svg" alt="" />
                            <h5>ReactJs</h5>
                        </div>
                        <div className={style.gridColumn}>
                            <img src="/static/angular.svg" alt="" />
                            <h5>AngularJs</h5>
                        </div>
                        <div className={style.gridColumn}>
                            <img src="/static/vue-logo.svg" alt="" />
                            <h5>VueJs</h5>
                        </div>
                        <div className={style.gridColumn}>
                            <img src="/static/nodejs.svg" alt="" />
                            <h5>NodeJs</h5>
                        </div>
                    </div>
                </div>

                <h4>Mobile SDK</h4>
                <div className={style.gridContainer}>
                    <div className={style.gridColumn}>
                        <img src="/static/android-black.svg" alt="" />
                        <h5>Android</h5>
                    </div>
                    <div className={style.gridColumn}>
                        <img src="/static/ios-black.svg" alt="" />
                        <h5>Apple</h5>
                    </div>
                    <div className={style.gridColumn}>
                        <img src="/static/cordova.svg" alt="" />
                        <h5>Cordova</h5>
                    </div>
                    <div className={style.gridColumn}>
                        <img src="/static/java.svg" alt="" />
                        <h5>Java</h5>
                    </div>
                </div>

                <h4>Others</h4>
                <div className={style.gridContainer}>
                    <div className={style.gridColumn}>
                        <img src="/static/php.svg" alt="" />
                        <h5>PHP SDK</h5>
                    </div>
                    <div className={style.gridColumn}>
                        <img src="/static/golang.svg" alt="" />
                        <h5>GO</h5>
                    </div>
                    <div className={style.gridColumn}>
                        <img src="/static/woocommerce.svg" alt="" />
                        <h5>Woo commerce</h5>
                    </div>
                    <div className={style.gridColumn}>
                        <img src="/static/wordpress.svg" alt="" />
                        <h5>Wordpress</h5>
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