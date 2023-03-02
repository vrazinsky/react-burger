import registerStyles from './register.module.css';
import { Input, Button, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components'
import { useState } from 'react'
import { Link, Navigate } from "react-router-dom";
import { registerThunk } from '../services/thunks/auth-thunks'
import { useDispatch, useSelector } from 'react-redux'

export function RegisterPage() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    const { user, getUserSuccess, getUserFailed } = useSelector(store => store.authReducer);

    const handleRegisterClick = () => {
        if (!name || !email || !password) {
            return
        }
        dispatch(registerThunk({ name, email, password }))
    }
    if (!getUserSuccess && !getUserFailed) {
        return null;
    }
    if (user) {
        return <Navigate to="/" replace />
    }

    return (
        <div className={registerStyles.wrapper + ' mt-20'}>
            <div className='text text_type_main-large'>Регистрация</div>
            <div className='mt-6'>
                <Input
                    placeholder={'Имя'}
                    type={'text'}
                    value={name}
                    onChange={e => setName(e.target.value)}
                    size={'default'}
                />
            </div>
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
                    onClick={handleRegisterClick}
                >
                    Зарегистрироваться
                </Button>
            </div>
            <div className={registerStyles.text_block + ' mt-20'}>
                <div className='text text_type_main-small text_color_inactive'>Уже зарегистрированы?</div>
                <div className={registerStyles.link + ' ml-1 text text_type_main-small'}><Link className="no_style" to='/login'>Войти</Link></div>
            </div>
        </div>

    )
}