console.log("Application started");

let form = document.getElementById("form");

form.addEventListener("submit", function (e) {

    e.preventDefault();


    let name = form.name.value;
    let email = form.email.value;
    let notification = form.notification.checked;

    console.log(name);
    console.log(email);
    console.log(notification);
});