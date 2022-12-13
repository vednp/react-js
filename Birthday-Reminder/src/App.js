import React, { useState } from "react";
import data from "./data";
import List from "./List";
function App() {
  const [value, setvalue] = useState(data);

  return (
    <div className="container">
      <p>{value.length} birthdays today</p>
      <List person={value} />
      <button className="btn" onClick={() => setvalue([])}>
        Delete
      </button>
    </div>
  );
}

export default App;
