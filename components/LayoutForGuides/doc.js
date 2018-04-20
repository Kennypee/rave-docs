import React from 'react';
import style from './doc.scss';
import Head from "components/head";
import Nav from "components/Nav";
import Sidebar from 'components/Sidebar';
import Content from 'components/Content';

export default class Doc extends React.Component{
    render(){
        return(
            <React.Fragment>
            <Head />
            <Nav />
            <div className={style.doc}>
                <Sidebar />
                <Content />
            </div>
            </React.Fragment>
        );
    }
}
