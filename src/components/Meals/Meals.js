import React from "react";

// import "./Meals.css";
import Meal from "./Meal/Meal";
import img1 from "../../assets/img/1-min.jpg";
import img2 from "../../assets/img/2-min.jpg";
import img3 from "../../assets/img/3-min.jpg";
import img4 from "../../assets/img/4-min.jpg";
import img5 from "../../assets/img/5-min.jpg";
import img6 from "../../assets/img/6-min.jpg";
import img7 from "../../assets/img/7-min.jpg";
import img8 from "../../assets/img/8-min.jpg";

const meals = [
  {
    image_url: img1,
    alt: "Korean bibimbap with egg and vegetables",
  },
  {
    image_url: img2,
    alt: "Simple italian pizza with cherry tomatoes",
  },
  {
    image_url: img3,
    alt: "Chicken breast steak with vegetables",
  },
  {
    image_url: img4,
    alt: "Autumn pumpkin soup",
  },
  {
    image_url: img5,
    alt: "Paleo beef steak with vegetables",
  },
  {
    image_url: img6,
    alt: "Healthy baguette with egg and vegetables",
  },
  {
    image_url: img7,
    alt: "Burger with cheddar and bacon",
  },
  {
    image_url: img8,
    alt: "Granola with cherries and strawberries",
  },
];



const Meals = (props) => {
  return (
    <section className="section-meals">
      <ul className="meals-showcase clearfix">
        {/* {groupMealList()} */}
       {/* <div>Hi</div> */}
        {meals.map((meal) => (
          <Meal
          img={meal.image_url}
          alt={meal.alt}
          />
        ))}
      </ul>
    </section>
  );
};
export default Meals;
