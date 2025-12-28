
  const hamburger = document.querySelector(".hamburger");
  const sidebarMenu = document.querySelector(".sidebar-menu");

  hamburger.addEventListener("click", () => {
    sidebarMenu.classList.toggle("active");
  });

  document.querySelectorAll(".sidebar-menu a").forEach(link => {
    link.addEventListener("click", () => {
      sidebarMenu.classList.remove("active");
    });
  });
