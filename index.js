const d = new Date();
let year = d.getFullYear();
document.getElementById("copyrightTag").innerHTML = "Copyright, Dev Usman " + year;

function ToggleDiv(){
    let dropDiv = document.querySelectorAll(".Surahs");
    console.log(dropDiv);
    let btnVar = document.querySelector("button");

    for(let i=0;i<dropDiv.length;i++){
        if(dropDiv[i].style.display === "none")
        {
            dropDiv[i].style.display = "flex";
            btnVar.setAttribute("class","rotateBtn");
            
        }else{
            dropDiv[i].style.display = "none";
            btnVar.classList.remove("rotateBtn");
        }
    }
    
    
}