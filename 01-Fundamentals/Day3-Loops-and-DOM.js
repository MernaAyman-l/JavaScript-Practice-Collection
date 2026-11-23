// Task 1: Keep asking for numbers until the user enters 0 or the sum exceeds 100.
let sum = 0;
let value;

do {
  const input = prompt("Enter a number (stop when you enter 0 or the sum exceeds 100):");

  // Stop safely if the user presses Cancel.
  if (input === null) break;

  if (input.trim() === "" || !Number.isFinite(Number(input))) {
    alert("Please enter a valid number.");
    continue;
  }

  value = Number(input);
  sum += value;
} while (value !== 0 && sum <= 100);

alert(`The total sum of the entered numbers is: ${sum}`);

// Task 2: Display a welcome message using a selected color.
alert("Welcome to my site!");

const userName = prompt("Please enter your name:");
const allowedColors = ["red", "green", "blue"];
const colorInput = prompt("Choose a color (red, green, or blue):");
const selectedColor = colorInput ? colorInput.trim().toLowerCase() : "";
const safeColor = allowedColors.includes(selectedColor) ? selectedColor : "black";

const welcomeMessage = document.createElement("p");
welcomeMessage.style.color = safeColor;
welcomeMessage.textContent = `Welcome ${userName === null ? "Guest" : userName}`;
document.body.appendChild(welcomeMessage);

// Task 3: Display the message in heading sizes from h1 to h6.
const message = prompt("Enter a message to display:");

if (message !== null) {
  for (let i = 1; i <= 6; i++) {
    const heading = document.createElement(`h${i}`);
    heading.textContent = message;
    document.body.appendChild(heading);
  }
}
