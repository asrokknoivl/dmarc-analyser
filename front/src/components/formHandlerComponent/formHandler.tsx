import { useEffect, useState } from "react";
import "./formHandler.css";

interface props {
  returnReportXml: Function;
}

function FormHandler({ returnReportXml }: props) {
  const [file, setFile] = useState("");
  const [fileName, setFileName] = useState("NO FILE SELECTED");

  const handleFileChange = (event: any) => {
    setFile(event.target.files[0]);
    setFileName(event.target.files[0].name);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();

    const body = new FormData();
    body.append("file", file);

    fetch("http://localhost:4000/api/dmarc/analyse", {
      method: "POST",
      body: body,
    })
      .then((res) => res.json())
      .then((data) => returnReportXml(data))
      .catch((error) => console.error("Error uploading file:", error));
  };

  return (
    <div className="form">
      <h3>Upload your file</h3>
      <div className="section">
        <form id="dmarc" className="form-container" onSubmit={handleSubmit}>
          <label htmlFor="dmarc-report">select</label>
          <input
            type="file"
            id="dmarc-report"
            name="dmarc-report"
            onChange={handleFileChange}
          />
          <button type="submit">upload</button>
        </form>
        <div className="chosen-file">{fileName}</div>
      </div>
    </div>
  );
}

export default FormHandler;
