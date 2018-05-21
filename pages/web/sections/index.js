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
            case "react":
                import("content/web/react").then(module => this.setState({ component: module.default }))
                import("content/web/react/routes.js").then(module => this.setState({ routes: module.default }))
                break;
            case "vue":
                import("content/web/vue").then(module => this.setState({ component: module.default }))
                import("content/web/vue/routes.js").then(module => this.setState({ routes: module.default }))
                break;
            case "angular":
                import("content/web/angular").then(module => this.setState({ component: module.default }))
                import("content/web/angular/routes.js").then(module => this.setState({ routes: module.default }))
                break;
            case "node":
                import("content/web/node").then(module => this.setState({ component: module.default }))
                import("content/web/node/routes.js").then(module => this.setState({ routes: module.default }))
                break;
            case "php":
                import("content/web/php").then(module => this.setState({ component: module.default }))
                import("content/web/php/routes.js").then(module => this.setState({ routes: module.default }))
                break;
            case "go":
                import("content/web/go").then(module => this.setState({ component: module.default }))
                import("content/web/go/routes.js").then(module => this.setState({ routes: module.default }))
                break;
            case "ruby":
                import("content/web/ruby").then(module => this.setState({ component: module.default }))
                import("content/web/ruby/routes.js").then(module => this.setState({ routes: module.default }))
                break;
            case "python":
                import("content/web/python").then(module => this.setState({ component: module.default }))
                import("content/web/python/routes.js").then(module => this.setState({ routes: module.default }))
                break;
            case "csharp":
                import("content/web/csharp").then(module => this.setState({ component: module.default }))
                import("content/web/csharp/routes.js").then(module => this.setState({ routes: module.default }))
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
    <div>
        <img src="/static/loading.svg" className={style.loader} alt="loading..." />
    </div>
)
