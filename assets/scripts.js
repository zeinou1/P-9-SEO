$(document).ready(function () {
  $(".gallery").mauGallery({
    columns: {
      xs: 1,
      sm: 2,
      md: 3,
      lg: 3,
      xl: 3,
    },
    lightBox: true,
    lightboxId: "myAwesomeLightbox",
    showTags: true,
    tagsPosition: "top",
  });
});


const contact = document.querySelector(".contact");

let displayOne = true;
window.addEventListener("scroll", () => {
  console.log(window.scrollY);
  if (window.scrollY > 3709 && displayOne) {
    contact.style.opacity = 1;
    contact.style.transform = "none";
    displayOne = false;
  }
 
});
const closeBtn = document.querySelector("#closeBtn");
closeBtn.addEventListener("click", () => {
  contact.style.opacity = "0";
  contact.style.transform = "translate(700px)";
  displayOne = false;
  console.log("test");
});
