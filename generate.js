function getHeure(){
    const date = new Date();

    const heure = date.getHours();
    const minute = date.getMinutes();
    const seconde = date.getSeconds();

    console.log(`L'heure actuelle : ${heure} : ${minute} : ${seconde}`);
}

// Exporter la fonction getHeure

export{ 
    getHeure 
}