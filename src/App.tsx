import React from "react";
import { useState } from "react";
import { Contact } from "./pages/Contact/Contact";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Contact />
    </div>
  );
}

export default App;
