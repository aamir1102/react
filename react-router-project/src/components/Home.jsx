import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const onClickHandler = () => {
    navigate("/about");
  };

  return (
    <div>
      <p>Home Page</p>
      <br />
      <button onClick={onClickHandler}>Navigate To About Page</button>
    </div>
  );
};

export default Home;
