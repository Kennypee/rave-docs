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
            case "android":
                import("content/mobile/android").then(module => this.setState({ component: module.default}))
                import("content/mobile/android/routes.js").then(module => this.setState({ routes: module.default}))
                break;
            case "ios":
                import("content/mobile/ios").then(module => this.setState({ component: module.default }))
                import("content/mobile/ios/routes.js").then(module => this.setState({ routes: module.default }))
                break;
            case "cordova":
                import("content/mobile/cordova").then(module => this.setState({ component: module.default }))
                import("content/mobile/cordova/routes.js").then(module => this.setState({ routes: module.default }))
                break;
            case "kotlin":
                import("content/mobile/kotlin").then(module => this.setState({ component: module.default }))
                import("content/mobile/kotlin/routes.js").then(module => this.setState({ routes: module.default }))
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
