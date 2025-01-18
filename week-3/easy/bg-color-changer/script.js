/** @format */

function changeColor(color) {
  document.body.style.backgroundColor = color;
}

function addColor() {
  const colorInput = document.getElementById("colorInput");
  const colorValue = colorInput.value.trim();
  const errorMessage = document.getElementById("errorMessage");

  // Clear previous error messages
  errorMessage.textContent = "";

  if (!colorValue) {
    errorMessage.textContent = "Please enter a valid color name or HEX code.";
    return;
  }

  // Create a new button
  const newButton = document.createElement("button");
  newButton.textContent = colorValue;
  newButton.style.backgroundColor = colorValue;
  newButton.style.color = isDarkColor(colorValue) ? "white" : "black";
  newButton.onclick = () => changeColor(colorValue);

  // Add the button to the panel
  const buttonPanel = document.getElementById("buttonPanel");
  buttonPanel.appendChild(newButton);

  // Clear the input field
  colorInput.value = "";
}

function isDarkColor(color) {
  // Temporary element to test color brightness
  const tempElem = document.createElement("div");
  tempElem.style.color = color;
  document.body.appendChild(tempElem);
  const computedColor = getComputedStyle(tempElem).color;
  document.body.removeChild(tempElem);

  const rgbValues = computedColor.match(/\\d+/g);
  if (rgbValues) {
    const [r, g, b] = rgbValues.map(Number);
    // Calculate luminance: 0.2126*R + 0.7152*G + 0.0722*B
    const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;
    return luminance < 128; // Return true if color is dark
  }
  return false;
}
