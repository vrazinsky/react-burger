import loginStyles from './login.module.css';
import { Input, Button, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components'
import { useState } from 'react'
import { Link, Navigate } from "react-router-dom";
import { loginThunk } from '../services/thunks/auth-thunks'
import { useDispatch, useSelector } from 'react-redux'

export function LoginPage() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    const { user } = useSelector(store => store.authReducer);
    const returnUrl = useSelector(store => store.returnUrlReducer.url)

    const handleLoginClick = () => {
        if (!email || !password) {
            return
        }
        dispatch(loginThunk({ email, password }))
    }

    if (user) {
        return returnUrl ? <Navigate to={returnUrl} replace /> : <Navigate to="/" replace />
    }

    return (
        <div className={loginStyles.wrapper + ' mt-20'}>
            <div className='text text_type_main-large'>Вход</div>
            <div className='mt-6'>
                <Input
                    placeholder={'E-mail'}
                    type={'email'}
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    size={'default'}
                />
            </div>
            <div className='mt-6'>
                <PasswordInput
                    placeholder={'Пароль'}
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
            </div>
            <div className='mt-6'>
                <Button
                    htmlType="submit"
                    type="primary"
                    size="large"
                    onClick={handleLoginClick}
                >
                    Войти
                </Button>
            </div>
            <div className={loginStyles.text_block + ' mt-20'}>
                <div className='text text_type_main-small text_color_inactive'>Вы - новый пользователь?</div>
                <div className={loginStyles.link + ' ml-1 text text_type_main-small'}><Link className="no_style" to='/register'>Зарегистрироваться</Link></div>
            </div>
            <div className={loginStyles.text_block + ' mt-4'}>
                <div className='text text_type_main-small text_color_inactive'>Забыли пароль?</div>
                <div className={loginStyles.link + ' ml-1 text text_type_main-small'}><Link className="no_style" to='/forgot-password'>Восстановить пароль</Link></div>
            </div>
        </div>

    )
}