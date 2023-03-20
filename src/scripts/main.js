AOS.init();

const dataDoEvento = new Date("Dec 12, 2023 19:00:00");
const timeStampDoEvento = dataDoEvento.getTime();

const contaAsHoras = setInterval(function() {
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaAteOEvento = timeStampDoEvento - timeStampAtual;

    const diasEmMS = 1000 * 60 * 60 * 24;
    const horasEmMs = 1000 * 60 * 60;
    const minEmMs = 1000 * 60;

    const diasAteOEvento = Math.floor(distanciaAteOEvento / (diasEmMS));
    // console.log(diasAteOEvento);

    const horasAteOEvento = Math.floor((distanciaAteOEvento % (diasEmMS)) / (horasEmMs));
    // console.log(horasAteOEvento);

    const minutosAteOEvento = Math.floor(((distanciaAteOEvento % (diasEmMS)) % (horasEmMs) / (minEmMs)))
    // console.log(minutosAteOEvento);

    const segundosAteOEvento = Math.floor((((distanciaAteOEvento % (diasEmMS)) % (horasEmMs) % (minEmMs)) / 1000))
    // console.log(segundosAteOEvento);

    document.querySelector('#contador').innerHTML = `${diasAteOEvento} dias ${horasAteOEvento}h ${minutosAteOEvento}min ${segundosAteOEvento}s`;

    if (distanciaAteOEvento < 0) {
        clearInterval(contaAsHoras);
        document.querySelector('#contador').innerHTML = `Evento Expirado!`;
    }
}, 1000);