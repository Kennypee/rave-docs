import React from 'react';
import style from './style.scss';
import Head from "components/head";
import Sidebar from 'components/Sidebar';
import Content from 'components/Content'; 
import Routes from 'content/api/routes.js';

export default class Section extends React.Component{
    constructor(props) {
        super(props);
        this.state = { component: Default };
    }
    componentDidMount(){
        this.props.url.query.section
        switch (this.props.url.query.section) {
            case "api-keys":
                import("content/api/api-keys").then(module => this.setState({ component: module.default})) 
                break;
            case "home":         
                this.setState({ component: Home})
                break;
            default:  
                break; 
        }
    }
    render(){
        const { component: Component } = this.state;

        return(
            <React.Fragment>
            <Head />
            <div className={style.doc}>
                <Sidebar routes={Routes}/>
                <Content>  
                    <Component />        
                </Content>
            </div>
            </React.Fragment>
        );
    }
}
const Home = () => (
    <h2>Rave API Documentation.</h2>
)
const Default = () => (
    <div style={{margin:'0 auto',display:'table'}}>
        <img src="/static/loading.svg" alt="" />
    </div>
)
