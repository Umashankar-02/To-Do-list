var txt=document.getElementById("input")
var btn1=document.getElementById("btn")
var elementadder=document.getElementById("contentadder")
var btn2=document.getElementById("btndte")
function addtxt()
{
    var contentadd=document.createElement("h3")
    contentadd.innerHTML=txt.value +"<button id='btndte' onclick='deleteitem(event)'>DELETE</button>"
       elementadder.insertAdjacentElement("afterend",contentadd)

    contentadd.querySelector("#btndte").style.padding="20px"
     contentadd.querySelector("#btndte").style.backgroundColor="#cd84f1"
     contentadd.querySelector("#btndte").style.borderRadius="250px"
     contentadd.querySelector("#btndte").style.border="5px solid #cd84f1 "
     contentadd.querySelector("#btndte").style.marginLeft="40px"
     contentadd.querySelector("#btndte").style.color="white"
     contentadd.querySelector("#btndte").style.display="flex"
     contentadd.querySelector("#btndte").style.justifyContent="end"
     contentadd.querySelector("#btndte").style.alignItems="end"
      contentadd.style.fontWeight="400"
      contentadd.style.padding="10px"
      contentadd.style.backgroundColor="#7efff5"
      contentadd.style.height="400px auto"
      contentadd.style.width="1300px "
      contentadd.style.display="flex"
      contentadd.style.justifyContent="center"
      contentadd.style.alignItems="center"
      contentadd.style.borderRadius="1px"
      contentadd.style.flexWrap="wrap"
      contentadd.style.border="1px solid black"
      contentadd.style.textIndent="20px"
      contentadd.style.textAlign="justify"
      contentadd.style.marginTop="30px"
      contentadd.style.boxShadow="rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px"
      
      
        

}

function deleteitem()
{
   event.target.parentElement.remove()
}

