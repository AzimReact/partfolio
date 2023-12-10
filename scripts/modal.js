document.addEventListener("DOMContentLoaded",function() {
  const menuIcon = document.querySelector(".menu-icon");
  const modal = document.getElementById("myModal");
  const closeModal = document.getElementById("closeModal");

  menuIcon.addEventListener("click",function() {
    modal.style.display = "block";
    modal.style.zIndex = '100';
  });

  closeModal.addEventListener("click",function() {
    modal.style.display = "none";
  });

  window.addEventListener("click",function(event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});
