import { useAppDispatch, useAppSelector } from '../hooks/hooks'
import { useEffect } from 'react'
import { wsFeedConnectionStart, wsFeedConnectionClose } from '../services/actions/socket-actions'
import OrdersList from '../components/OrdersList/OrdersList'
export function FeedPage() {
    const dispatch = useAppDispatch()
    const { orders, total, totalToday } = useAppSelector(store => store.wsFeedReducer.message)
    useEffect(() => {
        dispatch(wsFeedConnectionStart())
        return () => {
            dispatch(wsFeedConnectionClose())
        }
    }, [dispatch])
    return (
        <div>
            <h2>Лента заказов</h2>
            <OrdersList orders={orders} />
        </div>
    )
}