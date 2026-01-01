/* THEME */
const toggle = document.getElementById("themeToggle");
const body = document.body;
if(localStorage.getItem("theme")==="light"){body.classList.add("light");toggle.textContent="🌞";}
toggle.onclick=()=>{
  body.classList.toggle("light");
  const t=body.classList.contains("light")?"light":"dark";
  localStorage.setItem("theme",t);
  toggle.textContent=t==="light"?"🌞":"🌙";
};

/* NAVBAR SCROLL */
const nav=document.getElementById("navbar");
window.addEventListener("scroll",()=>{
  nav.classList.toggle("scrolled",window.scrollY>40);
});

/* TYPING EFFECT */
const words=["Backend Developer","Python Engineer","GenAI Enthusiast","Problem Solver"];
let i=0,j=0,del=false;
const el=document.getElementById("typing");
function type(){
  el.textContent=words[i].slice(0,j);
  if(!del&&j++===words[i].length+5)del=true;
  if(del&&j--===0){del=false;i=(i+1)%words.length;}
  setTimeout(type,del?50:90);
}
type();
