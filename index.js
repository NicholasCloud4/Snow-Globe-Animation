const SNOWFLAKE_MAX_SIZE = 40
const SNOWFLAKE_MIN_SIZE = 5

const snowGlobe = document.querySelector('.snow-globe')
const main = document.querySelector('main')
const altTypes = ['⛄️', '🥶', '🎅🏼', '🎁']
let count = 0
let interval = null

document.querySelector('#btn-shake').addEventListener('click', shakeGlobe)

function shakeGlobe() {
  main.classList.add('shake')
  setTimeout(() => {
    main.classList.remove('shake')
  }, 500)
  if (!interval) {
    interval = setInterval(createSnowflake, 100)
  } else {
    clearInterval(interval)
    interval = null
  }
}

function random(min, max) {
  const r = Math.floor(Math.random() * (max - min)) + min;
  return r;
}

function createSnowflake() {

    const startPosX = random(0, 100)
    const size = random(SNOWFLAKE_MIN_SIZE, SNOWFLAKE_MAX_SIZE)
    const duration = random(5, 15)
    const blur = random(0, 2)
    const delay = random(5, 15)
    
    count++
    
    const snowflake = document.createElement('div')
    snowflake.classList.add('snowflake')
    snowflake.textContent = count % 20 === 0 ? `${altTypes[random(0, altTypes.length)]}` : '❄️'
    snowflake.style.animation = `fall ${duration}s linear infinite`
    snowflake.style.filter = `blur(${blur}px) `
    snowflake.style.animationDelay = `${delay}`
    snowflake.style.fontSize = `${size}px`
    snowflake.style.left = `${startPosX}%`
    snowGlobe.appendChild(snowflake)
    
    setTimeout(() => {
        snowflake.classList.add('hide')
        setTimeout(() => {
          snowGlobe.removeChild(snowflake)
        }, 2000)
    }, 8000)
}