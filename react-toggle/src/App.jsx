import "./App.css";
import React from "react";
import Menu from "./components/Menu/index";
import Star from "./components/Star";
function App() {
  return (
    <>
      <Menu onOpen={() => {}}>
        <Menu.Button>Menu</Menu.Button>
        <Menu.Dropdown>
          <Menu.Item>Home</Menu.Item>
          <Menu.Item>About</Menu.Item>
          <Menu.Item>Contact</Menu.Item>
          <Menu.Item>Blog</Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </>
  );
}

export default App;

{
  /* <Toggle onToggle={() => console.log("toggled")}>
  <Toggle.Button>
    <Toggle.Display>
      {(on) => {
        return <div className={`box ${on ? "filled" : ""}`}></div>;
      }}
    </Toggle.Display>
  </Toggle.Button>
</Toggle>; */
}
