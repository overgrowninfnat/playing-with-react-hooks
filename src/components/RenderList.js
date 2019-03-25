import React, { useState, useEffect } from "react";
import axios from "axios";

const RenderList = ({ whatToFetch }) => {
  const [itemToRender, setItemToRender] = useState([]);
  const getItems = async whatToFetch => {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/${whatToFetch}`
    );
    setItemToRender(response.data);
  };
  useEffect(() => {
    getItems(whatToFetch);
  }, [whatToFetch]);
  return (
    <div>
      <ul>
        {itemToRender.map(item => {
          return <li>{item.title}</li>;
        })}
      </ul>
    </div>
  );
};

export default RenderList;
