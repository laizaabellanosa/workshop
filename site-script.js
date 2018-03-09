console.log('iputaholebagofjellybeans');

var firstBox = document.getElementById('first-box');
console.log(firstBox)

firstBox.innerHTML = 'arrrrrrrrrrrrrrrrrrrrrrrrrrr';
firstBox.style.backgroundColor = 'darkblue';
firstBox.style.borderColor = 'yellow'

var secondBox = document.getElementById('second-box');
console.log(secondBox);

secondBox.innerHTML = 'eatfood';
secondBox.style.backgroundColor = 'red';
secondBox.style.borderColor = 'darkblue'

var thirdBox = document.getElementById('third-box');
console.log(thirdBox);

thirdBox.innerHTML = 'hurricaneTortilla';
thirdBox.style.backgroundColor = 'yellow'
thirdBox.style.borderColor = 'red'

function testFunction() {
    console.log('testFunction test')
    firstBox.style.backgroundColor = 'green';
    firstBox.innerHTML = 'AGGGGHHHHHHHHHHH';
}

firstBox.addEventListener('click', testFunction);


function onMouseOver() {
    secondBox.style.backgroundColor = 'blue';
}

secondBox.addEventListener('mouseover', onMouseOver);

function onMouseOut() {
    secondBox.style.backgroundColor = 'red';
}

secondBox.addEventListener('mouseout', onMouseOut);

var listOfItems=document.getElementsByClassName('item');
console.log(listOfItems);

function crossOutItem( event ) {
    console.log('cross this out', )
    //debugger;
    var item=event.target;
    item.style.textDecoration = 'line-through';
}

for (var count=0; count < listOfItems.length ; count++ ) {
    console.log('loop ran', count);
    var item = listOfItems[count];
    console.log(item);
    item.addEventListener('click', crossOutItem);
}

function crossOutItem(event) {
    var item = event.target;

    if( item.style.textDecoration == 'line-through') {
        item.style.textDecoration = 'none';
    } else {
        item.style.textDecoration = 'line-through'
    }

}

var timeBetweenUpdates = 1000;

var hoursBox = document.getElementById('hours');
var minutesBox = document.getElementById('minutes');
var secondsBox = document.getElementById('seconds');


function displayTime() {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();

    hoursBox.innerHTML = hours;
    minutesBox.innerHTML = minutes;
    secondsBox.innerHTML = seconds;

    console.log('The time is', date);
    console.log(hours, minutes, seconds);
}

var clockTimer = setInterval(displayTime, timeBetweenUpdates);


