import React, { Component, Fragment } from "react";

import Footer from "./components/Footer/Footer";
import SignUp from "./components/SignUp/SignUp";
import Delivery from "./components/Delivery/Delivery";
import Header from "./components/Header/Header";
import Meals from "./components/Meals/Meals";
import Cities from "./components/Cities/Cities";
import Pricing from "./components/Pricing/Pricing";
import Feedbacks from "./components/Feedbacks/Feedbacks";
import HowItWorks from "./components/HowItWorks/HowItWorks";
export default class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Delivery />
        <Meals />
        <HowItWorks />
        <Cities />
        <Feedbacks />
        <Pricing />
        <SignUp />
        <Footer />
      </Fragment>
    );
  }
}
