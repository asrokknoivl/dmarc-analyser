import React from "react";
import "./App.css";
import FormHandler from "./components/FormHandler/FormHandler";

function App() {
  return (
    <>
      <h1 className="title">HC DMARC ANALYSER ✨</h1>
      <div className="main">
        <div className="content">
          <h3>Upload your file</h3>
          <FormHandler></FormHandler>
        </div>
      </div>
    </>
  );
}

export default App;
