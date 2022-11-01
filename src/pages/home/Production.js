import React, {useState} from "react";
import CSVReader from "react-csv-reader";
import ProductionTable from "./ProductionTable";
import { TableProduction } from "./TableProduction";


const Production = () => {
  const ITEMS_PER_PAGE = 10;
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
    console.log(data);
    setDataCsv(data.splice(0, ITEMS_PER_PAGE));
  };

  const nextHandler = () => {
    const totalElements = totalData.length;
    const nextPage = currentPage + 1;
    const firstIndex = nextPage * ITEMS_PER_PAGE;
    console.log(nextPage, firstIndex);
    if (firstIndex === totalElements) return;
    setDataCsv(totalData.splice(totalData[firstIndex], ITEMS_PER_PAGE));
    setCurrentPage(nextPage);

    console.log("next");
  };

  const prevHandler = () => {
    const prevPage = currentPage - 1;
    const firstIndex = prevPage * ITEMS_PER_PAGE;
    console.log(prevPage, firstIndex);
    if (prevPage < 0) return;

    setDataCsv(totalData.splice(totalData[firstIndex], ITEMS_PER_PAGE));
    setCurrentPage(prevPage);

    console.log("prev");
  };
  return (
    <>
      <CSVReader
        cssClass="react-csv-input"
        label="Select CSV with secret Death Star statistics"
        onFileLoaded={handleFile}
        parserOptions={papaparseOptions}
      />
      <TableProduction data={dataCsv}/>
      {/* <ProductionTable
        nextHandler={nextHandler}
        prevHandler={prevHandler}
        currentPage={currentPage}
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
      /> */}
    </>
  );
};

export default Production;
