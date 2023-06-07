import React, { useState, useEffect } from "react";
import { bookData } from "../utils/data";
import ListData from "./ListData";
import InputData from "./InputData";
import SearchData from "./SearchData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

function ContainerData() {
  const [dataList, setDataList] = useState(bookData());
  const [searchKeyword, setSearchKeyword] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [show, setShow] = useState(false);

  const onDeleteHandler = (id) => {
    const updatedDataList = dataList.filter((data) => data.id !== id);
    setDataList(updatedDataList);
  };

  const handleUpdateData = (id, updatedData) => {
    const updatedList = dataList.map((data) => {
      if (data.id === id) {
        return {
          ...data,
          judul: updatedData.judul,
        };
      }
      return data;
    });

    setDataList(updatedList);
  };

  useEffect(() => {
    const filteredResults = dataList.filter((item) =>
      item.judul.toLowerCase().includes(searchKeyword.toLowerCase())
    );

    setFilteredData(filteredResults);
  }, [dataList, searchKeyword]);

  const onAddDataHandler = ({
    judul,
    penulis,
    jumlahHalaman,
    createAt,
    image,
    deskripsi,
  }) => {
    const newData = {
      id: +new Date(),
      judul,
      penulis,
      jumlahHalaman,
      deskripsi,
      createAt,
      image,
    };
    const updatedDataList = [newData, ...dataList];
    setDataList(updatedDataList);
  };

  

  return (
    <>
      <header className="header">
        <div className="header-1">
          <a href="" className="logo">
            <i className="fa-solid fa-book-open"> Bookly</i>
          </a>
          <div className="header-search">
            <SearchData
              dataList={dataList}
              searchKeyword={searchKeyword}
              setSearchKeyword={setSearchKeyword}
            />
          </div>
          <div className="button-add">
            <button
              className="button-74"
              role="button"
              onClick={() => setShow(true)}
            >
              <i className="fas fa-file-circle-plus"></i> Add Data
            </button>
          </div>
        </div>

        <div className="search-container">
          {searchKeyword && filteredData.length > 0 && (
            <div className="search-results">
              {/* Tampilkan hasil pencarian */}
              {filteredData.map((item) => (
                <div key={item.id} className="search-item">
                  <img
                    src={item.image}
                    alt="Book Cover"
                    className="search-item-image"
                  />
                  <span>{item.judul}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        <div class="header-2">
          <div class="navbar">
            <a href="#home">Home</a>
            <a href="#collections">Collections</a>
            <a href="#arrivals">Arrivals</a>
            <a href="#reviews">Reviews</a>
            <a href="#blogs">Blogs</a>
          </div>
        </div>
      </header>
      <section className="home" id="home">
        <div class="row">
          <div class="content">
            <h3>Upto 55% Offers</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              sapiente eos quisquam voluptatibus, cum quod.
            </p>
            <a href="" class="btn">
              Shop Now
            </a>
          </div>

          <Swiper
            className="books-list"
            modules={[Navigation, Pagination, A11y, Autoplay]}
            spaceBetween={10}
            slidesPerView={3}
            autoplay={{ delay: 2500 }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            <SwiperSlide>
              <a href="">
                <img src="/images/book-1.png" alt="Image" />
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="">
                <img src="/images/book-2.png" alt="Image" />
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="">
                <img src="/images/book-3.png" alt="Image" />
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="">
                <img src="/images/book-4.png" alt="Image" />
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="">
                <img src="/images/book-5.png" alt="Image" />
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="">
                <img src="/images/book-6.png" alt="Image" />
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="">
                <img src="/images/book-7.png" alt="Image" />
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="">
                <img src="/images/book-8.png" alt="Image" />
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="">
                <img src="/images/book-9.png" alt="Image" />
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="">
                <img src="/images/book-10.png" alt="Image" />
              </a>
            </SwiperSlide>
            <img src="/images/stand.png" alt="Image" className="stand" />
          </Swiper>
        </div>
      </section>
      <section className="icons-container">
        <div class="icons">
          <i class="fas fa-plane"></i>
          <div class="content">
            <h3>over payment</h3>
            <p>over payment $100</p>
          </div>
        </div>

        <div class="icons">
          <i class="fas fa-lock"></i>
          <div class="content">
            <h3>secure payment</h3>
            <p>secure payment $100</p>
          </div>
        </div>

        <div class="icons">
          <i class="fas fa-headset"></i>
          <div class="content">
            <h3>24/7 support</h3>
            <p>call us anythin</p>
          </div>
        </div>
      </section>

      <section className="collection" id="collections">
        <div className="heading">
          <h2>Collection Books</h2>
        </div>

        <div className="container">
          <ListData
            dataList={dataList}
            onDelete={onDeleteHandler}
            onUpdate={handleUpdateData}
          />
        </div>
      </section>

      <section class="deal">
        <div class="content">
          <h3>Deal Of The Day</h3>
          <h1>Upto 50% Offers</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta,
            vero. Voluptatibus voluptates inventore nulla vel.
          </p>
          <a href="" class="btn">
            Shop Now
          </a>
        </div>

        <div class="image">
          <img src="/images/deal-img.jpg" alt="" />
        </div>
      </section>

      <section class="arrivals" id="arrivals">
        <div class="heading">
          <span>New Arrivals</span>
        </div>

        <Swiper
          className="arrivals-slider"
          modules={[Navigation, Pagination, A11y, Autoplay]}
          spaceBetween={10}
          slidesPerView={3}
          autoplay={{ delay: 2500 }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide>
            <a href="" class="box">
              <div class="image">
                <img src="/images/book-1.png" alt="" />
              </div>
              <div class="content">
                <h3>New Arrivals</h3>
                <div class="price">
                  $15.99 <span>$20.99</span>
                </div>
                <div class="stars">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star-half-alt"></i>
                </div>
              </div>
            </a>
          </SwiperSlide>

          <SwiperSlide>
            <a href="" class="box">
              <div class="image">
                <img src="/images/book-2.png" alt="" />
              </div>
              <div class="content">
                <h3>New Arrivals</h3>
                <div class="price">
                  $15.99 <span>$20.99</span>
                </div>
                <div class="stars">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star-half-alt"></i>
                </div>
              </div>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="" class="box">
              <div class="image">
                <img src="/images/book-3.png" alt="" />
              </div>
              <div class="content">
                <h3>New Arrivals</h3>
                <div class="price">
                  $15.99 <span>$20.99</span>
                </div>
                <div class="stars">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star-half-alt"></i>
                </div>
              </div>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="" class="box">
              <div class="image">
                <img src="/images/book-4.png" alt="" />
              </div>
              <div class="content">
                <h3>New Arrivals</h3>
                <div class="price">
                  $15.99 <span>$20.99</span>
                </div>
                <div class="stars">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star-half-alt"></i>
                </div>
              </div>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="" class="box">
              <div class="image">
                <img src="/images/book-5.png" alt="" />
              </div>
              <div class="content">
                <h3>New Arrivals</h3>
                <div class="price">
                  $15.99 <span>$20.99</span>
                </div>
                <div class="stars">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star-half-alt"></i>
                </div>
              </div>
            </a>
          </SwiperSlide>
        </Swiper>

        <Swiper
          className="arrivals-slider"
          modules={[Navigation, Pagination, A11y, Autoplay]}
          spaceBetween={10}
          slidesPerView={3}
          autoplay={{ delay: 2500 }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide>
            <a href="" class="box">
              <div class="image">
                <img src="/images/book-6.png" alt="" />
              </div>
              <div class="content">
                <h3>New Arrivals</h3>
                <div class="price">
                  $15.99 <span>$20.99</span>
                </div>
                <div class="stars">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star-half-alt"></i>
                </div>
              </div>
            </a>
          </SwiperSlide>

          <SwiperSlide>
            <a href="" class="box">
              <div class="image">
                <img src="/images/book-7.png" alt="" />
              </div>
              <div class="content">
                <h3>New Arrivals</h3>
                <div class="price">
                  $15.99 <span>$20.99</span>
                </div>
                <div class="stars">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star-half-alt"></i>
                </div>
              </div>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="" class="box">
              <div class="image">
                <img src="/images/book-8.png" alt="" />
              </div>
              <div class="content">
                <h3>New Arrivals</h3>
                <div class="price">
                  $15.99 <span>$20.99</span>
                </div>
                <div class="stars">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star-half-alt"></i>
                </div>
              </div>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="" class="box">
              <div class="image">
                <img src="/images/book-9.png" alt="" />
              </div>
              <div class="content">
                <h3>new arrivals</h3>
                <div class="price">
                  $15.99 <span>$20.99</span>
                </div>
                <div class="stars">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star-half-alt"></i>
                </div>
              </div>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="" class="box">
              <div class="image">
                <img src="/images/book-10.png" alt="" />
              </div>
              <div class="content">
                <h3>New Arrivals</h3>
                <div class="price">
                  $15.99 <span>$20.99</span>
                </div>
                <div class="stars">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star-half-alt"></i>
                </div>
              </div>
            </a>
          </SwiperSlide>
        </Swiper>
      </section>

      <section class="reviews" id="reviews">
        <h1 class="heading">
          <span>Client's Reviews</span>
        </h1>

        <div class="reviews-slider">
          <div class="box">
            <img src="/images/pic-1.png" alt="" />
            <h3>John Deo</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
              eligendi amet recusandae perferendis cumque nesciunt.
            </p>

            <div class="stars">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star-half-alt"></i>
            </div>
          </div>

          <div class="box">
            <img src="/images/pic-2.png" alt="" />
            <h3>Nikita Will</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
              eligendi amet recusandae perferendis cumque nesciunt.
            </p>

            <div class="stars">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star-half-alt"></i>
            </div>
          </div>

          <div class="box">
            <img src="/images/pic-3.png" alt="" />
            <h3>Albert John</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
              eligendi amet recusandae perferendis cumque nesciunt.
            </p>

            <div class="stars">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star-half-alt"></i>
            </div>
          </div>
        </div>
      </section>

      <section class="blogs" id="blogs">
        <div class="heading">
          <span>Our Blogs</span>
        </div>

        <div class="blog-slider">
          <div class="box">
            <div class="image">
              <img src="/images/blog-1.jpg" alt="" />
            </div>

            <div class="content">
              <h3>Blog Title Goes Here</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                quaerat, ipsam minima suscipit neque quisquam.
              </p>
              <a href="" class="btn">
                Read More
              </a>
            </div>
          </div>

          <div class="box">
            <div class="image">
              <img src="/images/blog-2.jpg" alt="" />
            </div>

            <div class="content">
              <h3>Blog Title Goes Here</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                quaerat, ipsam minima suscipit neque quisquam.
              </p>
              <a href="" class="btn">
                Read More
              </a>
            </div>
          </div>

          <div class="box">
            <div class="image">
              <img src="/images/blog-3.jpg" alt="" />
            </div>

            <div class="content">
              <h3>Blog Title Goes Here</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                quaerat, ipsam minima suscipit neque quisquam.
              </p>
              <a href="" class="btn">
                Read More
              </a>
            </div>
          </div>
        </div>
      </section>

      <section class="footer">
        <div class="credit">
          Create By <span>Yasa Kafi Razzan</span> | All Rights Reserved
        </div>
      </section>

      <div className="input-data">
        <InputData
          addData={onAddDataHandler}
          show={show}
          onClose={() => setShow(false)}
        />
      </div>
    </>
  );
}

export default ContainerData;
