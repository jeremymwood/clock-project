
$(document).ready(function(){
    for (let i = 1; i <= 12; i++) {
        $('.clock').append(`<div class="number number${i}">${i}</div>`
        );
    };

});