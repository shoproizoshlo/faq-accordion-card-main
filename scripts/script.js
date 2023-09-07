var toggleButtons = document.querySelectorAll(".icon-arrow-down");

toggleButtons.forEach((button) =>
  button.addEventListener("click", () => {
    const targetId = button.getAttribute("data-target");
    const targetElement = document.getElementById(targetId);

    if (
      targetElement.style.display === "none" ||
      targetElement.style.display === ""
    ) {
      targetElement.style.display = "block";
      button.style.transform = "rotate(180deg)";
      button.style.transition = "transform 0.5s ease";
    } else {
      targetElement.style.display = "none";
      button.style.transform = "rotate(0deg)";
      button.style.transition = "transform 0.5s ease";
    }
  })
);
