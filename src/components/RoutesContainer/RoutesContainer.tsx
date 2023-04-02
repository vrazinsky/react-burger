import { Routes, Route, useLocation } from 'react-router-dom';
import { HomePage, LoginPage, RegisterPage, ForgotPasswordPage, ResetPasswordPage, ProfilePage, IngredientPage, ProfileOrdersPage, ProfileAccountPage, IngredientModal, NotFound404, FeedPage } from '../../pages'
import ProtectedRouteElement from '../ProtectedRouteElement/ProtectedRouteElement'

export default function RoutesContainer() {
    const location = useLocation();
    const background = location.state && location.state.background;
    return (
        <>
            <Routes location={background || location}>
                <Route path="/" element={<HomePage />} />
                <Route path='/feed' element={<FeedPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/forgot-password" element={<ForgotPasswordPage />} />
                <Route path="/reset-password" element={<ResetPasswordPage />} />
                <Route path="/profile" element={<ProtectedRouteElement element={<ProfilePage />} />}>
                    <Route path="" element={<ProfileAccountPage />} />
                    <Route path="orders" element={<ProfileOrdersPage />} />
                </Route>
                <Route path="/ingredients/:id" element={<IngredientPage />} />
                <Route path="*" element={<NotFound404 />} />
            </Routes>
            {background && <Routes>
                <Route path="ingredients/:id" element={<IngredientModal />} />
            </Routes>}

        </>
    )
}
