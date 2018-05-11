import style from './content.scss';

const Content = (props) => (
  <div className={style.contentContainer}>
    <form action="">
      <input type="text" className={style.searchBox} placeholder="Search Documentation" />
    </form>
    <div className={style.markdown}>
      {props.children}
    </div>
  </div>
)


export default Content;