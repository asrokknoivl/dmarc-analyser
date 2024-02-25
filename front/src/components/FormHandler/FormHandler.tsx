import { useEffect, useState } from "react";
import "./FormHandler.css";

function FormHandler() {
  const [file, setFile] = useState("");
  const [data, setData] = useState({});
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
    }).then((res) => console.log(res));
  };

  return (
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
  );
}

export default FormHandler;
