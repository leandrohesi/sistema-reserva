document.getElementById("noti").addEventListener("click",visible);
document.getElementById("notification").style.display="none";
var count = 0 ;
var clicked = 0;
$(document).ready(function(){
    $("#add").click(function(){
         addItem();
        });
    });

function removeItem() {
  var parent=this.parentNode;  
  parent.parentNode.removeChild(parent);      
        }
    
    

function addItem() {
    count++;
  document.getElementById("count").innerHTML = count;
  var list=document.getElementById("notification");

  var item=document.createElement("li");
  item.classList.add("notify");
  
  var remove=document.createElement("button");
  remove.classList.add("remove");
  remove.addEventListener("click",removeItem);
  
  var complete=document.createElement("button");
  complete.classList.add("accept");
  complete.addEventListener("click",removeItem);
  
  var line=document.createElement("span");
  line.classList.add("line");
  
  item.appendChild(remove);
  item.appendChild(complete);
  item.appendChild(line);
  list.insertBefore(item,list.childNodes[0]);
}
function visible(){
    count=0;
    clicked++;
    if(clicked%2==0){
        document.getElementById("notification").style.display="none";
    }
    else{
    document.getElementById("count").innerHTML=count;
    document.getElementById("notification").style.display="block";
}
}