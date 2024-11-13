import React, { useContext } from "react";
import { ThemeContext, DataContext } from "../App";

const ChildB = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const { data, setData } = useContext(DataContext);

  const onClickHandler = () => {
    if (theme == "light") {
      setTheme("dark");
      setData("light");
    } else {
      setTheme("light");
      setData("dark");
    }
  };

  return (
    <>
      <div className="container">
        <div
          className="box"
          style={{ backgroundColor: theme == "light" ? "beige" : "#5d1604" }}
        >
          <button onClick={onClickHandler}>Change To {data} Theme</button>
        </div>
      </div>
    </>
  );
};

export default ChildB;
