const nav=document.getElementById('nav');
addEventListener('scroll',()=>nav.classList.toggle('scrolled',scrollY>40),{passive:true});
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.15});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
const steps=document.getElementById('steps'),bar=document.getElementById('progress');
function prog(){const r=steps.getBoundingClientRect();const p=Math.min(1,Math.max(0,(innerHeight*.7-r.top)/r.height));bar.style.height=(p*(r.height-20))+'px'}
addEventListener('scroll',prog,{passive:true});prog();
const hv=document.querySelector('.hero video');
addEventListener('scroll',()=>{if(scrollY<innerHeight&&hv)hv.style.transform='translateY('+scrollY*.25+'px) scale(1.05)'},{passive:true});