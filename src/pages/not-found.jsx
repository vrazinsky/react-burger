
import { Link } from 'react-router-dom';

export const NotFound404 = () => {
    return (
        <div >
            <div>
                Здесь ничего нет
                <br />
                <Link to='/'>Перейти на главную страницу</Link>
            </div>
        </div>
    );
}; 