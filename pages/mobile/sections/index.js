import Layout from 'components/Layout'

export default class Section extends React.Component {
    constructor(props) {
        super(props);
        this.state = { component: Default };
    }
    componentDidMount(){
        this.props.url.query.section
        switch (this.props.url.query.section) {
            case "android":
                import("content/mobile/android").then(module => this.setState({ component: module.default }))
                break;
            case "ios":
                import("content/mobile/ios").then(module => this.setState({ component: module.default }))
                break;
            case "cordova":
                import("content/mobile/cordova").then(module => this.setState({ component: module.default }))
                break;
            case "java":
                import("content/mobile/java").then(module => this.setState({ component: module.default }))
                break;
            default:
                break;
        }
    }

	render() {
        const { component: Component } = this.state;
        let props = {
            content:<Component />
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
