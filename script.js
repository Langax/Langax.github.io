const card = document.getElementById("card");

// Ensure 3D perspective on the parent
card.parentElement.style.perspective = "1000px";

card.addEventListener("mousemove", e => {
  const rect = card.getBoundingClientRect();

  // Calculate coordinates relative to center
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  
  const dx = x - rect.width / 2;
  const dy = y - rect.height / 2;

  // Normalize (-1 to 1)
  const nx = dx / (rect.width / 2);
  const ny = dy / (rect.height / 2);

  // Set CSS variables for the tilt
  card.style.setProperty('--rx', `${ny * 10}deg`);
  card.style.setProperty('--ry', `${-nx * 10}deg`);
});

card.addEventListener("mouseleave", () => {
  // Reset variables when mouse leaves
  card.style.setProperty('--rx', '0deg');
  card.style.setProperty('--ry', '0deg');
});