import React from "react";
import { useState } from "react";
import { Contact } from "./pages/Contact";
import { ContactList } from "./pages/ContactList/style";

function App() {

  return (
    <div className="App">
      <ContactList>
        {Array.from({length: 10}, (x, i) => (<li key={i}>
          <Contact />
        </li>))}
      </ContactList>
    </div>
  );
}

export default App;
