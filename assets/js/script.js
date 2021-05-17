function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

const mybutton = document.getElementById("myBtn");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 150 ||
    document.documentElement.scrollTop > 150
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  document.documentElement.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

function corona() {
  let corona = document.getElementById("corona");
  corona.scrollIntoView({
    top: 0,
    behavior: "smooth",
  });
}

function contaigon() {
  let contaigon = document.getElementById("contaigon");
  contaigon.scrollIntoView({
    top: 0,
    behavior: "smooth",
  });
}

function symptoms() {
  let symptoms = document.getElementById("symptoms");
  symptoms.scrollIntoView({
    top: 0,
    behavior: "smooth",
  });
}

function aboutMe() {
  let about = document.getElementById("aboutMe");
  about.scrollIntoView({
    block: "center",
    behavior: "smooth",
  });
}
