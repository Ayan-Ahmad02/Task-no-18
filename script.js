let Box1 = document.getElementById("box-1");
let Box2 = document.getElementById("box-2");
let Box3 = document.getElementById("box-3");
let Box4 = document.getElementById("box-4");

function onclickfunc1() {
    Box1.style.backgroundColor = "red";
}

function onclickfunc2() {
    Box2.style.backgroundColor = "blue";
}

function onclickfunc3() {
    Box3.style.backgroundColor = "green";
}

function onclickfunc4() {
    Box4.style.backgroundColor = "yellow";
}

function greetUser() {
    let name = document.getElementById("search").value;
    let heading = document.getElementById("text");

    if (name.trim() === "") {
        heading.innerHTML = "Hello";
    } else {
        heading.innerHTML = "Hello, " + name;
    }
}