const themeToggle = document.getElementById('themeToggle');
const body = document.body;

const storedTheme = localStorage.getItem('theme');
if (storedTheme === 'light') {
  body.classList.add('light');
}

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    body.classList.toggle('light');
    localStorage.setItem('theme', body.classList.contains('light') ? 'light' : 'dark');
  });
}

const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('#projectsGrid .project-card');

if (filterButtons.length && projectCards.length) {
  filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      filterButtons.forEach((btn) => btn.classList.remove('active'));
      button.classList.add('active');

      const filter = button.dataset.filter;
      projectCards.forEach((card) => {
        const category = card.dataset.category;
        card.style.display = filter === 'all' || category === filter ? 'block' : 'none';
      });
    });
  });
}
