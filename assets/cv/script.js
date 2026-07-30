// Menu mobile
const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.main-nav');
if (toggle && nav){
  toggle.addEventListener('click', () => nav.classList.toggle('open'));
}

// Filtres sur la page Réalisations
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('[data-cats]');
if (filterButtons.length){
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      document.querySelectorAll('.group-title, .group-block').forEach(g => {
        if (filter === 'tous'){ g.style.display = ''; }
      });
      projectCards.forEach(card => {
        const cats = card.dataset.cats.split(' ');
        const show = filter === 'tous' || cats.includes(filter);
        card.style.display = show ? '' : 'none';
      });
      // Masquer les groupes entièrement vides
      document.querySelectorAll('.group-block').forEach(group => {
        const visible = [...group.querySelectorAll('[data-cats]')].some(c => c.style.display !== 'none');
        group.style.display = visible ? '' : 'none';
      });
    });
  });
}
