const toggleButtons = document.querySelectorAll(".icon-arrow-down");
const toggleTexts = document.querySelectorAll(".toggle-text");
var questionTexts = document.querySelectorAll(".question"); // Находим все элементы с классом "question"

let currentOpenButton = null;

toggleButtons.forEach((button, index) =>
  button.addEventListener("click", () => {
    const targetId = button.getAttribute("data-target");
    const targetElement = document.getElementById(targetId);
    const questionElement = button.nextElementSibling; // Получаем следующий элемент после кнопки

    // Проверяем, если есть текущая открытая стрелка
    if (currentOpenButton && currentOpenButton !== button) {
      const currentTargetId = currentOpenButton.getAttribute("data-target");
      const currentTargetElement = document.getElementById(currentTargetId);
      const currentQuestionText = questionTexts[index]; // Получаем соответствующий элемент с классом "question"

      currentTargetElement.classList.remove("open");
      currentOpenButton.classList.remove("closing");
      currentOpenButton.classList.remove("rotated");
      currentQuestionText.classList.remove("bold"); // Убираем выделение жирным
    }

    // Закрываем текущий текст
    if (targetElement.classList.contains("open")) {
      targetElement.classList.remove("open");
      button.classList.remove("closing");
    } else {
      targetElement.classList.add("open");
      button.classList.add("closing");
    }
    questionTexts[index].classList.toggle("bold");

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
