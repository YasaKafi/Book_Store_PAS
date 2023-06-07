import React, { useState } from "react";

const InputData = ({show, onClose, addData, }) => {
  const [judul, setJudul] = useState("");
  const [penulis, setPenulis] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [jumlahHalaman, setJumlahHalaman] = useState("");
  const [createAt, setCreateAt] = useState("");
  const [image, setImage] = useState(null);

  const onjumlahHalamanChangeEventHandler = (event) => {
    setJumlahHalaman(event.target.value);
  };

  const onNameChangeEventHandler = (event) => {
    setJudul(event.target.value);
  };

  const onPenulisChangeEventHandler = (event) => {
    setPenulis(event.target.value);
  };

  const onDescChangeEventHandler = (event) => {
    setDeskripsi(event.target.value);
  };

  const onImageChangeEventHandler = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const imageUrl = reader.result;
        setImage(imageUrl);
      };
      reader.readAsDataURL(file);
    }
  };

  const onSubmitEventHandler = (event) => {
    event.preventDefault();
    const createdAt = new Date();
    setCreateAt(createdAt);

    if (!judul || !penulis || !deskripsi || !jumlahHalaman || !image) {
      alert("Data harus diisi");
      return;
    }

    addData({ judul, penulis, deskripsi, jumlahHalaman, createAt, image });
    setJudul("");
    setPenulis("");
    setDeskripsi("");
    setJumlahHalaman("");
    setCreateAt("");
    setImage(null);

    setTimeout(() => {
      onClose();
    }, 100);
  };

  if(!show)
    {
        return null;
    }

  return (
    <form className="data-input" onSubmit={onSubmitEventHandler}>
      <div className="overlay2">
          <div className="overlay-inner2">
            <div className="box-header">
              <h1>Add Data Book</h1>
            </div>
            <div className="box-parent">
              <div className="box-left">
                <input
                  className="inputName"
                  type="text"
                  placeholder="judul"
                  value={judul}
                  onChange={onNameChangeEventHandler}
                />

                <input
                  className="inputjumlahHalaman"
                  type="text"
                  placeholder="jumlahHalaman"
                  value={jumlahHalaman}
                  onChange={onjumlahHalamanChangeEventHandler}
                />

                <input
                  className="inputFile"
                  type="file"
                  onChange={onImageChangeEventHandler}
                />
              </div>

              <div className="box-right">

                <input
                  className="inputPenulis"
                  type="text"
                  placeholder="penulis"
                  value={penulis}
                  onChange={onPenulisChangeEventHandler}
                />

                <textarea
                  className="inputDeskripsi"
                  placeholder="deskripsi"
                  value={deskripsi}
                  onChange={onDescChangeEventHandler}
                />
              </div>
            </div>
            <div className="button-input">
              <button className="save-button" type="submit">
                Submit
              </button>
              <button className="cancel-button" type="button" onClick={onClose}>
                Cancel
              </button>
            </div>
          </div>
        </div>
    </form>
    
  );
};

export default InputData;
