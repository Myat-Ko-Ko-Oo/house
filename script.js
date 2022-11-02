li= document.querySelectorAll("li")
house = document.querySelectorAll(".house")

array=["red","green","yellow"]


i=0
x=0
li.forEach((el) => {
    

    if(x>=3){
       
   x=0   
 
    }

    el.style.backgroundColor = `${array[x]}`;
    

x++
});

// house.forEach(element => {
   
// });

li.forEach(el=> {

  el.addEventListener("click",()=>{
    document.querySelector(".selected").style.backgroundColor = el.style.getPropertyValue("background-color")
          //el.classList.add("selected_color")
          //color_set()

  })

  });
  
   
house.forEach(el => {
  
  el.addEventListener("click",()=>{
  for(e of house){
    e.classList.remove("selected")
  }
    el.classList.add("selected")
    
  })
});


color_set=()=>{
  
  console.log(document.querySelector(".selected"))

  document.querySelector(".selected").style.backgroundColor = document.querySelector(".selected_color").style.getPropertyValue("background-color")

}