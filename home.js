function ActualizarCountdown() {
   const fechaActual = new Date();
   const boda = fechaActual.getFullYear()+1;
   const fechaBoda= new Date(`February 14, ${boda} 00:00:00`);
   const diferencia = fechaBoda-fechaActual; //milisegundos
   const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
   const horas = Math.floor((diferencia / (1000 * 60 * 60)) % 24);
   const minutos = Math.floor((diferencia / (1000 * 60)) % 60);
   const segundos = Math.floor((diferencia / 1000) % 60);

   document.getElementById('days').textContent = dias;
   document.getElementById('hours').textContent = horas;
   document.getElementById('minutes').textContent = minutos;
   document.getElementById('seconds').textContent = segundos;
}
setInterval(ActualizarCountdown,1000);
ActualizarCountdown();

document.getElementById('ceremonia').addEventListener('click',  function() {
    window.location.href = 'https://www.waze.com/es/live-map/directions/cr/san-jose/san-isidro/parroquia-de-san-isidro-labrador?navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location&to=place.ChIJ2ac65YXmoI8ROG-Y4TKLevI';
});
document.getElementById('recepcion').addEventListener('click', function() {
    window.location.href = 'https://www.waze.com/es/live-map/directions/tierra-bonanza-c-jaboncillal-jaboncillal,-mata-de-platano?utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location&to=place.w.180879460.1808860132.37214148';
});
document.getElementById('confirmar').addEventListener('click', function(){
    const numero = 50688159420;
    const mensaje = "Hola, quiero confirmar mi asistencia a la boda";
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, "_blank");
})
