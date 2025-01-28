import React, { useState, useEffect, useMemo } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
function App() {
  const [m, setM] = useState([]);
  const [cartItem, setCartItem] = useState([]);
  useEffect(() => {
    console.log(cartItem);
  }, [cartItem]);
  const itemSet = (item) => {
    setCartItem((prev) => {
      if (prev.length !== 0) {
        let ind = prev.findIndex((val) => val.title == item.title);
        if (ind !== -1) {
          let newObj = {
            category: prev[ind].category + 1,
            link: prev[ind].link,
            price: prev[ind].price,
            title: prev[ind].title,
            img: prev[ind].img,
          };
          prev[ind] = newObj;
          return [...prev];
        } else {
          return [...prev, item];
        }
      }
      return [...prev, item];
    });
  };
  const DeletedItemSet = (item) => setCartItem([...item]);
  const section = useMemo(() => {
    return (
      <>
        <Routes>
          <Route path="/" element={<Home setCart={itemSet} />} />
        </Routes>
        {/* <Home setCart={itemSet} /> */}
        <Footer />
      </>
    );
  }, [m]);
  return (
    <div className="App">
      <Header items={cartItem} newItems={DeletedItemSet} />
      {section}
    </div>
  );
}

export default App;
