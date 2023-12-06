document.addEventListener("DOMContentLoaded",function() {
  const menuIcon = document.querySelector(".menu-icon");
  const modal = document.getElementById("myModal");
  const closeModal = document.getElementById("closeModal");
  const slider = document.querySelector(".swiper-container");

  menuIcon.addEventListener("click",function() {
    modal.style.display = "block";
    slider.style.zIndex = '-1';
  });

  closeModal.addEventListener("click",function() {
    modal.style.display = "none";
    slider.style.zIndex = '1';
  });

  window.addEventListener("click",function(event) {
    if (event.target === modal) {
      modal.style.display = "none";
      slider.style.zIndex = '1';
    }
  });
});
