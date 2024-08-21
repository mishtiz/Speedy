const data = [
  {
    id: 1,
    brand: "REDTAPE",
    deatail: "Men Polo Collar Pure Cotton T-shirt",
    total: 600,
    dis: 60,
    price: 300,
    img: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/21670032/2023/1/23/27c414c2-90ec-4198-a845-f892a13fcd3c1674473521809RedTapeNavySolid100CottonRoundNeckMensT-Shirt1.jpg",
  },
  {
    id: 2,
    brand: "REDTAPE",
    deatail: "Men Self Design Clogs",
    total: 3000,
    dis: 60,
    price: 700,
    img: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/27870768/2024/2/26/e0a85a79-dfec-43a2-890c-3f15d8c3f1f51708952190092MenComfortableEVAClogs1.jpg",
  },
  {
    id: 3,
    brand: "REDTAPE",
    deatail: "Men Mash Snek",
    total: 6000,
    dis: 60,
    price: 2000,
    img: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/23410026/2023/5/26/89ac85bd-6b9e-4dd2-ab9f-26c96ad704581685109698065RedTapeMenBlueColourblockedPUHigh-TopSneakers1.jpg",
  },
  {
    id: 4,
    brand: "REDTAPE",
    deatail: "Men Mid-Rise Skinny Fit Stretchable Jeans",
    total: 3000,
    dis: 60,
    price: 1500,
    img: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/22617848/2023/4/3/e558b092-721b-4f54-b2f8-9cb73ed58f451680513449365RedTapeMenOliveGreenSkinnyFitStretchableJeans1.jpg",
  },
  {
    id: 5,
    brand: "REDTAPE",
    deatail: "Men Clogs ",
    total: 3000,
    dis: 60,
    price: 900,
    img: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/27962936/2024/3/2/b21d9e36-04ff-4759-a79c-5e66ab2bf2f31709372499334RedTapeMenStripedPUSlip-OnSneakers1.jpg",
  },
  {
    id: 6,
    brand: "REDTAPE",
    deatail: "Cott",
    total: 2000,
    dis: 60,
    price: 700,
    img: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/22183880/2023/3/1/0fb84d61-f4f9-42a3-8f73-422072f649e01677675187047Shirts1.jpg",
  },
  {
    id: 7,
    brand: "REDTAPE",
    deatail: "Women Textured Mesh Sneakers",
    total: 6000,
    dis: 60,
    price: 2000,
    img: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/27391296/2024/2/5/4e136699-dc11-4f10-a01e-9fd12b1ae01d1707145180060RedTapeWomenColourblockedSneakers1.jpg",
  },
  {
    id: 8,
    brand: "REDTAPE",
    deatail: "Men Round Neck Cotton T-shirt",
    total: 6000,
    dis: 60,
    price: 2000,
    img: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/21670022/2023/1/23/9ae6a0ea-2e40-4cc6-9f51-a86de71522371674474426094RedTapeLightOliveSolid100CottonRoundNeckMensT-Shirt1.jpg",
  },
  {
    id: 9,
    brand: "REDTAPE",
    deatail: "Men Perforated Slip Resistant Mid-Top Sneakers",
    total: 6000,
    dis: 60,
    price: 2000,
    img: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/24804432/2023/9/5/6f34b296-a0ba-4c40-ae28-47be8d02c3041693892431669RedTapeMenWhiteSneakers1.jpg",
  },
  {
    id: 10,
    brand: "REDTAPE",
    deatail: "Men Mid-Rise Skinny Fit Clean Look Stretchable Jeans",
    total: 6000,
    dis: 60,
    price: 2000,
    img: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/22617828/2024/1/18/7316ddf3-2b9e-409c-871b-028e5dde88141705568236671-Red-Tape-Men-Mid-Rise-Skinny-Fit-Clean-Look-Stretchable-Jean-1.jpg",
  },
];


const category = document.querySelector(".tshirt-category");

Array.from(data).map((e)=>{
  // console.log(e);
    return(
      category.innerHTML = category.innerHTML + `<div class="tshirt-list">
        <a href="redtape-product${e.id}.html">
            <img src= ${e.img}
                alt="">
            <h5>${e.brand}</h5>
            <p class="name">${e.deatail}</p>
            <p class="dis"><s>RS.${e.total}</s> (${e.dis}% off)</p>
            <p>RS.${e.price}</p>
        </a>
    </div>`
    )
})
