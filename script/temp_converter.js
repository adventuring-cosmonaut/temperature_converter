/** @format */

/* Selecting content on selection page */
const selectionPage = document.querySelector('#selection_page');
const choiceBtnCelcius = document.querySelector('#choice_btn_celcius');
const choiceBtnFahrenheit = document.querySelector('#choice_btn_fahrenheit');

/* Selecting content on convertion page */
const convertionPage = document.querySelector('#convertion_page');
const returnToSelection = document.querySelector('#return_to_selection');
const convertionPageHeader = document.querySelector('#temp_input_header');
let tempConvertBtn = document.querySelector('#convert_btn');
let resultContainer = document.querySelector('#result_container');

/* Giving the buttons navigation and priming for conversion */
function pageChanger() {
  selectionPage.classList.remove('selection_active');
  convertionPage.classList.add('convertion_active');
}

function returnToSelectionFunc() {
  selectionPage.classList.add('selection_active');
  convertionPage.classList.remove('convertion_active');
}

choiceBtnCelcius.addEventListener('click', pageChanger); /* Can you shorthand this?? */
choiceBtnCelcius.addEventListener('click', celciusListener); /* Can you shorthand this?? */

choiceBtnFahrenheit.addEventListener('click', pageChanger); /* Can you shorthand this?? */
choiceBtnFahrenheit.addEventListener('click', fahrenheitListener); /* Can you shorthand this?? */

returnToSelection.addEventListener('click', returnToSelectionFunc);

/* Celcius to Fahrenheit calculation */
const celcius_calculation_full = (degrees_celcius) => {
  let celciusCalc = degrees_celcius * 1.8 + 32;
  return parseFloat(celciusCalc.toFixed(1)) + '&#8457;';
}

/* Fahrenheit to Celcius calculation */
const fahrenheit_calculation_full = (degrees_fahrenheit) => {
  let fahrenheitCalc = (degrees_fahrenheit - 32) / 1.8;
  return parseFloat(fahrenheitCalc.toFixed(1)) + '&#8451;';
}

/* Execution of conversions - celcius to fahrenheit */
const celcius_execution = () => {
  let degree_amount_element = document.querySelector('#temp_input').value;
  try {
    resultContainer.removeChild(resultContainer.lastElementChild);
  } catch (err) {
  } finally {
    let calculated_temperature_c, user_input_number;

    user_input_number = Number.parseFloat(degree_amount_element);

    if (user_input_number < -273) {
      resultContainer.insertAdjacentHTML(
        'afterbegin',
        `<p class="result_text">That's below absolute zero, can't go that low.</p>`
      );
    } else if (user_input_number != Number.parseFloat(degree_amount_element)) {
      resultContainer.insertAdjacentHTML(
        'afterbegin',
        `<p class="result_text">Can't convert letters, please only input numbers.</p>`
      );
    } else {
      calculated_temperature_c = celcius_calculation_full(user_input_number);
      resultContainer.insertAdjacentHTML(
        'afterbegin',
        `<p class="result_text">${calculated_temperature_c}</p>`
      );
    }
  }
}

/* Execution of conversions - fahrenheit to celcius */
const fahrenheit_execution = () => {
  let degree_amount_element = document.querySelector('#temp_input').value;
  try {
    resultContainer.removeChild(resultContainer.lastElementChild);
  } catch (err) {
  } finally {
    let calculated_temperature_f, user_input_number;

    user_input_number = Number.parseFloat(degree_amount_element);

    if (user_input_number < -459) {
      resultContainer.insertAdjacentHTML(
        'afterbegin',
        `<p class="result_text">That's below absolute zero, can't go that low.</p>`
      );
    } else if (user_input_number != Number.parseFloat(degree_amount_element)) {
      resultContainer.insertAdjacentHTML(
        'afterbegin',
        `<p class="result_text">Can't convert letters, please only input numbers.</p>`
      );
    } else {
      calculated_temperature_f = fahrenheit_calculation_full(user_input_number);
      resultContainer.insertAdjacentHTML(
        'afterbegin',
        `<p class="result_text">${calculated_temperature_f}</p>`
      );
    }
  }
}

/* Listening events for choice of conversion */
function celciusListener() {
  try {
    convertionPageHeader.removeChild(convertionPageHeader.firstChild);
  } catch (err) {
  } finally {
    convertionPageHeader.insertAdjacentHTML('afterbegin', 'Input degrees in Celcius');
  }
  tempConvertBtn.removeEventListener('click', fahrenheit_execution);
  tempConvertBtn.addEventListener('click', celcius_execution);
}

function fahrenheitListener() {
  try {
    convertionPageHeader.removeChild(convertionPageHeader.firstChild);
  } catch (err) {
  } finally {
    convertionPageHeader.insertAdjacentHTML('afterbegin', 'Input degrees in Fahrenheit');
  }
  tempConvertBtn.removeEventListener('click', celcius_execution);
  tempConvertBtn.addEventListener('click', fahrenheit_execution);
}
