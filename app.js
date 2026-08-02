
document.addEventListener("DOMContentLoaded", () => {

const botones=document.querySelectorAll(".btn");

function inicio(){

document.body.innerHTML=`

<header>

<h1>KB Manager Ultimate</h1>

<p>KB Academy by Kikuzan Barea</p>

</header>

<div class="container">

<div class="card">

<h2>📅 Agenda</h2>

<p>Crear, editar y consultar citas.</p>

<button class="btn" id="agenda">

Entrar

</button>

</div>

<div class="card">

<h2>👥 Clientas</h2>

<p>Historial completo de tus clientas.</p>

<button class="btn">

Próximamente

</button>

</div>

<div class="card">

<h2>🧮 Calculadora</h2>

<p>Cotización automática.</p>

<button class="btn">

Próximamente

</button>

</div>

<div class="card">

<h2>🎁 Fidelidad</h2>

<p>Programa de puntos.</p>

<button class="btn">

Próximamente

</button>

</div>

</div>

<footer>

KB Manager Ultimate © 2026

</footer>

`;

document.getElementById("agenda").onclick=agenda;

}

function agenda(){

document.body.innerHTML=`

<header>

<h1>📅 Agenda</h1>

<p>Administración de citas</p>

</header>

<div class="container">

<div class="card">

<h2>➕ Nueva cita</h2>

<input id="nombre" placeholder="Nombre de la clienta">

<input id="telefono" placeholder="Teléfono">

<input id="fecha" type="date">

<input id="hora" type="time">

<input id="servicio" placeholder="Servicio">

<button class="btn" id="guardar">

Guardar cita

</button>

</div>

<div class="card">

<button class="btn" id="ver">

Ver citas

</button>

</div>

<div class="card">

<button class="btn" id="volver">

Volver al inicio

</button>

</div>

</div>

`;

document.getElementById("guardar").onclick=guardarCita;

document.getElementById("ver").onclick=verCitas;

document.getElementById("volver").onclick=inicio;

}
function guardarCita(){

const cita={

nombre:document.getElementById("nombre").value,

telefono:document.getElementById("telefono").value,

fecha:document.getElementById("fecha").value,

hora:document.getElementById("hora").value,

servicio:document.getElementById("servicio").value

};

let citas=JSON.parse(localStorage.getItem("citas"))||[];

citas.push(cita);

localStorage.setItem("citas",JSON.stringify(citas));

alert("✅ Cita guardada");

agenda();

}

function verCitas(){

let citas=JSON.parse(localStorage.getItem("citas"))||[];

let html=`

<header>

<h1>📋 Citas</h1>

<p>Citas registradas</p>

</header>

<div class="container">

`;

if(citas.length===0){

html+=`

<div class="card">

<h2>No hay citas registradas.</h2>

</div>

`;

}else{

citas.forEach((cita,index)=>{

html+=`

<div class="card">

<h2>${cita.nombre}</h2>

<p>📱 ${cita.telefono}</p>

<p>📅 ${cita.fecha}</p>

<p>🕒 ${cita.hora}</p>

<p>💅 ${cita.servicio}</p>

<button class="btn eliminar" data-id="${index}">

Eliminar

</button>

</div>

`;

});

}

html+=`

<div class="card">

<button class="btn" id="regresarAgenda">

⬅ Regresar

</button>

</div>

</div>

`;

document.body.innerHTML=html;
document.querySelectorAll(".eliminar").forEach((boton)=>{

boton.onclick=function(){

let id=this.dataset.id;

let citas=JSON.parse(localStorage.getItem("citas"))||[];

citas.splice(id,1);

localStorage.setItem("citas",JSON.stringify(citas));

verCitas();

}

});

document.getElementById("regresarAgenda").onclick=agenda;

}

inicio();

});
