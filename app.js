
document.addEventListener("DOMContentLoaded", () => {

  const botonAgenda = document.querySelectorAll(".btn")[0];

  botonAgenda.addEventListener("click", (e) => {
    e.preventDefault();

    document.body.innerHTML = `
      <header>
        <h1>📅 Agenda KB Academy</h1>
        <p>Administración de citas</p>
      </header>

      <div class="container">

        <div class="card">
          <h2>➕ Nueva cita</h2>
          <a class="btn" href="#">Entrar</a>
        </div>

        <div class="card">
          <h2>📋 Citas del día</h2>
          <a class="btn" href="#">Entrar</a>
        </div>

        <div class="card">
          <h2>📆 Calendario</h2>
          <a class="btn" href="#">Entrar</a>
        </div>

            </div>
    `;
  });

});
