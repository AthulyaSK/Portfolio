// Sidebar toggle (already included previously)
const menuToggle = document.getElementById('menuToggle');
const sidebar = document.querySelector('.sidebar');
menuToggle.addEventListener('click', () => {
  sidebar.classList.toggle('active');
});

// Toggle highlights for timeline
document.querySelectorAll('.toggle-details').forEach(button => {
  button.addEventListener('click', () => {
    const details = button.nextElementSibling;
    details.classList.toggle('active');
    button.textContent = details.classList.contains('active') ? 'Hide Highlights' : 'View Highlights';
  });
});

// Project modal functionality

// Sidebar toggle
const menuToggle = document.getElementById("menuToggle");
const sidebar = document.querySelector(".sidebar");

if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    sidebar.classList.toggle("active");
  });
}

// Modal functionality for project details
const projectClickables = document.querySelectorAll(".project-clickable");
const modal = document.getElementById("projectModal");
const modalTitle = document.getElementById("modalTitle");
const modalDesc = document.getElementById("modalDesc");
const modalLink = document.getElementById("modalLink");
const closeModal = document.getElementById("closeModal");

projectClickables.forEach(item => {
  item.addEventListener("click", () => {
    const title = item.dataset.title;
    const desc = item.dataset.desc;
    const link = item.dataset.link;

    modal.style.display = "block";
    modalTitle.textContent = title;
    modalDesc.textContent = desc;

    if (link) {
      modalLink.style.display = "inline-block";
      modalLink.href = link;
    } else {
      modalLink.style.display = "none";
    }
  });
});

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});


