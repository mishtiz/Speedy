const data = [
    {
      id: 1,
      img: "https://www.snitch.co.in/cdn/shop/files/4MSS2826-02-M31.jpg?v=1712311181&width=1800",
      brand: "SNITCH",
      detail:
        "PLAID GRID BABY PINK CHECKS SHIRT",
      total: 6799,
      dis: 79,
      price: 1629.0,
    },
    {
      id: 2,
      img: "https://www.snitch.co.in/cdn/shop/files/4MST2268-05-M30.jpg?v=1712402945&width=1800",
      brand: "SNITCH",
      detail:
        "TACTILE BEIGE TEXTURED T-SHIRT",
      total: 6799,
      dis: 79,
      price: 1629.0,
    },
    {
      id: 3,
      img: "https://www.snitch.co.in/cdn/shop/files/4MSS2769-05-M18.jpg?v=1712230941&width=1800",
      brand: "SNITCH",
      detail:
        "COSMIC CRUSH BLACK SELF STRIPE SHIRT",
      total: 6799,
      dis: 79,
      price: 1629.0,
    },
    {
      id: 4,
      img: "https://www.snitch.co.in/cdn/shop/files/4MSK8580-01-M35_ecf63950-6cd5-4fcb-bb4a-510af6c93230.jpg?v=1712383020&width=1800",
      brand: "SNITCH",
      detail:
        "WILD ENOUGH BROWN OVERSHIRT",
      total: 6799,
      dis: 79,
      price: 1629.0,
    },
    {
      id: 5,
      img: "https://www.snitch.co.in/cdn/shop/files/4MSD3664-03-3222.jpg?v=1712041539&width=1800",
      brand: "SNITCH",
      detail:
        "PULL ON ICE BLUE BAGGY FIT JEANS",
      total: 1799,
      dis: 79,
      price: 990.0,
    },
    {
      id: 6,
      img: "https://www.snitch.co.in/cdn/shop/files/4MSS2540-05-M24.jpg?v=1711356071&width=1800",
      brand: "SNITCH",
      detail:
        "PLUSH PULSE BLACK OVERSHIRT",
      total: 1799,
      dis: 79,
      price: 990.0,
    },
    {
      id: 7,
      img: "https://www.snitch.co.in/cdn/shop/files/4MSH7012-05-3210.jpg?v=1711516536&width=1800",
      brand: "SNITCH",
      detail:
        "STREAMLINED NAVY SHORTS",
      total: 1799,
      dis: 79,
      price: 990.0,
    },
    {
      id: 8,
      img: "https://www.snitch.co.in/cdn/shop/files/4MSD3670-03-3229.jpg?v=1711692200&width=1800",
      brand: "SNITCH",
      detail:
        "CITY SLICKER MIDNIGHT BLUE BOOT CUT JEANS",
      total: 4799,
      dis: 79,
      price: 1990.0,
    },
    {
      id: 9,
      img: "https://www.snitch.co.in/cdn/shop/files/4MSS2720-13-M42_5bb26cc4-e974-4f4a-b42e-d5a438f5ff5c.jpg?v=1711525632&width=1800",
      brand: "SNITCH",
      detail:
        "IDEALIZED BLACK OVERSHIRT",
      total: 4499,
      dis: 79,
      price: 1590.0,
    },
    {
      id: 10,
      img: "https://www.snitch.co.in/cdn/shop/files/4MST2267-04-M22.jpg?v=1709731508&width=1800",
      brand: "SNITCH",
      detail:
        "PINNACLE MAROON POLO T-SHIRT",
      total: 3799,
      dis: 79,
      price: 1990.0,
    },
  ];

const category = document.querySelector(".tshirt-category");

Array.from(data).map((e)=>{
    return(
        category.innerHTML = category.innerHTML + `<div class="tshirt-list">
        <a href="snitch-product${e.id}.html">
            <img src= ${e.img}
                alt="">
            <h5>${e.brand}</h5>
            <p class="name">${e.detail}</p>
            <p class="dis"><s>RS.${e.total}</s> (${e.dis}% off)</p>
            <p>RS.${e.price}</p>
        </a>
    </div>`
    )
})