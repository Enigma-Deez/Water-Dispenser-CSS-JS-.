document.addEventListener('DOMContentLoaded', function () {
    var handle = document.querySelector('.fridge-handle');
    var door = document.querySelector('.fridge-door');
    if (handle && door) {
        handle.addEventListener('click', function () {
            door.classList.toggle('open');
        });
    }
});
