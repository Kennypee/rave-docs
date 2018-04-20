import React from 'react';
import Head from 'components/head';
import Nav from 'components/Nav';
import BreadCrumb from 'components/Breadcrumb';
import style from './layout.scss';



const Layout = ({history, content, sidebar}) => (
    <React.Fragment>
        <Head />
        <Nav />
        <main className={style.body}>
            <BreadCrumb history={history} />
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

