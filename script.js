console.log("Connected:");

//======================== Changing the message by showing and hidding by clicking the button=======================//
$(document).ready(function () {
  // Select class of "toggle-button" to distinguish other buttons and double click to activate the button.
  $(".toggle-button").dblclick(function () {
    // What happens when a button under the class is clicked
    $("h2").toggle(); // Toggle all h2 and h3
    $("#customer-list").show(); // show the customer list all the time
  });
});

//Selecting all class under the same class
const paragraphs = document.querySelectorAll(".paragraph-triplets");
// paragraphs[0].style.color = "red";
// paragraphs[1].style.color = "red";
// paragraphs[2].style.color = "red";
// paragraphs[3].style.color = "red";

for (const paragraph of paragraphs) {
  paragraph.style.color = "red";
}

//======================  DOM element retrieval from html in dial box=====================================================================//
const btnOpen = document.querySelector("#openDialog");
const btnClose = document.querySelector("#closeDialog");
const dialog = document.querySelector("#myDialog");
const validateBtn = document.getElementById("validate-btn");
const message = document.getElementById("message");
const emailInput = document.getElementById("input-email");
const passwordInput = document.getElementById("input-password");

//======================= Regular expressions for validation========================================================//
// Email format by reguler expression
const emailRegex = /^\w+@\w+\.\w{2,}$/;

