import style from './sidebar.scss';

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
                <div className={style.brand}>
                    <a href="">
                        <img src="/static/rave.svg" alt=""/>
                    </a>
                </div>
                <div className={style.menu}>
                    {/*<a href="" className={style.back}>
                        <img src="/static/chevron-left.svg" alt=""/>
                        Back
                    </a>
                    <header className={style.title}>NodeJS</header>*/}
                    <ul className={style.list}>
                        {
                            Object.keys(this.props.routes).map((topLevel, index) => (
                                <li key={index}>
                                    <span className={style.title}>{topLevel}</span>
                                    <ul className={style.subList}>
                                        {
                                            this.props.routes[topLevel].map((route, index) => (
                                                <li key={index}>
                                                    <a href={route.url}>{route.title}</a>
                                                </li>
                                            ))
                                        } 
                                    </ul> 
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div> 
        );
    }
}
