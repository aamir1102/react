import React from "react";
import { useParams } from "react-router-dom";

const Student = () => {
  const { name, id } = useParams();

  return (
    <div>
      <p>name is {name}</p>
      <p>id is {id}</p>
    </div>
  );
};

export default Student;
