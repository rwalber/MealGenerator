import React, { useState, useEffect } from 'react';

import Video from './Video';

import mealDetail from '../styles/components/meal-detail.css';

export default function MealDetail({ meal }) {

    const [ingredient, setIngredient] = useState([]);

    useEffect( () => {
        let ingredientList = []
        for(let i = 1; i <= 20; i++) {
            if(meal[`strIngredient${i}`]) {
                ingredientList.push(meal[`strIngredient${i}`]);
            }
            else {
                break;
            }
        }
        setIngredient(ingredientList);
    }, []); 

    return(
        <>            
            <div className="meal">
                
                <div className="thumb">
                    <img src={ meal.strMealThumb }/>
                </div>
                
                <div className="content">

                    <p className="title">
                        { meal.strMeal }
                        
                        <p className="category">
                            Category: { meal.strCategory } <br/> Area: { meal.strArea }
                        </p>
                    
                    </p>

                    <p className="instructions">
                        { meal.strInstructions }
                    </p>

                    <p className="ingredient">
                        Ingredients:<ul>
                            { ingredient.map( igt => { 
                                return (<li> { igt } </li>) 
                            }) 
                        }
                        </ul>
                    </p>

                </div>

            </div>
            
            <div className="youtube">
                <Video url={meal.strYoutube} />
            </div>
        </>
    );
}