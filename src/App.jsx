import React from "react";
import "./App.css";
import image11 from "./assets/Group-11.png";
import retangle from "./assets/Rectangle.png";
import img from "./assets/img.png";
import chip from "./assets/chip.png";
import { NewCard } from "./NewCard";

function App() {
  return (
    <div>
      <header>
        <title>glassmorphism</title>
      </header>
      <div className="App">
        <div className="Container">
          <img id="img-left-bottom" src={retangle} />
          <img id="img-right" src={image11} />
          <img id="img-left-top" src={img} />

          <div className="Info">
            <div className="Info-Title">
              <h1>Worlwide Purchase Access From Your Platinum Card</h1>
              <p>Free upgrade option to our platinum services and get lifetime validity.</p>
              <div className="Info-Submit">
                <input type="text" placeholder="Your Email" />
                <button type="submit">Apply</button>
              </div>
            </div>
            <div className="Info-Card">
              <div className="Card">
                <div className="Card-Title"><h2>Platinum Card</h2></div>
                <div className="Card-Chip">
                <img src={chip} />
                </div>
                <div className="Card-Footer">
                  <div className="Card-Footer_Info">
                    <p className="Footer-Text Footer-Text--Big"> 6689 2547 2265 1258</p>
                    <p className="Footer-Text">  Palloma Adolfi </p>
                  </div>
                  <div className="Footer-Text"> 06/2022</div>
                </div>
              </div>
              <NewCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
