function showLove() {
    const messages = [
      "I love you more than words can say 💖",
      "You are my favorite person, Kouka 🌸",
      "Your smile is my home 🤍",
      "Come here… hug loading 🙆🏼‍♂️🙆🏼‍♂️",
      "I’m always on your side 💕"
    ];
  
    document.getElementById("loveText").innerText =
      messages[Math.floor(Math.random() * messages.length)];
  }
  
  // Floating hearts
  setInterval(() => {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerText = "💗";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 30 + 10 + "px";
    document.body.appendChild(heart);
  
    setTimeout(() => heart.remove(), 5000);
  }, 300);
  