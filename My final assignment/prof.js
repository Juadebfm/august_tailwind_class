const sidebar = document.getElementById("sidebar");
const togglemenu = document.getElementById("togglemenu");
const closemenu = document.getElementById("closeMenu");

togglemenu.addEventListener("click", () => {
  togglemenu.classList.add("hideMenu");
  closemenu.classList.add("showClose");
  sidebar.classList.add("show");
});

closemenu.addEventListener("click", () => {
  togglemenu.classList.remove("hideMenu");
  closemenu.classList.remove("showClose");
  sidebar.classList.remove("show");
});
