$(document).ready(function () {
  const services = [
    {
      iconImg: "./assets/help/help-1.png",
      title: "UI/UX Design",
      desc: "Sometimes features require a short description",
    },
    {
      iconImg: "./assets/help/help-2.png",
      title: "Logo Branding",
      desc: "Sometimes features require a short description",
    },
    {
      iconImg: "./assets/help/help-3.png",
      title: "App Design",
      desc: "Sometimes features require a short description",
    },
    {
      iconImg: "./assets/help/help-4.png",
      title: "Website Design",
      desc: "Sometimes features require a short description",
    },
  ];

  const $services = $(".services");

  services.forEach((service) => {
    const $service = $("<div>").addClass("service");
    const $icon = $("<div>").addClass("icon");

    // icon: image OR text
    if (service.iconImg) {
      $icon.append(`<img src="${service.iconImg}" alt="${service.title}" />`);
    } else {
      $icon.text(service.iconText);
    }

    const $content = $(`
      <div>
        <h4>${service.title}</h4>
        <span>${service.desc}</span>
      </div>
    `);

    $service.append($icon, $content);
    $services.append($service);
  });
});
