import Layout 	         from 'components/Layout';
import style 	         from 'components/Layout/layout.scss';
import Code 	         from 'components/Code';
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
	<div className={style.columnLeft}>
        <h3>Getting Started with iOS</h3>
        <p>
            With Rave, enabling payments on Apple’s flagship operating system has never been more seamless. Build and customize your application as you deem fit and take absolute control. With a number of endpoints, URLs and options to choose from, each having a detailed explanation as to how it works, we’ll have your business swinging from the fences in no time!
        </p>

        <Code content={codeContent} />

        <div className={style.notice}>
            <span className={style.psBlock}> P.S </span>
            <span>
                Is there a language or framework that’s not here and you’d like us to include it?
                shoot us a mail at - <a href="mailto:integrationsupport@flutterwavego.com">integrationsupport@flutterwavego.com</a>
            </span>
        </div>

        <div className={style.guideBlock}>
            <a href="">Read the Guide <img src="/static/chevron-left.svg" alt=""/></a>
        </div>

        <div className={style.questionBlock}>
            <h4>Questions?</h4>
            <p>
            We're always happy to help with code or other questions you might have! Search our documentation, <a href="">contact
            support</a>, or connect with our sales team. You can also chat live with other developers in our rave channel on <a href="">Slack</a>.
            </p>
            <p>
            Was this article helful?
            <span><img src="/static/like.svg" alt=""/> Yes</span>
            <span><img src="/static/unlike.svg" alt=""/> No</span>
            </p>
        </div>
    </div>

export default class iOS extends React.Component {
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