const cont=document.getElementById("container");
const input = document.querySelector("input");
const up = document.querySelector(".icon-upload")



/*cont.addEventListener("click" , (eo)=>{
    if(eo.target.className ==  "icon-trash icon"){
        eo.target.parentElement.parentElement.remove()
    
    }
    else  if(eo.target.className ==  "icon-angry2 icon"){
    
            eo.target.classList.add("dn");
            const heart =` <span class = "icon-heart"> </span> `
            
            eo.target.parentElement.innerHTML+=heart;
            
                
        
            }
    else if(eo.target.className=="icon-star icon"){

        eo.target.classList.add("star");
        cont.prepend(eo.target.parentElement);

    }
       
    else if(eo.target.className=="icon-star icon star"){
        eo.target.classList.remove("star");
        cont.append(eo.target.parentElement);
    }

    else if(eo.target.className ==  "icon-heart"){
        const addAngry = `<span class="icon-trash icon"> </span>
          
        <span class="icon-angry2 icon"> </span>`
        
        eo.target.classList.add("dn");
        
        eo.target.parentElement.innerHTML = addAngry;
        
    }

        })
    
*/


    up.addEventListener("click" , (eo) =>{

    
    
    const task = 
    `<div class="task">
    <span class="icon-star icon"> </span>
    <p>     ${input.value }     </p>

    <div>
      <span class="icon-trash icon"> </span>

      <span class="icon-angry2 icon"> </span>
    </div>
    </div> `

    cont.innerHTML += task
    input.value= ""

})

cont.addEventListener("click" , (eo) => {

switch (eo.target.className) {
    case  "icon-trash icon":
        eo.target.parentElement.parentElement.remove()
        break;
        
    case "icon-angry2 icon":
        eo.target.classList.add("dn");
        const heart =` <span class = "icon-heart"> </span> `
        
        eo.target.parentElement.innerHTML+=heart;
        break;

    case "icon-star icon":
        eo.target.classList.add("star");
        cont.prepend(eo.target.parentElement);

        break;

    case "icon-star icon star":
        eo.target.classList.remove("star");
        cont.append(eo.target.parentElement);
        break;
    case  "icon-heart":
        const addAngry = `<span class="icon-trash icon"> </span>
          
        <span class="icon-angry2 icon"> </span>`
        
        eo.target.classList.add("dn");
        
        eo.target.parentElement.innerHTML = addAngry;
        break;

    default:
        break;
}
})
