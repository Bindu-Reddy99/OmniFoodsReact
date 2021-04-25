import React from 'react';

// import '../Meals.css';

const Meal = props => {
    return (
        <li>
            <figure className="meal-photo">
                <img src={props.img} alt={props.alt} />
            </figure>
        </li>
    );
}

export default Meal;