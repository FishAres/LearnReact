import "./App.css";
import React from "react";
import Menu from "./components/Menu/index";
import Toggle from "./components/Toggle/index";

function App() {
  return (
    <>
      <Toggle onToggle={() => console.log("toggled")}>
        <Toggle.Button>
          <Toggle.Display>
            {(on) => {
              return <div className={`box ${on ? "filled" : ""}`}></div>;
            }}
          </Toggle.Display>
        </Toggle.Button>
      </Toggle>
    </>
  );
}

export default App;
