import React, { useState } from 'react';

import MealDetail from '../components/MealDetail';

import meal from '../styles/components/meal.css';

import api from '../services/api';

export default function Meal() {

    const [meal, setMeal] = useState([]);

    async function getMeal() {
        api.get('/randomMeal').then( result => {
          setMeal(result.data.meals[0]);
          console.log(result.data.meals[0]);
        });
    };

    return (
        <>
            <div className="button">
                <a href="#mealDetail" className="myButton" onClick={ getMeal }>
                    Get Meal
                </a>
            </div>

            <div className="content" id="mealDetail">

                { meal.length !== 0 ? <MealDetail key={meal.idMeal} meal={ meal }/> : null }
            
            </div>
        </>
    )
}