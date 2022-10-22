var next = document.querySelector('.next');
var butt = document.querySelector('#counter-head-content button');
var input = document.querySelector('#counter-head-content input');
var current = document.querySelector('.current');
var upperLimit;
var interval;
var cur;
var count = 0;
function startCounter() {
    upperLimit = input.value;
    if (upperLimit == '0') {
        window.alert('Please enter some value');
        return;
    }
    clearInterval(interval)
    cur = 1;
    count++;
    if (count > 1) {
        current.innerText = 0;
        next.innerText = 1;
    }
    // console.log('adwkwd');
    interval = setInterval(animate, 1000);
}


function animate() {
    if (cur > upperLimit) {
        clearInterval(interval);
        next.innerText = 0;
        window.alert('Counter has stopped');
        return;
    }

    next.classList.add('animate');
    console.log(cur);
    setTimeout(function () {
        next.classList.remove('animate');
        current.innerText = cur;
        next.innerText = ++cur;
    }, 500)
}

