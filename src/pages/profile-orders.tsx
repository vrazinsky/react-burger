import { useAppDispatch, useAppSelector } from '../hooks/hooks'
import { useEffect } from 'react'
import { wsOrderConnectionStart, wsOrderConnectionClose } from '../services/actions/socket-actions'
import OrdersList from '../components/OrdersList/OrdersList'
export function ProfileOrdersPage() {
    const dispatch = useAppDispatch()
    const { orders } = useAppSelector(store => store.wsOrdersReducer.message)
    useEffect(() => {
        dispatch(wsOrderConnectionStart())
        return () => {
            dispatch(wsOrderConnectionClose())
        }
    }, [dispatch])

    const orderOnClick = (id: number) => {
        console.log(id)
    }

    return (
        <div className='ml-15 mt-10'>
            <OrdersList orders={orders} clickHandler={orderOnClick} />
        </div>
    )
}