// Password format
const passwordRegex = /^(?=[A-Z])(?=.*\d)[A-Za-z\d'";]{8,}\d$/;

// Event listener for opening the dialog
btnOpen.addEventListener("click", () => {
  dialog.showModal();
});
// Event listener for closing the dialog
btnClose.addEventListener("click", () => {
  dialog.close();
});

// // Fireworks function
function createFirework(x, y) {
  const firework = document.createElement("div");
  firework.className = "firework";
  firework.style.backgroundColor = getRandomColor();
  firework.style.left = `${x}px`;
  firework.style.top = `${y}px`;
  document.body.appendChild(firework);

  // Remove firework after animation ends
  firework.addEventListener("animationend", () => {
    firework.remove();
  });
}

// Validation and dialog close logic
validateBtn.addEventListener("click", function () {
  console.log("Validate button clicked");

  // Get the entered email
  const email = emailInput.value;
  // Get the entered password
  const password = passwordInput.value;

  // Reset message
  message.textContent = "";
  emailInput.style.backgroundColor = "";
  passwordInput.style.backgroundColor = "";

  // Email validation
  if (!emailRegex.test(email)) {
    emailInput.style.width = "500px";
    message.textContent =
      "Invalid email format. Please enter a valid email address.";
    emailInput.style.backgroundColor = "red";
    return; // Stop further validation if email is invalid
  }

  // Password validation (example: must be at least 8 characters)
  if (password.length < 8) {
    message.textContent =
      "Password is too short! It must be at least 8 characters long.";
    passwordInput.style.width = "500px";
    passwordInput.style.backgroundColor = "red";
    return; // Stop further validation if password is invalid
  } else if (!passwordRegex.test(password)) {
    message.textContent =
      "Password must start with an uppercase letter and end with a number.";
    passwordInput.style.width = "200px";
    passwordInput.style.backgroundColor = "yellow";
    return; // Stop further validation if password is invalid
  }

  // Success message
  message.textContent = `Email: ${email}\nPassword is valid! You are authenticated.`;
  passwordInput.style.width = "200px";
  passwordInput.style.backgroundColor = "green";

  // Create fireworks at the center of the dialog
  const rect = dialog.getBoundingClientRect();
  const x = rect.left + rect.width / 2;
  const y = rect.top + rect.height / 2;

  // Create multiple fireworks
  for (let i = 0; i < 10; i++) {
    createFirework(
      x + (Math.random() * 100 - 50),
      y + (Math.random() * 100 - 50)
    );
  }

  // Close the dialog
  dialog.close();
});

// Comment button functionality
document
  .querySelector(".toggle-button")
  .addEventListener("dblclick", function () {
    document
      .querySelectorAll("h2")
      .forEach((h2) => h2.classList.toggle("hidden")); // Toggle display of h2 elements
    document.getElementById("customer-list").style.display = "block"; // Always show customer list
  });

// Color changing logic
function changeColour() {
  const currentColor = document.body.style.backgroundColor;

  if (currentColor === "lightyellow" || currentColor === "") {
    // Change to white if current is lightyellow or empty
    document.body.style.backgroundColor = "white";
  } else {
    // Change to lightyellow otherwise
    document.body.style.backgroundColor = "lightyellow";
  }
}

// Changing multiple colors
// Initial Index for color array as 0
let currentColourIndex = 0;

// Index for color array
const colourArray = [
  "red",
  "lightcoral",
  "orange",
  "yellow",
  "lightgreen",
  "lightblue",
  "thistle",
  "purple",
  "lightpink",
];

// New Colour adding function tool in the original colourArray 
// Function to add a color to the array and set the header color (Global Scope)
function addColorAndSetHeader(newColor) {
    // Add the new color to the colourArray
    colourArray.push(newColor);
    
    // Set the color of the header with ID "header-id" to the new color
    document.getElementById("header-id").style.color = newColor;
  }
  // Example usage: adding blue
  addColorAndSetHeader("blue");
  // Log the last color added to the array
  console.log("Last color added to colourArray:", colourArray[colourArray.length - 1]);

// Change background to current color and Increment index and reset if it exceeds array length
function changeMultiColour() {
  document.body.style.backgroundColor = colourArray[currentColourIndex];

  currentColourIndex = (currentColourIndex + 1) % colourArray.length; // Reset index if it exceeds array length
}

// Arithmetic operations
function performOperation() {
  const num1 = parseFloat(document.getElementById("num1").value); // Get first number
  const num2 = parseFloat(document.getElementById("num2").value); // Get second number
  const operation = document.getElementById("operation").value; // Get selected operation
  let result; // Variable to store result

  // Execute based on the selected operation
  switch (operation) {
    case "add":
      result = num1 + num2; // Addition
      break;
    case "subtract":
      result = num1 - num2; // Subtraction
      break;
    case "multiply":
      result = num1 * num2; // Multiplication
      break;
    case "divide":
      result = num2 !== 0 ? num1 / num2 : "Cannot divide by zero!"; // Division (check for zero division)
      break;
    default:
      result = "Invalid operation"; // Invalid operation message
  }
  // Display result
  document.getElementById("result").textContent = "Result: " + result;
}

// Car payment calculator
function calculateWeeklyPayment() {
  // Get total cost of cars
  const totalCost = parseFloat(document.getElementById("totalCost").value);
  // Get annual interest rate
  const annualInterestRate = parseFloat(
    document.getElementById("interestRate").value
  );

  // Get loan duration in weeks
  const loanDuration = parseInt(document.getElementById("loanDuration").value);
  // Calculate weekly payment
  const weeklyPayment = calculatePayment(
    totalCost,
    annualInterestRate,
    loanDuration
  );
  // Display result of weekly payment in 2 digit float
  document.getElementById("weeklyPaymentResult").textContent =
    "Weekly Payment: $" + weeklyPayment.toFixed(2);
}

function calculatePayment(totalCost, annualInterestRate, loanDuration) {
  // Calculate weekly interest rate (%)
  const weeklyInterestRate = annualInterestRate / 100 / 52;
  // Calculate weekly payment by returning the value
  return (
    (totalCost * weeklyInterestRate) /
    (1 - Math.pow(1 + weeklyInterestRate, -loanDuration))
  );
}

// Customer list management
let customers = [
  {
    surname: "Trump",
    firstname: "Donald",
    phone: "790-123-690",
    email: "donald@example.com",
  },
  {
    surname: "Luxon",
    firstname: "Christopher",
    phone: "123-456-7890",
    email: "christoph@example.com",
  },
  {
    surname: "Ardern",
    firstname: "Jacinda",
    phone: "980-765-4321",
    email: "jacinda@example.com",
  },
];

// Phone number validation
function validatePhoneNumber(phone) {
  const phoneRegex = /^\d{3}-\d{3}-\d{4}$/;
  return phoneRegex.test(phone);
}

// Email validation
function validateEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}

