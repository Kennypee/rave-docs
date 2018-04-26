import React from 'react';
import Head from 'components/head';
import Nav from 'components/Nav';
import style from './layout.scss';



const Layout = ({content, sidebar}) => (
    <React.Fragment>
        <Head />
        <Nav />
        <main className={style.body}>
            <div className={style.container}>
                <div className={style.columnLeft}>
                    {content}

                    <div className={style.notice}>
                        <span className={style.psBlock}> P.S </span>
                        <span>
                            Is there a language or framework that’s not here and you’d like us to include it?
                            shoot us a mail at - <a href="mailto:integrationsupport@flutterwavego.com">integrationsupport@flutterwavego.com</a>
                        </span>
                    </div>

                    <div className={style.guideBlock}>
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
                <div className={style.columnRight}>
                    {sidebar}
                </div>
            </div>
        </main>
    </React.Fragment>
)

export default Layout;

