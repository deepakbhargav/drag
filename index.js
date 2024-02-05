let left=document.querySelector(".left");
let right=document.querySelector(".right");
let box=document.querySelectorAll(".box");


box.forEach((list)=>{
  list.addEventListener('dragstart',function(e){
    let selected=e.target;
    console.log(selected)
  
    right.addEventListener('dragover',function(e){
      e.preventDefault();
     })
  
     right.addEventListener('drop',function(e){
      right.appendChild(selected);
      selected=null;
     })
  
  
     left.addEventListener('dragover',function(e){
      e.preventDefault();
     })
  
     left.addEventListener('drop',function(e){
      left.appendChild(selected);
      selected=null;
     })
  
  
  
  
  
  
   })
  
})
