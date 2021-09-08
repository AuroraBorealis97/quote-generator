let div = document.querySelector('div');
let button = document.querySelector('button');
let qoute = document.querySelector('p');
let h5 = document.querySelector('h5');


button.addEventListener('click', generate);


async function generate() {
    const res = await fetch('https://type.fit/api/quotes');
    const data = await res.json();
    let n = Math.floor(Math.random() * 1643);
    
    qoute.innerHTML ='"' + data[n].text +'"';
    h5.innerHTML = "-" + " " + data[n].author;
};