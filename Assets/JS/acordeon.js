const trigger = document.querySelectorAll('.acordeon .trigger');

trigger.forEach((item) => {
  item.addEventListener('click', () => {
  const acordeon = item.parentElement;
  const isTrigger = acordeon.classList.contains('active');
  if(isTrigger){
    acordeon.classList.remove('active');
  } else {
    acordeon.classList.add('active');
  }
  });
});



