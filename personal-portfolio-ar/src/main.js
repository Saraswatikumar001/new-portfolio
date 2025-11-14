import './style.css';

async function loadComponent(id, filePath) {
  const el = document.getElementById(id);
  if (el) {
    const res = await fetch(filePath);
    const html = await res.text();
    el.innerHTML = html;
  }
}

// Correct path for Vite (use /src/... )
loadComponent("header", "/src/components/header.html");
loadComponent("footer", "/src/components/footer.html");

// Footer Year
document.addEventListener("DOMContentLoaded", () => {
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
});
