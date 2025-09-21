function showMessage() {
  //console.log("Button clicked!"); // Watch in DevTools Console
//  debugger; // Pause here if DevTools is open

alert("Showing result of '10' > 2 ")
alert('10' > 2)

  alert("Hello");

  let age = prompt('How old are you?', 25);
  alert(`You are ${age} years old!`); // You are 25 years old!

  let isSure = confirm("Are you sure?");
  alert(isSure); // true if OK is pressed





  document.getElementById("message").textContent = "Button was clicked!";
}
