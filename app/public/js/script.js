var min = document.querySelector("[data-min]")
var sec = document.querySelector("[data-sec]")
var cen = document.querySelector("[data-cen]")

var minTime = "00"
var secTime = "00"
var cenTime = "00"

if (localStorage.getItem("time")) {
  minTime = JSON.parse(localStorage.getItem("time")).minutes
  secTime = JSON.parse(localStorage.getItem("time")).seconds
  cenTime = JSON.parse(localStorage.getItem("time")).hundredth
}

min.innerHTML = minTime
sec.innerHTML = secTime
cen.innerHTML = cenTime

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
    sec.innerHTML = secTime
    correctNumber(secTime.toString(), sec)
    cenTime = 0
  }
  if (secTime == 60) {
    minTime++
    min.innerHTML = minTime
    correctNumber(minTime.toString(), min)
    secTime = 0
  }

  cen.innerHTML = cenTime

  correctNumber(cenTime.toString(), cen)

  saveLocalStorage()
  timer = setTimeout(passTime, 10)
}

function correctNumber(timeValue, timeContainer) {
  if (timeValue.length < 2) {
    timeContainer.innerHTML = "0" + timeValue
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
  startBtn.classList.add("lock")
  pauseBtn.classList.remove("paused")
  passTime()
})

pauseBtn.addEventListener('click', () => {
  startBtn.classList.remove("lock")
  pauseBtn.classList.add("paused")
  clearInterval(timer)
})

restartBtn.addEventListener('click', () => {
  startBtn.classList.remove("lock")
  pauseBtn.classList.remove("paused")
  returnTimer()
})

var keys = []

window.addEventListener('keydown', (e) => {
  keys.push(e.key)
  e.preventDefault()

  if (keys.includes("Control") && e.key == 'i' && (!startBtn.classList.contains("lock"))) {
    startBtn.click()
    keys = []
  }

  if (keys.includes("Control") && e.key == 'p') {
    pauseBtn.click()
    keys = []
  }

  if (keys.includes("Control") && e.key == 'r') {
    restartBtn.click()
    keys = []
  }
})