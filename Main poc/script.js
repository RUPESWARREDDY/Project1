let list=[]

document.body.style.background="red";
let getdata=(e)=>{
  let ul=document.getElementById("ul")
  var bt1=document.createElement("button")
  bt1.setAttribute("class","fa-solid fa-trash bt1")
  var bt2=document.createElement("button")
  bt2.setAttribute("class","fa-regular fa-pen-to-square bt2")
  var bt3=document.createElement("button")
  bt3.setAttribute("class","fa-solid fa-cloud bt3")
    let name=e.target[0].value
    let li=document.createElement("li")
    let data=document.createElement("input")
    data.setAttribute("type","text")
    data.setAttribute("class","data")
    data.setAttribute("readonly",true)
    data.style.outline="none";
    if(name==="")
    {
       alert("enter data")
    }
    else{
      list.push(name)
    list.map((std,index)=>{  
           data.value=std
           data.setAttribute('id', 'data'+index);
           li.append(data)
           li.append(bt1)
           li.append(bt2)
           li.append(bt3)  
           ul.append(li)
          })
        }
      
    
     document.getElementById("myform").reset();
    
    e.preventDefault()
ul.addEventListener("click",function(e){
    if(e.target.nodeName=="INPUT"){
      e.target.classList.toggle("checked")
    }
    else if(e.target.classList[2]==="bt1"){   
        e.target.parentElement.remove();
    }  
});
bt2.addEventListener("click",function(e)
{
  if(e.target.classList[2]==="bt2"){
   data.removeAttribute("readonly")
  } 
}
)
bt3.addEventListener("click",function(e)
{
  if(e.target.classList[2]==="bt3")
   data.setAttribute("readonly",true) 
}
)
}
