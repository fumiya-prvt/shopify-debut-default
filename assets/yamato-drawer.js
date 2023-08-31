$(function() {
  let elm = document.getElementById('drawer-off');

  elm.addEventListener('click', ()=>{
    let checkbox = document.getElementById('global-nav-flag');
    checkbox.checked = false;
  })
});