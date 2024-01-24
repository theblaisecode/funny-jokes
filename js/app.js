"use strict";

document.addEventListener("DOMContentLoaded", function () {
  const theH1 = document.querySelector(".centralBg h1");
  const close = document.querySelector(".close");
  const jokeText = document.querySelector(".jokeText");
  const jokeAnswer = document.querySelector(".jokeAnswer");
  const any = document.querySelector("#random");
  const dad = document.querySelector("#dad");
  const programming = document.querySelector("#programming");
  const dark = document.querySelector("#dark");
  const misc = document.querySelector("#miscellaneous");
  const pun = document.querySelector("#pun");
  const spooky = document.querySelector("#spooky");
  const christmas = document.querySelector("#christmas");
  const btnJoke = document.querySelector(".btnJoke");
  const makeLaugh = document.querySelector(".getJoke .joke");

  let currentJokeCategory = ""; // Variable to store the current joke category

  // ---------------------- Change Joke category for Jokeapi.Dev
  function getDifferentJoke() {
    return laugh(currentJokeCategory);
  }

  function getRandomJoke() {
    return laugh("any");
  }

  function getProgrammingJoke() {
    return laugh("programming");
  }

  function getDarkJoke() {
    return laugh("dark");
  }

  function getMiscJoke() {
    return laugh("miscellaneous");
  }

  function getPunJoke() {
    return laugh("pun");
  }

  function getSpookyJoke() {
    return laugh("spooky");
  }

  function getChristmasJoke() {
    return laugh("christmas");
  }

  // ---------------------- Get joke from API
  async function laugh(jokeCategory) {
    jokeText.innerText = "";
    jokeAnswer.innerText = "";

    try {
      let url = `https://v2.jokeapi.dev/joke/${jokeCategory}?blacklistFlags=nsfw,religious,political,racist,sexist,explicit`;

      const res = await fetch(url);

      const data = await res.json();

      if (data.joke) {
        jokeText.innerText = data.joke;
        jokeAnswer.innerText = "";
      } else {
        jokeText.innerText = data.setup;
        jokeAnswer.innerText = data.delivery;
      }
    } catch (error) {
      const err = `Oops! there's an error. Error: ${error}`;
      console.log(err);
    }
  }

  // ---------------------- Get a different joke when Make Me Laugh Button is clicked
  btnJoke.addEventListener("click", getDifferentJoke);

  any.addEventListener("click", () => {
    currentJokeCategory = "any";
    getRandomJoke();
    theH1.innerText = "RANDOM";
    makeLaugh.classList.remove("hidden");
  });

  programming.addEventListener("click", () => {
    currentJokeCategory = "programming";
    getProgrammingJoke();
    theH1.innerText = "PROGRAMMING";
    makeLaugh.classList.remove("hidden");
  });

  dark.addEventListener("click", () => {
    currentJokeCategory = "dark";
    getDarkJoke();
    theH1.innerText = "DARKHUMOR";
    makeLaugh.classList.remove("hidden");
  });

  misc.addEventListener("click", () => {
    currentJokeCategory = "miscellaneous";
    getMiscJoke();
    theH1.innerText = "MISCELLANEOUS";
    makeLaugh.classList.remove("hidden");
  });

  pun.addEventListener("click", () => {
    currentJokeCategory = "pun";
    getPunJoke();
    theH1.innerText = "PUNINTENDED";
    makeLaugh.classList.remove("hidden");
  });

  spooky.addEventListener("click", () => {
    currentJokeCategory = "spooky";
    getSpookyJoke();
    theH1.innerText = "SPOOKYJOKES";
    makeLaugh.classList.remove("hidden");
  });

  christmas.addEventListener("click", () => {
    currentJokeCategory = "christmas";
    getChristmasJoke();
    theH1.innerText = "CHRISTMAS";
    makeLaugh.classList.remove("hidden");
  });

  close.addEventListener("click", () => {
    makeLaugh.classList.add("hidden");
  });

  // Initial joke load
  getDifferentJoke();

  let swiper = null; // Initialize Swiper variable

  // Media query
  const smartPhone = window.matchMedia("screen and (max-width: 580px)");

  function menuChange(smartPhone) {
    // Destroy existing Swiper instance if it exists
    if (swiper) {
      swiper.destroy(true, true);
    }

    // Create a new Swiper instance based on media query
    if (smartPhone.matches) {
      swiper = new Swiper(".mySwiper", {
        loop: true,
        spaceBetween: 0,
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        mousewheel: true,
        slidesPerView: 2,
        coverflowEffect: {
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        },
        pagination: {
          el: ".swiper-pagination",
        },
      });
    } else {
      swiper = new Swiper(".mySwiper", {
        direction: "vertical",
        loop: true,
        spaceBetween: 80,
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        mousewheel: true,
        slidesPerView: "auto",
        coverflowEffect: {
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        },
        pagination: {
          el: ".swiper-pagination",
        },
      });
    }
  }

  // Call listener function at run time
  menuChange(smartPhone);

  // Attach listener function on state changes
  smartPhone.addEventListener("change", function () {
    menuChange(smartPhone);
  });
});

