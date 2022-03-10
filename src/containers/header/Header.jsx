import React from "react";
import "./header.css";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";

const Header = () => {
  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">
          Hi, My name is Taylor. Welcome to my portfolio{" "}
        </h1>

        <p>
        Hi, my name is Taylor. I grew up in Sugar City, Idaho where there wasn’t a whole lot to do other than pick potatoes. If fun was to be experienced, it had to be created. I found myself constantly being interested in things where I could be an inventor, musician, and entrepreneur. 
        </p>

        <div className="gpt3__header-content__input">
          {/* <input type="email" placeholder="Your Email Address" /> */}
          <button type="button">  <a href="#wgpt3">Portfolio</a></button>
        </div>
        <div className="gpt3__header-content__people">
          {/* <img src={people} alt="people" /> */}
          {/* <p>1,600 people requested access a visit in last 24 hours</p> */}
        </div>
      </div>
      <div className="gpt3__header-image">
        {/* <img src={ai} alt="ai" /> */}
      </div>
    </div>
  );
};

export default Header;
