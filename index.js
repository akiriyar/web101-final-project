
/* Dark Mode Toggle */
let themeButton = document.getElementById("theme-button");

const toggleDarkMode = () => {
  document.body.classList.toggle("dark-mode");
}

themeButton.addEventListener("click", toggleDarkMode);



/* Signitures */
const addSignature = (person) => {
  const signatureText = `🖊️ ${person.name} supports this.`;

  const newSignature = document.createElement("p");
  newSignature.textContent = signatureText;

  const signaturesSection = document.querySelector(".signatures");
  signaturesSection.appendChild(newSignature);
}

const signNowButton = document.getElementById("sign-now-button");

/* Form Validation */
const validateForm = () => {
  let containsErrors = false;
  const petitionInputs = document.getElementById("sign-petition").elements;

  let person = {
    name: petitionInputs[0].value,
    hometown: petitionInputs[1].value,
    email: petitionInputs[2].value
  }


  for (let i = 0; i < petitionInputs.length; i++) {
    if (person.hometown.length < 2) {
      petitionInputs[i].classList.add('error');
      containsErrors = true;
    } else {
      petitionInputs[i].classList.remove('error');
    }
  }

  if (!containsErrors) {
    addSignature(person);
    toggleModal(person);
    petitionInputs["name"].value = "";
    petitionInputs["hometown"].value = "";
    petitionInputs["email"].value = "";
  }
}

signNowButton.addEventListener('click', validateForm);

// animation object
let animation = {
  realDistance: 150,
  initialOpacity: 0,
  transistionDelay: 0,
  transitionDuration: '2s',
  transitionProperty: 'all',
  transitionTimingFunction: 'ease'
}

// animation function
let revealableContainers = document.querySelectorAll('.revealable');

function reveal() {
  for (let i = 0; i < revealableContainers.length; i++) {
    let windowHeight = window.innerHeight;
    let topOfRevealableContainer = revealableContainers[i].getBoundingClientRect().top;

    if (topOfRevealableContainer < windowHeight - animation.realDistance) {
      revealableContainers[i].classList.add('active');
    } else {
      revealableContainers[i].classList.remove('active');
    }
  }
}

window.addEventListener('scroll', reveal);
reveal();

function toggleModal(person) {
  const modal = document.getElementById("thanks-modal");
  const modalContent = document.getElementById("thanks-modal-content");

  modal.style.display = "flex";
  modalContent.textContent = `Thank you so much ${person.name}!`;

  let intervalId = setInterval(scaleImage, 500);

  setTimeout(() => {
    modal.style.display = "none";
    clearInterval(intervalId);
  }, 4000);

}


let scaleFactor = 1;
let modalImage = document.querySelector('.modal img');

function scaleImage() {
  if (scaleFactor === 1) {
    scaleFactor = 0.8;
  } else {
    scaleFactor = 1;
  }
  modalImage.style.transform = `scale(${scaleFactor})`;
}



