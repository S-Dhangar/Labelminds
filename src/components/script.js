
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

// Scroll Section
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      // active navbar navLinks
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });

      //active secctions for acimations on scroll
      sec.classList.add("show-animate");
    }
    // if want to use Animation that repeats on scroll use this
    else {
      sec.classList.remove("show-animate");
    }
  });

  // Sticky Navigation
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);

  // Remove Toggle icon and navbar when click navbar links (scroll)
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");

  let footer = document.querySelector("footer");
  footer.classList.toggle(
    "show-animate",
    this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight
  );
};

// Function to get the current day of the week (0 = Sunday, 1 = Monday, etc.)
function getCurrentDay() {
  const currentDate = new Date();
  return currentDate.getDay();
}

// Function to set the video source based on the current day
function setVideoSource() {
  const videoPlayer = document.getElementById("videoPlayer");
  const currentDay = 0;

  switch (currentDay) {
    case 0: // Sunday
      videoPlayer.src = "../images/bg_video.mp4";
      break;
    case 1: // Monday
    videoPlayer.src = "../images/bg_video.mp4";
    break;
    case 2: // Tuesday
    videoPlayer.src = "../images/bg_video.mp4";
    break;
    case 3: // Wednesday
    videoPlayer.src = "../images/bg_video.mp4";
    break;
    case 4: // Thursday
    videoPlayer.src = "../images/bg_video.mp4";
    break;
    case 5: // Friday
    videoPlayer.src = "../images/bg_video.mp4";
    break;
    case 6: // Saturday
    videoPlayer.src = "../images/bg_video.mp4";
    break;

    default: // If the current day is not handled, fallback to a default video
    videoPlayer.src = "../images/bg_video.mp4";
    break;
  }

  // Load and play the video
  videoPlayer.load();
  videoPlayer.play();
}

// Call the function to set the initial video source
setVideoSource();