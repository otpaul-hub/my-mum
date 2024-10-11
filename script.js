// Countdown Timer
const countdown = () => {
  const birthdayDate = new Date("Oct 12, 2024 00:00:00").getTime();
  const now = new Date().getTime();
  const gap = birthdayDate - now;

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(gap / day);
  const hours = Math.floor((gap % day) / hour);
  const minutes = Math.floor((gap % hour) / minute);
  const seconds = Math.floor((gap % minute) / second);

  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;

  if (gap < 0) {
    document.getElementById("countdown").innerText = "Happy Birthday!";
  }
};

setInterval(countdown, 1000);

// Play music
function playMusic() {
  var song = document.getElementById("birthdaySong");
  song.play();
}

function submitMessage() {
  const message = document.getElementById("message").value;
  const messageContainer = document.getElementById("messages-container");

  if (message.trim() === "") {
    alert("Please write a message before submitting.");
    return;
  }

  const newMessage = document.createElement("div");
  newMessage.textContent = message;
  newMessage.style.padding = "10px";
  newMessage.style.borderBottom = "1px solid #ccc";

  messageContainer.appendChild(newMessage);
  document.getElementById("message").value = "";
}

function submitQuiz() {
  const q1 = document.getElementById("q1").value.toLowerCase();
  const q2 = document.getElementById("q2").value.toLowerCase();
  const result = document.getElementById("quiz-result");

  let score = 0;
  if (q1 === "skyblue") score++;
  if (q2 === "grilled fish") score++;

  result.textContent = `You got ${score}/4 correct!`;
}

function uploadVideo() {
  const fileInput = document.getElementById("videoUpload");
  const videoContainer = document.getElementById("video-container");

  if (fileInput.files.length > 0) {
    const video = document.createElement("video");
    video.src = URL.createObjectURL(fileInput.files[0]);
    video.controls = true;
    videoContainer.appendChild(video);
  }
}

function addWishlistItem() {
  const newItem = document.getElementById("new-item").value;
  const wishlist = document.getElementById("wishlist");

  if (newItem.trim() !== "") {
    const listItem = document.createElement("li");
    listItem.textContent = newItem;
    wishlist.appendChild(listItem);
    document.getElementById("new-item").value = "";
  } else {
    alert("Please enter a wish.");
  }
}

let stream = null;

function startCamera() {
  const video = document.getElementById("cameraStream");

  navigator.mediaDevices
    .getUserMedia({ video: true })
    .then(function (mediaStream) {
      video.srcObject = mediaStream;
      stream = mediaStream;
    })
    .catch(function (err) {
      console.log("Camera error: " + err);
    });
}

function takePicture() {
  const canvas = document.getElementById("photoCanvas");
  const video = document.getElementById("cameraStream");
  const context = canvas.getContext("2d");
  canvas.style.display = "block";
  context.drawImage(video, 0, 0, canvas.width, canvas.height);
}

function savePicture() {
  const canvas = document.getElementById("photoCanvas");
  const dataUrl = canvas.toDataURL("image/png");
  const a = document.createElement("a");
  a.href = dataUrl;
  a.download = "birthday_picture.png";
  a.click();
}

startCamera();

function submitPoll() {
  const selectedOption = document.querySelector('input[name="poll"]:checked');
  const pollResult = document.getElementById("poll-result");

  if (selectedOption) {
    pollResult.textContent = `You voted for: ${selectedOption.value}`;
  } else {
    pollResult.textContent = "Please select an option before submitting.";
  }
}

function showSurprise() {
  const surpriseContainer = document.getElementById("surprise-container");
  surpriseContainer.innerHTML =
    '<img src="surprise-gift.jpg" alt="Surprise Gift!">';
}
