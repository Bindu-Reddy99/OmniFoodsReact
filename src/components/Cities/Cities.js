import React from 'react';
import {Animated} from "react-animated-css";

import CityItem from './CityItem/CityItem';

import lisbon from '../../assets/img/lisbon-3-min.jpg';
import sanfrancisco from '../../assets/img/san-francisco-min.jpg';
import berlin from '../../assets/img/berlin-min.jpg';
import london from '../../assets/img/london-min.jpg';


const cities=[

   {
        cityName: 'Lisbon',
        img: lisbon,
        customerIcon: 'person',
        chefIcon: 'star',
        socialMediaIcon: 'logo-twitter',
        customers: '1600+ happy eaters',
        chefs: '60+ top chefs',
        twitterHandle: '@omnifood_lx'
    },
   {
        cityName: 'San Francisco',
        img: sanfrancisco,
        customerIcon: 'person',
        chefIcon: 'star',
        socialMediaIcon: 'logo-twitter',
        customers: '3700+ happy eaters',
        chefs: '160+ top chefs',
        twitterHandle: '@omnifood_sf'
    },
  {
        cityName: 'Berlin',
        img: berlin,
        customerIcon: 'person',
        chefIcon: 'star',
        socialMediaIcon: 'logo-twitter',
        customers: '2300+ happy eaters',
        chefs: '110+ top chefs',
        twitterHandle: '@omnifood_berlin'
    },
 {
        cityName: 'London',
        img: london,
        customerIcon: 'person',
        chefIcon: 'star',
        socialMediaIcon: 'logo-twitter',
        customers: '1200+ happy eaters',
        chefs: '50+ top chefs',
        twitterHandle: '@omnifood_london'
    }
]


const Cities = props => {
    return (
      
            <Animated animationIn="fadeIn" isVisible={props.cityFade}>    
            <section className="section-cities">
                    <div className="row">
                        <h2>We're currently in these cities</h2>
                    </div>
                    <div className="row">
                     {cities.map((city)=>(
                         <CityItem
                         key={city.cityName} 
                         img={city.img} 
                         alt={city.cityName} 
                         city={city.cityName} 
                         customerIcon={city.customerIcon} 
                         customers={city.customers} 
                         chefIcon={city.chefIcon} 
                         chefs={city.chefs} 
                         socialMediaIcon={city.socialMediaIcon} 
                         twitterHandle={city.twitterHandle}
                         />
                     ))}
                        {/* {cityShow()} */}
                    </div>
                </section>
            </Animated>
       
    );
}

export default Cities;
