function showScreen(screenNumber) {

  const screens = document.querySelectorAll('.screen');
  screens.forEach(screen => screen.classList.add('hidden'));


  const targetScreen = document.getElementById(`screen${screenNumber}`);
  if (targetScreen) {
      targetScreen.classList.remove('hidden');
  }
}
const slider = document.getElementById('slider');
const sliderValue = document.getElementById('sliderValue');



document.getElementById('nameForm').addEventListener('submit', function(event) {
  event.preventDefault();  
  document.getElementById('nameInput').value = ''; 
});
document.getElementById('emailform').addEventListener('submit', function(event) {
  event.preventDefault();  
  document.getElementById('emailInput').value = '';  
});
document.getElementById('datelform').addEventListener('submit', function(event) {
  event.preventDefault();  
  document.getElementById('date').value = '';  
});



