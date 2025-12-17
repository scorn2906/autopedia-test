$(document).ready(function () {
  // Array of logo image paths
  const logos = [
    "./assets/google.png",
    "./assets/airbnb.png",
    "./assets/creative.png",
    "./assets/shopify.png",
    "./assets/amazon.png",
  ];

  const $list = $(".list-trusted");

  // Loop through logos array and append images
  logos.forEach((logo) => {
    const img = $("<img>").attr("src", logo).attr("alt", "Trusted Logo");
    $list.append(img);
  });
});
