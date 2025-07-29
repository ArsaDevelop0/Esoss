let noClickCount = 0;
const yesBtn = document.getElementById("yesButton");
const noBtn = document.getElementById("noButton");

yesBtn.addEventListener("click", () => {
  alert("Teşekkür ederim! 💖");
  window.location.href = "index.html";
});

noBtn.addEventListener("click", () => {
  noClickCount++;

  if (noClickCount < 3) {
    yesBtn.style.transform = `scale(${1 + noClickCount * 0.5})`;
  } else {
    yesBtn.style.position = "fixed";
    yesBtn.style.top = "0";
    yesBtn.style.left = "0";
    yesBtn.style.width = "100vw";
    yesBtn.style.height = "100vh";
    yesBtn.style.fontSize = "3rem";
    yesBtn.textContent = "Evet 😁";
    noBtn.style.display = "none";
  }
});
