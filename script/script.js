const bookmarkedSongs = [
  {
    image: "assets/music-image/saiba.jpeg",
    songName: "Sahiba",
    writer: "Aditya Rikhar",
  },
  {
    image: "assets/music-image/ik-kudi.jpeg",
    songName: "Ik Kudi",
    writer: "Arpit Bala & Wolf.Cryman",
  },
 
];

const recentlyPlayed = [
  {
    image: "assets/music-image/obsessed.jpeg",
    songName: "Obsessed",
    writer: "Riar Saab & Abhijay Sharma",
  },
  {
    image: "assets/music-image/players.jpeg",
    songName: "Players",
    writer: "Badshah & Karan Aujla",
  },
  {
    image: "assets/music-image/Tauba-Tauba.jpeg",
    songName: "Tauba Tauba",
    writer: "Karan Aujla",
  },
  {
    image: "assets/music-image/Heeriye.jpeg",
    songName: "Heeriye",
    writer: "Arijit Singh & Jasleen Royal",
  },
  {
    image: "assets/music-image/Still Rollin.jpeg",
    songName: "Still Rollin",
    writer: "Shubh",
  },
  {
    image: "assets/music-image/dhundhala.jpeg",
    songName: "Dhundhala",
    writer: "Talwiinder, and Yashraj",
  },
];

const topSongs = [
  {
    rank: 1,
    image: "assets/music-image/Still Rollin.jpeg",
    songName: "Still Rollin",
    artist: "Shubh",
    album: "Still Rollin",
    views: 1502255,
    time: "2:38",
  },
  {
    rank: 2,
    image: "assets/music-image/apna-bana-le.jpg",
    songName: "Apna Bana Le",
    artist: "Arijit Singh",
    album: "Bhediya",
    views: 3205541,
    time: "3:51",
  },
  {
    rank: 3,
    image: "assets/music-image/blinding-lights.jpeg",
    songName: "Blinding Lights",
    artist: "The Weeknd",
    album: "After Hours",
    views: 620002155,
    time: "3:20",
  },
  {
    rank: 4,
    image: "assets/music-image/no-love.jpeg",
    songName: "No Love",
    artist: "Shubh",
    album: "Singles",
    views: 8022145,
    time: "2:50",
  },
  {
    rank: 5,
    image: "assets/music-image/attention.jpeg",
    songName: "Attention",
    artist: "Charlie Puth",
    album: "Voicenotes",
    views: 540125500,
    time: "3:27",
  },
  {
    rank: 6,
    image: "assets/music-image/kesariya.jpeg",
    songName: "Kesariya",
    artist: "Arijit Singh",
    album: "Brahmāstra",
    views: 4202544,
    time: "4:28",
  },
  {
    rank: 7,
    image: "assets/music-image/goat.jpeg",
    songName: "GOAT",
    artist: "Diljit Dosanjh",
    album: "GOAT",
    views: 11225544,
    time: "3:15",
  },
  {
    rank: 8,
    image: "assets/music-image/shape-of-you.jpeg",
    songName: "Shape of You",
    artist: "Ed Sheeran",
    album: "Divide",
    views: 900221554,
    time: "3:53",
  },
  {
    rank: 9,
    image: "assets/music-image/raataan-lambiyan.jpeg",
    songName: "Raataan Lambiyan",
    artist: "Jubin Nautiyal & Asees Kaur",
    album: "Shershaah",
    views: 51002544,
    time: "3:50",
  },
  {
    rank: 10,
    image: "assets/music-image/industry-baby.jpeg",
    songName: "Industry Baby",
    artist: "Lil Nas X & Jack Harlow",
    album: "Montero",
    views: 780214125,
    time: "3:32",
  },
];

function formatViews(n) {
  if (n >= 1_000_000) return (n / 1_000_000).toFixed(1) + "M";
  if (n >= 1_000) return (n / 1_000).toFixed(1) + "K";
  return n;
}

function renderBookmarked() {
  const box = document.querySelector(".side-bottom");
  box.innerHTML = bookmarkedSongs
    .map(
      (s) => `
    <div class="book-con">
      <div class="img-con"><img src="${s.image}"></div>
      <div class="info-con">
        <h3>${s.songName}</h3>
        <p>${s.writer}</p>
      </div>
    </div>
  `
    )
    .join("");
}

function renderRecent() {
  const box = document.querySelector(".recent-con");
  box.innerHTML = recentlyPlayed
    .map(
      (s) => `
    <div class="music-con">
      <div class="music-img"><img src="${s.image}"></div>
      <h3>${s.songName}</h3>
      <p>${s.writer}</p>
    </div>
  `
    )
    .join("");
}

function renderTop() {
  const box = document.querySelector(".song-con");
  box.innerHTML = topSongs
    .map(
      (s) => `
    <div class="song-card">
      <div class="rank">${s.rank}</div>

      <div class="song">
        <div class="song-img"><img src="${s.image}"></div>
        <div class="song-info">
          <h3>${s.songName}</h3>
          <p>${s.artist}</p>
        </div>
      </div>

      <div class="album-name">${s.album}</div>
      <div class="song-view"><i class="ri-music-2-fill"></i> ${formatViews(
        s.views
      )}</div>
      <div class="song-time"><i class="ri-time-line"></i> ${s.time}</div>

      <div class="like-section">
        <button class="like-btn"><i class="ri-heart-3-line"></i></button>
      </div>

      <div class="option"><i class="ri-more-2-fill"></i></div>
    </div>
  `
    )
    .join("");
}

renderBookmarked();
renderRecent();
renderTop();

const playBtn = document.querySelector(".play-stop");

if (playBtn) {
  playBtn.innerHTML = `<i class="ri-play-fill"></i>`;

  playBtn.addEventListener("click", () => {
    if (playBtn.innerHTML.includes("pause")) {
      playBtn.innerHTML = `<i class="ri-play-fill"></i>`;
      playBtn.style.fontSize = "1.5rem";
    } else {
      playBtn.innerHTML = `<i class="ri-pause-fill"></i>`;
      playBtn.style.fontSize = "1.5rem";
    }
  });
}

document.addEventListener("click", (e) => {
  const btn = e.target.closest(".like-btn");
  if (!btn) return;
  const icon = btn.querySelector("i");
  if (icon.classList.contains("ri-heart-3-line")) {
    icon.classList.replace("ri-heart-3-line", "ri-heart-3-fill");
    btn.style.color = "red";
  } else {
    icon.classList.replace("ri-heart-3-fill", "ri-heart-3-line");
    btn.style.color = "";
  }
});


const hamburger = document.querySelector(".hamburger");
const sidebar = document.querySelector(".side-bar");
const overlay = document.querySelector(".sidebar-overlay");

hamburger.addEventListener("click", () => {
  sidebar.classList.toggle("active");
  overlay.classList.toggle("active");
});

overlay.addEventListener("click", () => {
  sidebar.classList.remove("active");
  overlay.classList.remove("active");
});
