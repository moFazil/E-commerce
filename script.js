const page_container=document.querySelector(".page-container");
const btn=document.querySelector(".btn");
let box = document.querySelectorAll(".box");

function shownotes(){
    page_container.innerHTML = localStorage.getItem("notes");
}
shownotes()
function UpdateStorage(){
    localStorage.setItem("notes",page_container.innerHTML);
}

btn.addEventListener("click",()=>{
    var input=document.createElement("p");
    var img=document.createElement("img");
    input.className="box";
    input.setAttribute("contenteditable","true");
    img.src="img/delete.png";
    page_container.appendChild(input).appendChild(img);
})
page_container.addEventListener("click", function(a){
    if(a.target.tagName === "IMG"){
        a.target.parentElement.remove();   
        UpdateStorage();
    }
    else if(a.target.tagName === "P"){
        notes = document.querySelectorAll(".box");
        notes.forEach(nt => {
            nt.onkeyup = function(){
                UpdateStorage();
            }
        })
    }
})

document.addEventListener("keydown",event =>{
    if(event.key === "Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})