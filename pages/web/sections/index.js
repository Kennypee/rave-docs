import Layout from 'components/Layout';
import style             from 'components/Layout/layout.scss';
import Code              from 'components/Code';
import {iOS as Sidebar}  from 'components/InternalSidebar';

const history = [
    {
        title: 'Home',
        url: '/'
    },
    {
        title: 'Web Getting Started',
        url: '/guides/ios'
    },
];

const codeContent = `var payload = {
    "cardno": "5438898014560229",
    "cvv": "789",
    "expirymonth": "07",
    "expiryyear": "18",
    "currency": "NGN",
    "pin": "7552",
    "country": "NG",
    "amount": "10",
    "email": "user@example.com",
    "phonenumber": "1234555",
    "suggested_auth": "PIN",
    "firstname": "user1",
    "lastname": "user2",
    "IP": "355426087298442",
    "txRef": "MC-7663-YU",
    "device_fingerprint": "69e6b7f0b72037aa8428b70fbe03986c"
};`;

const content =  
    <div>
        <h3>Getting Started with iOS</h3>
        <p>
            With Rave, enabling payments on Apple’s flagship operating system has never been more seamless. Build and customize your application as you deem fit and take absolute control. With a number of endpoints, URLs and options to choose from, each having a detailed explanation as to how it works, we’ll have your business swinging from the fences in no time!
        </p>

        <Code content={codeContent} />

    </div>

export default class Web extends React.Component {
	render() {
        let props = {
            history:history,
            content:content,
            sidebar:<Sidebar active=""/>
        }
        return (
            <Layout {...props}>
                
            </Layout>
        );
    }
}