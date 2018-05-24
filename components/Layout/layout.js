import React from 'react';
import Head from 'components/head';
import Nav from 'components/NavInternal';
import Drift from "components/Drift";
import style from './layout.scss';



const Layout = ({content, sidebar}) => (
    <React.Fragment>
        <Head />
        <Nav />
        <main className={style.body}>
            <div className={style.container}>
                <div className={style.columnLeft}>
                    {content}
                    
                    <footer>
                        <h3>Need Help?</h3>
                        <p>We are always happy to help with any issues you have. Search the documentation,<span className={style.blue}>Contact Support</span>. You can also chat with other developers on our <span className={style.blue}>Slack channel</span>.</p>
                    </footer>
                </div>
                <div className={style.columnRight}>
                    {sidebar}
                </div>
            </div>
        </main>
        <Drift />
    </React.Fragment>
)

export default Layout;

