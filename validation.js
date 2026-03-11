// Menu dropdown toggle for mobile
document.querySelectorAll('.dropbtn').forEach(btn => {
  btn.addEventListener('click', () => {
    let dropdown = btn.nextElementSibling;
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
  });
});

// Close dropdown if clicked outside
window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {
    document.querySelectorAll('.dropdown-content').forEach(dd => {
      dd.style.display = 'none';
    });
  }
}

// Menu dropdown toggle
document.querySelectorAll('.dropbtn').forEach(btn => {
  btn.addEventListener('click', () => {
    let dropdown = btn.nextElementSibling;
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
  });
});

// Close dropdown if clicked outside
window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {
    document.querySelectorAll('.dropdown-content').forEach(dd => {
      dd.style.display = 'none';
    });
  }
}
