import React from 'react';
import style from '../../_shared/docs.scss';
import Head from "components/head";
import Nav from "components/NavInternal";
import Sidebar from 'components/InternalSidebar';
import Drift from 'components/Drift';
import Content from 'components/DocContent';

export default class Section extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            component: Default,
            routes : {}
        };
    }
    componentDidMount(){
        this.props.url.query.section
        switch (this.props.url.query.section) {
            case "prestashop":
                import("content/others/prestashop").then(module => this.setState({ component: module.default }))
                import("content/others/prestashop/routes.js").then(module => this.setState({ routes: module.default }))
                break;
            case "joomla":
                import("content/others/joomla").then(module => this.setState({ component: module.default }))
                import("content/others/joomla/routes.js").then(module => this.setState({ routes: module.default }))
                break;
            case "woocommerce":
                import("content/others/woocommerce").then(module => this.setState({ component: module.default }))
                import("content/others/woocommerce/routes.js").then(module => this.setState({ routes: module.default }))
                break;
            case "wordpress":
                import("content/others/wordpress").then(module => this.setState({ component: module.default }))
                import("content/others/wordpress/routes.js").then(module => this.setState({ routes: module.default }))
                break;
            case "hosted-page":
                import("content/others/hosted-page").then(module => this.setState({ component: module.default }))
                import("content/others/hosted-page/routes.js").then(module => this.setState({ routes: module.default }))
                break;
            case "enhancing-security-with-integrity-hashes":
                import("content/others/enhancing-security-with-integrity-hashes").then(module => this.setState({ component: module.default }))
                import("content/others/enhancing-security-with-integrity-hashes/routes.js").then(module => this.setState({ routes: module.default }))
                break;
            case "server-side-validation-with-nodejs":
                import("content/others/server-side-validation-with-nodejs").then(module => this.setState({ component: module.default }))
                import("content/others/server-side-validation-with-nodejs/routes.js").then(module => this.setState({ routes: module.default }))
                break;
            default:
                break;
        }
    }

    render() {
        const { component: Component, routes : Routes } = this.state;

        return (
            <React.Fragment>
                <Head />
                <Nav />
                <div className={style.doc}>
                    <Sidebar routes={Routes} />
                    <Content placeholder="Search for a guide">
                        <Component />
                    </Content>
                </div>
                <Drift />
            </React.Fragment>
        );
    }
}

const Default = () => (
    <div>
        <img src="/static/loading.svg" className={style.loader} alt="loading..." />
    </div>
)
