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
            case "list-all-subscriptions":
                import("content/api/list-all-subscriptions").then(module => this.setState({ component: module.default})) 
                break;
            case "fetch-a-subscription":
                import("content/api/fetch-a-subscription").then(module => this.setState({ component: module.default})) 
                break;
            case "cancel-a-subscription":
                import("content/api/cancel-a-subscription").then(module => this.setState({ component: module.default})) 
                break;
            case "activate-a-subscription":
                import("content/api/activate-a-subscription").then(module => this.setState({ component: module.default})) 
                break;
            case "create-a-payment-plan":
                import("content/api/create-a-payment-plan").then(module => this.setState({ component: module.default})) 
                break;
            case "list-all-payment-plans":
                import("content/api/list-all-payment-plans").then(module => this.setState({ component: module.default})) 
                break;
            case "fetch-a-payment-plan":
                import("content/api/fetch-a-payment-plan").then(module => this.setState({ component: module.default})) 
                break;
            case "cancel-a-payment-plan":
                import("content/api/cancel-a-payment-plan").then(module => this.setState({ component: module.default})) 
                break;
            case "edit-a-payment-plan":
                import("content/api/edit-a-payment-plan").then(module => this.setState({ component: module.default})) 
                break;
            case "introduction-to-preauthorized-transactions":
                import("content/api/introduction-to-preauthorized-transactions").then(module => this.setState({ component: module.default})) 
                break;
            case "preauthorizing-a-card":
                import("content/api/preauthorizing-a-card").then(module => this.setState({ component: module.default})) 
                break;
            case "capture-a-card":
                import("content/api/capture-a-card").then(module => this.setState({ component: module.default})) 
                break;
            case "refund-or-void-a-card":
                import("content/api/refund-or-void-a-card").then(module => this.setState({ component: module.default})) 
                break;
            case "get-fees":
                import("content/api/get-fees").then(module => this.setState({ component: module.default})) 
                break;
            case "get-a-list-of-banks":
                import("content/api/get-a-list-of-banks").then(module => this.setState({ component: module.default})) 
                break;
            case "get-exchange-rates":
                import("content/api/get-exchange-rates").then(module => this.setState({ component: module.default})) 
                break;
            case "xrequery-transaction-verification":
                import("content/api/xrequery-transaction-verification").then(module => this.setState({ component: module.default})) 
                break;
            case "initiate-a-refund-on-rave":
                import("content/api/initiate-a-refund-on-rave").then(module => this.setState({ component: module.default})) 
                break;
            case "save-cards":
                import("content/api/save-cards").then(module => this.setState({ component: module.default})) 
                break;
            case "charge-a-card-using-a-token":
                import("content/api/charge-a-card-using-a-token").then(module => this.setState({ component: module.default})) 
                break;
            case "save-accounts":
                import("content/api/save-accounts").then(module => this.setState({ component: module.default})) 
                break;
            case "card-payments":
                import("content/api/card-payments").then(module => this.setState({ component: module.default})) 
                break;
            case "bank-account-payments":
                import("content/api/bank-account-payments").then(module => this.setState({ component: module.default})) 
                break;
            case "ussd-payments":
                import("content/api/ussd-payments").then(module => this.setState({ component: module.default})) 
                break;
            case "ghana-payments":
                import("content/api/ghana-payments").then(module => this.setState({ component: module.default})) 
                break;
            case "api-requests":
                import("content/api/api-requests").then(module => this.setState({ component: module.default})) 
                break;
            case "api-response":
                import("content/api/api-response").then(module => this.setState({ component: module.default})) 
                break;
            case "rave-encryption":
                import("content/api/rave-encryption").then(module => this.setState({ component: module.default})) 
                break;
            case "rave-parameters":
                import("content/api/rave-parameters").then(module => this.setState({ component: module.default})) 
                break;
            case "rave-errors":
                import("content/api/rave-errors").then(module => this.setState({ component: module.default})) 
                break;
            case "test-cards-for-rave":
                import("content/api/test-cards-for-rave").then(module => this.setState({ component: module.default})) 
                break;
            case "test-bank-accounts":
                import("content/api/test-bank-accounts").then(module => this.setState({ component: module.default})) 
                break;
            case "events-webhooks":
                import("content/api/events-webhooks").then(module => this.setState({ component: module.default})) 
                break;
            case "recurring-billing":
                import("content/api/recurring-billing").then(module => this.setState({ component: module.default})) 
                break;
            case "configuring-payment-methods":
                import("content/api/configuring-payment-methods").then(module => this.setState({ component: module.default})) 
                break;
            case "plugins-and-sdk-outline":
                import("content/api/plugins-and-sdk-outline").then(module => this.setState({ component: module.default})) 
                break;
            case "multicurrency-payments":
                import("content/api/multicurrency-payments").then(module => this.setState({ component: module.default})) 
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
