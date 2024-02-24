import { useState } from "react";
import "./FormHandler.css";

function FormHandler() {
  const [file, setFile] = useState(undefined);
  const [fileName, setFileName] = useState("NO FILE SELECTED");

  const handleFileChange = (event: any) => {
    setFile(event.target.files[0]);
    setFileName(event.target.files[0].name);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
  };

  return (
    <>
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
    </>
  );
}

export default FormHandler;
