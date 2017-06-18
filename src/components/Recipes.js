import React from 'react';
import Recipe from './Recipe';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Recipes = ({ recipes, toggleFavorite }) => (
    <ul className="recipes">
        { recipes.map(recipe =>
            <Recipe key={ recipe.id }
                    recipe={ recipe }
                    toggleFavorite={ toggleFavorite } /> )}
    </ul>
);

Recipes.propTypes = {
    recipes: PropTypes.array.isRequired,
    toggleFavorite: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
    return {
        recipes: state.recipes,
        toggleFavorite: () => console.log("Toggle")
    }
};

const ConnectedRecipes = connect(mapStateToProps)(Recipes);

export default ConnectedRecipes;