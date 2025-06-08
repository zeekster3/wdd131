function isCardNumberValid(number) {
  return number === '1234123412341234';
}

function displayError(msg) {

  document.querySelector('.errorMsg').innerText = msg;
}

function submitHandler(event) {
  event.preventDefault();

  const cardNumberInput = document.querySelector('#card-number');
  let errorMsg = '';
  const rawNumber = cardNumberInput.value.replace(/\s+/g, ''); // remove spaces


  displayError('');

  
  if (isNaN(rawNumber)) {
    errorMsg += 'Card number is not a valid number\n';
  } else if (!isCardNumberValid(rawNumber)) {
    errorMsg += 'Card number is not a valid card number\n';
  }

  if (errorMsg !== '') {
    displayError(errorMsg);
    return false;
  }

  // They do everything right
  alert('Payment submitted successfully!');
  return true;
}

document.querySelector('#card-form').addEventListener('submit', submitHandler);
