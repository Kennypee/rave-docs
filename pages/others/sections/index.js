import Layout from 'components/Layout'
import Sidebar from 'components/InternalSidebar';
import style from 'content/style.scss';

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
        const { component: Component,routes} = this.state;
        let props = {
            content:<Component/>,
            sidebar:<Sidebar routes={routes} />
        }
        return (
            <Layout {...props}>
                
            </Layout>
        );
    }
}

const Default = () => (
     <div style={{margin:'0 auto',display:'table'}}>
        <img src="/static/loading.svg" alt="" />
    </div>
)
