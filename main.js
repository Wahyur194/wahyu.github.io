const galleryImage = document.querySelectorAll("#projects .card");

galleryImage.forEach((img, i) => {
  img.dataset.aos = "fade-down";
  img.dataset.aosDelay = i * 100;
  img.dataset.aosDuration = 1000;
});

AOS.init({
  once: true,
});
