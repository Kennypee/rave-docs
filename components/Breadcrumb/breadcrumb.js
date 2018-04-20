import style from './breadcrumb.scss'
import Link from 'next/link'

const BreadCrumb = ({history, }) => (
    <ul className={style.breadCrumb}>
        {history.map((data, index) => (
            <li key={index}>
            	<Link href={data.url}>
            		<a>{data.title}</a>
            	</Link>
            </li>
        ))}
    </ul>
);

export default BreadCrumb;