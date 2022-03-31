const btnMobile = document.querySelector('button#btn-mobile')


function toggleMenu(event){
  if (event.type === 'touchstart') event.preventDefault()
  const nav = document.querySelector('nav#nav');
  nav.classList.toggle('active')}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu); /* touchstart: previne o delay na hora do click no mobile... para funcionar tem que verificar if ...evnt.type....

opções de acessibilidade não foi adicionados ainda.


/* Temos opção de criar o evento aqui direto no js pelo addEventListener ou criar pelo HTML usando onClick = ('toggleMenu()) direto na tag... os 2 funcionam.*/