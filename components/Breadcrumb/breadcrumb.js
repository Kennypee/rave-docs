import style from './breadcrumb.scss'

const BreadCrumb = ({history, }) => (
    <ul className={style.breadCrumb}>
        {history.map((data, index) => (
            <li><a href={data.url}>{data.title}</a></li>
        ))}
    </ul>
);

export default BreadCrumb;