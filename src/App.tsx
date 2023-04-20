import React from "react";
import { Outlet } from "react-router-dom";
import Reset from "./styles/Reset";
import Header from "./pages/Header";

function App() {

  return (
    <div className="App">
      <Reset />
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
