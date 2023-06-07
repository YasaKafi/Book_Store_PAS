import React from "react";
import ItemData from "./ItemData";

function ListData({ dataList, onDelete, onUpdate }) {
  
  return (
    <div className="list-card">
      {dataList.length == 0 ? (
        <h2>Data Kosong</h2>
      ) : (
        dataList.map((data) => (
          <ItemData
            key={data.id}
            id={data.id}
            dataList={dataList}
            onDelete={onDelete}
            onUpdate={onUpdate}
            {...data}
          />
        ))
      )}
    </div>
  );
}

export default ListData;
