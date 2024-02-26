import { useState } from "react";
import "./displayReport.css";

import TableMaker from "../tableMakerComponent/tableMaker";

interface props {
  report: any;
}
function DisplayReport({ report }: props) {
  const feedback = report?.feedback;

  const report_metadata = feedback?.report_metadata[0];
  const policy_published = feedback?.policy_published[0];
  const records = feedback?.record;

  const report_metadata_table_data = (
    <TableMaker data={report_metadata}></TableMaker>
  );
  const policy_published_table_data = (
    <TableMaker data={policy_published}></TableMaker>
  );

  const records_table_data = <TableMaker data={records}></TableMaker>;

  return (
    <>
      <h2>report_metadata</h2>
      <div className="table metadata">{report_metadata_table_data}</div>
      <h2>policy_published</h2>
      <div className="table policy_published">
        {policy_published_table_data}
      </div>
      <h2>records</h2>
      <div className="table records">{records_table_data}</div>
    </>
  );
}

export default DisplayReport;
