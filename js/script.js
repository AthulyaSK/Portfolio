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
const projectCards = document.querySelectorAll('.project-card');
const modal = document.getElementById('projectModal');
const modalTitle = document.getElementById('modalTitle');
const modalDesc = document.getElementById('modalDesc');
const modalLink = document.getElementById('modalLink');
const closeModal = document.getElementById('closeModal');

projectCards.forEach(card => {
  card.addEventListener('click', () => {
    modal.style.display = 'block';
    modalTitle.textContent = card.dataset.title;
    modalDesc.textContent = card.dataset.desc;
    if(card.dataset.link) {
      modalLink.style.display = 'block';
      modalLink.href = card.dataset.link;
    } else {
      modalLink.style.display = 'none';
    }
  });
});

closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', e => {
  if(e.target === modal) {
    modal.style.display = 'none';
  }
});


