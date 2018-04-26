import style from './content.scss';

const Content = (props) => (
  <div className={style.markdown}>
    {props.children}
  </div>
)


export default Content;