import style    from './internalSidebar.scss';

export default class Sidebar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { fixed: false};
    }
    componentDidMount(){
        window.addEventListener('scroll', (event) => {
            let fixed = false
            if(window.scrollY > 60){
                this.setState({fixed: true})
            }else{
                this.setState({fixed: false})
            }
            
        })
    }

    render() {
        return (
            <div className={style.sidebar}>
                <div className={this.state.fixed?style.fixed:""}>
                    <div className={style.menu}>
                        <h4>On this page</h4>
                        <ul className={style.list}>
                            {
                                Object.keys(this.props.routes).map((key, index) => (
                                    <li className={this.props.active == key?style.active: ""} key={index}>
                                        <a href={"#"+this.props.routes[key].url}>{this.props.routes[key].title}</a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}