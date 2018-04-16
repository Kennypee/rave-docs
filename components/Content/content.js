import style from './content.scss';
import Code from 'components/Code';
import BreadCrumb from 'components/Breadcrumb';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const content = `var payload = {
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

const apiKeys = {
    public: 'FLWPUBK-982d7d485b175f8360dddd663931683b-X',
    secret: 'FLWPUBK-982d7d485b175f8360dddd663931683b-X'
};

const history = [
    {
        title: 'Home',
        url: 'https://home'
    },
    {
        title: 'Web Getting Started',
        url: 'https://web'
    },
];

const _renderNavMenu = () => {
    return (
        <div className={style.nav}>
            <form action="" method="" className={style.searchForm}>
                <input type="text" placeholder="Search Documentation"/>
            </form>

            <ul className={style.pullRight}>
                <li>Dashboard</li>
                <li> 
                    <img src="/static/avatar.svg" alt="christian" />
                    Christian
                </li>
            </ul>
        </div>
    );
}

// TODO: Give a better variable
const _renderUnAuthenticated = () => {
        return (
            <div className={style.unAuthenticatedBlock}>
                Please sign in to view your API Keys
                <a href="" className={style.authButton}>Login here</a>
            </div>
        );
}

const _renderAuthenticated = () => {
    return (
        <div className={style.authenticatedBlock}>
            <h5>API Keys</h5>
            <div>
                <span className={style.authenticatedText}>Public Key: {apiKeys.public}</span>
                <CopyToClipboard
                    text={apiKeys.public}
                    // TODO: replace alert in onCopy with react-notification
                    onCopy={()=> alert('copied!!')}
                >
                    <button> 
                        copy
                    </button>
                </CopyToClipboard>
            </div>
            <div>
                <span className={style.authenticatedText}>Secret Key: {apiKeys.secret}</span>
                <CopyToClipboard
                    text={apiKeys.secret}
                    // TODO: replace alert in onCopy with react-notification
                    onCopy={()=> alert('copied!!')}
                >
                    <button> 
                        copy
                    </button>
                </CopyToClipboard>
                
            </div>
        </div>
    );
}

const Content = () => (
    <div className={style.content}>
        {_renderNavMenu()}   
        <div className={style.contentBody}>
        {_renderAuthenticated()}
        {_renderUnAuthenticated()}
            <BreadCrumb history={history} />
            <Code content={content} />
        </div>
    </div>
);

export default Content;