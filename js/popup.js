document.querySelectorAll('area').forEach(area => {
    area.addEventListener('click', function (e) {
      e.preventDefault(); // Prevent default link behavior
      const popupId = this.dataset.popup;
      document.getElementById(popupId).style.display = 'block';
    });
  });
  
  document.querySelectorAll('.close').forEach(closeBtn => {
    closeBtn.addEventListener('click', function () {
      this.closest('.popup').style.display = 'none';
    });
  });
  
  window.addEventListener('click', function (e) {
    if (e.target.classList.contains('popup')) {
      e.target.style.display = 'none';
    }
  });