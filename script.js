document.addEventListener('DOMContentLoaded', function () {
  const lengthSlider = document.getElementById('lengthSlider');
  const lengthValue = document.getElementById('lengthValue');
  const generateBtn = document.getElementById('generateBtn');
  const passwordDisplay = document.getElementById('passwordDisplay');
  const copyBtn = document.getElementById('copyBtn');
  const copyMessage = document.getElementById('copyMessage');
  
  const includeUppercase = document.getElementById('includeUppercase');
  const includeNumbers = document.getElementById('includeNumbers');
  const includeSymbols = document.getElementById('includeSymbols');
  
  lengthSlider.addEventListener('input', function () {
    lengthValue.innerText = lengthSlider.value;
  });
  
  generateBtn.addEventListener('click', function () {
    const password = generatePassword(lengthSlider.value);
    passwordDisplay.value = password;
  });
  
  copyBtn.addEventListener('click', function () {
    navigator.clipboard.writeText(passwordDisplay.value).then(() => {
      showCopyMessage();
    });
  });
  
  function showCopyMessage() {
    copyMessage.style.display = 'block';
    setTimeout(() => {
      copyMessage.style.display = 'none';
    }, 1000);
  }

  function generatePassword(length) {
    let charset = "abcdefghijklmnopqrstuvwxyz";
    if (includeUppercase.checked) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (includeNumbers.checked) charset += "0123456789";
    if (includeSymbols.checked) charset += "!@#$%^&*()_-+=";
    
    let password = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      password += charset[randomIndex];
    }
    return password;
  }
});
