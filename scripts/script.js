const toggleButtons = document.querySelectorAll(".icon-arrow-down");
const toggleTexts = document.querySelectorAll(".toggle-text");
var currentOpenButton = null;

toggleButtons.forEach((button) =>
  button.addEventListener("click", () => {
    const targetId = button.getAttribute("data-target");
    const targetElement = document.getElementById(targetId);

    if (currentOpenButton && currentOpenButton !== button) {
      const currentTargetId = currentOpenButton.getAttribute("data-target");
      const currentTargetElement = document.getElementById(currentTargetId);

      currentTargetElement.classList.remove("open");
      currentOpenButton.classList.remove("closing");
      currentOpenButton.classList.remove("rotated");
    }

    // Закрываем текущий текст
    if (targetElement.classList.contains("open")) {
      targetElement.classList.remove("open");
      button.classList.remove("closing");
    } else {
      targetElement.classList.add("open");
      button.classList.add("closing");
    }

    // Обновляем текущую открытую стрелку
    currentOpenButton = button;

    // if (targetElement.classList.contains("open")) {
    //   targetElement.classList.remove("open");
    //   button.style.transform = "rotate(0deg)";
    //   button.style.transition = "transform 0.5s ease";
    // } else {
    //   targetElement.classList.add("open");
    //   button.style.transform = "rotate(180deg)";
    //   button.style.transition = "transform 0.5s ease";
    // }
  })
);
