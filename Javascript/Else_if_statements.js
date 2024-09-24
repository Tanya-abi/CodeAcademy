// I am going to create an Else if statement that suggests activities based on the day of the week and age:

function subForm (event) {
    event.preventDefault();

    const userName = document.getElementById('name').value;

    const userAge = document.getElementById('age').value;

    const weekDay = document.getElementById('day').value;

    const week = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

    const weekEnd = [ "Friday", "Saturday", "Sunday"];

    const displayDiv = document.getElementById('feedback')



    if(userAge > 19 && week.includes(weekDay)) {
        displayDiv.innerHTML = `Hi ${userName}. It is during the week, we suggest you go to work.`;

     } else if (userAge < 18 && week.includes(weekDay)) {
        displayDiv.innerHTML = `Hi ${userName}. It is during the week, we suggest you go to school. Don't be late!!!`;

     } else if (userAge >= 19 && weekEnd.includes(weekDay)) {
        displayDiv.innerHTML = `Hi ${userName}. It is the weekend, let's party, we also suggest hiking, cycling or spending time with family.`;

     } else {
       displayDiv.innerHTML = `Hi ${userName}. We suggest you visit the park, go roller skating or ice skating. `;
     }

    }

    document.querySelector('button').addEventListener('click', subForm);



   function calculate(event) {
      event.preventDefault(); // Prevent form submission
  
      // Get the values of num1, num2, and the operator
      const number1 = parseFloat(document.getElementById("num1").value);
      const number2 = parseFloat(document.getElementById("num2").value);
      const operator = document.getElementById("operators").value;
      const displayfeed = document.getElementById('cal_feedback');
  
      // Check if the numbers are valid
      if (isNaN(number1) || isNaN(number2)) {
          displayfeed.innerHTML = "Please enter valid numbers!";
          return;
      }
  
      // Perform calculation based on the operator
      let result;
      switch (operator) {
          case "+":
              result = number1 + number2;
              break;
          case "-":
              result = number1 - number2;
              break;
          case "*":
              result = number1 * number2;
              break;
          case "/":
              if (number2 === 0) {
                  displayfeed.innerHTML = "Cannot divide by zero!";
                  return;
              }
              result = number1 / number2;
              break;
          default:
              result = "No calculations performed.";
      }
  
      // Display the result
      displayfeed.innerHTML = "Result: " + result;
  }
  
  // Add event listener to the form
  document.getElementById('calcForm').addEventListener('submit', calculate);