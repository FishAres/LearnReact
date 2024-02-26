import "./App.css";
import data from "../data/data";

function Navbar() {
  return (
    <nav>
      <img className="nav-logo" src="./src/assets/airbnb-logo.png" />
    </nav>
  );
}

// Still don't know why it's called that
function Hero() {
  return (
    <section className="hero">
      <img className="hero-photos" src="./src/assets/group-icon.png" />
      <h1 className="hero-header">Juicy Experiences</h1>
      <p className="hero-text">
        Ever wrestled a Komodo dragon? Ever jumped into a volcano in a wingsuit?
        Now you can, for money.
      </p>
    </section>
  );
}

function Card(props) {
  let badgeText;
  if (props.item.openSpots == 0) {
    badgeText = "SOLD OUT";
  } else if (props.item.location == "Online") {
    badgeText = "ONLINE";
  }

  return (
    <div className="card">
      {badgeText && <div className="card-badge">{badgeText}</div>}
      <img className="card-image" src={`./src/assets/${props.item.coverImg}`} />
      {/* <img className="cardImg" src={props.item.coverImg} /> */}
      <div className="card-stats">
        <img className="card-star" src="./src/assets/star.png" />
        <span>{props.item.stats.rating}</span>
        <span className="gray">({props.item.stats.reviewCount})</span>
        <span className="gray">{props.item.location}</span>
      </div>
      <p className="card-title">{props.item.title}</p>
      <p className="card-price">
        <span className="bold">From ${props.item.price}</span> / person
      </p>
    </div>
  );
}

function App() {
  const cards = data.map((item) => {
    return <Card key={item.id} item={item} />;
  });
  return (
    <div>
      <Navbar />
      <Hero />
      <section className="card-list">{cards}</section>
    </div>
  );
}

export default App;
