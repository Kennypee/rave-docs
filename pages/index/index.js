import React from "react";
import Head from "components/head";
import Header from "components/Header";
import Tutorial from 'components/Tutorial';
import Slack from 'components/Slack';
import Footer from 'components/Footer';

export default class Index extends React.Component{
    render(){
        return (
            <React.Fragment>
            <Head />
            <Header />
            <Tutorial />
            <Slack />
            <Footer />
            </React.Fragment>
        );
    }
}