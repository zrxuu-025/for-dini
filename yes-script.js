let musicPlaying = false

window.addEventListener('load', () => {
  launchConfetti()
  launchHeartRain()

  const music = document.getElementById('bg-music')
  music.volume = 0.35

  const playMusic = () => {
    music.play().then(() => {
      musicPlaying = true
      document.getElementById('music-toggle').textContent = '🔊'
    }).catch(() => {})
  }

  playMusic()
  document.addEventListener('click', playMusic, { once: true })
})

function launchConfetti() {
  const colors = ['#ff69b4', '#ff1493', '#ff85a2', '#ffb3c1', '#ff0000', '#ff6347', '#fff', '#ffdf00']
  const duration = 9000
  const end = Date.now() + duration

  confetti({ particleCount: 220, spread: 120, origin: { x: 0.5, y: 0.35 }, colors })

  const interval = setInterval(() => {
    if (Date.now() > end) return clearInterval(interval)

    confetti({ particleCount: 55, angle: 60, spread: 70, origin: { x: 0, y: 0.65 }, colors })
    confetti({ particleCount: 55, angle: 120, spread: 70, origin: { x: 1, y: 0.65 }, colors })
    confetti({ particleCount: 25, spread: 360, origin: { x: Math.random(), y: Math.random() * 0.5 }, colors })
  }, 260)
}

function launchHeartRain() {
  setInterval(() => {
    const heart = document.createElement('div')
    heart.textContent = ['💖', '💕', '💘', '💞', '✨'][Math.floor(Math.random() * 5)]
    heart.style.position = 'fixed'
    heart.style.left = Math.random() * 100 + 'vw'
    heart.style.top = '-30px'
    heart.style.fontSize = Math.random() * 18 + 18 + 'px'
    heart.style.pointerEvents = 'none'
    heart.style.zIndex = '9999'
    heart.style.animation = 'fallHeart 4s linear forwards'
    document.body.appendChild(heart)

    setTimeout(() => heart.remove(), 4200)
  }, 180)
}

function toggleMusic() {
  const music = document.getElementById('bg-music')
  if (musicPlaying) {
    music.pause()
    musicPlaying = false
    document.getElementById('music-toggle').textContent = '🔇'
  } else {
    music.play()
    musicPlaying = true
    document.getElementById('music-toggle').textContent = '🔊'
  }
}
