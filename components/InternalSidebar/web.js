import style    from '../Layout/layout.scss'
import Link     from 'next/link'

const routes = {
    // intro : {
    //     title: 'Introduction',
    //     url: ''
    // },
}

export default (props) => (
    <div>
        <div className={style.select}>
            <img src="/static/web.svg" 
            className={style.imgOne} alt=""/>
            <span>Web</span>
            <img src="/static/arrow-down.svg" alt=""/>
        </div>

        <h5>Table of Contents</h5>

        <ul className={style.contentList}>
            <li className={props.active == ""?style.active: ""}>
                <Link as="/guides/web/" href="/web">
                    <a>Getting Started</a>
                </Link>
            </li>
            {
                Object.keys(routes).map((key, index) => (
                    <li className={props.active == key?style.active: ""} key={index}>
                        <Link as={"/guides/web/"+routes[key].url} href={"/web/sections?section="+routes[key].url}>
                            <a>{routes[key].title}</a>
                        </Link>
                    </li>
                ))
            }
        </ul>
    </div>
)