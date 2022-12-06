import React, { useState } from "react";
import "../App.css";
import Categories from "./Categories";

const Category = () => {
  const [data, setData] = useState(Categories);
  const filterResult = (catItem) => {
    const result = Categories.filter((curData) => {
      return curData.category === catItem;
    });
    setData(result);
  };
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col">
            <h1 className="title">filter by category</h1>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <button onClick={() => setData(Categories)} className="btn">
              All
            </button>
            <button onClick={() => filterResult("men")} className="btn">
              Men
            </button>
            <button onClick={() => filterResult("women")} className="btn">
              Women
            </button>
            <button onClick={() => filterResult("kids")} className="btn">
              Kids
            </button>
          </div>
          <div className="col">
            <div className="cards">
              {data.map((item) => {
                return (
                  <div className="card" key={item.id}>
                    <div className="card-header">
                      <img src={item.image} alt="men's wear" />
                    </div>
                    <div className="card-body">
                      <h2 className="titleProduct">{item.title}</h2>
                      <span className="price">${item.price}.00 </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
