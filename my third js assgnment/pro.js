const toggleMenu = document.getElementById("togglemenu");
const closeMenu = document.getElementById("closeMenu");
const sidebar = document.getElementById("sidebar");

toggleMenu.addEventListener("click", () => {
  //   console.log("clicked");
  sidebar.classList.add("show");
  closeMenu.classList.add("showClose");
  toggleMenu.classList.add("hideMenu");
});
closeMenu.addEventListener("click", () => {
  //   console.log("Double clicked");
  sidebar.classList.remove("show");
  closeMenu.classList.remove("showClose");
  toggleMenu.classList.remove("hideMenu");
});
