document.addEventListener("DOMContentLoaded", function () {
  const root = document.documentElement;
  const toggleBtn = document.getElementById("theme-toggle");

  if (!toggleBtn) {
    return;
  }

  function updateIcon() {
    const isDark = root.getAttribute("data-theme") === "dark";
    toggleBtn.textContent = isDark ? "☀️" : "🌙";
  }

  updateIcon();

  toggleBtn.addEventListener("click", function () {
    const isDark = root.getAttribute("data-theme") === "dark";
    const next = isDark ? "light" : "dark";

    root.setAttribute("data-theme", next);
    localStorage.setItem("uniqbank-theme", next);

    updateIcon();
  });
});
