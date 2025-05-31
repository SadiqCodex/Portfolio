// Responsive Navbar Toggle for Mobile
function setupNavbarToggle() {
  const navbar = document.querySelector('.navbar-main');
  if (!navbar) return;
  // Create hamburger button if not exists
  if (!document.querySelector('.navbar-toggle')) {
    const btn = document.createElement('button');
    btn.className = 'navbar-toggle';
    btn.innerHTML = '<i class="fa fa-bars"></i>';
    btn.style.background = 'none';
    btn.style.border = 'none';
    btn.style.fontSize = '2rem';
    btn.style.color = '#ffd700';
    btn.style.cursor = 'pointer';
    btn.style.display = 'none';
    btn.style.position = 'absolute';
    btn.style.right = '20px';
    btn.style.top = '10px';
    navbar.parentElement.insertBefore(btn, navbar);
    btn.addEventListener('click', function() {
      const tabs = document.querySelector('.tabs-ul');
      if (tabs) {
        tabs.style.display = (tabs.style.display === 'flex' || tabs.style.display === '') ? 'none' : 'flex';
      }
    });
  }
  // Show/hide hamburger on resize
  function handleResize() {
    const btn = document.querySelector('.navbar-toggle');
    const tabs = document.querySelector('.tabs-ul');
    if (window.innerWidth <= 768) {
      if (btn) btn.style.display = 'block';
      if (tabs) tabs.style.display = 'none';
    } else {
      if (btn) btn.style.display = 'none';
      if (tabs) tabs.style.display = 'flex';
    }
  }
  window.addEventListener('resize', handleResize);
  handleResize();
}

document.addEventListener('DOMContentLoaded', function() {
  setupNavbarToggle();
});