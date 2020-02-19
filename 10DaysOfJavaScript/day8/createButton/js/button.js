let button = document.getElementById('btn');  

button.addEventListener('click', function(){
  button.innerHTML = Number(button.innerHTML) + 1; 
});