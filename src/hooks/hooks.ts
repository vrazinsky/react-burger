import {
    useDispatch as dispatchHook,
    useSelector as selectorHook, TypedUseSelectorHook
} from 'react-redux'
import type { RootState, AppDispatch } from '../store/store'


export const useAppDispatch = () => dispatchHook<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = selectorHook