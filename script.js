const buttons = document.querySelectorAll(".level-btn");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const topics = button.nextElementSibling;

    if (topics.style.display === "block") {
      topics.style.display = "none";
    } else {
      topics.style.display = "block";
    }
  });
});