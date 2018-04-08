import style from './code.scss';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { NotificationContainer, NotificationManager } from 'react-notifications';

const createNotification = (type) => {
    return () => {
        switch (type) {
            case 'info':
                NotificationManager.info('Copied !!');
                break;
            case 'success':
                NotificationManager.success('Success message', 'Title here');
                break;
            case 'warning':
                NotificationManager.warning('Warning message', 'Close after 3000ms', 3000);
                break;
            case 'error':
                NotificationManager.error('Error message', 'Click me!', 5000, () => {
                    alert('callback');
                });
                break;
        }
    };
};

const _copyIcon = () => (
    <svg width="7" height="10" viewBox="0 0 7 10" version="1.1">
        <title>Flutterwave</title>
        <desc>Created using Figma</desc>
        <g id="Canvas" transform="translate(-2189 -375)">
            <g id="Vector">
                <use transform="translate(2189 376.749)" fill="#5F6CC7" />
            </g>
            <g id="Vector">
                <use transform="translate(2190.55 375)" fill="#5F6CC7" />
            </g>
        </g>
        <defs>
            <path id="path0_fill" d="M 4.75499 3.12488e-08L 0.691049 3.12488e-08C 0.309719 3.12488e-08 2.73175e-08 0.35429 2.73175e-08 0.790498L 2.73175e-08 7.46058C 2.73175e-08 7.89679 0.309719 8.25107 0.691049 8.25107L 4.75499 8.25107C 5.13632 8.25107 5.44604 7.89679 5.44604 7.46058L 5.44604 0.790498C 5.44425 0.35429 5.13453 3.12488e-08 4.75499 3.12488e-08ZM 4.96087 7.45853C 4.96087 7.5896 4.86777 7.69609 4.7532 7.69609L 0.689258 7.69609C 0.57468 7.69609 0.481586 7.5896 0.481586 7.45853L 0.481586 0.790498C 0.481586 0.659431 0.57468 0.552939 0.689258 0.552939L 4.7532 0.552939C 4.86777 0.552939 4.96087 0.659431 4.96087 0.790498L 4.96087 7.45853Z" />
            <path id="path1_fill" d="M 4.75499 0L 0.691049 0C 0.309719 0 -5.4635e-08 0.35429 -5.4635e-08 0.790498C -5.4635e-08 0.944092 0.107417 1.06697 0.241688 1.06697C 0.375959 1.06697 0.483376 0.944092 0.483376 0.790498C 0.483376 0.659431 0.576471 0.552939 0.691049 0.552939L 4.75499 0.552939C 4.86956 0.552939 4.96266 0.659431 4.96266 0.790498L 4.96266 7.46058C 4.96266 7.59164 4.86956 7.69814 4.75499 7.69814C 4.62072 7.69814 4.5133 7.82101 4.5133 7.97461C 4.5133 8.1282 4.62072 8.25107 4.75499 8.25107C 5.13632 8.25107 5.44603 7.89678 5.44603 7.46058L 5.44603 0.790498C 5.44603 0.35429 5.13632 0 4.75499 0Z" />
        </defs>
    </svg>
);

const Code = ({ content }) => (
    <div className={style.code}>
        <pre>
            <code>
                {content}
            </code>
        </pre>
        <CopyToClipboard
            text={content}
            // TODO: replace alert in onCopy with react-notification
            onCopy={()=> alert('copied!!')}
        >
            <button> 
                {_copyIcon()} 
            </button>
        </CopyToClipboard>
    </div>
);

export default Code;