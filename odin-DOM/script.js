const parent = document.querySelector(".content");

const p = document.createElement('p');
p.classList.add('p');
p.textContent = "Hey, I'm Red!";
p.style.cssText = "color: red;"

const h3 = document.createElement('h3');
h3.classList.add('h3');
h3.textContent = "Hey, I'm Blue h3!";
h3.style.cssText = "color: blue;"

const div = document.createElement('div');
div.classList.add('div');
div.style.cssText = "border-color: black; background-color: pink;";

const h1 = document.createElement('h1');
h1.classList.add('h1');
h1.textContent = "I'm inside a div!";

const p2 = document.createElement('p2');
p2.classList.add('p2');
p2.textContent = "ME TOO!";

div.appendChild(h1);
div.appendChild(p2);

parent.appendChild(p);
parent.appendChild(h3);
parent.appendChild(div);

const btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
    alert("Hello World");
});