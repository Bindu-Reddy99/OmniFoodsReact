import React from "react";

const SocialIcons = (props) => {
  return (
    <li>
      <a href="#">
        <ion-icon name={props.socialIcon} class={props.socialIcon}></ion-icon>
      </a>
    </li>
  );
};

export default SocialIcons;
