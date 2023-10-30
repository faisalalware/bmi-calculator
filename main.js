// Get form from the document
const form = document.getElementById('myForm')

form.addEventListener('submit', function (e) {
  // This method prevents form submission
  e.preventDefault();

  // Get input values from form
  const name = document.getElementById('name').value;
  const age = parseInt(document.getElementById('age').value);
  const height = parseInt(document.getElementById('height').value);
  const weight = parseInt(document.getElementById('weight').value);

  //Get elements from the document
  const bmiScoreElement = document.getElementById('bmi-score');
  const statusElement = document.getElementById('status');
  const idealWeightElement = document.getElementById('ideal-weight');
  const maintainWeightElement = document.getElementById('maintain-weight');
  const mildWeightLossElement = document.getElementById('mild-weight-loss');
  const moderateWeightLossElement = document.getElementById('moderate-weight-loss');
  const extremeWeightLossElement = document.getElementById('extreme-weight-loss');
  const sedentaryElement = document.getElementById('sedentary');
  const lightlyActiveElement = document.getElementById('lightly-active');
  const moderatelyActiveElement = document.getElementById('moderately-active');
  const activeElement = document.getElementById('active');
  const veryActiveElement = document.getElementById('very-active');

  // Calculate BMI as per Weight & Height value
  const bmi = (weight / ((height * height) / 10000)).toFixed(2);

  // Calculate Ideal Weight as per Height value
  const iw = (22 * ((height * height) / 10000)).toFixed(0);

  // Calculate BMR as per Weight, Height & Age value
  const bmr = (66.47 + (13.75 * weight) + (5.003 * height) - (6.755 * age)).toFixed(0);
  const maintainWeight = (66.47 + (13.75 * weight) + (5.003 * height) - (6.755 * age) + 250).toFixed(0);
  const moderateWeightLoss = (66.47 + (13.75 * weight) + (5.003 * height) - (6.755 * age) - 250).toFixed(0);
  const extremeWeightLoss = (66.47 + (13.75 * weight) + (5.003 * height) - (6.755 * age) - 500).toFixed(0);

  //Calculate AMR as per BMR value
  const sedentary = (bmr * 1.2).toFixed(0);
  const lightlyActive = (bmr * 1.375).toFixed(0);
  const moderatelyActive = (bmr * 1.55).toFixed(0);
  const active = (bmr * 1.725).toFixed(0);
  const veryActive = (bmr * 1.9).toFixed(0);

  // Form validation 
  if (name === '' || age === '' || height === '' || weight === '') {
    alert("Please enter all fields");
    e.preventDefault();
  }
  else if (name === '') {
    alert("Please enter name");
    e.preventDefault();
  }
  else if (age === '') {
    alert("Please enter age");
    e.preventDefault();
  }
  else if (isNaN(age)) {
    alert("Please enter number for age");
    e.preventDefault();
  }
  else if (age < 18 || age > 100) {
    alert("Please enter valid age");
    e.preventDefault();
  }
  else if (height === '') {
    alert("Please enter height");
    e.preventDefault();
  }
  else if (isNaN(height)) {
    alert("Please enter number for height");
    e.preventDefault();
  }
  else if (height < 150 || height > 180) {
    alert("Please enter valid height");
    e.preventDefault();
  }
  else if (weight === '') {
    alert("Please enter weight");
    e.preventDefault();
  }
  else if (isNaN(weight)) {
    alert("Please enter number for weight");
    e.preventDefault();
  }
  else if (weight < 50 || weight > 150) {
    alert("Please enter valid weight");
    e.preventDefault();
  }
  else {
    // Print BMI value
    bmiScoreElement.innerHTML = `${name} your score is ${bmi}`;

    // Print Status as per BMI value
    if (bmi < 16) {
      statusElement.innerHTML = `at the age of ${age} you are Severely Thin`;
    }
    else if (bmi > 16 && bmi < 17) {
      statusElement.innerHTML = `at the age of ${age} your are Moderately Thin`;
    }
    else if (bmi > 17 && bmi < 18.5) {
      statusElement.innerHTML = `at the age of ${age} you are Mildly Thin`;
    }
    else if (bmi > 18.5 && bmi < 25) {
      statusElement.innerHTML = `at the age of ${age} you are in Normal Weight`;
    }
    else if (bmi > 25 && bmi < 30) {
      statusElement.innerHTML = `at the age of ${age} you are Overweight`;
    }
    else if (bmi > 30 && bmi < 35) {
      statusElement.innerHTML = `at the age of ${age} you are Mildly Obese`;
    }
    else if (bmi > 35 && bmi < 40) {
      statusElement.innerHTML = `at the age of ${age} you are Moderately Obese`;
    }
    else if (bmi > 40) {
      statusElement.innerHTML = `at the age of ${age} you are Severely Obese`;
    }

    // Print Ideal Weight
    idealWeightElement.innerHTML = `maintain your weight upto ${iw} kg`;

    // Print BMR value
    maintainWeightElement.innerHTML = `consume ${maintainWeight} calories per day`;
    mildWeightLossElement.innerHTML = `consume ${bmr} calories per day`;
    moderateWeightLossElement.innerHTML = `consume ${moderateWeightLoss} calories per day`;
    extremeWeightLossElement.innerHTML = `consume ${extremeWeightLoss} calories per day`;

    //Print AMR value
    sedentaryElement.innerHTML = `${sedentary} calories per day`;
    lightlyActiveElement.innerHTML = `${lightlyActive} calories per day`;
    moderatelyActiveElement.innerHTML = `${moderatelyActive} calories per day`;
    activeElement.innerHTML = `${active} calories per day`;
    veryActiveElement.innerHTML = `${veryActive} calories per day`;
  }
});
