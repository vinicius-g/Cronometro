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
    cenTime = 0
  }
  if (secTime == 60) {
    minTime++
    secTime = 0
  }

  min.innerHTML = minTime
  sec.innerHTML = secTime
  cen.innerHTML = cenTime

  correctNumber(cenTime.toString(), cen)
  correctNumber(secTime.toString(), sec)
  correctNumber(minTime.toString(), min)

  saveLocalStorage()
  timer = setTimeout(passTime, 10)
}

function correctNumber(timeValue, timeContainer) {
  if (timeValue < 10 && timeValue !== "00" && timeValue.length < 2) {
    timeContainer.innerHTML = "0" + timeValue
  } else {
    timeContainer.innerHTML = timeValue
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
  passTime()
})

pauseBtn.addEventListener('click', () => {
  startBtn.classList.remove("lock")
  clearInterval(timer)
})

restartBtn.addEventListener('click', () => {
  startBtn.classList.remove("lock")
  returnTimer()
})

var keys = {}

window.addEventListener('keydown', (e) => {
  keys[e.key] = true

  if (keys = ['Control'] && e.key == 'i' && (!startBtn.classList.contains("lock"))) {
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