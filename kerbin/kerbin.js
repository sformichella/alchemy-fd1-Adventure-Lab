const observationBuilding = document.querySelector('.observation-building');
const missionsBuilding = document.querySelector('.missions-building');

observationBuilding.addEventListener('click', () => {
    location.href = '../planets';
})

missionsBuilding.addEventListener('click', () => {
    window.location.href = '../choices/?id=missions';
})