import React from "react";
import Header from "components/header";
import Home from "components/Home";

class Test extends React.Component{
    render(){
        return (
            <React.Fragment>
            <Header />
            <Home />
            </React.Fragment>
        );
    }
}

export default Test;