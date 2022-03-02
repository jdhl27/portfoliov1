window.onload = function () {
  document.cookie = "witcher=Geralt; SameSite=None; Secure"
}

// Detect device
var messageMobile = document.getElementById("message-mobile");
var main = document.getElementById("main-cont");
if (detectDevice() == "mobile") {
  messageMobile.style.display = "block";
  main.style.display = "none";
} else {
  messageMobile.style.display = "none";
  main.style.display = "block";
}

function detectDevice() {
  var device = "desktop";
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    device = "mobile";
  }
  return device;
}

// Send data
function sendEmail(e) {
  e.preventDefault()
  emailjs.init("pcfSeSm63LS9mQA_K");
  var email = document.getElementById("email-user").value;
  if (email) {
    let data = {
      from_email: email,
      message: "Hola, estoy interesado en trabajar contigo"
    };

    emailjs.send("service_7o2x3v1", "template_0vil4vs", data)
      .then(function (response) {
        if (response.text === 'OK') {
          swal({
            title: "¡Gracias!",
            text: "Pronto estaremos en contacto"
          });
        }
        console.log("SUCCESS. status=%d, text=%s", response.status, response.text);
      }, function (err) {
        alert('Ocurrió un problema al enviar el correo');
        console.log("FAILED. error=", err);
      });

  }
}

// colors aleatory
function getRandomColor() {
  var colors = ["#eaffee", "#feeaff", "#ffeaea", "#f2eaff", "#eafffc"];
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

const projects = document.querySelectorAll(".project");
for (const project of projects) {
  project.style.backgroundColor = getRandomColor();
}

// Year in footer
var year = new Date().getFullYear();
var variYear = document.getElementById("year");
variYear.innerText = year;

// Detect scroll
window.onscroll = function () { scrollFunction() };

scrollFunction = function () {
  var header = document.getElementById("header");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    header.classList.add("header-scroll");
  } else {
    header.classList.remove("header-scroll");
  }
}

// Soft links
const links = document.querySelectorAll(".link");

for (const link of links) {
  link.addEventListener("click", clickHandler);
}

function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute("href");
  const offsetTop = document.querySelector(href).offsetTop;

  scroll({
    top: offsetTop,
    behavior: "smooth"
  });
}


function moreAndLessEvent(num) {

  // OBTAINING OBJECTS
  var event_description = document.getElementsByClassName("event-description-hidden");

  // ADDING CLASSES

  event_description[num].classList.toggle("event-description-show");

  var event_url = document.getElementsByClassName("event-url");

  // CONDITION SEE MORE AND SEE LESS
  if (event_url[num].innerText == "Ver Más") {
    event_url[num].innerText = "Ver Menos";
  } else {
    event_url[num].innerText = "Ver Más";
  }


}

function moreAndLessProject() {
  var project = document.getElementsByClassName("project-hidden")
  var project_url = document.getElementById("projects-mas");

  for (var i = 0; i < project.length; i++) {
    project[i].classList.toggle("project-show");
  }

  // CONDITION SEE MORE AND SEE LESS
  if (project_url.innerText == "Ver Más") {
    project_url.innerText = "Ver Menos";
  } else {
    project_url.innerText = "Ver Más";
  }

}