import { Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import appHeaderStyles from './AppHeader.module.css'
function AppHeader() {
    return (
        <header className={appHeaderStyles.header}>
            <div className={appHeaderStyles.header_wrapper + ' pt-4 pb-4'}>
                <div className={appHeaderStyles.toolbar}>
                    <div className={appHeaderStyles.button + ' pl-5 pr-5'}>
                        <BurgerIcon />
                        <div className='ml-2 text text_type_main-default'><a href='/' className={appHeaderStyles.nostyle}>Конструктор</a></div>
                    </div>
                    <div className={appHeaderStyles.button + ' ' + appHeaderStyles.secondary + ' pl-5 pr-5'}>
                        <ListIcon type='secondary' />
                        <div className='ml-2 text text_type_main-default'><a href='/' className={appHeaderStyles.nostyle}>Лента заказов</a></div>
                    </div>
                </div>
                <div>
                    <Logo />
                </div>
                <div>
                    <div className={appHeaderStyles.button + ' ' + appHeaderStyles.secondary + ' pl-5 pr-5'}>
                        <ProfileIcon type='secondary' />
                        <div className='ml-2 text text_type_main-default'><a href='/' className={appHeaderStyles.nostyle}>Личный кабинет</a></div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default AppHeader;