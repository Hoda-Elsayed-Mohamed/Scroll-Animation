 const contentBoxes = document.querySelectorAll('.content')

 document.addEventListener("scroll", scrollMe)

 scrollMe()

 function scrollMe(){
     contentBoxes.forEach((box)=>{
         let bounding= box.getBoundingClientRect();
         if(
            bounding.top <= (window.innerHeight  || document.documentElement.clientHeight) 
            ){
            box.classList.add('active')
        }else{
            box.classList.remove('active')
         }
        })
 }
