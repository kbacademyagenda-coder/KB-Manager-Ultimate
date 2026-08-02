
document.addEventListener("DOMContentLoaded", () => {

    const botones = document.querySelectorAll(".btn");

    botones[0].addEventListener("click", (e) => {
        e.preventDefault();
        alert("Bienvenida a tu Agenda KB Academy 💕");
    });

});
