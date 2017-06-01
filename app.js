

//===== TO_DO APP with input==========

function myFunction(){

var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}


var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

    
    var newList = document.createElement('LI')
    var input = document.getElementById('inputField').value
    var newText = document.createTextNode(input)
    
    if(input != 0)
    {
    newList.appendChild(newText)
    document.getElementById('list').appendChild(newList) 
    document.getElementById("inputField").value = "";
}

else
alert('Enter something in the input field')   

}