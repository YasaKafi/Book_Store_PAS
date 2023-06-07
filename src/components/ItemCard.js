import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import ItemBody from "./ItemBody";
import { format } from "date-fns";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { faSquareXmark } from "@fortawesome/free-solid-svg-icons";
import EditData from "./EditData";

function ItemCard({
  image,
  judul,
  penulis,
  id,
  onDelete,
  deskripsi,
  jumlahHalaman,
  onUpdate,
}) {
  const [editedData, setEditedData] = useState({
    judul,
    image,
    penulis,
    deskripsi,
    jumlahHalaman,
  });

  const [show, setShow] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const createAtFormatted = format(new Date(), "dd MMMM yyyy");

  const handleUpdate = () => {
    console.log("Updated Data:", editedData);
    onUpdate(id, editedData);
  };

  const handleDelete = () => {
    onDelete(id);
  };

  return (
    <>
      <div className="card">
        <>
          <img src={editedData.image} className="images" />
          <div>
            <button className="delete-button" onClick={handleDelete}>
              <FontAwesomeIcon icon={faSquareXmark} />
            </button>
          </div>
          <div className="bottom">
            <h2 className="judul">{editedData.judul}</h2>
            <p className="deskripsi">{editedData.penulis}</p>
            <div className="tools-button">
              <FontAwesomeIcon
                icon={faPenToSquare}
                className="pen"
                onClick={() => setShowEdit(true)}
              />
              <FontAwesomeIcon
                icon={faCircleInfo}
                className="info"
                onClick={() => setShow(true)}
              />
            </div>
          </div>
        </>
      </div>
      <div>
        <ItemBody
          judul={editedData ? editedData.judul : judul}
          penulis={editedData ? editedData.penulis : penulis}
          image={editedData ? editedData.image : image}
          jumlahHalaman={editedData ? editedData.jumlahHalaman : jumlahHalaman}
          createAt={createAtFormatted}
          deskripsi={editedData ? editedData.deskripsi : deskripsi}
          show={show}
          onClose={() => setShow(false)}
        />
      </div>

      <div>
        <EditData
          editedData={editedData}
          setEditedData={setEditedData}
          handleUpdate={handleUpdate}
          showEdit={showEdit}
          onClose={() => setShowEdit(false)}
        />
      </div>
    </>
  );
}

export default ItemCard;
