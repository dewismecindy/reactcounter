import "./App.css";
import { useState } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCalculator,
  faMinus,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "./components/Header";
import Footer from "./components/Footer";
library.add(faCalculator, faMinus, faPlus);

function App() {
  const [counter, setCounter] = useState(0);
  return (
    <div className="App">
      <Header />
      <main>
        <div className="counter">
          <div>
            <div
              className="minus"
              onClick={() => {
                setCounter(counter - 1);
              }}
            >
              {counter > 0 && (
                <FontAwesomeIcon icon="fa-solid fa-minus" size="4x" />
              )}
            </div>
            <p>{counter}</p>

            <div
              className="plus"
              onClick={() => {
                setCounter(counter + 1);
              }}
            >
              {counter < 10 && (
                <FontAwesomeIcon icon="fa-solid fa-plus" size="4x" />
              )}
            </div>
          </div>
          <button
            className="reset"
            onClick={() => {
              setCounter(0);
            }}
          >
            Reset
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
