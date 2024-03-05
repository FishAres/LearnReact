import React from "react";
import "./App.css";

function IntroPage() {
  return (
    <main className="intro-page">
      <img className="blob1" src="../public/assets/blob1.png" />
      <img className="blob2" src="../public/assets/blob2.png" />
      <h1>Quizzical</h1>
      <p className="description">No descript for you</p>
      <button className="start-button">Start quiz</button>
    </main>
  );
}

function App() {
  const [page, setPage] = React.useState("intro-page");
  return (
    <>
      <IntroPage />
    </>
  );
}

export default App;
