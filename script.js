function addRecommendation() {
  let recommendation = document.getElementById("new_recommendation");
  if (recommendation.value.trim() !== "") {
    showPopup(true);
    var element = document.createElement("div");
    element.classList.add("recommendation");
    element.innerHTML = `<span>&#8220;</span>${recommendation.value}<span>&#8221;</span>`;
    document.getElementById("all_recommendations").appendChild(element);
    recommendation.value = "";
  }
}

function showPopup(visible) {
  document.getElementById('popup').style.display = visible ? 'block' : 'none';
}

// Smooth scrolling for navigation
document.querySelectorAll('.topmenu').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Scroll to top button functionality
document.querySelector('.iconbutton').addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
