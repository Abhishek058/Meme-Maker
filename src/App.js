import React from "react";
import memeData from "./memeData.js";
import Header from "./components/Header.js";
import Meme from "./components/Meme.js";
import "./App.css";

export default function App() {
  return (
    <div>
      <Header />;
      <Meme />
    </div>
  );
}
