var cards = document.querySelectorAll(".card");
console.log(cards);

cards.forEach((card) => card.addEventListener("click", flip));

var flipped = false;
var firstCard, secondCard;

function flip() {
  // console.log("CardFlipped");
  // console.log(this);
  this.classList.add("flip");
  if (!flipped) {
    flipped = true;
    firstCard = this;
  } else {
    secondCard = this;
    checkIt();
  }
}

function checkIt() {
  // console.log("check-------");
  if (firstCard.dataset.image === secondCard.dataset.image) {
    success();
  } else {
    fail();
  }
}

function success() {
    firstCard.removeEventListener("click", flip);
    secondCard.removeEventListener("click",flip);
    reset();
}

function fail() {
    // console.log("ohho");
    setTimeout(()=>{
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");
    reset();
    },200)
    
}

function reset() {
    firstCard = null;
    secondCard = null;
    flipped = false;
}

// suffle

(function suffle() {
  
  cards.forEach((card)=>{
    var index=Math.floor(Math.random()*16);
    card.style.order = index;
  })
})();

