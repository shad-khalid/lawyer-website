let slideIndex = 1;
showSlides(slideIndex);

function prevSlide() {
  showSlides((slideIndex -= 1));
}

function nextSlide() {
  showSlides((slideIndex += 1));
}

function showSlides(n) {
  let slides = document.querySelectorAll(".slide");

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.transform = `translateX(-${(slideIndex - 1) * 100}%)`;
  }
}

document.querySelector(".prev").addEventListener("click", () => {
  prevSlide();
});

document.querySelector(".next").addEventListener("click", () => {
  nextSlide();
});
const faqsContainer = document.querySelector(".faqs-container");

const faqs = [
  {
    question: "What is Lorem Ipsum?",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    question: "Why do we use it?",
    answer:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  },
  {
    question: "Where does it come from?",
    answer:
      "Contrary to popular belief, Lorem Ipsum is not simply random text.",
  },
  {
    question: "What is Lorem Ipsum?",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    question: "Why do we use it?",
    answer:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  },
  {
    question: "Where does it come from?",
    answer:
      "Contrary to popular belief, Lorem Ipsum is not simply random text.",
  },
];

faqs.forEach((faq) => {
  const faqElement = document.createElement("div");
  faqElement.classList.add("faq-item");
  faqElement.innerHTML = `
    <div class="faq-question">${faq.question}</div>
    <div class="faq-answer">${faq.answer}</div>
  `;
  faqsContainer.appendChild(faqElement);
});
// Get references to the form and input fields
const loginForm = document.getElementById("login-form");
const signupForm = document.getElementById("signup-form");
const loginEmail = document.getElementById("login-email");
const loginPassword = document.getElementById("login-password");
const signupName = document.getElementById("signup-name");
const signupEmail = document.getElementById("signup-email");
const signupPassword = document.getElementById("signup-password");

// Add event listeners to the login and signup forms
loginForm.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent the form from submitting
  const email = loginEmail.value;
  const password = loginPassword.value;
  // Call your login function here, passing in the email and password values
});

signupForm.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent the form from submitting
  const name = signupName.value;
  const email = signupEmail.value;
  const password = signupPassword.value;
  // Call your signup function here, passing in the name, email, and password values
});
