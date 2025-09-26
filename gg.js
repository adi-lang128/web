
document.querySelectorAll(".links a").forEach(link => {
  link.addEventListener("click", () => {
    alert(" " + link.textContent);
  });
});
