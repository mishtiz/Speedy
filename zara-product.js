const data = [
  {
    id: 1,
    img: "https://static.zara.net/assets/public/45ba/cdaa/76c94401a204/c13606eeb16b/04786085420-a1/04786085420-a1.jpg?ts=1712147537517&w=563",
    brand: "ZARA",
    detail:
      "SHORT DRESS WITH CUTWORK EMBROIDERY",
    total: 6799,
    dis: 79,
    price: 1629.0,
  },
  {
    id: 2,
    img: "https://static.zara.net/assets/public/33be/41c1/548048199382/813e91792f15/04416021620-p/04416021620-p.jpg?ts=1709736269357&w=563",
    brand: "ZARA",
    detail:
      "ABSTRACT PRINT SHIRT",
    total: 6799,
    dis: 79,
    price: 1629.0,
  },
  {
    id: 3,
    img: "https://static.zara.net/assets/public/cdf2/b3f9/8f6e4285bdb6/38c9efed6593/00339607485-100-p/00339607485-100-p.jpg?ts=1710408651628&w=563",
    brand: "ZARA",
    detail:
      "RIBBED KNIT TOP",
    total: 6799,
    dis: 79,
    price: 1629.0,
  },
  {
    id: 4,
    img: "https://static.zara.net/assets/public/ab95/bdbe/a51d4cafaa51/cd472a74f9cf/04152508400-302-p/04152508400-302-p.jpg?ts=1708336134876&w=563",
    brand: "ZARA",
    detail:
      "JEANS WITH DARTS AND POCKETS",
    total: 6799,
    dis: 79,
    price: 1629.0,
  },
  {
    id: 5,
    img: "https://static.zara.net/assets/public/d538/6c0f/fb504d28bb43/4be9863a2330/1685544907397/1685544907397.jpg?ts=1703141123867&w=563",
    brand: "ZARA",
    detail:
      "GARDENIA 30 ML / 1.01 OZ + ORCHID 30 ML / 1.01 OZ",
    total: 1799,
    dis: 79,
    price: 990.0,
  },
//   {
//     id: 6,
//     img: "https://static.zara.net/assets/public/16a7/2828/e99447029d90/082161fbf38f/08228033427-p/08228033427-p.jpg?ts=1710416991654&w=563",
//     brand: "ZARA",
//     detail:
//       "DENIM CROPPED WAISTCOAT",
//     total: 1799,
//     dis: 79,
//     price: 990.0,
//   },
//   {
//     id: 7,
//     img: "https://static.zara.net/photos///2023/I/0/1/p/2286/642/505/2/w/563/2286642505_6_1_1.jpg?ts=1699431983138",
//     brand: "ZARA",
//     detail:
//       "HIGH-WAIST CULOTTE TROUSERS",
//     total: 1799,
//     dis: 79,
//     price: 990.0,
//   },
//   {
//     id: 8,
//     img: "https://static.zara.net/assets/public/0426/80d4/20ed434d9a92/bb12dee6e8a4/04302474250-a1/04302474250-a1.jpg?ts=1706880036984&w=563",
//     brand: "ZARA",
//     detail:
//       "LINEN/COTTON TROUSERS",
//     total: 4799,
//     dis: 79,
//     price: 1990.0,
//   },
//   {
//     id: 9,
//     img: "https://static.zara.net/assets/public/faed/cdad/50c14e56859b/47731c6420fe/07200450104-a1/07200450104-a1.jpg?ts=1711024240555&w=563",
//     brand: "ZARA",
//     detail:
//       "TEXTURED CROCHET SHIRT",
//     total: 4499,
//     dis: 79,
//     price: 1590.0,
//   },
//   {
//     id: 10,
//     img: "https://static.zara.net/assets/public/edb6/8638/3e2443c7b97d/4170424058e9/12200320001-e2/12200320001-e2.jpg?ts=1702919691099&w=563",
//     brand: "ZARA",
//     detail:
//       "CHUNKY SNEAKE",
//     total: 3799,
//     dis: 79,
//     price: 1990.0,
//   },
];

const category = document.querySelector(".tshirt-category");


Array.from(data).map((e) => {
    return (category.innerHTML =
        category.innerHTML +
        `<div class="tshirt-list">
        <a href="zara-product${e.id}.html">
        <img src= ${e.img}
        alt="">
        <h5>${e.brand}</h5>
        <p class="name">${e.detail}</p>
        <p class="dis"><s>RS.${e.total}</s> (${e.dis}% off)</p>
        <p>RS.${e.price}</p>
        </a>
        </div>`);
    });
    
    const product_details = document.querySelector(".row");

    product_details.innerHTML =  `<div class="col1">
    <img src=${data[0].img}
        alt="" width="100%" id="main-image">
</div>
<div class="col2">
    <h5 class="brand">${data[0].brand}</h5>
    <p class="name">${data[0].detail}</p>
    <p class="dis">MRP <s>${data[0].total}</s> (${data[0].dis}% off)</p>
    <p class="mrp">RS.${data[0].price}</p>
    <select>
        <option value="">Select size</option>
        <option value="">6</option>
        <option value="">7</option>
        <option value="">8</option>
        <option value="">9</option>
        <option value="">10</option>
        <option value="">11</option>
        <option value="">12</option>
    </select>
    <button class="btn1" type="submit" onclick="goto(this)" value="cart.html">
        <img src="cart.svg" alt="">
        <p> Add to Cart</p>
    </button>
    <span>
        <h6>Product Details</h6>
        <p>Increase Your Casual Sporty Look With This Beige Color Lace-Up Closure Sports Shoes Brought
            To You By Red Tape. EVA+TPU Bed Sole Gives You All-Day Comfort And Relaxation At Your Feet
            And The SHAJIA+PU Upper Gives You A Great Look With A Classy Experience. The Sporty Looks
            Cooler With The Round Shape Of Toe. <br>
            BENEFITS- <br>
            PERFORMANCE WITH COMFORT : Designed Carefully For Keeping Your Feet Relaxed All Day With
            Great Sporty Looks. <br>
            DURABILITY: These Walking Shoes Are Made Using High-Quality SHAJIA+PU Material Making Them
            Long Lasting & Durable. <br>
            ON GROUND GRIP: Designed To Provide Maximum Ground Stability And Better Traction On
            Different Surfaces Along With Casual Looks. <br>
            SLIP RESISTANT : Made Up Of High-Quality EVA+TPU Soles Thus Giving You A High Intact Grip On
            Your Feet And Negating The Accident Falls And Slips.</p>
        <ul>
            <li>Color : Beige,Grey</li>
            <li>Outer Material : Mesh</li>
            <li>Model name : Walking Sports Shoes for Men | Soft Cushioned Insole, Slip-Resistance</li>
            <li>Ideal for : Men</li>
            <li>Occasion : Sports</li>
            <li>Type For Sports : Walking Shoes</li>
            <li>Net Quantity : 1</li>
            <li>Sole material : EVA</li>
            <li>Closure : Lace-Ups</li>
            <li>Upper Pttern : Textured</li>
        </ul>

    </span>

</div>`
