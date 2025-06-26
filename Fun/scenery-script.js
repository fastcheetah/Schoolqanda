// Fun Interactive Scenery Script! 🎉
document.addEventListener("DOMContentLoaded", () => {
  const speedBtn = document.getElementById("speedBtn")
  const rainBtn = document.getElementById("rainBtn")
  const nightBtn = document.getElementById("nightBtn")
  const partyBtn = document.getElementById("partyBtn")
  const rain = document.getElementById("rain")
  const body = document.body

  let isSpeedMode = false
  let isRaining = false
  let isNightMode = false
  let isPartyMode = false

  // Speed Mode Toggle
  speedBtn.addEventListener("click", () => {
    isSpeedMode = !isSpeedMode

    if (isSpeedMode) {
      body.classList.add("speed-mode")
      speedBtn.textContent = "🐌 Slow Down!"
      speedBtn.style.background = "linear-gradient(135deg, #ff6b6b 0%, #ee5a52 100%)"

      // Add speed lines effect
      createSpeedLines()
    } else {
      body.classList.remove("speed-mode")
      speedBtn.textContent = "🚀 Speed Up!"
      speedBtn.style.background = "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"

      // Remove speed lines
      removeSpeedLines()
    }
  })

  // Rain Toggle
  rainBtn.addEventListener("click", () => {
    isRaining = !isRaining

    if (isRaining) {
      rain.style.display = "block"
      rainBtn.textContent = "☀️ Stop Rain!"
      rainBtn.style.background = "linear-gradient(135deg, #4A90E2 0%, #357ABD 100%)"

      // Add more raindrops dynamically
      addMoreRain()
    } else {
      rain.style.display = "none"
      rainBtn.textContent = "🌧️ Make it Rain!"
      rainBtn.style.background = "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"

      // Remove extra raindrops
      removeExtraRain()
    }
  })

  // Night Mode Toggle
  nightBtn.addEventListener("click", () => {
    isNightMode = !isNightMode

    if (isNightMode) {
      body.classList.add("night-mode")
      nightBtn.textContent = "☀️ Day Mode!"
      nightBtn.style.background = "linear-gradient(135deg, #2c3e50 0%, #34495e 100%)"

      // Add stars
      addStars()
    } else {
      body.classList.remove("night-mode")
      nightBtn.textContent = "🌙 Night Mode!"
      nightBtn.style.background = "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"

      // Remove stars
      removeStars()
    }
  })

  // Party Mode Toggle
  partyBtn.addEventListener("click", () => {
    isPartyMode = !isPartyMode

    if (isPartyMode) {
      body.classList.add("party-mode")
      partyBtn.textContent = "😴 Calm Down!"
      partyBtn.style.background = "linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)"

      // Add party effects
      startPartyEffects()
    } else {
      body.classList.remove("party-mode")
      partyBtn.textContent = "🎉 Party Mode!"
      partyBtn.style.background = "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"

      // Stop party effects
      stopPartyEffects()
    }
  })

  // Fun Functions
  function createSpeedLines() {
    for (let i = 0; i < 10; i++) {
      const speedLine = document.createElement("div")
      speedLine.className = "speed-line"
      speedLine.style.cssText = `
                position: absolute;
                width: 100px;
                height: 2px;
                background: linear-gradient(to right, transparent, #FFD700, transparent);
                top: ${Math.random() * 100}%;
                right: -100px;
                animation: speedLineMove 0.5s linear infinite;
                animation-delay: ${i * 0.1}s;
            `
      body.appendChild(speedLine)
    }

    // Add speed line animation
    const style = document.createElement("style")
    style.textContent = `
            @keyframes speedLineMove {
                0% { transform: translateX(0); opacity: 0; }
                50% { opacity: 1; }
                100% { transform: translateX(-100vw); opacity: 0; }
            }
        `
    document.head.appendChild(style)
  }

  function removeSpeedLines() {
    const speedLines = document.querySelectorAll(".speed-line")
    speedLines.forEach((line) => line.remove())
  }

  function addMoreRain() {
    for (let i = 0; i < 20; i++) {
      const raindrop = document.createElement("div")
      raindrop.className = "raindrop extra-rain"
      raindrop.style.cssText = `
                position: absolute;
                width: 2px;
                height: 20px;
                background: linear-gradient(to bottom, transparent 0%, #4A90E2 50%, transparent 100%);
                animation: rainFall ${Math.random() * 2 + 1}s linear infinite;
                left: ${Math.random() * 100}%;
                animation-delay: ${Math.random() * 2}s;
            `
      rain.appendChild(raindrop)
    }
  }

  function removeExtraRain() {
    const extraRain = document.querySelectorAll(".extra-rain")
    extraRain.forEach((drop) => drop.remove())
  }

  function addStars() {
    for (let i = 0; i < 50; i++) {
      const star = document.createElement("div")
      star.className = "star"
      star.style.cssText = `
                position: absolute;
                width: 2px;
                height: 2px;
                background: #FFFFFF;
                border-radius: 50%;
                top: ${Math.random() * 70}%;
                left: ${Math.random() * 100}%;
                animation: starTwinkle ${Math.random() * 3 + 2}s ease-in-out infinite;
                animation-delay: ${Math.random() * 2}s;
            `
      document.querySelector(".sky").appendChild(star)
    }

    // Add star twinkle animation
    const style = document.createElement("style")
    style.textContent = `
            @keyframes starTwinkle {
                0%, 100% { opacity: 0.3; transform: scale(1); }
                50% { opacity: 1; transform: scale(1.5); }
            }
        `
    document.head.appendChild(style)
  }

  function removeStars() {
    const stars = document.querySelectorAll(".star")
    stars.forEach((star) => star.remove())
  }

  let partyInterval
  function startPartyEffects() {
    // Random color changes for cars
    partyInterval = setInterval(() => {
      const cars = document.querySelectorAll(".car-body")
      cars.forEach((car) => {
        const colors = ["#FF6B6B", "#4ECDC4", "#45B7D1", "#96CEB4", "#FFEAA7", "#DDA0DD", "#98FB98"]
        const randomColor = colors[Math.floor(Math.random() * colors.length)]
        car.style.background = `linear-gradient(to bottom, ${randomColor}, ${randomColor}dd)`
      })

      // Random flower changes
      const flowers = document.querySelectorAll(".flower")
      const flowerEmojis = ["🌸", "🌺", "🌻", "🌷", "🌼", "🌹", "💐", "🏵️"]
      flowers.forEach((flower) => {
        const randomFlower = flowerEmojis[Math.floor(Math.random() * flowerEmojis.length)]
        flower.textContent = randomFlower
      })
    }, 1000)

    // Add confetti
    createConfetti()
  }

  function stopPartyEffects() {
    clearInterval(partyInterval)

    // Reset car colors
    const cars = document.querySelectorAll(".car-body")
    cars.forEach((car) => {
      car.style.background = "linear-gradient(to bottom, #FF6B6B 0%, #FF4757 100%)"
    })

    // Reset flowers
    const flowers = document.querySelectorAll(".flower")
    const originalFlowers = ["🌸", "🌺", "🌻", "🌷", "🌼"]
    flowers.forEach((flower, index) => {
      flower.textContent = originalFlowers[index] || "🌸"
    })

    // Remove confetti
    const confetti = document.querySelectorAll(".confetti")
    confetti.forEach((piece) => piece.remove())
  }

  function createConfetti() {
    for (let i = 0; i < 30; i++) {
      const confetti = document.createElement("div")
      confetti.className = "confetti"
      confetti.style.cssText = `
                position: absolute;
                width: 10px;
                height: 10px;
                background: hsl(${Math.random() * 360}, 70%, 60%);
                top: -10px;
                left: ${Math.random() * 100}%;
                animation: confettiFall ${Math.random() * 3 + 2}s linear infinite;
                animation-delay: ${Math.random() * 2}s;
                border-radius: ${Math.random() > 0.5 ? "50%" : "0"};
            `
      body.appendChild(confetti)
    }

    // Add confetti animation
    const style = document.createElement("style")
    style.textContent = `
            @keyframes confettiFall {
                0% { 
                    transform: translateY(-10px) rotate(0deg); 
                    opacity: 1; 
                }
                100% { 
                    transform: translateY(100vh) rotate(360deg); 
                    opacity: 0; 
                }
            }
        `
    document.head.appendChild(style)
  }

  // Add some random fun interactions
  document.addEventListener("click", (e) => {
    // Create click sparkles
    const sparkle = document.createElement("div")
    sparkle.style.cssText = `
            position: absolute;
            width: 20px;
            height: 20px;
            background: radial-gradient(circle, #FFD700, transparent);
            border-radius: 50%;
            left: ${e.clientX - 10}px;
            top: ${e.clientY - 10}px;
            pointer-events: none;
            animation: sparkleExpand 1s ease-out forwards;
            z-index: 9999;
        `
    body.appendChild(sparkle)

    setTimeout(() => sparkle.remove(), 1000)
  })

  // Add sparkle expand animation
  const sparkleStyle = document.createElement("style")
  sparkleStyle.textContent = `
        @keyframes sparkleExpand {
            0% { transform: scale(0); opacity: 1; }
            100% { transform: scale(3); opacity: 0; }
        }
    `
  document.head.appendChild(sparkleStyle)

  // Fun console messages
  console.log("🌞 Welcome to the Fun Animated Scenery! 🚗")
  console.log("🎮 Try clicking the buttons for different effects!")
  console.log("✨ Click anywhere for sparkles!")

  // Random fun facts
  const funFacts = [
    "🚗 Did you know cars were invented before sliced bread?",
    "🌞 The sun is actually white, not yellow!",
    "🌳 Trees can communicate with each other!",
    "🐦 Birds can see ultraviolet light!",
    "🌧️ Rain has a smell called petrichor!",
  ]

  setInterval(() => {
    const randomFact = funFacts[Math.floor(Math.random() * funFacts.length)]
    console.log(randomFact)
  }, 30000)
})
