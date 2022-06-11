var min = document.querySelector("[data-min]")
var sec = document.querySelector("[data-sec]")
var cen = document.querySelector("[data-cen]")

var minTime = "00"
var secTime = "00"
var cenTime = "00"

min.innerHTML = minTime 
sec.innerHTML = secTime 
cen.innerHTML = cenTime 

var startBtn = document.querySelector("[data-play]")
var pauseBtn = document.querySelector("[data-pause]")
var restartBtn = document.querySelector("[data-reset]")

var timer 

function passTime() {
  cenTime++
   if (cenTime == 99) {
    secTime++
    cenTime = 0
  }
  if (secTime == 60) {
    minTime ++
    secTime = 0
  }
  
  if (cenTime < 10 && cenTime != 0) {
    cen.innerHTML = "0"+cenTime
  } else {
    cen.innerHTML = cenTime
  }
  if (secTime < 10 && secTime != 0) {
    sec.innerHTML = "0"+secTime
  } else {
    sec.innerHTML = secTime
  }
  if (minTime < 10 && minTime != 0) {
    min.innerHTML = "0"+minTime
  } else {
    min.innerHTML = minTime
  }
  timer = setTimeout(passTime, 1)
}

function returnTimer() {
  cenTime = "00"
  secTime = "00"
  minTime = "00"
  cen.innerHTML = cenTime
  sec.innerHTML = secTime
  min.innerHTML = minTime
  clearInterval(timer)
}

startBtn.addEventListener('click', () => {
 clearInterval(timer)
 passTime() 
})

pauseBtn.addEventListener('click', () => {
  clearInterval(timer)
})

restartBtn.addEventListener('click', () => {
  returnTimer()
})

var keys = {}

window.addEventListener('keydown', (e) => {
  keys[e.key] = true

  if (keys=['Control'] && e.key == 'i') {
    e.preventDefault()
    startBtn.click()
  } 

  if (keys=['Control'] && e.key == 'p') {
    e.preventDefault()
    pauseBtn.click()
  }

  if (keys=['Control'] && e.key == 'r') {
    e.preventDefault()
    restartBtn.click()
  }
})

window.addEventListener('keyup', (e) => {
  delete keys[e.key]
})