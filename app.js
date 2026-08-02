document.addEventListener("DOMContentLoaded", function () {

const botones=document.querySelectorAll(".btn");

botones[0].onclick=function(e){

e.preventDefault();

document.body.innerHTML=`

<header>

<h1>📅 Agenda KB Academy</h1>

<p>Administración de citas</p>

</header>

<div class="container">

<div class="card">

<h2>➕ Nueva cita</h2>

<input
type="text"
placeholder="Nombre de la clienta"
style="width:100%;padding:15px;border-radius:12px;margin-bottom:10px;">

<input
type="text"
placeholder="Teléfono"
style="width:100%;padding:15px;border-radius:12px;margin-bottom:10px;">

<input
type="date"
style="width:100%;padding:15px;border-radius:12px;margin-bottom:10px;">

<input
type="time"
style="width:100%;padding:15px;border-radius:12px;margin-bottom:10px;">

<input
type="text"
placeholder="Servicio"
style="width:100%;padding:15px;border-radius:12px;margin-bottom:10px;">

<button class="btn">

Guardar cita

</button>

</div>

<div class="card">

<button class="btn" id="volver">

⬅ Volver al inicio

</button>

</div>

</div>

`;

document.getElementById("volver").onclick=function(){

location.reload();

}

}

});
