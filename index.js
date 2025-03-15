const yesBtn = document.querySelector('#yesBtn');
const noBtn = document.querySelector('#noBtn');

yesBtn.addEventListener('click', function() {
    alert('¡Sabía que ibas a decir que sí! 🥰');
});

noBtn.addEventListener('mouseover', function() {
    const randomX = Math.random() * 90; // Rango 0-90 para evitar que salga de la pantalla
    const randomY = Math.random() * 90;

    noBtn.style.position = "absolute";
    noBtn.style.top = randomY + "%";
    noBtn.style.left = randomX + "%";
    noBtn.style.transform = `translate(-${randomX}%, -${randomY}%)`;
});