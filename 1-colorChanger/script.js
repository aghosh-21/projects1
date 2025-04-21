const buttons = document.querySelectorAll(".button");
// getElementsByClassName returns html collection not array

buttons.forEach(button => {
    button.addEventListener('click', function (e) {
        // e holo event Object
        // e.target where i clicked

        document.body.style.backgroundColor = getComputedStyle(e.target).backgroundColor;


        // getComputedStyle is better to use
        // e.target.style.backgroundColor
        // ata te hobe navigator;
    })
})