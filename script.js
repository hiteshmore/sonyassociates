const toggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('.main-nav');
if(toggle){toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',open);});}
document.querySelectorAll('.main-nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
document.querySelectorAll('.faq-item button').forEach(btn=>{
  btn.addEventListener('click',()=>{
    const item=btn.parentElement;
    document.querySelectorAll('.faq-item').forEach(other=>{if(other!==item) other.classList.remove('open');});
    item.classList.toggle('open');
  });
});
document.getElementById('year').textContent=new Date().getFullYear();
