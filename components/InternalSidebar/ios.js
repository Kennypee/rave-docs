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
            <img src="/static/ios.svg" 
            className={style.imgOne} alt=""/>
            <span>Apple iOS</span>
            <img src="/static/arrow-down.svg" alt=""/>
        </div>

        <h5>Table of Contents</h5>

        <ul className={style.contentList}>
            <li className={props.active == ""?style.active: ""}>
                <Link as="/guides/ios/" href="/ios">
                    <a>Getting Started</a>
                </Link>
            </li>
            {
                Object.keys(routes).map((key, index) => (
                    <li className={props.active == key?style.active: ""} key={index}>
                        <Link as={"/guides/ios/"+routes[key].url} href={"/ios/sections?section="+routes[key].url}>
                            <a>{routes[key].title}</a>
                        </Link>
                    </li>
                ))
            }
        </ul>
    </div>
)