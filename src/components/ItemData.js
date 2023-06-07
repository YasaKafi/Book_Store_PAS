import React from "react";
import ItemCard from "./ItemCard";

function ItemData({
  judul,
  penulis,
  image,
  jumlahHalaman,
  deskripsi,
  id,
  onDelete,
  onUpdate,
}) {
  return (
    <div>
      <div>
        <ItemCard
          judul={judul}
          penulis={penulis}
          image={image}
          id={id}
          onDelete={onDelete}
          deskripsi={deskripsi}
          jumlahHalaman={jumlahHalaman}
          onUpdate={onUpdate}
        />
      </div>
    </div>
  );
}

export default ItemData;
