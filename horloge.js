
function changement_heure (){
    
const date = new Date();
const seconds = date.getSeconds();
const minutes = date.getMinutes();
const hours = date.getHours();
const secondsAngle = (seconds / 60) * 360;
const minutesAngle = (minutes / 60) * 360;
const hoursAngle = (hours / 12) * 360;

    const s = document.getElementById('a_secondes');
    const m = document.getElementById('a_minutes');
    const h = document.getElementById('a_heures');
    s.style.transform = `translate(-50%, 0) rotate(${secondsAngle}deg)`;
    m.style.transform = `translate(-50%, 0) rotate(${minutesAngle}deg)`;
    h.style.transform = `translate(-50%, 0) rotate(${hoursAngle}deg)`;
}

window.setInterval(changement_heure, 1000);
changement_heure(); 


