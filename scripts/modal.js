document.addEventListener("DOMContentLoaded",function() {
  const menuIcon = document.querySelector(".menu-icon");
  const modal = document.getElementById("myModal");
  const closeModal = document.getElementById("closeModal");

  menuIcon.addEventListener("click",function() {
    // Открываем модальное окно
    modal.style.display = "block";
  });

  closeModal.addEventListener("click",function() {
    // Закрываем модальное окно
    modal.style.display = "none";
  });

  // Закрываем модальное окно при клике вне его области
  window.addEventListener("click",function(event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});
