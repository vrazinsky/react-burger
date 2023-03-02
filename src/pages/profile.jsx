import profileStyles from './profile.module.css';
import { NavLink, Outlet } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { logoutThunk } from '../services/thunks/auth-thunks'

export function ProfilePage() {

    const dispatch = useDispatch()

    const handleLogoutClick = () => {
        dispatch(logoutThunk())
    }

    const getActiveClass = (isActive) => {
        return 'no_style' + (isActive ? '' : ' text_color_inactive')
    }

    return (
        <div className={profileStyles.container + ' mt-20'}>
            <div className='text text_type_main-medium'>
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