(() => {
    const backdrop = document.getElementById("modal-backdrop");
    const openButtons = document.querySelectorAll(".open-modal-btn");
    const closeButtons = document.querySelectorAll(".close-modal-btn");
    let currentModal = null;
    const videoIframe = document.getElementById("youtube-video");
  
    openButtons.forEach(btn => {
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
        forms.forEach(form => form.reset());
        
        currentModal = null;

        // Перезавантажуємо відео при закритті модалки
        if (videoIframe) {
          const src = videoIframe.src;
          videoIframe.src = '';  // Очищаємо src, щоб зупинити відео
          videoIframe.src = src; // Знову встановлюємо src
        }
      }
    }
  
    closeButtons.forEach(btn =>
      btn.addEventListener("click", closeModal)
    );
  
    backdrop.addEventListener("click", closeModal);

    document.querySelectorAll('form input').forEach(input => {
      input.addEventListener('blur', () => {
        if (!input.checkValidity()) {
          input.classList.add('invalid');
          input.reportValidity();
        } else {
          input.classList.remove('invalid');
        }
      });
    });

  })();
