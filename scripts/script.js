const toggleButtons = document.querySelectorAll(".icon-arrow-down");
const toggleLine = document.querySelectorAll(".q-line");
const toggleTexts = document.querySelectorAll(".toggle-text");
const questionTexts = document.querySelectorAll(".question");

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

    if (currentOpenLine && currentOpenLine !== line) {
      const currentTargetId = currentOpenLine.getAttribute("data-target");
      const currentTargetElement = document.getElementById(currentTargetId);
      const currentQuestionText = questionTexts[index];
      const currentToggleButtons = toggleButtons[index];

      currentTargetElement.classList.remove("open");
      currentOpenLine.classList.remove("closing");
      currentQuestionText.classList.remove("bold");
      toggleButtons.forEach((button) => {
        button.classList.remove("closing");
      });
    }

    if (targetElement.classList.contains("open")) {
      targetElement.classList.remove("open");
    } else {
      targetElement.classList.add("open");
    }

    questionTexts[index].classList.toggle("bold");
    toggleButtons[index].classList.toggle("closing");

    currentOpenLine = line;
  });
});
