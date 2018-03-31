import style from './content.scss';

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
    </div>
);

export default Content;