import React, { useState } from "react";
import CSVReader from "react-csv-reader";
import file from "../../production.csv";
import ProductionTable from "./ProductionTable";

const Home = () => {
  const ITEMS_PER_PAGE = 5;
  const [dataCsv, setDataCsv] = useState([]);
  const [totalData, setTotalData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  const papaparseOptions = {
    header: true,
    dynamicTyping: true,
    skipEmptyLines: true,
    transformHeader: (header) => header.toLowerCase().replace(/\W/g),
  };

  const handleFile = (data, fileInfo) => {
    setTotalData(data);
    // console.log(data, fileInfo);
    setDataCsv(data.splice(0, ITEMS_PER_PAGE));
  };

  console.log(totalData)

  const nextHandler = () => {
    const totalElements = totalData.length;
    const nextPage = currentPage + 1;
    const firstIndex = nextPage * ITEMS_PER_PAGE;
    console.log(nextPage, firstIndex)
    if (firstIndex === totalElements) return;
    setDataCsv(totalData.splice(firstIndex, ITEMS_PER_PAGE));
    setCurrentPage(nextPage)

    console.log("next");
  };

  const prevHandler = () => {
    console.log("prev");
  };

  return (
    <>
      <label htmlFor="csvInput" style={{ display: "block" }}>
        tabla uno
      </label>
      <div className="container">
        <CSVReader
          cssClass="react-csv-input"
          label="Select CSV with secret Death Star statistics"
          onFileLoaded={handleFile}
          parserOptions={papaparseOptions}
        />
        <ProductionTable
          nextHandler={nextHandler}
          prevHandler={prevHandler}
          data={dataCsv}
          columns={[
            "Year",
            "Month",
            "wellAPI",
            "boreID",
            "compSubId",
            "BHP",
            "Qo",
            "Qw",
            "Qg",
            "Qs",
            "CompL",
            "FlowDays",
            "Pressure",
            "Status",
          ]}
        />
        <p>and then open the console</p>
      </div>
    </>
  );
};

export default Home;
