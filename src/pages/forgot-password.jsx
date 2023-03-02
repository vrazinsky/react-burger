import forgotPasswordStyles from './forgot-password.module.css';
import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components'
import { useState } from 'react'
import { Link, Navigate } from "react-router-dom";
import { passwordResetThunk } from '../services/thunks/auth-thunks'
import { useDispatch, useSelector } from 'react-redux'

export function ForgotPasswordPage() {
    const [email, setEmail] = useState('')
    const dispatch = useDispatch()
    const { user, getUserSuccess, getUserFailed } = useSelector(store => store.authReducer);
    const { passwordResetSuccess } = useSelector((store) => store.passwordResetReducer)
    if (!getUserSuccess && !getUserFailed) {
        return null;
    }
    if (user) {
        return <Navigate to="/" replace />
    }

    const handlePasswordResetClick = () => {
        if (!email) {
            return
        }
        dispatch(passwordResetThunk({ email }))
    }

    if (passwordResetSuccess) {
        return <Navigate to='/reset-password' replace />
    }

    return (
        <div className={forgotPasswordStyles.wrapper + ' mt-20'}>
            <div className='text text_type_main-large'>Восстановление пароля</div>
            <div className='mt-6'>
                <Input
                    placeholder={'Укажите e-mail'}
                    type={'email'}
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    size={'default'}
                />
            </div>
            <div className='mt-6'>
                <Button
                    htmlType="submit"
                    type="primary"
                    size="large"
                    onClick={handlePasswordResetClick}
                >
                    Восстановить
                </Button>
            </div>
            <div className={forgotPasswordStyles.text_block + ' mt-20'}>
                <div className='text text_type_main-small text_color_inactive'>Вспомнили пароль?</div>
                <div className={forgotPasswordStyles.link + ' ml-1 text text_type_main-small'}><Link className="no_style" to='/login'>Войти</Link></div>
            </div>
        </div>

    )
}