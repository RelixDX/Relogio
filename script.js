let digital = document.querySelector('.digitalClock')
let sElement = document.querySelector('.p-s')
let mElement = document.querySelector('.p-m')
let hElement = document.querySelector('.p-h')

// Relógio digital

function updateTime() {
let rel = new Date
let sec = rel.getSeconds()
let min = rel.getMinutes()
let hr = rel.getHours()

digital.innerHTML = `${fixZero(hr)}:${fixZero(min)}:${fixZero(sec)}`

function fixZero(time) {
    return time < 10 ? `0${time}` : time
}

// Relógio Analógico

let sDeg = ((360 / 60) * sec) - 90
let mDegBySeconds = 0.1 * sec
let mDeg = ((360 / 60) * min) - 90 + mDegBySeconds
let hDegByMinutes = 0.5 * min
let hDeg = ((360 / 12) * hr) - 90

sElement.style.transform = `rotate(${sDeg}deg)`
mElement.style.transform = `rotate(${mDeg}deg)`
hElement.style.transform = `rotate(${hDeg}deg)`
}

setInterval(updateTime, 1000)