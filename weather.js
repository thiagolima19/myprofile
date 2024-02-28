// Named function to convert Fahrenheit to Celsius
function fahrenheitToCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

// Anonymous function to convert Celsius to Kelvin
let celsiusToKelvin = function (celsius) {
  return celsius + 273.15;
};

// Function to handle button click event
function convertTemperature() {
  // Get the temperature input value
  let fahrenheitInput = $("#fahrenheit-input").val();

  try {

    // Check if the temperature is a valid number
    if (!/^\d+(\.\d+)?$/.test(fahrenheitInput)) {
      throw new Error("Invalid temperature. Please enter a valid number.");
    }
    // Parse the input to a number
    let fahrenheit = parseFloat(fahrenheitInput);

    // Convert Fahrenheit to Celsius
    let celsius = fahrenheitToCelsius(fahrenheit);

    // Convert Celsius to Kelvin using the anonymous function
    let kelvin = celsiusToKelvin(celsius);

    // Display the results
    $("#fahrenheit-input").css("border", "none");
    $("#celsius-value").html(celsius.toFixed(2) + "&deg;C");
    $("#kelvin-value").html(kelvin.toFixed(2) + "&deg;K");

    // Clear any previous error messages
    $("#error-message").text("");
  } catch (error) {
    // Display validation message for invalid input
    $("#error-message").text(error.message);
    $("#fahrenheit-input").css("border", "2px solid var(--tag-color)");
    
    // Clear previous results
    $("#celsius-value").text("");
    $("#kelvin-value").text("");
  }
}
