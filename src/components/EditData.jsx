import React, { useState } from "react";

function EditData({ editedData, setEditedData, handleUpdate, showEdit, onClose }) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleChangeFile = (e) => {
    const file = e.target.files[0]; // Mengambil file gambar pertama yang dipilih
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setEditedData((prevData) => ({
          ...prevData,
          image: reader.result, // Mengubah nilai image menjadi URL gambar yang dipilih
        }));
      };
      reader.readAsDataURL(file); // Membaca file sebagai URL gambar
    }
  };

  const handleSubmit = () => {
    setIsSubmitting(true);
    handleUpdate();

    setTimeout(() => {
      setIsSubmitting(false);
      onClose();
    }, 1000); 
  };

  if (!showEdit) {
    return null;
  }

  return (
    <>
      <div className="overlay2">
        <div className="overlay-inner2">
          <div className="box-header">
            <h1>Edit Data Book</h1>
          </div>
          <div className="box-parent">
            <div className="box-left">
              <input
                type="text"
                name="judul"
                className="inputName"
                value={editedData.judul}
                onChange={handleChange}
              />

              <input
                className="inputjumlahHalaman"
                type="number"
                name="jumlahHalaman"
                value={editedData.jumlahHalaman}
                onChange={handleChange}
              />

              <input
                className="inputFile"
                type="file"
                name="image"
                onChange={handleChangeFile}
              />
            </div>

            <div className="box-right">
              <input
                className="inputPenulis"
                type="text"
                name="penulis"
                value={editedData.penulis}
                onChange={handleChange}
              />

              <textarea
                className="inputDeskripsi"
                name="deskripsi"
                value={editedData.deskripsi}
                onChange={handleChange}
              ></textarea>
            </div>
          </div>
          <div className="button-input">
            <button className="save-button" onClick={handleSubmit} disabled={isSubmitting}>
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
            <button className="cancel-button" type="button" onClick={onClose}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditData;
