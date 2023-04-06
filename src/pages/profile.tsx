import profileStyles from './profile.module.css';
import { NavLink, Outlet } from 'react-router-dom'
import { logoutThunk } from '../services/thunks/auth-thunks'
import { useAppDispatch } from '../hooks/hooks'
import { AppThunkDispatch } from '../store/store'

export function ProfilePage() {

    const dispatch: AppThunkDispatch = useAppDispatch()

    const handleLogoutClick = () => {
        dispatch(logoutThunk())
    }

    const getActiveClass = (isActive: boolean) => {
        return 'no_style' + (isActive ? '' : ' text_color_inactive')
    }

    return (
        <div className={profileStyles.container}>
            <div className='text text_type_main-medium mt-20'>
                <div className={profileStyles.menu_item}><NavLink end to='/profile' className={({ isActive }) => getActiveClass(isActive)}>Профиль</NavLink></div>
                <div className={profileStyles.menu_item}><NavLink className={({ isActive }) => getActiveClass(isActive)} to='/profile/orders'>История заказов</NavLink></div>
                <div className={profileStyles.menu_item}><div className={profileStyles.button + ' text_color_inactive'} onClick={handleLogoutClick}>Выход</div></div>
                <div className='mt-20 text text_type_main-small text_color_inactive'>
                    В этом разделе вы можете изменить свои персональные данные
                </div>
            </div>
            <Outlet />
        </div>
    )
}