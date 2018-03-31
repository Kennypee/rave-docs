import React from 'react';
import style from './doc.scss';
import Head from "components/head";
import Sidebar from 'components/Sidebar';
import Content from 'components/Content';

export default class Doc extends React.Component{
    render(){
        return(
            <React.Fragment>
            <Head />
            <div className={style.doc}>
                <Sidebar />
                <Content />
            </div>
            </React.Fragment>
        );
    }
}
