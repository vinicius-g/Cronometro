var min = document.querySelector("[data-min]")
var sec = document.querySelector("[data-sec]")
var cen = document.querySelector("[data-cen]")

var minTime = "00"
var secTime = "00"
var cenTime = "00"

min.innerHTML = JSON.parse(localStorage.getItem("time")).minutes || minTime
sec.innerHTML = JSON.parse(localStorage.getItem("time")).seconds || secTime
cen.innerHTML = JSON.parse(localStorage.getItem("time")).hundredth || cenTime

var startBtn = document.querySelector("[data-play]")
var pauseBtn = document.querySelector("[data-pause]")
var restartBtn = document.querySelector("[data-reset]")

var timer

var timeNow

function saveLocalStorage() {
  timeNow = {
    minutes: min.innerHTML,
    seconds: sec.innerHTML,
    hundredth: cen.innerHTML
  }

  localStorage.setItem("time", JSON.stringify(timeNow))
}

function passTime() {
  cenTime++
  if (cenTime == 99) {
    secTime++
    cenTime = 0
  }
  if (secTime == 60) {
    minTime++
    secTime = 0
  }

  correctNumber(cenTime)
  correctNumber(secTime)
  correctNumber(minTime)

  saveLocalStorage()
  timer = setTimeout(passTime, 1)
}

function correctNumber(numberValue) {
  if (numberValue < 10 && numberValue !== 0) {
    numberValue.innerHTML = "0" + numberValue
  } else {
    numberValue.innerHTML = numberValue
  }
}

function returnTimer() {
  cenTime = "00"
  secTime = "00"
  minTime = "00"
  cen.innerHTML = cenTime
  sec.innerHTML = secTime
  min.innerHTML = minTime

  saveLocalStorage()
  clearInterval(timer)
}

startBtn.addEventListener('click', () => {
  clearInterval(timer)
  passTime()
})

pauseBtn.addEventListener('click', () => {
  clearInterval(timer)
})

restartBtn.addEventListener('click', returnTimer)

var keys = {}

window.addEventListener('keydown', (e) => {
  keys[e.key] = true

  if (keys = ['Control'] && e.key == 'i') {
    e.preventDefault()
    startBtn.click()
  }

  if (keys = ['Control'] && e.key == 'p') {
    e.preventDefault()
    pauseBtn.click()
  }

  if (keys = ['Control'] && e.key == 'r') {
    e.preventDefault()
    restartBtn.click()
  }
})

window.addEventListener('keyup', (e) => {
  delete keys[e.key]
})