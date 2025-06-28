console.log("hello world");

const firstNameinput = document.getElementById("first_name");
const lastNameinput = document.getElementById("last_name");
const messageinput = document.getElementById("message");

var firstName = "";
var lastName = "";
var message = "";

firstNameinput.addEventListener("input", function(event){
    firstName = event.target.value;
    localStorage.setItem('first_name', firstName)
    console.log(firstName)
})
lastNameinput.addEventListener("input", function(event){
    lastName = event.target.value;
    localStorage.setItem('last_name', lastName)
    console.log(lastName)
})
messageinput.addEventListener("input", function(event){
    message = event.target.value;
    localStorage.setItem('message', message)
    console.log(message)
})

const formElement = document.getElementById('form-contact')

formElement.addEventListener("submit", function(event) {
    event.preventDefault();

    if (!firstName || !lastName || !message) {
        alert('Please fill in all fields.');
        return;
    }

    const objectInput = {
        firstName: localStorage.getItem('first_name'),
        lastName: localStorage.getItem('last_name'),
        message: localStorage.getItem('message'),
    }
    
    alert(`Fisrt Name: ${objectInput.firstName}\nLast Name: ${objectInput.
    lastName}\nMesagge: ${objectInput.message}`);

})
