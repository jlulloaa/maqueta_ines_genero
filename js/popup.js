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

  
  document.querySelectorAll(".image-popup-trigger").forEach((trigger) => {
    trigger.addEventListener("click", () => {
      const popup = document.querySelector(".popup");
      popup.classList.add("show"); // Add the 'show' class to display and animate
      popup.style.display = "block";
    });
  });
  
  document.querySelector(".popup .close").addEventListener("click", () => {
    const popup = document.querySelector(".popup");
    popup.classList.remove("show"); // Remove the 'show' class to animate and hide
    setTimeout(() => {
      popup.style.display = "none"; // Ensure it's hidden after animation
    }, 300); // Matches the duration of the CSS transition
  });

  document.addEventListener('DOMContentLoaded', () => {
    const img = document.querySelector('img[usemap="#radar-map"]');
    const map = document.querySelector('map[name="radar-map"]');
    const area = map.querySelector('area');
  
    // Get image dimensions
    // const imgWidth = img.naturalWidth;
    // const imgHeight = img.naturalHeight;

    // Get current display width and natural width
    const scaleX = img.clientWidth / img.naturalWidth;
    const scaleY = img.clientHeight / img.naturalHeight;
  
    // Assume the heptagon center is at the middle of the image
    const centerX = imgWidth / 2;
    const centerY = imgHeight / 2;
    const radius = 100; // Adjust as necessary

    // Calculate the heptagon vertices
    const vertices = [];
    for (let i = 0; i < 7; i++) {
      const angle = (2 * Math.PI * i) / 7; // Full circle divided into 7
      const x = Math.round(centerX + radius * Math.cos(angle));
      const y = Math.round(centerY + radius * Math.sin(angle));
      vertices.push(x, y);
    }
  
    // Update the `coords` attribute of the area
    // area.coords = vertices.join(',');
    // Scale each coordinate
    const scaledCoords = vertices.map((value, index) =>
        index % 2 === 0 ? value * scaleX : value * scaleY
        );
    
        area.coords = scaledCoords.join(',');
    
  });