import React from "react";

const TotalItems = props => {
  return (
    <p className="p-2 bg-light text-primary">{`There's ${props.dataarray} ${
      props.itemName
    }`}</p>
  );
};

export default TotalItems;