// "use strict";

// document.addEventListener("DOMContentLoaded", function () {
//   const theH1 = document.querySelector(".centralBg h1");
//   const close = document.querySelector(".close");
//   const jokeText = document.querySelector(".jokeText");
//   const jokeAnswer = document.querySelector(".jokeAnswer");
//   const any = document.querySelector("#random");
//   const dad = document.querySelector("#dad");
//   const programming = document.querySelector("#programming");
//   const dark = document.querySelector("#dark");
//   const misc = document.querySelector("#miscellaneous");
//   const pun = document.querySelector("#pun");
//   const spooky = document.querySelector("#spooky");
//   const christmas = document.querySelector("#christmas");
//   const btnJoke = document.querySelector(".btnJoke");
//   const makeLaugh = document.querySelector(".getJoke .joke");

//   // ---------------------- Initialize Swiper
//   const swiper = new Swiper(".mySwiper", {
//     direction: "vertical",
//     loop: true,
//     spaceBetween: 80,
//     mousewheel: true,
//     slidesPerView: "auto",
//     centeredSlides: true,
//     // grabCursor: true,
//     effect: "coverflow",
//     coverflowEffect: {
//       rotate: 0,
//       stretch: 0,
//       depth: 70,
//       modifier: -1,
//       slideShadows: true,
//     },
//   });

//   // ---------------------- Change Joke category for Jokeapi.Dev
//   function getRandomJoke() {
//     return laugh("any");
//   }

//   function getProgrammingJoke() {
//     return laugh("programming");
//   }

//   function getDarkJoke() {
//     return laugh("dark");
//   }

//   function getMiscJoke() {
//     return laugh("miscellaneous");
//   }

//   function getPunJoke() {
//     return laugh("pun");
//   }

//   function getSpookyJoke() {
//     return laugh("spooky");
//   }

//   function getChristmasJoke() {
//     return laugh("christmas");
//   }

//   // ---------------------- Get joke from API
//   async function laugh(jokeCategory) {
//     jokeText.innerText = "";
//     jokeAnswer.innerText = "";

//     try {
//       // let jokeCategory = "any";
//       let url = `https://v2.jokeapi.dev/joke/${jokeCategory}?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=twopart`;

//       const res = await fetch(url);

//       const data = await res.json();
//       console.log(url)
//       jokeText.innerText = data.setup;
//       jokeAnswer.innerText = data.delivery;
//     } catch (error) {
//       const err = err`Oops! there's an error. Error: ${err}`;
//       console.log(err);
//     }
//   }

//   // btnJoke.addEventListener("click", getRandomJoke);

//   any.addEventListener("click", function () {
//     getRandomJoke();
//     theH1.innerText = "RANDOM";
//     makeLaugh.classList.remove("hidden");
//   });

//   programming.addEventListener("click", function () {
//     getProgrammingJoke();
//     theH1.innerText = "PROGRAMMING";
//     makeLaugh.classList.remove("hidden");
//   });

//   dark.addEventListener("click", function () {
//     getDarkJoke();
//     theH1.innerText = "DARK HUMOR";
//     makeLaugh.classList.remove("hidden");
//   });

//   misc.addEventListener("click", function () {
//     getMiscJoke();
//     theH1.innerText = "MISCELLANEOUS";
//     makeLaugh.classList.remove("hidden");
//   });

//   pun.addEventListener("click", function () {
//     getPunJoke();
//     theH1.innerText = "PUN INTENDED";
//     makeLaugh.classList.remove("hidden");
//   });

//   spooky.addEventListener("click", function () {
//     getSpookyJoke();
//     theH1.innerText = "SPOOKY JOKES";
//     makeLaugh.classList.remove("hidden");
//   });

//   christmas.addEventListener("click", function () {
//     getChristmasJoke();
//     theH1.innerText = "CHRISTMAS";
//     makeLaugh.classList.remove("hidden");
//   });

//   close.addEventListener("click", () => {
//     makeLaugh.classList.add("hidden");
//   });

//   laugh();
// });
