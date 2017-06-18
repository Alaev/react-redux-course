import React from 'react';
import Recipes from './Recipes';
import AddRecipe from './AddRecipe';

const RecipesView = () => (
    <div className="main">

        <div className="pane">
            <Recipes />
        </div>

        <div className="pane">
            <AddRecipe title="Hello" />
        </div>

    </div>
);

export default RecipesView;