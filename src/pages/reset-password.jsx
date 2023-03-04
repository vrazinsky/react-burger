import resetPasswordStyles from './reset-password.module.css';
import { Input, Button, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components'
import { useState } from 'react'
import { Link, Navigate } from "react-router-dom";
import { resetPasswordThunk } from '../services/thunks/auth-thunks'
import { useDispatch, useSelector } from 'react-redux'

export function ResetPasswordPage() {
    const [password, setPassword] = useState('')
    const [token, setToken] = useState('')
    const { user, getUser, getUserSuccess, getUserFailed } = useSelector(store => store.authReducer);
    const { passwordResetSuccess } = useSelector((store) => store.passwordResetReducer)

    const dispatch = useDispatch()
    const handleResetPasswordClick = () => {
        if (!password || !token) {
            return
        }
        dispatch(resetPasswordThunk({ password, token }))
    }
    if (getUser && !getUserSuccess && !getUserFailed) {
        return null;
    }
    if (!passwordResetSuccess) {
        return <Navigate to="/forgot-password" replace />
    }

    if (user) {
        return <Navigate to="/" replace />
    }

    return (
        <div className={resetPasswordStyles.wrapper + ' mt-20'}>
            <div className='text text_type_main-large'>Восстановление пароля</div>
            <div className='mt-6'>
                <PasswordInput
                    placeholder={'Введите новый пароль'}
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
            </div>
            <div className='mt-6'>
                <Input
                    placeholder={'Введите код из письма'}
                    type={'text'}
                    value={token}
                    onChange={e => setToken(e.target.value)}
                    size={'default'}
                />
            </div>
            <div className='mt-6'>
                <Button
                    htmlType="submit"
                    type="primary"
                    size="large"
                    onClick={handleResetPasswordClick}
                >
                    Сохранить
                </Button>
            </div>
            <div className={resetPasswordStyles.text_block + ' mt-20'}>
                <div className='text text_type_main-small text_color_inactive'>Вспомнили пароль?</div>
                <div className={resetPasswordStyles.link + ' ml-1 text text_type_main-small'}><Link className="no_style" to='/login'>Войти</Link></div>
            </div>
        </div>
    )
}