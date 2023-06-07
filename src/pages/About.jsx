import React from "react";
import ItemBody from "../components/ItemBody";

const About = ({ judul, penulis, deskripsi, image, jumlahHalaman, createAt, onClose }) => {
  return (
    <>
      <ItemBody
        judul={judul}
        penulis={penulis}
        deskripsi={deskripsi}
        image={image}
        jumlahHalaman={jumlahHalaman}
        createAt={createAt}
        onClose={onClose}
      />
    </>
  );
};

export default About;
