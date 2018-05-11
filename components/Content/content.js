import style from './content.scss';
import Search from "components/Search";

const Content = (props) => (
  <div className={style.contentContainer}>
    <Search index="api"/>
    <div className={style.markdown}>
      {props.children}
    </div>
  </div>
)


export default Content;