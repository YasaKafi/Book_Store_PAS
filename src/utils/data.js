
//data array
const bookData = () => {
    return[
        {
            id: 1,
            judul: "Blue Lock 01",
            penulis: "Maneyuki Kaneshiro",
            jumlahHalaman: "208",
            deskripsi: "Tahun 2018 timnas Jepang tereliminasi pada putaran per delapan final Piala Dunia. Akibat kegagalan ini, persatuan sepak bola Jepang mendirikan training camp ‘Blue Lock’, mengumpulkan 300 orang penyerang pelajar tingkat SMA supaya Jepang menjadi juara piala dunia. Jinpachi Ego, laki-laki yang menjabat sebagai pelatih, menegaskan, “yang dibutuhkan Jepang itu striker yang penuh keegoisan”. Penyerang yang tidak terkenal, Yoichi Isagi, dan teman-teman penyerang lainnya mengikuti training di mana mereka bersaing satu sama lain, training yang akan mengubah diri mereka menjadi egois!",
            image: "/images/BlueLock1.jpg",
            createAt: "4 Januari 2022",
          },
          {
            id: 2,
            judul: "Doraemon 01",
            penulis: "Fujiko F. Fujio",
            jumlahHalaman: "180",
            deskripsi: "Doraemon adalah judul sebuah manga dan anime yang sangat populer yang dikarang Fujiko F. Fujio sejak 1 Juni 1969 dan berkisah tentang kehidupan seorang anak pemalas kelas 5 sekolah dasar yang bernama Nobita Nobi yang didatangi oleh sebuah robot kucing bernama Doraemon yang datang dari masa depan, yaitu datang dari abad ke-22. Doraemon dikirim untuk menolong Nobita agar keturunan Nobita dapat menikmati kesuksesannya daripada harus menderita dari utang finansial yang akan terjadi pada masa depan yang disebabkan karena kebodohan Nobita.",
            image: "/images/Doraemon01.jpg",
            createAt: "28 Feb 2011",
          },
          {
            id: 3,
            judul: "Semua Untuk Hindia",
            penulis: "Iksaka Banu",
            jumlahHalaman: "172",
            deskripsi: "Tiga belas cerita pendek merentang dari masa pra kedatangan Cornelis de Houtman hingga awal Indonesia merdeka. Masing-masing menggoda kita untuk berimajinasi tentang sejarah Indonesia dari sudut pandang yang khas seperti mantan tentara yang dibujuk membunuh suami kekasih gelapnya, perwira yang dipaksa menembak Von Imhoff, wartawan yang menyaksikan Perang Puputan, inspeksi Indonesia yang berusaha menangkap hantu pencuri beras, administrator perkebunan tembakau Deli yang harus mengusir gundik menjelang kedatangan istri Eropanya, dan nyai yang begitu disayang sang suami tetapi berselingkuh.",
            image: "/images/SemuaUntukHindia.jpg",
            createAt: "25 Mar 2018",
          },
          {
            id: 4,
            judul: "Nusantara",
            penulis: "B.h.m. Vlekke",
            jumlahHalaman: "552",
            deskripsi: "Nusantara merupakan salah satu karya tentang sejarah Indonesia pada kurun pra-kolonial sampai 1941 yang ditulis dengan perspektif komprehensif. Uraiannya kaya ilustrasi. Kendati buku ini terbit pertama pada 1943, banyak hal-hal yang disampaikan oleh Vlekke aktual sampai abad ke-21. Berbeda dengan buku sejarah selebihnya, Vlekke menampilkan proses sejarah Indonesia tanpa terlalu memusatkan proses pada perluasan kolonialisme.",
            image: "/images/Nusantara.jpg",
            createAt: "3 April 2016",
          },
          {
            id: 5,
            judul: "Melangkah",
            penulis: "Js. Khairen",
            jumlahHalaman: "368",
            deskripsi: "Novel karya J. S Khairen yang berjudul Melangkah bertemakan tentang petualangan di Indonesia. Tidak hanya itu, cerita dalam novel ini juga mengutamakan kisah pahlawan. Berbeda dari karya-karya yang sebelumnya, di novel ini Khairen memberi sedikit imajinasi yang ia tanamkan. Terdapat 36 episode dan 5 babak.",
            image: "/images/Melangkah.jpg",
            createAt: "22 Maret 2020",
          },
          {
            id: 6,
            judul: "The Girl who Fell Beneath the Sea",
            penulis: "Axie Oh",
            jumlahHalaman: "296",
            deskripsi: "Badai mematikan telah merusak tanah kelahiran Mina selama beberapa generasi. Banjir menyapu seluruh desa, sementara perang berdarah dikobarkan untuk memperebutkan sumber daya yang tersisa. Masyarakat di desa Mina memercayai bahwa Dewa Laut mengutuk mereka dengan kematian dan keputusasaan. Dalam upaya untuk menenangkan Dewa Laut, setiap tahun seorang gadis cantik dibuang ke laut untuk menjadi pengantin Dewa Laut, dengan harapan suatu hari pengantin sejati akan dipilih dan mengakhiri penderitaan mereka",
            image: "/images/TheGirlwhoFellBeneaththeSea.jpg",
            createAt: "16 Febuari 2023",
          },
          {
            id: 7,
            judul: "AKASHA : Uzumaki",
            penulis: "Ito Junji",
            jumlahHalaman: "648",
            deskripsi: "Uzumaki, atau yang dalam bahasa Jepang memiliki arti spiral merupakan salah satu serial manga dengan genre horor seinen yang dibuat dan diilustrasikan oleh Junji Ito. Uzumaki bercerita mengenai warga Kurôzu-cho, sebuah kota fiksi yang diganggu oleh kutukan supernatural yang melibatkan sprial.",
            image: "/images/Uzumaki.jpg",
            createAt: "28 Mei 2022",
          },
          {
            id: 8,
            judul: "Spy x Family 08",
            penulis: "Endo Tatsuya",
            jumlahHalaman: "210",
            deskripsi: "Di antara jenis buku lainnya, komik memang disukai oleh semua kalangan mulai dari anak kecil hingga orang dewasa. Alasan komik lebih disukai oleh banyak orang karena disajikan dengan penuh dengan gambar dan cerita yang mengasyikan sehingga mampu menghilangkan rasa bosan di kala waktu senggang.",
            image: "/images/SpyxFamily08.jpg",
            createAt: "28 Mei 2022",
          },
          {
            id: 9,
            judul: "Pulang",
            penulis: "Leila S. Chudori",
            jumlahHalaman: "484",
            deskripsi: "Ketika gerakan mahasiswa berkecamuk di Paris, Dimas Suryo, seorang eksil politik Indonesia, bertemu Vivienne Deveraux, mahasiswa yang ikut demonstrasi melawan pemerintahan Prancis. Pada saat yang sama, Dimas menerima kabar dari Jakarta; Hananto Prawiro, sahabatnya, ditangkap tentara dan dinyatakan tewas.",
            image: "/images/Pulang.jpg",
            createAt: "12 November 2021",
          },
          {
            id: 10,
            judul: "The Power Of Habit",
            penulis: "Charles Duhigg",
            jumlahHalaman: "392",
            deskripsi: "Buku karya Charles Duhigg “The Power of Habit” ada buku yang akan membawa kita pembacanya dalam pengendalian diri dan merubah pola pikir kita pembacanya ketika kita dihadapi dan menyikapi suatu keadaan. Charles Duhigg akan menjabarkan secara sistematis suatu sikap atau kebiasaan seseorang melalui sebuah kejadian yang akan terkait dalam diri orang tersebut.",
            image: "/images/ThePowerOfHabit.jpg",
            createAt: "12 November 2021",
          },
          {
            id: 11,
            judul: "Rasina",
            penulis: "Iksaka Banu",
            jumlahHalaman: "616",
            deskripsi: "Tahun 1755. Menjelang kebangkrutan VOC, imperium dagang terbesar di dunia, Jan Aldemaar Staalhart dan Joost Borstveld, sepasang petugas hukum, menemukan diri mereka terseret pusaran arus besar penyelundupan budak dan opium, yang melibatkan sejumlah orang penting di Batavia-Ommelanden.",
            image: "/images/Rasina.jpg",
            createAt: "23 Febuari 2023",
          },
          {
            id: 12,
            judul: "Bui",
            penulis: "Alan Th",
            jumlahHalaman: "428",
            deskripsi: "DIANGKAT dari perjalanan hidup Tyo Pakusadewo, aktor Indonesia yang membintangi lebih dari 70 film, Bui menceritakan satu fragmen penting dalam liku-liku hidup seorang tokoh bernama Paku. Ia pecandu akut, ditangkap polisi setelah bertekad melepaskan diri dari jerat Narkoba.",
            image: "/images/Bui.jpg",
            createAt: "10 Febuari 2023",
          },
          
          
          
          
          
          
    ];
  }

  export {bookData};