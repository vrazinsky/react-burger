import { Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import appHeaderStyles from './AppHeader.module.css'
function AppHeader() {
    return (
        <header className={appHeaderStyles.header}>
            <div className={appHeaderStyles.header_wrapper  + ' pt-4 pb-4'}>
                <div className={appHeaderStyles.toolbar}>
                    <div className={appHeaderStyles.button + ' pl-5 pr-5'}>
                        <BurgerIcon />
                        <div className='ml-2 text text_type_main-default'>Конструктор</div>           
                    </div>
                    <div className={appHeaderStyles.button + ' pl-5 pr-5'}>
                        <ListIcon />
                        <div className='ml-2 text text_type_main-default'>Лента заказов</div>
                    </div>
                </div>
                <div>
                    <Logo />
                </div>
                <div>
                    <div className={appHeaderStyles.button + ' pl-5 pr-5'}>
                        <ProfileIcon />
                        <div className='ml-2 text text_type_main-default'>Личный кабинет</div>
                    </div>
                </div>
            </div>
        </header>
    )
  }

  export default AppHeader;