import style from './sidebar.scss';

const Sidebar = () => (
    <div className={style.sidebar}>
        <div className={style.brand}>
            <a href="">
                <img src="/static/rave.svg" alt=""/>
            </a>
        </div>
        <div className={style.menu}>
            <a href="" className={style.back}>
                <img src="/static/chevron-left.svg" alt=""/>
                Back
            </a>
            <header className={style.title}>NodeJS</header>
            <ul className={style.list}>
                <li>Getting Started</li>
                <li> 
                    <a href="">Setting up on Rave</a>
                    <ul className={style.subList}>
                        <li>Prerequisite</li>
                        <li>Rave parameters</li>
                        <li>Checksum</li>
                        <li>Hosted payment pages</li>
                        <li>Verify payments</li>
                    </ul>
                </li>
                <li>Card charge</li>
                <li>Bank account charge</li>
                <li>Preauthorisation</li>
                <li>Transaction status</li>
            </ul>
        </div>
    </div>
);

export default Sidebar;