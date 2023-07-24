// 1. EVENT LISTENERS
// These are one of the most used structure in javascript.
// Event listeners basically allow us to add interactive functionality to html elements by listening to different events that take place on the page such as when a user presses a key or when elements load or when a user clicks a button.
// Now the most xommon events are load events , touch starts events , key down events , mouse over events and click events.


// 1.1 THERE ARE 2 WAYS

// So ,  there are two ways that we can add event listeners in our project.

// 1.2 INSIDE AN HTML DOCUMENT

// Here we can actually add event listeners in a html document.

// When we add an EL in  the index.html  , it is called as global on event attribute like any other attribute in an html document.

// Example-1

// <button class="btn" onclick="alert('i love js')"> Enter </button>


// Example-2 

// <button class="btn" onclick="pop()"


// 1.3 Adding an event listener by adding an event listener method .

 // Example- element.addEventListener("click", function);

 // 2. IMPLEMENTAION (click event)

 const button1 = document.querySelector(".btn-1");

 function alertBtn (){
    alert("Hello");
 };
  
 button1.addEventListener("click", alertBtn);

 // 2.1 (Mouseover event)

 const newBgColor = document.querySelector(".btn-3");
 
 function changeBgColor () {
    newBgColor.style.backgroundColor = "blue";
 }
  
 newBgColor.addEventListener("mouseover", changeBgColor);

 // 2.2 NOTE 

 // We can only apply an eventlistener to an element once. If we apply multiple eventlisteners on one html element ,, the recent applied method will override the previous method.