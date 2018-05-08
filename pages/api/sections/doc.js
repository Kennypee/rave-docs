import React from 'react';
import style from './doc.scss';
import Head from "components/head";
import Sidebar from 'components/Sidebar';
import Content from 'components/Content';
import Readme from './readme.md';
import Routes from 'content/api/routes.js';

export default class Doc extends React.Component{
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
const Default = () => (
    <div style={{margin:'0 auto',display:'table'}}>
        <img src="/static/loading.svg" alt="" />
    </div>
)
