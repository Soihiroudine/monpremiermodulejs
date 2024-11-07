
function getHeure(){
    const date = new Date();
    return date.getHours();
}

function getMinute() {
    const date = new Date();
    return date.getMinutes();
}

function getSecondes() {
    const date = new Date();
    return date.getSeconds();
}
// Exporter la fonction getHeure
export { 
    getHeure,
    getMinute,
    getSecondes
};