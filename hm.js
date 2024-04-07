const data = [
    {
      id: 1,
      img: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F1e%2Fc8%2F1ec8f1760ed39b1aa38ca43cd600b44d714e95fa.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
      brand: "H&M",
      detail:
        "Tie-belt crêpe dress",
      total: 6799,
      dis: 79,
      price: 1629.0,
    },
    {
      id: 2,
      img: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F19%2Fd3%2F19d3e821481635ccbeffbeffed61ff99ef037bae.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/fullscreen]",
      brand: "H&M",
      detail:
        "Angular sunglasses",
      total: 6799,
      dis: 79,
      price: 1629.0,
    },
    {
      id: 3,
      img: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fdd%2F63%2Fdd63476d0fd9d0d9bd1a0d793553082e1bbd7cba.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/fullscreen]",
      brand: "H&M",
      detail:
        "Regular Fit Worker trousers",
      total: 6799,
      dis: 79,
      price: 1629.0,
    },
    {
      id: 4,
      img: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fa9%2F46%2Fa946abba593947c3d22ac87f5e75c6f29c056fd2.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/fullscreen]",
      brand: "H&M",
      detail:
        "Slim Fit Waffled polo shirt",
      total: 6799,
      dis: 79,
      price: 1629.0,
    },
    {
      id: 5,
      img: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fb0%2F64%2Fb06432d96ea4f7e74e1a09017056ef5d6aa9514c.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
      brand: "H&M",
      detail:
        "Patterned sweatshorts",
      total: 1799,
      dis: 79,
      price: 990.0,
    },
    {
      id: 6,
      img: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F92%2Ff3%2F92f3be619efcafd00ef8fbc4ce7b028302f39df8.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
      brand: "H&M",
      detail:
        "Parachute trousers",
      total: 1799,
      dis: 79,
      price: 990.0,
    },
    {
      id: 7,
      img: "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F8a%2Fee%2F8aee7d4325dd57a34d2be736f73f94b5cad8ab4c.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bladies_blazers%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
      brand: "H&M",
      detail:
        "Linen-blend blazer",
      total: 1799,
      dis: 79,
      price: 990.0,
    },
    {
      id: 8,
      img: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F0e%2F88%2F0e8878d2c789d08c83ea090f6613cc2994019919.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
      brand: "H&M",
      detail:
        "Regular Fit Linen-blend resort shirt",
      total: 4799,
      dis: 79,
      price: 1990.0,
    },
    {
      id: 9,
      img: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F90%2F83%2F90839a8bd3dc8c826ada26b714d9460a7e2725b3.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
      brand: "H&M",
      detail:
        "Printed T-shirt",
      total: 4499,
      dis: 79,
      price: 1590.0,
    },
    {
      id: 10,
      img: "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F45%2Fd3%2F45d3d5cfc2ac92d4dfcd26eeac4d7106bd578519.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
      brand: "H&M",
      detail:
        "Crinkled jersey trousers",
      total: 3799,
      dis: 79,
      price: 1990.0,
    },
  ];

const category = document.querySelector(".tshirt-category");

Array.from(data).map((e)=>{
    return(
        category.innerHTML = category.innerHTML + `<div class="tshirt-list">
        <a href="hm-product${e.id}.html">
            <img src= ${e.img}
                alt="">
            <h5>${e.brand}</h5>
            <p class="name">${e.detail}</p>
            <p class="dis"><s>RS.${e.total}</s> (${e.dis}% off)</p>
            <p>RS.${e.price}</p>
        </a>
    </div>`
    )})