import { useState } from "react";
import DmarcService from "../../services/dmarc.service";
import "./tableMaker.css";
import { ReactElement } from "react";

interface props {
  data: any;
}

function TableMaker({ data }: props) {
  let flattened = [];

  if (data.length) {
    for (const element of data) {
      flattened.push(DmarcService.flattenJson(element, {}, ""));
    }
  } else {
    flattened.push(DmarcService.flattenJson(data, {}, ""));
  }

  const tableHeaders = Object.keys(flattened[0]).map((key: string) => {
    return <th key={key}>{key.replace(/"/g, "")}</th>;
  });

  return (
    <table>
      <thead>
        <tr>{tableHeaders}</tr>
      </thead>
      <tbody>
        {flattened.map((element) => (
          <tr key={JSON.stringify(element)}>
            {Object.values(element).map((value) => (
              <td key={JSON.stringify(Math.random())}>
                {JSON.stringify(value).replace(/"/g, "")}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TableMaker;
