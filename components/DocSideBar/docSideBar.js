import style from './docSideBar.scss';

export default class DocSidebar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fixed: false,
            menuHidden: true,
        };
    }
    componentDidMount() {
        window.addEventListener('scroll', (event) => {
            let fixed = false
            if (window.scrollY > 60) {
                this.setState({ fixed: true })
            } else {
                this.setState({ fixed: false })
            }

        })
    }

    toggleMenu = () => {
        const prevState = this.state.menuHidden;
        this.setState(
            {
                menuHidden: !prevState,
            }
        );
    }

    render() {
        const {
            menuHidden,
        } = this.state;

        return (
            <div className={style.sidebar}>
                <button
                    className={style.sidebarButton}
                    onClick={this.toggleMenu}
                >
                    {menuHidden ? 'Hide' : 'Show'} Menu
                </button>

                <div className={menuHidden ? style.menu : style.menuHidden}>
                    <a href=""><img src="/static/left-arrow.svg" /> Back </a>
                    <ul className={style.list}>
                        {
                            Object.keys(this.props.routes).map((topLevel, index) => (
                                <li key={index}>
                                    <header className={style.title}>{topLevel}</header>
                                    <ul className={style.subList}>
                                        {
                                            this.props.routes[topLevel].map((route, index) => (
                                                <li key={index}>
                                                    <a href={route.url}>{route.title}</a>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        );
    }
}
