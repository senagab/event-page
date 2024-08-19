AOS.init();

const dataDoEvento = new Date("May 20, 2025 19:00:00");
const timeStampEvento = dataDoEvento.getTime();

const contaHoras = setInterval(function () {
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaAteEvento = timeStampEvento - timeStampAtual;

    const diasEmMs = 1000 * 60 * 60 * 24;
    const horaEmMs =  1000 * 60 * 60;
    const minutoEmMs = 1000 * 60;
    const segundosEmMs = 1000;

    const diasAteEvento = Math.floor (distanciaAteEvento / diasEmMs);
    const horasAteEvento = Math.floor ((distanciaAteEvento % diasEmMs) / horaEmMs);
    const minutosAteEvento = Math.floor ((distanciaAteEvento % horaEmMs) / minutoEmMs);
    const segundosAteEvento = Math.floor ((distanciaAteEvento % minutoEmMs) / 1000);

    console.log(
        "dias: ",diasAteEvento, 
        ". horas: ", horasAteEvento, 
        ". minutos: ", minutosAteEvento, 
        ". segundos: ", segundosAteEvento, ".");

        document.getElementById('counter').innerHTML = `começa em ${diasAteEvento}d ${horasAteEvento}h ${minutosAteEvento}m ${segundosAteEvento}s`

        if (diasAteEvento < 0) {
            clearInterval(contaHoras);
            document.getElementById('counter').innerHTML = `expirou!`
        }
}, 1000);