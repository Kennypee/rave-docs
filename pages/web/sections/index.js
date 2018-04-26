import Layout from 'components/Layout'
import style from 'content/style.scss';

export default class Section extends React.Component {
    constructor(props) {
        super(props);
        this.state = { component: Default };
    }
    componentDidMount(){
        this.props.url.query.section
        switch (this.props.url.query.section) {
            case "react":
                import("content/web/react").then(module => this.setState({ component: module.default }))
                break;
            case "vue":
                import("content/web/vue").then(module => this.setState({ component: module.default }))
                break;
            case "angular":
                import("content/web/angular").then(module => this.setState({ component: module.default }))
                break;
            case "node":
                import("content/web/node").then(module => this.setState({ component: module.default }))
                break;
            case "php":
                import("content/web/php").then(module => this.setState({ component: module.default }))
                break;
            case "go":
                import("content/web/go").then(module => this.setState({ component: module.default }))
                break;
            case "woocommerce":
                import("content/web/woocommerce").then(module => this.setState({ component: module.default }))
                break;
            case "wordpress":
                import("content/web/wordpress").then(module => this.setState({ component: module.default }))
                break;
            default:
                break;
        }
    }

	render() {
        const { component: Component } = this.state;
        let props = {
            content:<div className={style.markdown}><Component/></div>
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
