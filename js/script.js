// ---------------------------
// Sidebar toggle
// ---------------------------
const menuToggle = document.getElementById('menuToggle');
const sidebar = document.querySelector('.sidebar');
menuToggle.addEventListener('click', () => {
  sidebar.classList.toggle('active');
});

// ---------------------------
// Toggle highlights for timeline
// ---------------------------
document.querySelectorAll('.toggle-details').forEach(button => {
  button.addEventListener('click', () => {
    const details = button.nextElementSibling;
    details.classList.toggle('active');
    button.textContent = details.classList.contains('active')
      ? 'Hide Highlights'
      : 'View Highlights';
  });
});

// ---------------------------
// Modal for PROJECT details
// ---------------------------
const projectClickables = document.querySelectorAll(".project-clickable");
const projectModal = document.getElementById("projectModal");
const modalTitle = document.getElementById("modalTitle");
const modalDesc = document.getElementById("modalDesc");
const modalLink = document.getElementById("modalLink");
const closeModal = document.getElementById("closeModal");

if (projectModal) {
  projectClickables.forEach(item => {
    item.addEventListener("click", () => {
      const title = item.getAttribute("data-title");
      const desc = item.getAttribute("data-desc");
      const link = item.getAttribute("data-link");

      modalTitle.textContent = title;
      modalDesc.textContent = desc;
      if (link) {
        modalLink.style.display = "inline-block";
        modalLink.href = link;
      } else {
        modalLink.style.display = "none";
      }
      projectModal.style.display = "block";
    });
  });

  closeModal.addEventListener("click", () => {
    projectModal.style.display = "none";
  });

  window.addEventListener("click", e => {
    if (e.target === projectModal) projectModal.style.display = "none";
  });

  window.addEventListener("keydown", e => {
    if (e.key === "Escape") projectModal.style.display = "none";
  });
}

// ---------------------------
// Modal for ACCOLADES images
// ---------------------------
const imageModal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImage");
const closeBtn = document.querySelector(".modal .close");

if (imageModal) {
  document.querySelectorAll('.img-card img').forEach(img => {
    img.addEventListener('click', () => {
      imageModal.style.display = "block";
      modalImg.src = img.src;
    });
  });

  closeBtn.onclick = function () {
    imageModal.style.display = "none";
  };

  window.addEventListener("click", e => {
    if (e.target === imageModal) imageModal.style.display = "none";
  });

  window.addEventListener("keydown", e => {
    if (e.key === "Escape") imageModal.style.display = "none";
  });
}
