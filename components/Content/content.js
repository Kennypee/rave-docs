import style from './content.scss';
import Code from 'components/Code';
import BreadCrumb from 'components/Breadcrumb';

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


const Content = () => (
    <div className={style.content}>
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

        <div className={style.contentBody}>
            <BreadCrumb history={history} />
            <Code content={content} />
        </div>
    </div>
);

export default Content;