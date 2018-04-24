import React from 'react';
import Head from 'components/head';
import Nav from 'components/Nav';
import style from './layout.scss';



const Layout = ({history, content, sidebar}) => (
    <React.Fragment>
        <Head />
        <Nav />
        <main className={style.body}>
            <div className={style.container}>
                {content}
                <div className={style.columnRight}>
                    {sidebar}
                </div>
            </div>
        </main>
    </React.Fragment>
)

export default Layout;

