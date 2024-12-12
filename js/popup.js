document.addEventListener('DOMContentLoaded', () => {
  const img = document.querySelector('img[usemap="#radar-map"]');
  const map = document.querySelector('map[name="radar-map"]');
  const areas = Array.from(map.querySelectorAll('area')); // Get all the areas
  
  function updateAreaCoordinates(){
      // Get image dimensions
      const scaleX = img.clientWidth / img.naturalWidth;
      const scaleY = img.clientHeight / img.naturalHeight;
  
      areas.forEach((area, index) => {
          // Get the original coordinates from the html, convert to numbers, and group as pairs
          const originalCoords = area.coords.split(',').map(Number);
          const groupedCoords = [];
          for (let i = 0; i < originalCoords.length; i+=2)
          {
            groupedCoords.push({x: originalCoords[i],y: originalCoords[i+1]});
          }
          
        // Scale and create the new set of scaled coordinates
        const scaledCoords = groupedCoords.map((coord) => {
          return `${Math.round(coord.x * scaleX)},${Math.round(coord.y * scaleY)}`;
        }).join(',');
        area.coords = scaledCoords;
      });
  }

  //initial scaling on page load
  updateAreaCoordinates();
  //Update on resize to make it responsive
  window.addEventListener('resize', updateAreaCoordinates);
});


document.querySelectorAll('area').forEach(area => {
  area.addEventListener('click', function (e) {
      e.preventDefault(); // Prevent default link behavior
      const popupId = this.dataset.popup;
      const popup = document.getElementById(popupId);
      
      popup.classList.add('show');
  });
});

document.querySelectorAll('.close').forEach(closeBtn => {
  closeBtn.addEventListener('click', function () {
    const popup = this.closest('.popup');
    popup.classList.remove('show');
  });
});

window.addEventListener('click', function (e) {
  if (e.target.classList.contains('popup')) {
    e.target.classList.remove('show');
  }
});


document.querySelectorAll(".image-popup-trigger").forEach((trigger) => {
  trigger.addEventListener("click", () => {
      const popup = document.querySelector(".popup");
      popup.classList.add("show"); // Add the 'show' class to display and animate
  });
});

document.querySelector(".popup .close").addEventListener("click", () => {
  const popup = document.querySelector(".popup");
  popup.classList.remove("show"); // Remove the 'show' class to animate and hide
});