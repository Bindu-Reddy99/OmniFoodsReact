import React from "react";
const FeedBackItem = (props) => {
  return (
    <div className="col span-1-of-3">
      <blockquote>
        {props.testimonial}
        <cite>
          <img src={props.img} alt={props.alt} />
          {props.clientName}
        </cite>
      </blockquote>
    </div>
  );
};
export default FeedBackItem;
