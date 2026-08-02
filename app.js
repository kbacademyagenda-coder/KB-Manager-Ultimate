
const formulario = document.getElementById("form-cita");

if (formulario) {
  formulario.addEventListener("submit", function (e) {
    e.preventDefault();

    const cita = {
      nombre: document.getElementById("nombre").value,
      telefono: document.getElementById("telefono").value,
      fecha: document.getElementById("fecha").value,
      hora: document.getElementById("hora").value,
      servicio: document.getElementById("servicio").value
    };

    let citas = JSON.parse(localStorage.getItem("citas")) || [];

    citas.push(cita);

    localStorage.setItem("citas", JSON.stringify(citas));

    alert("✅ Cita guardada correctamente");

    formulario.reset();
  });
}
