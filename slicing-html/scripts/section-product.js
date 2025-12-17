$(document).ready(function () {
  const products = [
    {
      image: "./assets/products/product-1.svg",
      alt: "App Redesign",
      meta: "App Design – June 20, 2022",
      title: "App Redesign",
      desc: "By information about design the world to the best instructors",
      large: true,
    },
    {
      image: "./assets/products/product-2.png",
      alt: "Landing Page",
      meta: "App Design - June 20, 2022",
      title: "Redesign Channel Website Landing Page",
    },
    {
      image: "./assets/products/product-3.png",
      alt: "Locator App",
      meta: "App Design - June 20, 2022",
      title: "New Locator App For a New Company",
    },
    {
      image: "./assets/products/product-5.png",
      alt: "Rental",
      meta: "App Design - June 20, 2022",
      title: "Rental Rooms Web App Platform",
    },
    {
      image: "./assets/products/product-4.png",
      alt: "Calendar",
      meta: "App Design - June 20, 2022",
      title: "Calendar App for Big SASS Company",
    },
  ];

  const $grid = $(".grid");

  products.forEach((item) => {
    const $card = $("<div>").addClass("card");

    if (item.large) {
      $card.addClass("large");
    }

    $card.append(`
      <img src="${item.image}" alt="${item.alt}">
      <p class="meta">${item.meta}</p>
      <p class="title">${item.title}</p>
    `);

    if (item.desc) {
      $card.append(`<p class="desc">${item.desc}</p>`);
    }

    $grid.append($card);
  });
});
