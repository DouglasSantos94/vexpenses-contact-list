import React from "react";
import { Outlet } from "react-router-dom";
import Reset from "./styles/Reset";

function App() {

  return (
    <div className="App">
      <Reset />
      <Outlet />
    </div>
  );
}

export default App;
