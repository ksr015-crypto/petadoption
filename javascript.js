document.querySelectorAll('.dropbtn').forEach(btn => {
  btn.addEventListener('click', () => {
    let dropdown = btn.nextElementSibling;
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
  });
});

window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {
    document.querySelectorAll('.dropdown-content').forEach(dd => {
      dd.style.display = 'none';
    });
  }
}

document.querySelectorAll('.dropbtn').forEach(btn => {
  btn.addEventListener('click', () => {
    let dropdown = btn.nextElementSibling;
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
  });
});

window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {
    document.querySelectorAll('.dropdown-content').forEach(dd => {
      dd.style.display = 'none';
    });
  }
}
