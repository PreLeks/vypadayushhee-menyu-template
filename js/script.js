const btn = document.querySelector('[data-dropdown-btn]');
const dropdown = document.querySelector('[data-dropdown]');

if (btn && dropdown) {
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    dropdown.classList.toggle('dropdown--visible');
  });

  document.addEventListener('click', (e) => {
    if (e.target.closest('[data-dropdown-close]') || (!dropdown.contains(e.target) && e.target !== btn)) {
      dropdown.classList.remove('dropdown--visible');
    }
  });
}