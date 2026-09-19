document.addEventListener('DOMContentLoaded', () => {
  const profileUser = document.getElementById('profile');
  const userCard = document.getElementById('user-card');

  profileUser.addEventListener('click', (e) => {
    e.stopPropagation();
    userCard.classList.add('user-card--active');
  });

  document.addEventListener('click', (e) => {
    if (!userCard.contains(e.target) && !profileUser.contains(e.target)) {
      userCard.classList.remove('user-card--active');
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && userCard.classList.contains('user-card--active')) {
      userCard.classList.remove('user-card--active');
    }
  });
});