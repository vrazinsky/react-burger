import PropTypes from 'prop-types';
import IngredientDetails from '../components/IngredientDetails/IngredientDetails'

function IngredientPage() {
    return (
        <IngredientDetails hideTitle={false} />
    )
}

IngredientPage.propTypes = {
    hideTitle: PropTypes.bool
}

export { IngredientPage }