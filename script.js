document.addEventListener('DOMContentLoaded', function () {
    const lengthSlider = document.getElementById('lengthSlider');
    const lengthValue = document.getElementById('lengthValue');
    const generateBtn = document.getElementById('generateBtn');
    const passwordDisplay = document.getElementById('passwordDisplay');
    const copyBtn = document.getElementById('copyBtn');
  
    lengthSlider.addEventListener('input', function () {
      lengthValue.innerText = lengthSlider.value;
    });
  
    generateBtn.addEventListener('click', function () {
      const password = generatePassword(lengthSlider.value);
      passwordDisplay.value = password;
    });
  
    copyBtn.addEventListener('click', function () {
      passwordDisplay.select();
      document.execCommand('copy');
      alert('Password copied to clipboard!');
    });
  
    function generatePassword(length) {
      const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_-+=";
      let password = "";
      for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
      }
      return password;
    }
  });
  