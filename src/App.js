import "./styles.css";
import { useState } from "react";

export default function App() {
  const [value, setValue] = useState();

  return (
    <div className="App">
      <input
        type="range"
        min="0"
        max="100"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <div
        className="circle"
        style={{
          backgroundImage: `conic-gradient(red ${value}%, lightgreen 0)`
        }}
      ></div>
    </div>
  );
}
