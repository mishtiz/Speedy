const data = [
    {
      id: 1,
      brand: "Levis",
      deatail: "Women 711 Bootcut Skinny Fit High-Rise Light Fade Stretchable Jeans ",
      total: 900,
      dis: 60,
      price: 500,
      img: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/24413218/2023/11/7/fbde6be3-d93d-409f-b9c0-47fe02342d271699357361140-Levis-Women-711-Bootcut-Skinny-Fit-High-Rise-Light-Fade-Stre-1.jpg",
    },
    {
      id: 2,
      brand: "Levis",
      deatail: "Men Self Design Clogs",
      total: 3000,
      dis: 60,
      price: 700,
      img: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/18074918/2022/5/18/5ce8c0f0-b87e-4eac-a829-20cfad5ea1581652873259370-Levis-Men-Blue-Slim-Fit-Light-Fade-Stretchable-Jeans-7971652-1.jpg",
    },
    {
      id: 3,
      brand: "Levis",
      deatail: "Slim Fit Printed Pure Cotton Casual Shirt",
      total: 2000,
      dis: 60,
      price: 700,
      img: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/25756714/2023/11/28/3c13a884-347b-4e88-a8f4-0bbc0a0061f01701172416686-Levis-Slim-Fit-Printed-Pure-Cotton-Casual-Shirt-761170117241-1.jpg",
    },
    {
      id: 4,
      brand: "Levis",
      deatail: "Slim Fit Causal Shirt ",
      total: 3000,
      dis: 60,
      price: 1500,
      img: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/23732544/2023/10/9/66cc76d5-c683-439e-b5e9-7b63b47af4c51696840659911-Levis-Men-Shirts-5921696840659543-1.jpg",
    },
    {
      id: 5,
      brand: "Levis",
      deatail: "Women 711 skinny Fit Jeans",
      total: 3000,
      dis: 60,
      price: 900,
      img: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/25806738/2023/12/13/f4539242-5847-4c7d-939f-e5f90eb80c461702463218183-Levis-Women-Jeans-2291702463217659-1.jpg",
    },
    {
      id: 6,
      brand: "Levis",
      deatail: "Printed Yellow T-shirt",
      total: 500,
      dis: 60,
      price: 300,
      img: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/23479238/2023/6/12/75137ed4-c146-46df-b70b-75e39c88f9cc1686570821321-Levis-Men-Tshirts-8981686570820902-1.jpg",
    },
    {
      id: 7,
      brand: "Levis",
      deatail: "Women Skinny Jeans",
      total: 3000,
      dis: 60,
      price: 1500,
      img: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/25806748/2024/2/21/fe6518d4-07a1-4086-a63f-4effe84bdd661708514414841-Levis-Women-Jeans-7061708514414254-1.jpg",
    },
    {
      id: 8,
      brand: "Levis",
      deatail: "Texture Shoes",
      total: 2000,
      dis: 60,
      price: 500,
      img: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/27066994/2024/1/19/38981d82-9e40-471b-a134-119f1ab027c41705672276265LevisMenPUSneakers1.jpg",
    },
    {
      id: 9,
      brand: "Levis",
      deatail: "Cotton Brand Logo T-shirt",
      total: 900,
      dis: 60,
      price: 700,
      img: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/25758664/2023/11/27/4adc825b-88bb-424f-a99e-7bff4ecfbe871701076826063-Levis-Men-Tshirts-9391701076825723-1.jpg",
    },
    {
      id: 10,
      brand: "Levis",
      deatail: "Blury Jeans",
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