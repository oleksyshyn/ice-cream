(() => {
  const backdrop = document.getElementById("modal-backdrop");
  const openButtons = document.querySelectorAll(".open-modal-btn");
  const closeButtons = document.querySelectorAll(".close-modal-btn");
  let currentModal = null;
  let isModalClosing = false;
  const videoIframe = document.getElementById("youtube-video");

  openButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const targetId = btn.getAttribute("data-modal-target");
      const modal = document.getElementById(targetId);

      if (modal) {
        modal.classList.add("active");
        backdrop.classList.add("active");
        currentModal = modal;
      }
    });
  });

  function closeModal() {
    if (currentModal) {
      currentModal.classList.remove("active");
      backdrop.classList.remove("active");

      const forms = currentModal.querySelectorAll("form");
      forms.forEach((form) => {
        form.reset();
        form
          .querySelectorAll("input")
          .forEach((input) => input.classList.remove("invalid"));
      });

      currentModal = null;

      if (videoIframe) {
        const src = videoIframe.src;
        videoIframe.src = ""; 
        videoIframe.src = src; 
      }

      setTimeout(() => {
        isModalClosing = false;
      }, 100);
    }
  }

  closeButtons.forEach((btn) =>
    btn.addEventListener("mousedown", () => {
      isModalClosing = true;
    })
  );

  closeButtons.forEach((btn) => btn.addEventListener("click", closeModal));
  
  backdrop.addEventListener("mousedown", () => {
    isModalClosing = true;
  });

  backdrop.addEventListener("click", closeModal);

  document.querySelectorAll("form").forEach((form) => {
    form.addEventListener("submit", (e) => {
      if (!form.checkValidity()) {
        e.preventDefault();
        form.querySelectorAll("input").forEach((input) => {
          if (!input.checkValidity()) {
            input.classList.add("invalid");
            input.reportValidity();
          } else {
            input.classList.remove("invalid");
          }
        });
      }
    });
  });

  document.querySelectorAll("form input").forEach((input) => {
    input.addEventListener("blur", () => {
      if (isModalClosing) return;

      if (!input.checkValidity()) {
        input.classList.add("invalid");
        input.reportValidity();
      } else {
        input.classList.remove("invalid");
      }
    });

    input.addEventListener("input", () => {
      if (input.checkValidity()) {
        input.classList.remove("invalid");
      }
    });
  });
})();