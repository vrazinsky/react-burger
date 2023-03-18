import { BrowserRouter as Router } from 'react-router-dom';
import appStyles from './App.module.css'
import AppHeader from '../AppHeader/AppHeader'
import { useDispatch } from 'react-redux';
import { getUserThunk } from '../../services/thunks/auth-thunks'
import { getIngredientsThunk } from '../../services/thunks/thunks'
import { useEffect } from 'react'
import RoutesContainer from '../RoutesContainer/RoutesContainer'
import { getItem } from '../../utils/localStorage'
import { useAppDispatch } from '../../hooks/hooks'

export default function App() {
  //const dispatch = useDispatch()
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getIngredientsThunk())
    if (getItem('burgerAccessToken'))
      dispatch(getUserThunk())
  }, [dispatch])

  return (

    <>
      <Router>
        <AppHeader />
        <main className={appStyles.main}>
          <RoutesContainer />
        </main>
      </Router>
    </>
  );
}
