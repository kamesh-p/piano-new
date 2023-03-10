const link1 = document.querySelector("#link1");
const link2 = document.querySelector("#link2");
const link3 = document.querySelector("#link3");
const link4 = document.querySelector("#link4");
const link5 = document.querySelector("#link5");
const div1 = document.querySelector("#div1");
const div2 = document.querySelector("#div2");
const div3 = document.querySelector("#div3");
const div4 = document.querySelector("#div4");
const div5 = document.querySelector("#div5");

link1.addEventListener("click", () => {
  div1.style.display = "block";
  div2.style.display = "none";
  div3.style.display = "none";
  div4.style.display = "none";
  div5.style.display = "none";
});

link2.addEventListener("click", () => {
  div1.style.display = "none";
  div2.style.display = "block";
  div3.style.display = "none";
  div4.style.display = "none";
  div5.style.display = "none";
});
link3.addEventListener("click", () => {
  div1.style.display = "none";
  div2.style.display = "none";
  div3.style.display = "block";
  div4.style.display = "none";
  div5.style.display = "none";
});
link4.addEventListener("click", () => {
  div1.style.display = "none";
  div2.style.display = "none";
  div3.style.display = "none";
  div4.style.display = "block";
  div5.style.display = "none";
});
link5.addEventListener("click", () => {
  div1.style.display = "none";
  div2.style.display = "none";
  div3.style.display = "none";
  div4.style.display = "none";
  div5.style.display = "block";
});
var keyLength = document.querySelectorAll(".drum").length;

