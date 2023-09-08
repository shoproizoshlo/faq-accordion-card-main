const toggleButtons = document.querySelectorAll(".icon-arrow-down");
const toggleLine = document.querySelectorAll(".q-line");
const toggleTexts = document.querySelectorAll(".toggle-text");
const questionTexts = document.querySelectorAll(".question"); // Находим все элементы с классом "question"

let currentOpenButton = null;
let currentOpenLine = null;

toggleLine.forEach((line, index) => {
  line.addEventListener("click", () => {
    console.log("click on line");
    const targetId = line.getAttribute("data-target");
    const targetElement = document.getElementById(targetId);

    questionTexts.forEach((question) => {
      question.classList.remove("bold");
    });
    toggleButtons.forEach((button) => {
      button.classList.remove("closing");
    });

    // Проверяем, если есть текущая открытая строка
    if (currentOpenLine && currentOpenLine !== line) {
      const currentTargetId = currentOpenLine.getAttribute("data-target");
      const currentTargetElement = document.getElementById(currentTargetId);
      const currentQuestionText = questionTexts[index]; // Получаем соответствующий элемент с классом "question"
      const currentToggleButtons = toggleButtons[index]; // Получаем соответствующий элемент с классом "icon-arrow-down"

      currentTargetElement.classList.remove("open");
      currentOpenLine.classList.remove("closing");
      currentToggleButtons.classList.remove("rotated");
      currentQuestionText.classList.remove("bold"); // Убираем выделение жирным
    }

    // toggleButtons.forEach((button, index) =>
    //   button.addEventListener("click", () => {
    //     // Проверяем, если есть текущая открытая стрелка
    //     if (currentOpenButton && currentOpenButton !== button) {
    //       const currentTargetId = currentOpenButton.getAttribute("data-target");
    //       const currentTargetElement = document.getElementById(currentTargetId);
    //       const currentQuestionText = questionTexts[index]; // Получаем соответствующий элемент с классом "question"

    //       currentTargetElement.classList.remove("open");
    //       currentOpenButton.classList.remove("closing");
    //       currentOpenButton.classList.remove("rotated");
    //       currentQuestionText.classList.remove("bold"); // Убираем выделение жирным
    //     }

    //     // Обновляем текущую открытую стрелку
    //     currentOpenButton = button;

    // Закрываем текущий текст
    if (targetElement.classList.contains("open")) {
      targetElement.classList.remove("open");
    } else {
      targetElement.classList.add("open");
    }

    questionTexts[index].classList.toggle("bold");
    toggleButtons[index].classList.toggle("closing");

    // Обновляем текущую открытую стрелку
    currentOpenLine = line;
  });
});

//

//

// toggleButtons.forEach((button, index) =>
//   button.addEventListener("click", () => {
//     const targetId = button.getAttribute("data-target");
//     const targetElement = document.getElementById(targetId);

//     questionTexts.forEach((question) => {
//       question.classList.remove("bold");
//     });

//     // Проверяем, если есть текущая открытая стрелка
//     if (currentOpenButton && currentOpenButton !== button) {
//       const currentTargetId = currentOpenButton.getAttribute("data-target");
//       const currentTargetElement = document.getElementById(currentTargetId);
//       const currentQuestionText = questionTexts[index]; // Получаем соответствующий элемент с классом "question"

//       currentTargetElement.classList.remove("open");
//       currentOpenButton.classList.remove("closing");
//       currentOpenButton.classList.remove("rotated");
//       currentQuestionText.classList.remove("bold"); // Убираем выделение жирным
//     }

//     // Закрываем текущий текст
//     if (targetElement.classList.contains("open")) {
//       targetElement.classList.remove("open");
//       button.classList.remove("closing");
//     } else {
//       targetElement.classList.add("open");
//       button.classList.add("closing");
//     }
//     questionTexts[index].classList.toggle("bold");

//     // Обновляем текущую открытую стрелку
//     currentOpenButton = button;
//   })
// );
