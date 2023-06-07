import React from "react";

function ItemBody({show,judul,penulis, deskripsi,image,jumlahHalaman,createAt, onClose}){
    if(!show)
    {
        return null;
    }
    return(
        <>
            <div className="overlay">
                <div className="overlay-inner">
                    <button className="close" onClick={onClose}><i class="fa-sharp fa-solid fa-circle-xmark"></i></button>
                    <div className="inner-box">
                        <div className="boxImage">
                        <img src={image} alt="" />
                        </div>
                        
                        <div className="info">
                            <h1>{judul}</h1>
                            <h3> Penulis : {penulis}</h3>
                            <h4> Jumlah Halaman : {jumlahHalaman}</h4>
                            <h4> Tanggal Terbit : {createAt}</h4>
                            <h3> Deskripsi : </h3>
                            <h5 className="description">{deskripsi}</h5>
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    );
}

export default ItemBody;