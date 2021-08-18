
let hea =document.querySelector('nav');
let lis=document.getElementById('nab');
let lis2=document.getElementById('nat');
let li= document.getElementById('a1');
let li1= document.getElementById('a2');
let li2= document.getElementById('a3');
let li3= document.getElementById('a4');
window.onscroll=function(){
    if(scrollY==0){
      hea.style.backgroundColor= null;
      lis.style.color='white'; 
      lis2.style.backgroundColor='transparent'; 
      li.style.color='white';
      li1.style.color='white';
      li2.style.color='white';
      li3.style.color='white'; 
        
    }else if(window.scrollY>='200'){  
        hea.style.backgroundColor='white' ;
        lis.style.color='black'; 
        lis2.style.backgroundColor='black'; 
        li.style.color='black'; 
        li1.style.color='black'; 
        li2.style.color='black'; 
        li3.style.color='black'; 

    }
    
}
li.onclick=function(){
  li.style.color='#f4623a'; 
}

li1.onclick=function(){
  li1.style.color='#f4623a'; 
}

li2.onclick=function(){
  li2.style.color='#f4623a'; 
}

li3.onclick=function(){
  li3.style.color='#f4623a'; 
}


