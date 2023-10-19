import "./less/index.less";

// Örnek bir event kullanımı aşağıdadır. Çalıştırmak için comment dışına alın
document.querySelector("h1").addEventListener("click", function (e) {
  alert("Bana tıkladın!");
});

// Kodlar buraya gelecek!

document
  .querySelector(".main-navigation")
  .addEventListener("mouseenter", (e) => {
    e.target.style.backgroundColor = "green";
  });

document
  .querySelector(".main-navigation")
  .addEventListener("mouseleave", (e) => {
    e.target.style.backgroundColor = "white";
  });

document
  .getElementsByClassName("nav-link")[0]
  .addEventListener("mouseenter", (e) => {
    e.target.style.backgroundColor = "blue";
  });
document
  .getElementsByClassName("nav-link")[1]
  .addEventListener("mouseenter", (e) => {
    e.target.style.backgroundColor = "blue";
  });
document
  .getElementsByClassName("nav-link")[2]
  .addEventListener("mouseenter", (e) => {
    e.target.style.backgroundColor = "blue";
  });
document
  .getElementsByClassName("nav-link")[3]
  .addEventListener("mouseenter", (e) => {
    e.target.style.backgroundColor = "blue";
  });

document
  .getElementsByClassName("nav-link")[0]
  .addEventListener("mouseleave", (e) => {
    e.target.style.backgroundColor = "red";
  });
document
  .getElementsByClassName("nav-link")[1]
  .addEventListener("mouseleave", (e) => {
    e.target.style.backgroundColor = "red";
  });
document
  .getElementsByClassName("nav-link")[2]
  .addEventListener("mouseleave", (e) => {
    e.target.style.backgroundColor = "red";
  });
document
  .getElementsByClassName("nav-link")[3]
  .addEventListener("mouseleave", (e) => {
    e.target.style.backgroundColor = "red";
  });

document
  .getElementsByClassName("nav-link")[0]
  .addEventListener("click", (e) => {
    e.preventDefault();
  });

/*const body = document.getElementsByTagName("body")[0];
window.addEventListener("load", (e) => {
  body.style.backgroundColor = "red";
});
*/
const imgs = document.querySelectorAll("img");
imgs.forEach((img) => {
  img.addEventListener("dblclick", (e) => {
    e.target.style.filter = "grayscale(90%)";
  });
});

imgs.forEach((img) => {
  img.addEventListener("click", (e) => {
    e.target.style.filter = "unset";
  });
});

const input = document.getElementById("input");
input.addEventListener("focus", (e) => {
  e.target.style.border = "10px solid red";
});

input.addEventListener("blur", (e) => {
  e.target.style.border = null;
});

const body = document.getElementsByTagName("body")[0];
window.addEventListener("blur", (e) => {
  body.style.backgroundColor = "red";
});
window.addEventListener("focus", (e) => {
  body.style.backgroundColor = "white";
});

window.addEventListener("resize", (e) => {
  input.value = `${innerWidth}x${innerHeight}`;
  if (innerWidth <= 600) {
    body.style.backgroundColor = "blue";
  } else {
    body.style.backgroundColor = null;
  }
});

input.addEventListener("keydown", (e) => {
  if (e.key == 1) {
    input.style.border = "10px solid blue";
  }
});

const imgOut = document.getElementById("out");
imgOut.addEventListener("dragstart", (e) => {
  e.dataTransfer.setData("Text", e.target.id);
});

const p1 = document.getElementById("p1");
p1.addEventListener("drop", (e) => {
  let data = e.dataTransfer.getData("Text");
  e.target.appendChild(document.getElementById(data));
  e.preventDefault();
});
p1.addEventListener("dragover", (e) => {
  e.preventDefault();
});

const destinations = document.querySelectorAll(".destination");

destinations.forEach((item) => {
  item.addEventListener("mouseenter", (e) => {
    e.target.style.cursor = "pointer";
    e.target.style.boxShadow = "10px 20px gray";
    e.target.style.padding = "3rem";
    e.target.style.width = "30%";
    e.target.style.background = "#FFEBCD";
  });
  item.addEventListener("mouseleave", (e) => {
    e.target.style.cursor = "pointer";
    e.target.style.boxShadow = null;
    e.target.style.padding = null;
    e.target.style.width = null;
    e.target.style.background = null;
  });
});
