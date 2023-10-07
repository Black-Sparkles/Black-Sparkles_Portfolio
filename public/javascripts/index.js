const textArray = [
  "Software Engineer",
  "Software Engr. Student",
  "UI/UX Designer",
];
const outputElement = document.getElementById("output");
let currentIndex = 0;
let charIndex = 0;

function typeText() {
  const currentText = textArray[currentIndex];
  const typingSpeed = 100; // Change the typing speed (in milliseconds) to adjust the effect

  if (charIndex < currentText.length) {
    const newText = currentText.substring(0, charIndex + 1);
    outputElement.textContent = newText;
    charIndex++;
    setTimeout(typeText, typingSpeed);
  } else {
    setTimeout(() => {
      currentIndex = (currentIndex + 1) % textArray.length;
      charIndex = 0;
      outputElement.textContent = "";
      typeText(); // Call the function again to type the next text
    }, 1000); // Change the pause duration (in milliseconds) to adjust the effect
  }
}

typeText();
