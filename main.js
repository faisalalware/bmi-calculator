// Get form from the document
const form = document.querySelector('form')

function setError(id, errorMessage) {
  element = document.querySelector(id);
  errorMessage = document.querySelectorAll('error-msg').innerHTML = errorMessage;
}

form.addEventListener('submit', function (e) {
  // This method prevents form from submiting
  e.preventDefault();

  // Get input values from form
  const nameVal = document.querySelector('#name').value;
  const age = parseInt(document.querySelector('#age').value);
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);

  //Get elements from the document
  const results = document.querySelector('#results');
  const status = document.querySelector('#status');
  const idealWeight = document.querySelector('#ideal-weight');
  const maintainWeightElement = document.querySelector('#maintain-weight');
  const mildWeightLossElement = document.querySelector('#mild-weight-loss');
  const moderateWeightLossElement = document.querySelector('#moderate-weight-loss');
  const extremeWeightLossElement = document.querySelector('#extreme-weight-loss');
  const sedentaryElement = document.querySelector('#sedentary');
  const lightlyActiveElement = document.querySelector('#lightly-active');
  const moderatelyActiveElement = document.querySelector('#moderately-active');
  const activeElement = document.querySelector('#active');
  const veryActiveElement = document.querySelector('#very-active');

  // Calculate BMI as per Weight & Height
  const bmi = (weight / ((height * height) / 10000)).toFixed(2);

  // Calculate Ideal Weight as per Height
  const iw = (22 * ((height * height) / 10000)).toFixed(0);

  // Calculate BMR as per Weight, Height & Age
  const bmr = (66.47 + (13.75 * weight) + (5.003 * height) - (6.755 * age)).toFixed(0);
  const maintainWeight = (66.47 + (13.75 * weight) + (5.003 * height) - (6.755 * age) + 250).toFixed(0);
  const moderateWeightLoss = (66.47 + (13.75 * weight) + (5.003 * height) - (6.755 * age) - 250).toFixed(0);
  const extremeWeightLoss = (66.47 + (13.75 * weight) + (5.003 * height) - (6.755 * age) - 500).toFixed(0);

  //Calculate AMR as per BMR
  const sedentary = (bmr * 1.2).toFixed(0);
  const lightlyActive = (bmr * 1.375).toFixed(0);
  const moderatelyActive = (bmr * 1.55).toFixed(0);
  const active = (bmr * 1.725).toFixed(0);
  const veryActive = (bmr * 1.9).toFixed(0);
  console.log(veryActive);

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
    // Print BMI value
    results.innerHTML = `${nameVal} your score is ${bmi}`;

    // Print BMR value
    maintainWeightElement.innerHTML = `Consume ${maintainWeight} calories per day`;
    mildWeightLossElement.innerHTML = `Consume ${bmr} calories per day`;
    moderateWeightLossElement.innerHTML = `Consume ${moderateWeightLoss} calories per day`;
    extremeWeightLossElement.innerHTML = `Consume ${extremeWeightLoss} calories per day`;

    //Print AMR Value
    sedentaryElement.innerHTML = `${sedentary} calories per day`;
    lightlyActiveElement.innerHTML = `${lightlyActive} calories per day`;
    moderatelyActiveElement.innerHTML = `${moderatelyActive} calories per day`;
    activeElement.innerHTML = `${active} calories per day`;
    veryActiveElement.innerHTML = `${veryActive} calories per day`;

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
