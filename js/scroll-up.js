(() => {
  const scrollUpBtn = document.querySelector(".btn-up");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 200) {
      scrollUpBtn.style.display = "block";
    } else {
      scrollUpBtn.style.display = "none";
    }
  });

  scrollUpBtn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
})();