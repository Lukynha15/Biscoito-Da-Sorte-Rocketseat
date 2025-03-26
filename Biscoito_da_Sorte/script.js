const title = document.querySelector("h1")
const subtitle = document.querySelector("p")
const imageScreenOne = document.querySelector(".imageOne")
const imageScreenTwo = document.querySelector(".imageTwo")
const backButton = document.querySelector(".back")

const fortunes = [
  "Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.",
  "Cuidado com decisões impulsivas, pense antes de agir.",
  "A sorte está ao seu lado hoje!",
  "Aproveite os pequenos momentos que virão pela frente.",
];

const RandomPhrase = () => {
  const randomIndex = Math.floor(Math.random() * fortunes.length);
  const selectedFortune = fortunes[randomIndex];
  return selectedFortune
}

const LuckyRoulette = () => {
  title.innerText = "Aqui está a sua sorte de hoje:"
  subtitle.innerText = RandomPhrase()
  subtitle.classList.add("phrase-opened")

  imageScreenOne.classList.add("hide")
  imageScreenTwo.classList.remove("hide")
  
  backButton.classList.remove("hide")
}

const BackToFirstScreen = () => {
  window.location.reload()
}


window.addEventListener('keydown', handleKeydownToOpen)
window.addEventListener('keydown', handleKeyDownToExit)

function handleKeydownToOpen(event) {
  if (event.key === "Enter") {
    LuckyRoulette()
    window.removeEventListener('keydown', handleKeydownToOpen)
  }
}

function handleKeyDownToExit(event) {
  if (event.key === "Escape") {
    BackToFirstScreen()
  }
}