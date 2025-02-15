import React from "react";
import "../styles/home.css";

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome.</h1>
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
        <button>🔍</button>
      </div>
      <div className="buttons">
        <button className="free-trial">Free Trial</button>
        <button className="see-more">See More</button>
      </div>
    </div>
  );
};

export default Home;
