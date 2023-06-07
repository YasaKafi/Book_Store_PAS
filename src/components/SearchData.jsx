import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function SearchData({
  dataList,
  searchKeyword,
  setSearchKeyword,
}) {
  // Menggunakan useState hook untuk menyimpan filteredData
  const [filteredData, setFilteredData] = useState([]);

  // useEffect hook akan dipanggil setiap kali dataList atau searchKeyword berubah
  useEffect(() => {
    // Filter data berdasarkan input pencarian setiap kali dataList atau searchKeyword berubah
    const filteredResults = dataList.filter((item) =>
      item.judul.toLowerCase().includes(searchKeyword.toLowerCase())
    );
    setFilteredData(filteredResults);
  }, [dataList, searchKeyword]);

  return (
    <>
      <div className="search">
        <form action="" className="search-form">
          <input
            type="search"
            name=""
            placeholder="enter the book title..."
            id="search-box"
            value={searchKeyword}
            onChange={(e) => setSearchKeyword(e.target.value)}
          />
          <label htmlFor="search-box" className="searchIcon">
            <FontAwesomeIcon icon={faSearch} />
          </label>
        </form>
      </div>
    </>
  );
}

export default SearchData;
