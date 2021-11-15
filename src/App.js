import React from 'react';
import './App.css';
import Video from "./Video/bgvideo.mp4";
import './box.js';

function App() {
  return (
    <div className="App">
      <video
        autoPlay
        loop
        style={{
          position: "absolute",
          width: "100%",
          left: "0px",
          top: "0px",
          height: "100%",
          ojectFit: "cover",
          transform: "translate(-50%,-50%,)",
          zIndex: "-1",
        }}
      >
        <source src={Video} type="video/mp4" />
      </video>
      <div>
        <span className="L">
          <p>
            LUXURY
            <br />
          </p>
        </span>
        <h3 className="o">of</h3>
        <span className="D">DESIGN</span>
        <img src="image/Robo-1.gif" className="clsfirstgif"></img>

        <div className="subhead">
          <h1>
            DESIGNS THAT MAKE <br /> A DIFFERENCE
          </h1>
        </div>
        <img src="image/Robo-2.gif" className="clsSecgif"></img>
      </div>
    </div>
  );
}

export default App;
