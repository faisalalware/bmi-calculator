// Get form from the document
const form = document.querySelector('form')

function setError(id, errorMessage) {
  element = document.querySelector(id);
  errorMessage = document.querySelectorAll('error-msg').innerHTML = errorMessage;
}

form.addEventListener('submit', function (e) {
  // This method prevents form from submiting
  e.preventDefault();

  // Get form values and elements from the document
  const nameVal = document.querySelector('#name').value;
  const age = document.querySelector('#age').value;
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');
  const status = document.querySelector('#status');
  const idealWeight = document.querySelector('#ideal-weight');

  // Calculate BMI as per Weight & Height
  const bmi = (weight / ((height * height) / 10000)).toFixed(2);

  // Calculate Ideal Weight as per Height
  const iw = (22 * ((height * height) / 10000)).toFixed(0);

  // Form validation  
  if (nameVal === '') {
    results.innerHTML = `Please enter name`;
    // setError('name', 'name cannot be empty');
  }
  else if (age === '') {
    results.innerHTML = `Please enter age`;
  }
  else if (height === '' || height < 0 || isNaN(height)) {
    results.innerHtml = `Please give me valid height ${height}`;
  }
  else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give me valid weight ${weight}`;
  }
  else {
    //Print BMI value
    results.innerHTML = `${nameVal} your score is ${bmi}`;

    // Print Status & Ideal Weight as per BMI & Height
    if (bmi < 16) {
      status.innerHTML = `at the age of ${age} you are Severely Thin`;
      idealWeight.innerHTML = `Maintain your weight upto ${iw} kg`;
    }
    else if (bmi > 16 && bmi < 17) {
      status.innerHTML = `at the age of ${age} your are Moderately Thin`;
      idealWeight.innerHTML = `Maintain your weight upto ${iw} kg`;
    }
    else if (bmi > 17 && bmi < 18.5) {
      status.innerHTML = `at the age of ${age} you are Mildly Thin`;
      idealWeight.innerHTML = `Maintain your weight upto ${iw} kg`;
    }
    else if (bmi > 18.5 && bmi < 25) {
      status.innerHTML = `at the age of ${age} you are in Normal Weight`;
      idealWeight.innerHTML = `Maintain your weight upto ${iw} kg`;
    }
    else if (bmi > 25 && bmi < 30) {
      status.innerHTML = `at the age of ${age} you are Overweight`;
      idealWeight.innerHTML = `Maintain your weight upto ${iw} kg`;
    }
    else if (bmi > 30 && bmi < 35) {
      status.innerHTML = `at the age of ${age} you are Mildly Obese`;
      idealWeight.innerHTML = `Maintain your weight upto ${iw} kg`;
    }
    else if (bmi > 35 && bmi < 40) {
      status.innerHTML = `at the age of ${age} you are Moderately Obese`;
      idealWeight.innerHTML = `Maintain your weight upto ${iw} kg`;
    }
    else if (bmi > 40) {
      status.innerHTML = `at the age of ${age} you are Severely Obese`;
      idealWeight.innerHTML = `Maintain at least ${iw} kg`;
    }
  }

});
