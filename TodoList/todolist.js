const addBtn = document.querySelector('#addBtn');

//add the items into the list
addBtn.addEventListener('click', function(e) {

    e.preventDefault();
    console.log("entered!");

    const inputItem = document.getElementById("myTextbox").value;
    console.log(inputItem);
    const li = document.createElement("li");
   
    const newItem = document.createTextNode(inputItem);
    li.appendChild(newItem);

    if (inputItem === '') {
        alert("You have to enter the item name before click the button!");
    } 
    else {
        document.getElementById("myList").appendChild(li);
    }

    document.getElementById("myTextbox").value = '';
  
    //creating close icon
    const span = document.createElement("SPAN");
    const closeSymbol = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(closeSymbol);
    li.appendChild(span);
  
    //close icon action
    const close = document.getElementsByClassName("close");
    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
      }
    }
})

//addbtn.addEventListener('click', newElement);

// add or remove close symbol in to all the items in the list
const myElementList = document.querySelectorAll("li");
var i;
console.log(myElementList);
for (i = 0; i < myElementList.length; i++) {
    const span = document.createElement("SPAN");
    const closeSymbol = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(closeSymbol);
    myElementList[i].appendChild(span);
}


// Add a strike out symbol when clicking on a list item
const list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);