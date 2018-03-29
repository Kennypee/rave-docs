import style from './header.scss';
import Nav from 'components/Nav';
import Icon from 'components/Icon';

const Header = () => (
    <section className={style.header}>
        <Nav />
        <div className={style.container}>
            <h2>Developers</h2>
            <p>
                Fastest way to learn how to integrate our APIs to your products. You are covered with everything from SDKs in your preferred language to sample apps for Web and Mobile.
            </p>

            <div className={style.question}>What are you building for?</div>

            <div className={style.gridContainer}>
                <div class={style.gridColumn}>
                <img src="/static/web.svg" alt="tutorial"/>
                <h4>Web</h4>
                </div>
                <div class={style.gridColumn}>
                <img src="/static/ios.svg" alt="tutorial"/>
                <h4>Apple iOS</h4>
                </div>
                <div class={style.gridColumn}>
                <img src="/static/android.svg" alt="tutorial"/>
                <h4>Android</h4>
                </div>
            </div>
        </div>
    </section>
);

export default Header;