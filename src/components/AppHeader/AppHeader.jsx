import { Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import appHeaderStyles from './AppHeader.module.css'
import { NavLink } from 'react-router-dom'
function AppHeader() {
    return (
        <header className={appHeaderStyles.header}>
            <div className={appHeaderStyles.header_wrapper + ' pt-4 pb-4'}>
                <div className={appHeaderStyles.toolbar}>
                    <NavLink to='/' className={appHeaderStyles.nostyle}>
                        <div className={appHeaderStyles.button + ' pl-5 pr-5'}>
                            <BurgerIcon />
                            <div className='ml-2 text text_type_main-default'>Конструктор</div>
                        </div>
                    </NavLink>
                    <NavLink to='/' className={appHeaderStyles.nostyle}>
                        <div className={appHeaderStyles.button + ' ' + appHeaderStyles.secondary + ' pl-5 pr-5'}>
                            <ListIcon type='secondary' />
                            <div className='ml-2 text text_type_main-default'>Лента заказов</div>
                        </div>
                    </NavLink>
                </div>

                <div>
                    <Logo />
                </div>
                <NavLink to='/profile' className={appHeaderStyles.nostyle}>
                    <div className={appHeaderStyles.button + ' ' + appHeaderStyles.secondary + ' pl-5 pr-5'}>
                        <ProfileIcon type='secondary' />
                        <div className='ml-2 text text_type_main-default'>Личный кабинет</div>
                    </div>
                </NavLink>
            </div>
        </header>
    )
}

export default AppHeader;