// Character format validation to be used in another function
function formatString(str) {
  const resultOfCleanedString = str
    .trim()
    .toLowerCase()
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
  return resultOfCleanedString;
}

// Add a customer
function addCustomer(surname, firstname, phone, email) {
  if (!validatePhoneNumber(phone)) {
    // Format surname and firstname and assighned the same surname and firstname
    surname = formatString(surname); // Format surname
    firstname = formatString(firstname); // Format firstname

    //Error message alerts for the phone
    alert("Please enter a valid phone number in the format: xxx-xxx-xxxx");
    return;
  } //Error message alerts for the email

  if (!validateEmail(email)) {
    alert("Please enter a valid email address.");
    return;
  } // when surname, firstname, phone, email are not duplicated then

  if (!isDuplicateCustomer(surname, firstname, phone, email)) {
    // Add customer by push method
    customers.push({ surname, firstname, phone, email });
    // Confirmation messages as adding new customer info
    console.log("Customer added:", { surname, firstname, phone, email });
  } else {
    // Duplicate message
    console.log("This customer already exists.");
  }
}

// Check for duplicate customers
function isDuplicateCustomer(surname, firstname, phone, email) {
  return customers.some(
    (customer) =>
      customer.surname === surname &&
      customer.firstname === firstname &&
      customer.phone === phone &&
      customer.email === email
  );
}

// Display the customer list to store fro original customers array into customerList for the data manipuration
function displayCustomers(customerList = customers) {
  const customerListDiv = document.getElementById("customer-list");
  customerListDiv.innerHTML = ""; // Clear existing content

  // Sort customers in an alphabetic order including new added customers
  const sortedCustomers = sortCustomers(customerList);

  // Create HTML for each customer
  for (const customer of sortedCustomers) {
    const customerDiv = document.createElement("div");

    customerDiv.innerHTML = `
            <h3>${formatString(customer.surname)}, ${formatString(
      customer.firstname
    )}</h3>
            <p>${customer.phone}</p>
            <p>${customer.email}</p>
        `;
    // Append customer div to the main div
    customerListDiv.appendChild(customerDiv);
  }
}
// Sort customers by surname and firstname
function sortCustomers(customerList) {
  return customerList.sort((a, b) => {
    const surnameComparison = a.surname.localeCompare(b.surname);
    if (surnameComparison !== 0) {
      // If surnames are different, return comparison result
      return surnameComparison;
    }
    // If surnames are the same, compare firstnames
    return a.firstname.localeCompare(b.firstname);
  });
}

// Event listener for adding a new customer
document
  .getElementById("add-customer-form")
  .addEventListener("submit", function (event) {
    // Prevent default form submission to make refresh the page
    event.preventDefault();

    // Get values from the form
    const surname = document.getElementById("surname").value;
    const firstname = document.getElementById("firstname").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;

    // Add the customer and display the updated list
    addCustomer(surname, firstname, phone, email);
    displayCustomers();
    // Reset the form fields
    this.reset();
  });

// Event listener for the search button
document.getElementById("search-button").addEventListener("click", function () {
  // Get search query
  const query = document
    .getElementById("search-input")
    .value.toLowerCase()
    .trim();

  // Filter customers based on the search query
  const filteredCustomers = customers.filter(
    (customer) =>
      customer.firstname.toLowerCase().includes(query) ||
      customer.surname.toLowerCase().includes(query) ||
      customer.phone.includes(query) ||
      customer.email.toLowerCase().includes(query)
  );

  // Display the filtered customer list
  displayCustomers(filteredCustomers);

  // Show message if no results found
  if (filteredCustomers.length === 0) {
    document.getElementById("customer-list").innerHTML =
      "<p>No results found.</p>";
  }
});

// Initial display of the customer list
displayCustomers();
