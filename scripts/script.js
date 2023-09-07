var toggleButtons = document.querySelectorAll(".icon-arrow-down");

toggleButtons.forEach((button) =>
  button.addEventListener("click", () => {
    const targetId = button.getAttribute("data-target");
    const targetElement = document.getElementById(targetId);
    if (targetElement.style.display === "none") {
      targetElement.style.display = "block";
    } else {
      targetElement.style.display = "none";
    }
  })
);

const iconArrows = document.querySelectorAll(".icon-arrow-down");
