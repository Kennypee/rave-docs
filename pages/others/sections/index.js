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
            default:
                break;
        }
    }

	render() {
        const { component: Component} = this.state;
        let props = {
            content:<Component/>,
            sidebar:<Sidebar routes={this.state.routes} />
        }
        return (
            <Layout {...props}>
                
            </Layout>
        );
    }
}

const Default = () => (
    <div></div>
)
