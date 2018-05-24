import style from './docContent.scss';
import Search from "components/Search";

const DocContent = (props) => (
    <div className={style.contentContainer}>
        <Search index="api" placeholderText={props.placeholder} />
        <div className={style.markdown}>
            {props.children}
        </div>
        <footer>
            <h3>Need Help?</h3>
            <p>We are always happy to help with any issues you have. Search the documentation,<span className={style.blue}>Contact Support</span>. You can also chat with other developers on our <span className={style.blue}>Slack channel</span>.</p>
        </footer>
    </div>
)


export default DocContent;