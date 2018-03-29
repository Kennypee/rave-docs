import style from './slack.scss'

const Slack = () => (
    <section className={style.slack}>
        <div className={style.container}>
            <p>Join our Growing Slack Channel to connect with 
                other smart developers like you!
            </p>

            <form action="">
                <input type="text" placeholder='Enter email your address'/>
                <button type="submit" className={style.slackButton}>JOIN SLACK</button>
            </form>
        </div>
    </section>
);

export default Slack;