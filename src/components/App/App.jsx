import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import appStyles from './App.module.css'
import { HomePage, LoginPage, RegisterPage, ForgotPasswordPage, ResetPasswordPage, ProfilePage, IngredientPage, OrdersPage, ProfileAccountPage } from '../../pages'
import ProtectedRouteElement from '../ProtectedRouteElement/ProtectedRouteElement'
import AppHeader from '../AppHeader/AppHeader'
import { useDispatch } from 'react-redux';
import { getUserThunk } from '../../services/thunks/auth-thunks'

export default function App() {
  const dispatch = useDispatch()
  dispatch(getUserThunk())
  return (
    <>
      <Router>
        <AppHeader />
        <main className={appStyles.main}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/forgot-password" element={<ForgotPasswordPage />} />
            <Route path="/reset-password" element={<ResetPasswordPage />} />
            <Route path="/profile" element={<ProtectedRouteElement element={<ProfilePage />} />}>
              <Route path="" element={<ProfileAccountPage />} />
              <Route path="orders" element={<OrdersPage />} />
            </Route>
            <Route path="/ingredients/:id" element={<IngredientPage />} />
          </Routes>
        </main>
      </Router>
    </>
  );
}
