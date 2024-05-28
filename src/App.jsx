import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import NewsBoard from "./Components/NewsBoard";
import NewsItem from "./Components/NewsItem";
import './App.css';
const App = () => {
  const [category,setCategory] =  useState("general");
  return (
    <div>
      <Navbar setCategory={setCategory}/>
      <NewsBoard category={category}/>
      <NewsItem/>
    </div>
  )
}

export default App;