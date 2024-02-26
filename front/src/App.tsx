import React, { useState } from "react";
import "./App.css";
import FormHandler from "./components/formHandlerComponent/formHandler";
import DisplayReport from "./components/displayReportComponent/displayReport";

function App() {
  const [reportJson, setReportJson] = useState(undefined);

  const getReportXml = (data: any) => {
    setReportJson(data);
  };

  let content;
  if (!reportJson) {
    content = <FormHandler returnReportXml={getReportXml}></FormHandler>;
  } else {
    content = <DisplayReport report={reportJson}></DisplayReport>;
  }

  return (
    <>
      <h1 className="title">HC DMARC ANALYSER ✨</h1>
      <div className="main">{content}</div>
      <div className="footer">
        Refer to{" "}
        <a href="https://www.notion.so/Etude-Les-rapports-DMARC-1400be358e784bff88ede538f26a978f">
          link
        </a>{" "}
        for info about the table fields
      </div>
    </>
  );
}

export default App;
