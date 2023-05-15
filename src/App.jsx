import "./App.css";
import Header from "./components/header";
import Hero from "./components/hero";
import Subscription from "./components/subscription";

// console.log(Hero());

function App() {
  return (
    <div>
      <Header />
      <section className="main-section">
        <Hero />
        <Subscription />
      </section>
    </div>
  );
}

export default App;
