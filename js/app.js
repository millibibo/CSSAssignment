const inputs = document.querySelectorAll('input');

inputs.forEach(input => {
  input.addEventListener('input', function() {
    if (this.value) {
      this.setAttribute('value', this.value);
    } else {
      this.removeAttribute('value');
    }
  });
});
