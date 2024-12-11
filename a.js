// Prevent negative input values
document.querySelectorAll('input[type="number"]').forEach(input => {
  input.addEventListener('input', function() {
    if (this.value < 0) {
      this.value = 0;
    }
  });
});

// Alert on buy button click
document.querySelectorAll('.button__shop--buy').forEach(button => {
  button.addEventListener('click', function() {
    alert('Đã mua');
  });
});
