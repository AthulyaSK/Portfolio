// Sidebar toggle (already included previously)
const menuToggle = document.getElementById('menuToggle');
const sidebar = document.querySelector('.sidebar');
menuToggle.addEventListener('click', () => {
  sidebar.classList.toggle('active');
});

// Toggle highlights
const toggleButtons = document.querySelectorAll('.toggle-details');
toggleButtons.forEach(button => {
  button.addEventListener('click', () => {
    const details = button.nextElementSibling;
    details.classList.toggle('active');
    button.textContent = details.classList.contains('active') ? 'Hide Highlights' : 'View Highlights';
  });
});

