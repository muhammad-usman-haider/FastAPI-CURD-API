console.log("Hello, this is a test script for the Gemini Chatbot.");
var testElement = 20;
console.log("The value of testElement is: " + testElement);
testElement += 10;
console.log("After adding 10, the value of testElement is: " + testElement);
document.getElementById("test").innerHTML = testElement;
document.getElementById("test").addEventListener("click", function() {
    console.log("You clicked the test element! The current value is: " + testElement);
});
document.getElementById("test").addEventListener("mouseover", function() {
    console.log("You hovered over the test element! The current value is: " + testElement);
});
document.getElementById("test").addEventListener("mouseout", function() {
    console.log("You moved the mouse out of the test element! The current value is: " + testElement);
});
document.getElementById("test").addEventListener("dblclick", function() {
    console.log("You double-clicked the test element! The current value is: " + testElement);
}); 
document.getElementById("test").addEventListener("contextmenu", function(event) {
    event.preventDefault();
    console.log("You right-clicked the test element! The current value is: " + testElement);
});
document.getElementById("test").addEventListener("keydown", function(event) {
    console.log("You pressed a key while focused on the test element! The current value is: " + testElement);
});
document.getElementById("test").addEventListener("keyup", function(event) {
    console.log("You released a key while focused on the test element! The current value is: " + testElement);
});
document.getElementById("test").addEventListener("keypress", function(event) {
    console.log("You pressed a key while focused on the test element! The current value is: " + testElement);
});
