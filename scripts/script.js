var toggleButtons = document.querySelectorAll(".icon-arrow-down");

toggleButtons.forEach((button) =>
  button.addEventListener("click", () => {
    const targetId = button.getAttribute("data-target");
    const targetElement = document.getElementById(targetId);

    if (targetElement.classList.contains("open")) {
      targetElement.classList.remove("open");
      button.style.transform = "rotate(0deg)";
      button.style.transition = "transform 0.5s ease";
    } else {
      targetElement.classList.add("open");
      button.style.transform = "rotate(180deg)";
      button.style.transition = "transform 0.5s ease";
    }
  })
);
