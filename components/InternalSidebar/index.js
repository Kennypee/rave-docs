import React    from "react"
import style    from '../Layout/layout.scss'
import Link     from 'next/link'

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
            <div className={this.state.fixed?style.fixed:""}>
                <h4>On this page</h4>

                <ul className={style.contentList }>
                    {
                        Object.keys(this.props.routes).map((key, index) => (
                            <li className={this.props.active == key?style.active: ""} key={index}>
                                <a href={"#"+this.props.routes[key].url}>{this.props.routes[key].title}</a>
                            </li>
                        ))
                    }
                </ul>
            </div>
        );
    }
}