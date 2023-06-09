$(function() {

    for (let i = 1; i <= 12; i++) {
        $('.clock').append(`<div class="number number${i}">${i}</div>`
         );
    };

    setInterval(setClock, 1000);
    const hourHand = document.querySelector('[data-hour-hand]');
    const minuteHand = document.querySelector('[data-minute-hand]');
    const secondHand = document.querySelector('[data-second-hand]');

    // const hourHand = $('div[data-hour-hand]');
    // const minuteHand = $('div[data-minute-hand]');
    // const secondHand = $('div[data-second-hand]');

    function setClock() {
        const currentDate = new Date();
        const secondsRatio = currentDate.getSeconds() / 60;
        const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60;
        const hoursRatio = (minutesRatio + currentDate.getHours()) / 12;
        setRotation(secondHand, secondsRatio);
        setRotation(minuteHand, minutesRatio);
        setRotation(hourHand, hoursRatio);
    }

    function setRotation(element, rotationRatio) {
        element.style.setProperty('--rotation', rotationRatio * 360)
    }

    setClock();
});