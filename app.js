const checkbox = document.getElementById('checkbox');
const container = document.getElementById('container');

//theme toggle
checkbox.addEventListener('change', ()=>{
  container.classList.toggle('light');
});