for (let i = 0; i < keyLength; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    // buttonAnimation(buttonInnerHTML);
    console.log(buttonInnerHTML);
  });
}
document.addEventListener("keypress", function (event) {
  makeSound(event.key, event.target.id);
  buttonAnimation(event.key);
  console.log(event.target.id);
});
function makeSound(key, id) {
  console.log(id);

  if (id === "link1") {
    switch (key) {
      case "d":
        var A0 = new Audio("sounds/A0.mp3");
        A0.play();
        break;
      case "q":
        var A1 = new Audio("sounds/A1.mp3");
        A1.play();
        break;
      case "w":
        var A2 = new Audio("sounds/A2.mp3");
        A2.play();
        break;
      case "e":
        var A3 = new Audio("sounds/A3.mp3");
        A3.play();
        break;
      case "r":
        var A4 = new Audio("sounds/A4.mp3");
        A4.play();
        break;
      case "t":
        var A5 = new Audio("sounds/A5.mp3");
        A5.play();
        break;
      case "a":
        var A6 = new Audio("sounds/A6.mp3");
        A6.play();
        break;
      case "s":
        var A7 = new Audio("sounds/A7.mp3");
        A7.play();
        break;

      case "f":
        var Ab1 = new Audio("sounds/Ab1.mp3");
        Ab1.play();
        break;
      case "g":
        var Ab2 = new Audio("sounds/Ab2.mp3");
        Ab2.play();
        break;
      case "z":
        var Ab3 = new Audio("sounds/Ab3.mp3");
        Ab3.play();
        break;
      case "x":
        var Ab4 = new Audio("sounds/Ab4.mp3");
        Ab4.play();
        break;
      case "c":
        var Ab5 = new Audio("sounds/Ab5.mp3");
        Ab5.play();
        break;
      case "v":
        var Ab6 = new Audio("sounds/Ab6.mp3");
        Ab6.play();
        break;
      case "b":
        var Ab7 = new Audio("sounds/Ab7.mp3");
        Ab7.play();
        break;
    }
  }
  // c-d
  if (id === "link2") {
    switch (key) {
      case "q":
        new Audio("sounds/C1.mp3").play();
        // A1.play();
        break;
      case "w":
        var A2 = new Audio("sounds/C2.mp3");
        A2.play();
        break;
      case "e":
        var A3 = new Audio("sounds/C3.mp3");
        A3.play();
        break;
      case "r":
        var A4 = new Audio("sounds/C4.mp3");
        A4.play();
        break;
      case "t":
        var A5 = new Audio("sounds/C5.mp3");
        A5.play();
        break;
      case "a":
        var A6 = new Audio("sounds/C6.mp3");
        A6.play();
        break;
      case "s":
        var A7 = new Audio("sounds/C7.mp3");
        A7.play();
        break;

      case "f":
        var Ab1 = new Audio("sounds/C8.mp3");
        Ab1.play();
        break;
      case "g":
        var Ab2 = new Audio("sounds/D1.mp3");
        Ab2.play();
        break;
      case "z":
        var Ab3 = new Audio("sounds/D2.mp3");
        Ab3.play();
        break;
      case "x":
        var Ab4 = new Audio("sounds/D3.mp3");
        Ab4.play();
        break;
      case "c":
        var Ab5 = new Audio("sounds/D4.mp3");
        Ab5.play();
        break;
      case "v":
        var Ab6 = new Audio("sounds/D5.mp3");
        Ab6.play();
        break;
      case "b":
        var Ab7 = new Audio("sounds/D6.mp3");
        Ab7.play();
        break;
      case "d":
        var A0 = new Audio("sounds/D7.mp3");
        A0.play();
        break;
    }
  }

  //
  if (id === "link3") {
    switch (key) {
      case "q":
        new Audio("sounds/Db1.mp3").play();
        // A1.play();
        break;
      case "w":
        var A2 = new Audio("sounds/Db2.mp3");
        A2.play();
        break;
      case "e":
        var A3 = new Audio("sounds/Db3.mp3");
        A3.play();
        break;
      case "r":
        var A4 = new Audio("sounds/Db4.mp3");
        A4.play();
        break;
      case "t":
        var A5 = new Audio("sounds/Db5.mp3");
        A5.play();
        break;
      case "a":
        var A6 = new Audio("sounds/Db6.mp3");
        A6.play();
        break;
      case "s":
        var A7 = new Audio("sounds/Db7.mp3");
        A7.play();
        break;

      case "f":
        var Ab1 = new Audio("sounds/E1.mp3");
        Ab1.play();
        break;
      case "g":
        var Ab2 = new Audio("sounds/E2.mp3");
        Ab2.play();
        break;
      case "z":
        var Ab3 = new Audio("sounds/E3.mp3");
        Ab3.play();
        break;
      case "x":
        var Ab4 = new Audio("sounds/E4.mp3");
        Ab4.play();
        break;
      case "c":
        var Ab5 = new Audio("sounds/E5.mp3");
        Ab5.play();
        break;
      case "v":
        var Ab6 = new Audio("sounds/E6.mp3");
        Ab6.play();
        break;
      case "b":
        var Ab7 = new Audio("sounds/E7.mp3");
        Ab7.play();
        break;
    }
  }
  //
  if (id === "link4") {
    switch (key) {
      case "q":
        new Audio("sounds/Eb1.mp3").play();
        // A1.play();
        break;
      case "w":
        var A2 = new Audio("sounds/Eb2.mp3");
        A2.play();
        break;
      case "e":
        var A3 = new Audio("sounds/Eb3.mp3");
        A3.play();
        break;
      case "r":
        var A4 = new Audio("sounds/Eb4.mp3");
        A4.play();
        break;
      case "t":
        var A5 = new Audio("sounds/Eb5.mp3");
        A5.play();
        break;
      case "a":
        var A6 = new Audio("sounds/Eb6.mp3");
        A6.play();
        break;
      case "s":
        var A7 = new Audio("sounds/Eb7.mp3");
        A7.play();
        break;

      case "f":
        var Ab1 = new Audio("sounds/F1.mp3");
        Ab1.play();
        break;
      case "g":
        var Ab2 = new Audio("sounds/F2.mp3");
        Ab2.play();
        break;
      case "z":
        var Ab3 = new Audio("sounds/F3.mp3");
        Ab3.play();
        break;
      case "x":
        var Ab4 = new Audio("sounds/F4.mp3");
        Ab4.play();
        break;
      case "c":
        var Ab5 = new Audio("sounds/F5.mp3");
        Ab5.play();
        break;
      case "v":
        var Ab6 = new Audio("sounds/F6.mp3");
        Ab6.play();
        break;
      case "b":
        var Ab7 = new Audio("sounds/F7.mp3");
        Ab7.play();
        break;
    }
  }
  //
  else {
    switch (key) {
      case "q":
        new Audio("sounds/G1.mp3").play();
        // A1.play();
        break;
      case "w":
        var A2 = new Audio("sounds/G2.mp3");
        A2.play();
        break;
      case "e":
        var A3 = new Audio("sounds/G3.mp3");
        A3.play();
        break;
      case "r":
        var A4 = new Audio("sounds/G4.mp3");
        A4.play();
        break;
      case "t":
        var A5 = new Audio("sounds/G5.mp3");
        A5.play();
        break;
      case "a":
        var A6 = new Audio("sounds/G6.mp3");
        A6.play();
        break;
      case "s":
        var A7 = new Audio("sounds/G7.mp3");
        A7.play();
        break;

      case "f":
        var Ab1 = new Audio("sounds/Gb1.mp3");
        Ab1.play();
        break;
      case "g":
        var Ab2 = new Audio("sounds/Gb2.mp3");
        Ab2.play();
        break;
      case "z":
        var Ab3 = new Audio("sounds/Gb3.mp3");
        Ab3.play();
        break;
      case "x":
        var Ab4 = new Audio("sounds/Gb4.mp3");
        Ab4.play();
        break;
      case "c":
        var Ab5 = new Audio("sounds/Gb5.mp3");
        Ab5.play();
        break;
      case "v":
        var Ab6 = new Audio("sounds/Gb6.mp3");
        Ab6.play();
        break;
      case "b":
        var Ab7 = new Audio("sounds/Gb7.mp3");
        Ab7.play();
        break;
    }
  }
}

function buttonAnimation(currentKey) {
  var activeKey = document.querySelector("." + currentKey);
  activeKey.classList.add("pressed");
  setTimeout(function () {
    activeKey.classList.remove("pressed");
  }, 100);
}
