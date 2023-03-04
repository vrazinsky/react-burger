import { Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import appHeaderStyles from './AppHeader.module.css'
import { NavLink, useLocation } from 'react-router-dom'
import { activePaths } from '../../utils/paths'
function AppHeader() {
    const location = useLocation()

    const isActiveClass = (navName) => {
        let isActive = false;
        activePaths[navName].forEach((pathObj) => {
            if ((pathObj.exact && location.pathname === pathObj.path) || (!pathObj.exact && location.pathname.includes(pathObj.path))) {
                isActive = true;
            }
        })
        return { navClass: isActive ? 'no_style ml-2' : 'no_style ml-2 text_color_inactive', iconType: isActive ? 'primary' : 'secondary' }
    }
    return (
        <header className={appHeaderStyles.header}>
            <div className={appHeaderStyles.header_wrapper + ' pt-4 pb-4'}>
                <div className={appHeaderStyles.toolbar}>
                    <NavLink to='/' className={isActiveClass('home').navClass}>
                        <div className={appHeaderStyles.button + ' pl-5 pr-5'}>
                            <BurgerIcon type={isActiveClass('home').iconType} />
                            <div>Конструктор</div>
                        </div>
                    </NavLink>
                    <NavLink to='/orders-feed' className={isActiveClass('ordersFeed').navClass}>
                        <div className={appHeaderStyles.button + ' pl-5 pr-5'}>
                            <ListIcon type={isActiveClass('ordersFeed').iconType} />
                            <div>Лента заказов</div>
                        </div>
                    </NavLink>
                </div>

                <div>
                    <Logo />
                </div>
                <NavLink to='/profile' className={isActiveClass('profile').navClass}>
                    <div className={appHeaderStyles.button + ' pl-5 pr-5'}>
                        <ProfileIcon type={isActiveClass('profile').iconType} />
                        <div>Личный кабинет</div>
                    </div>
                </NavLink>
            </div>
        </header>
    )
}

export default AppHeader;