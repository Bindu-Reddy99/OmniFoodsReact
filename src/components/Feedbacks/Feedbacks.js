import React from 'react';
import FeedBackItem from './FeedBackItem/FeedBackItem'
import alberto from '../../assets/img/customer-1-min.jpg';
import joana from '../../assets/img/customer-2-min.jpg';
import milton from '../../assets/img/customer-3-min.jpg';

const feedbacksList = {
    Alberto: {
        testimonial: 'Omnifood is just awesome! I just launched a startup which leaves me with no time for cooking, so Omnifood is a life-saver. Now that I got used to it, I couldn\'t live without my daily meals!',
        img: alberto,
        name: 'Alberto Duncan'
    },
    Joana: {
        testimonial: 'Inexpensive, healthy and great-tasting meals, delivered right to my home. We have lots of food delivery here in Lisbon, but no one comes even close to Omifood. Me and my family are so in love!',
        img: joana,
        name: 'Joana Silva'
    },
    Milton: {
        testimonial: 'I was looking for a quick and easy food delivery service in San Franciso. I tried a lot of them and ended up with Omnifood. Best food delivery service in the Bay Area. Keep up the great work!',
        img: milton,
        name: 'Milton Chapman'
    }
}

const feedbackList = () => {
    const newArray = [];
    for(let item in feedbacksList) {
        newArray.push((
            <FeedBackItem
                key={feedbacksList[item].name}
                clientName={feedbacksList[item].name} 
                img={feedbacksList[item].img} 
                alt={feedbacksList[item].name} 
                testimonial={feedbacksList[item].testimonial} 
            />
        ));
    }
    return newArray;
}

const Feedbacks = () => {
    return (
        <section className="section-feedbacksList">
            <div className="row">
                <h2>Our customers can't live without us</h2>
            </div>
            <div className="row">
                {feedbackList()}
            </div>
        </section>
    );
}

export default Feedbacks;