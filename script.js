// script.js

// Video Data
const videos = [
    {
        id: "E-qNxxcnQfQ",
        title: "Barahsinghe Gears & Riffs - Promo",
        description: "Show Highlights",
        category: "music"
    },
    {
        id: "MLRkSTMJsY0",
        title: "Saayad - Aruna Shakya I Kripa Originals",
        description: "Music Video",
        category: "music"
    },
    {
        id: "qvsi1VBKgKQ",
        title: "My Guitar Collection | Jason Baidya",
        description: "YouTube Series",
        category: "music"
    },
    {
        id: "808CeYOBues",
        title: "Khukri Music Nation : LIVE CONCERT",
        description: "Concert",
        category: "events"
    },
    {
        id: "Ux0tKh8w6IE",
        title: "Timi Sanga Nai Official Music Video",
        description: "Music Video Color Grading",
        category: "music"
    },
    {
        id: "jW1jaXRK4uE",
        title: "Bardaan - Shreshan Shrestha",
        description: "Music Video Color Grading",
        category: "music"
    },
    {
        id: "DKQ4phiqcVc",
        title: "AAHA - Piroo x Shike x Jake | Official Music Video",
        description: "Music Video Scribble",
        category: "music"
    },
    {
        id: "FewvwbCX73s",
        title: "Who's Next - Parikrama",
        description: "Interview Series",
        category: "events"
    },
    {
        id: "iLcqvM7TrIQ",
        title: "Sano Sansar || The Walking Cloud || Official Music Video",
        description: "Music Video Color Grading",
        category: "music"
    },
    {
        id: "kh7_ccrBz5k",
        title: "Interview with Tony Kakkar",
        description: "Interview Series",
        category: "events"
    },
    {
        id: "A5s_f5HDQQ0",
        title: "Again - ASM | Gears and Riffs Theme Song",
        description: "Music Video, Direction & Grading",
        category: "music"
    },
    {
        id: "d6EkX31FToI",
        title: "ULTO PULTO X Deepa Bajracharya",
        description: "YouTube Show Series",
        category: "events"
    },
    {
        id: "DN7xc-JMU-s",
        title: "Timi Sanga (तिमी सँग) | TEDx Kathmandu University",
        description: "Live Show Production",
        category: "events"
    },
    {
        id: "Dc1KUB_qamU",
        title: "Future of education | Manish Pokharel | TEDx KathmanduUniversity",
        description: "TEDx Productions",
        category: "events"
    }
];

// Function to shuffle the videos array
function shuffleVideos(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Load Videos
const videoGallery = document.getElementById('video-gallery');

function loadVideos(category = 'all') {
    videoGallery.innerHTML = ''; // Clear existing videos
    let filteredVideos = category === 'all' ? videos : videos.filter(video => video.category === category);

    // Shuffle videos before displaying
    filteredVideos = shuffleVideos(filteredVideos);

    filteredVideos.forEach(video => {
        const videoElement = document.createElement('div');
        videoElement.classList.add('video-item');
        videoElement.innerHTML = `
            <iframe src="https://www.youtube.com/embed/${video.id}" allowfullscreen></iframe>
            <h3>${video.title}</h3>
            <p>${video.description}</p>
        `;
        videoElement.addEventListener('click', () => openLightbox(video.id, video.title));
        videoGallery.appendChild(videoElement);
    });

    // Animate video items
    anime({
        targets: '.video-item',
        opacity: [0, 1],
        translateY: [-20, 0],
        delay: anime.stagger(100),
        easing: 'easeInOutQuad'
    });
}

// Filters
const filterButtons = document.querySelectorAll('.filters button');
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        loadVideos(button.dataset.category);
    });
});

// Lightbox
const lightbox = document.getElementById('lightbox');
const lightboxVideo = document.getElementById('lightbox-video');
const lightboxTitle = document.getElementById('lightbox-title');
const closeBtn = document.querySelector('.lightbox .close');

function openLightbox(videoId, videoTitle) {
    lightbox.style.display = 'flex';
    lightboxVideo.src = `https://www.youtube.com/embed/${videoId}`;
    lightboxTitle.textContent = videoTitle;

    // Animate lightbox
    anime({
        targets: '.lightbox-content',
        opacity: [0, 1],
        scale: [0.9, 1],
        duration: 300,
        easing: 'easeInOutQuad'
    });
}

function closeLightbox() {
    lightbox.style.display = 'none';
    lightboxVideo.src = '';
    lightboxTitle.textContent = '';
}

closeBtn.addEventListener('click', closeLightbox);
lightbox.addEventListener('click', closeLightbox);

// Close lightbox with ESC key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeLightbox();
    }
});

// Initial Load
loadVideos();
