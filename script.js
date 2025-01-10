// script.js

// Video Data
const videos = [
    {
        id: "u7PHlrfdS6o",
        title: "Music Video 1",
        description: "A great music video.",
        category: "music"
    },
    {
        id: "__PChVvof1A",
        title: "Event Coverage 1",
        description: "Highlights of an event.",
        category: "events"
    },
    {
        id: "OJ-j58rGo3s",
        title: "Music Video 2",
        description: "Another amazing music video.",
        category: "music"
    },
    {
        id: "VBtcrYMhRC8",
        title: "Event Coverage 2",
        description: "More event highlights.",
        category: "events"
    },
    {
        id: "new_video_id_1",
        title: "New Video 1",
        description: "Description for the new video.",
        category: "events"
    },
    {
        id: "new_video_id_2",
        title: "New Video 2",
        description: "Another new video description.",
        category: "music"
    }
];


// Load Videos
const videoGallery = document.getElementById('video-gallery');

function loadVideos(category = 'all') {
videoGallery.innerHTML = ''; // Clear existing videos
const filteredVideos = category === 'all' ? videos : videos.filter(video => video.category === category);

filteredVideos.forEach(video => {
    const videoElement = document.createElement('div');
    videoElement.classList.add('video-item');
    videoElement.innerHTML = `
        <iframe src="https://www.youtube.com/embed/${video.id}" allowfullscreen></iframe>
        <h3>${video.title}</h3>
        <p>${video.description}</p>
    `;
    videoElement.addEventListener('click', () => openLightbox(video.id));
    videoGallery.appendChild(videoElement);
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
const closeBtn = document.querySelector('.lightbox .close');

function openLightbox(videoId) {
lightbox.style.display = 'flex';
lightboxVideo.src = `https://www.youtube.com/embed/${videoId}`;
}

function closeLightbox() {
lightbox.style.display = 'none';
lightboxVideo.src = '';
}

closeBtn.addEventListener('click', closeLightbox);
lightbox.addEventListener('click', closeLightbox);

// Initial Load
loadVideos();
