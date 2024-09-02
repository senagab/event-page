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

        document.getElementById('counter').innerHTML = `in ${diasAteEvento}d ${horasAteEvento}h ${minutosAteEvento}m ${segundosAteEvento}s`

        if (diasAteEvento < 0) {
            clearInterval(contaHoras);
            document.getElementById('counter').innerHTML = `next time!`
        }
}, 1000);


class TextScramble {

    constructor(el) {
        this.el = el
        this.chars = '!<>-_\\/[]{}—=+*^?#________'
        this.
        update = this.update.bind(this)
    }

    setText(newText) {
        const oldText = this.el.innerText
        const length = Math.max(oldText.length, newText.length)
        const promise = new Promise((resolve) => this.resolve = resolve)
        this.queue = []

        for (let i = 0; i < length; i++) {
            const from = oldText[i] || ''
            const to = newText[i] || ''
            const start = Math.floor(Math.random() * 40)
            const end = start + Math.floor(Math.random() * 40)
            this.queue.push({ from, to, start, end })
        }

        cancelAnimationFrame(this.frameRequest)
        this.frame = 0
        this.update()
        return promise
    }

    update() {
        let output = ''
        let complete = 0

        for (let i = 0, n = this.queue.length; i < n; i++) {
            let { from, to, start, end, char } = this.queue[i]
            if (this.frame >= end) {
                complete++
                output += to
            } else if (this.frame >= start) {
                if (!char || Math.random() < 0.28) {
                char = this.randomChar()
                this.queue[i].char = char
                }
                output += `<span class="dud">${char}</span>`
            } else {
                output += from
            }
        }

        this.el.innerHTML = output
            if (complete === this.queue.length) {
            this.resolve()
            } else {
            this.frameRequest = requestAnimationFrame(this.update)
            this.frame++
        }
    }

    randomChar() {
        return this.chars[Math.floor(Math.random() * this.chars.length)]
    }
}

    // ——————————————————————————————————————————————————
    // Example
    // ——————————————————————————————————————————————————

    const phrases_title = [
    'we`re',
    'having',
    'a fire',
    'are you in?'
    ]

    const title = document.querySelector('.event__title__item')
    const fx = new TextScramble(title)

    let counter = 0
    const next = () => {
    fx.setText(phrases_title[counter]).then(() => {
        setTimeout(next, 800)
    })
    counter = (counter + 1) % phrases_title.length
    }

    next()


// smooth scroll
const lenis = new Lenis()

lenis.on('scroll', (e) => {
    console.log(e)
})

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}

requestAnimationFrame(raf)