// //---------------mark to grade page-----------//

function convertMark() {
  // Get the mark input value
  let markInput = document.querySelector("#markBox").value;

  try {
    if (!/^\d+$/.test(markInput)) {
      throw new Error("Invalid mark. Enter a valid number.");
    }
    // Parse the input to a number
    let mark = parseInt(markInput);

    // Check if the mark is a valid number
    if (isNaN(mark) || mark < 0 || mark > 100) {
      throw new Error("Invalid mark. Enter a number between 0 and 100.");
    }

    // Determine the grade based on the mark
    let grade = "";
    if (mark > 90) {
      grade = "A";
    } else if (mark > 80) {
      grade = "B";
    } else if (mark > 70) {
      grade = "C";
    } else if (mark > 50) {
      grade = "D";
    } else {
      grade = "F";
    }

    // Display the result
    document.querySelector("#markBox").style.border = "none";
    document.querySelector("#result-message").textContent =
      "Result: Grade " + grade;
    document.querySelector("#validation-message").textContent = "";
  } catch (error) {
    // Display validation message for invalid input
    document.querySelector("#markBox").style.border =
      "2px solid var(--tag-color)";
    document.querySelector("#validation-message").textContent = error.message;
    document.querySelector("#result-message").textContent = ""; // Clear result message
  }
}
