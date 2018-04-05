import style from './code.scss';

const Code = ({content}) => (
    <div className={style.code}>
    <pre>
        <code>
            {content}
        </code>
    </pre>
        
    </div>
);

export default Code;