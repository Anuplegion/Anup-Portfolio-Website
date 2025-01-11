// script.js

// Video Data
const videos = [
    { id: "E-qNxxcnQfQ", title: "Barahsinghe Gears & Riffs - Promo", description: "Show Highlights", category: "music" },
    { id: "MLRkSTMJsY0", title: "Saayad - Aruna Shakya I Kripa Originals", description: "Music Video", category: "music" },
    { id: "CLr3El1ThEY", title: "PATRUKAR | EP-1 | परिचय | Nepali Web Series | Fagoon Originals", description: "Edit, Short Film", category: "film" },
    { id: "qvsi1VBKgKQ", title: "My Guitar Collection | Jason Baidya", description: "YouTube Series", category: "music" },
    { id: "808CeYOBues", title: "Khukri Music Nation : LIVE CONCERT", description: "Concert", category: "music" },
    { id: "Ux0tKh8w6IE", title: "Timi Sanga Nai Official Music Video", description: "Music Video Color Grading", category: "music" },
    { id: "jW1jaXRK4uE", title: "Bardaan - Shreshan Shrestha", description: "Music Video Color Grading", category: "music" },
    { id: "DKQ4phiqcVc", title: "AAHA - Piroo x Shike x Jake | Official Music Video", description: "Music Video Scribble", category: "music" },
    { id: "FewvwbCX73s", title: "Who's Next - Parikrama", description: "Interview Series", category: "talk show" },
    { id: "iLcqvM7TrIQ", title: "Sano Sansar || The Walking Cloud || Official Music Video", description: "Music Video Color Grading", category: "music" },
    { id: "kh7_ccrBz5k", title: "Interview with Tony Kakkar", description: "Interview Series", category: "talk show" },
    { id: "A5s_f5HDQQ0", title: "Again - ASM | Gears and Riffs Theme Song", description: "Music Video, Direction & Grading", category: "music" },
    { id: "d6EkX31FToI", title: "ULTO PULTO X Deepa Bajracharya", description: "YouTube Show Series", category: "entertainment" },
    { id: "DN7xc-JMU-s", title: "Timi Sanga (तिमी सँग) | TEDx Kathmandu University", description: "Live Show Production", category: "event" },
    { id: "Dc1KUB_qamU", title: "Future of Education | Manish Pokharel | TEDx KathmanduUniversity", description: "TEDx Productions", category: "event" },
    { id: "43HO96aT6Kg", title: "TITLE? IT'S UP TO YOU | KU Theatre Group", description: "TEDx Productions", category: "event" },
    { id: "PqE8nPCIT28", title: "The Concept and Scope of Humanomics | Achyut Wagle | TEDx KathmanduUniversity", description: "TEDx Productions", category: "event" },
    { id: "nx3BvoLsQCU", title: "Ghar ko Tihar FT. @Saigrace | Fagoon Originals", description: "Edit and Direction Short Film Production", category: "film" },
    { id: "kEINuzWgvxM", title: "Helping Voiceless AMID COVID-19 Pandemic", description: "Documentary", category: "documentary" },
    { id: "7vj9l4Avsv8", title: "Panchhi | Sanup Paudel", description: "Music Video, Cinematography, & Post Production", category: "music" },
    { id: "ZNJxcoz6t60", title: "How can university students build satellites? | Jiten Thapa | TEDx KathmanduUniversity", description: "TEDx Productions", category: "event" },
    { id: "RhfPYZK_zAM", title: "A Little Splash of Colour", description: "Short Film", category: "film" },
    { id: "ZdNLEINulwE", title: "Panc Bike : Oldest Bike Shop of Nepal", description: "Commercial", category: "commercial" },
    { id: "G_qyEWF2S9g", title: "Editing Course for Premiere Pro", description: "Introduction Video", category: "education" },
    { id: "GiDvK-IhwUc", title: "INK'D featuring Shirish Dali [Albatross]", description: "YouTube Show, Full Production", category: "entertainment" },
    { id: "TS_LTF1FzlU", title: "INK'D featuring Satish Sthapit [Newaz]", description: "YouTube Show, Full Production", category: "entertainment" },
    { id: "UV_bIJdc5Vo", title: "INK'D featuring @vek.official", description: "YouTube Show, Full Production", category: "entertainment" },
    { id: "xwr9R2DvxWY", title: "INK'D featuring Nilesh Joshi [Cobweb]", description: "YouTube Show, Full Production", category: "entertainment" },
    { id: "zVopsAaxymM", title: "INK'D featuring Binod Lama Tamang [Sabin Rai & The Pharaoh | Joint Family Internationale]", description: "YouTube Show, Full Production", category: "entertainment" },
    { id: "FlpP4AbNXNc", title: "INK'D featuring Sushant & Laxman [Aerials Nepal]", description: "YouTube Show, Full Production", category: "entertainment" },
    { id: "enaB4LmI_xM", title: "INK'D featuring Sarad Shrestha [Shree ३]", description: "YouTube Show, Full Production", category: "entertainment" },
    { id: "7w18PfrbtsA", title: "INK'D featuring Dion 'Dizzbeats' Sclarr [AK47]", description: "YouTube Show, Full Production", category: "entertainment" },
    { id: "isvGe7bRITs", title: "INK'D featuring Amit Pradhan [The Shadows Nepal | AK47]", description: "YouTube Show, Full Production", category: "entertainment" },
    { id: "wP3s84krxfg", title: "INK'D featuring Neetesh Jung Kunwar", description: "YouTube Show, Full Production", category: "entertainment" },
    { id: "ozmIsCiHrSE", title: "INK'D featuring Visan Yonjan", description: "YouTube Show, Full Production", category: "entertainment" },
    { id: "Ev8GooBbzjw", title: "INK'D featuring Ajit Tamang Freelance Drummer [Trishna Gurung | Samriddhi Rai | Vek]", description: "YouTube Show, Full Production", category: "entertainment" },
    { id: "JpaFQWhL8sQ", title: "INK'D featuring Srijan Gewali [Cobweb]", description: "YouTube Show, Full Production", category: "entertainment" },
    { id: "gHzvEBbqzF4", title: "INK'D featuring DJ Bki Cool", description: "YouTube Show, Full Production", category: "entertainment" },
    { id: "e7fuWoIKI8E", title: "INK'D featuring Rohit John Chettri", description: "YouTube Show, Full Production", category: "entertainment" },
    { id: "dXy1U6Zsrhk", title: "INK'D featuring Bishesh Bhandari [The Babal Band | NGT Nepal]", description: "YouTube Show, Full Production", category: "entertainment" },
    { id: "5tEv7HzCSmg", title: "INK'D featuring @sunchavox [Albatross Nepal]", description: "YouTube Show, Full Production", category: "entertainment" },
    { id: "9UQ2niKEs1k", title: "INK'D featuring Sunil Dev Pant [Ugrakarma]", description: "YouTube Show, Full Production", category: "entertainment" },
    { id: "EjWnXYDYnrg", title: "INK'D featuring Rijesh & Sangam [Freebirds]", description: "YouTube Show, Full Production", category: "entertainment" },
    { id: "hTWvo1LwxII", title: "Gears & Riffs w/ Sunny Tuladhar [Jindabaad / ST Custom Guitars]", description: "Podcast, Talk Show", category: "podcast" },
    { id: "Uf6na0yGcDM", title: "Gears & Riffs w/ Suncha Vox [Albatross]", description: "Podcast, Talk Show", category: "podcast" },
    { id: "FpRTXFtC1r4", title: "Gears & Riffs w/ Bikrant Shrestha [Underside]", description: "Podcast, Talk Show", category: "podcast" },
    { id: "4iVPj2HSSl0", title: "Gears & Riffs w/ Hari Maharjan [Karma/HMP/Robin & the New Revolution]", description: "Podcast, Talk Show", category: "podcast" },
    { id: "izSEFx5npiU", title: "Gears & Riffs w/ Addy", description: "Podcast, Talk Show", category: "podcast" },
    { id: "kTAYLevtMFk", title: "Gears & Riffs w/ Deepak Moktan", description: "Podcast, Talk Show", category: "podcast" },
    { id: "pz135oWUFn4", title: "Gears & Riffs w/ Nikesh KC aka Nikimite [Sabin Rai & The Pharaoh/Rockheads]", description: "Podcast, Talk Show", category: "podcast" },
    { id: "nl5ChC2rfZ8", title: "Gears & Riffs w/ Srijan Bikram Gewali [Cobweb]", description: "Podcast, Talk Show", category: "podcast" },
    { id: "ehhNY1mWlUo", title: "Gears & Riffs w/ Rajat Rai [Cadenza Collective/Joint Family Internationale]", description: "Podcast, Talk Show", category: "podcast" },
    { id: "tkzPa-uDHc0", title: "Gears & Riffs w/ Manoj Kumar KC [1974ad]", description: "Podcast, Talk Show", category: "podcast" },
    { id: "_f1jr5DT8Lk", title: "Gears & Riffs w/ Sarad Shrestha [Shree ३ / Tumbleweed Inc]", description: "Podcast, Talk Show", category: "podcast" },
    { id: "p7eKbYvbcuo", title: "Gears & Riffs w/ Binayak Shah", description: "Podcast, Talk Show", category: "podcast" },
    { id: "OJ-j58rGo3s", title: "Highlander Gharma Sessions Trailer", description: "Event Highlights", category: "event" },
    { id: "32VdTXgRxwk", title: "1974AD Highlights", description: "Event Highlights", category: "event" },
    { id: "Mzl-mb6zKdg", title: "Timilai Piratile Badhula | 1974AD", description: "Concert Videography", category: "music" },
    { id: "m7ZFss4C36Q", title: "Jaatle Hoina Dilale | 1974AD with KJC Choir", description: "Concert Videography", category: "music" },
    { id: "_w-RCdEZxa4", title: "Aaja Kahan | 1974AD", description: "Concert Videography", category: "music" },
    { id: "0ce9dAwzwxk", title: "Diwas Gurung / ASM Highlights", description: "Event Highlights", category: "event" },
    { id: "SizoaJ97HXE", title: "Haami Aayou | Diwas Gurung", description: "Concert Videography", category: "music" },
    { id: "Rj9Y6R9_lio", title: "Monster He Becomes | ASM", description: "Concert Videography", category: "music" },
    { id: "-tDQBqZO4Pc", title: "Albatross Highlights", description: "Event Highlights", category: "event" },
    { id: "kVA_An6XvRw", title: "Timi Bhane (Farki Farki) | Albatross", description: "Concert Videography", category: "music" },
    { id: "FP9Q9b-MAYU", title: "Laijau | Diwas Gurung", description: "Concert Videography", category: "music" },
    { id: "h9AG5IBDav0", title: "Bhawana | Albatross", description: "Concert Videography", category: "music" },
    { id: "__PChVvof1A", title: "Timi Nai Hau | Sabin Rai & The Pharaoh", description: "Concert Videography", category: "music" },
    { id: "VAGA8uWvzRo", title: "Bistarai Bistarai | Rohit John Chettri", description: "Concert Videography", category: "music" },
    { id: "EGgV0U40Rls", title: "Gahiro | Monkey Temple", description: "Concert Videography", category: "music" },
    { id: "1CZH7tRXNbQ", title: "Jau Ki Basu | Sabin Rai & The Pharaoh", description: "Concert Videography", category: "music" },
    { id: "VcZ6FkE5Bfo", title: "Aaina Ra Daag | Pahenlo Batti Muni", description: "Concert Videography", category: "music" },
    { id: "bwcfCnqlNyw", title: "Yaad Harule | Monkey Temple", description: "Concert Videography", category: "music" },
    { id: "Rns31ARFENs", title: "Saathi (Friends Forever) | Swoopna Suman", description: "Concert Videography", category: "music" },
    { id: "hLpsSw0trak", title: "Sapana ko Mayalu | The Elements", description: "Concert Videography", category: "music" },
    { id: "UeIp9OclhjM", title: "Bichitra | Pahenlo Batti Muni", description: "Concert Videography", category: "music" },
    { id: "uNZC5wHuKFU", title: "Tesaile Hidey Ma | The Elements", description: "Concert Videography", category: "music" },
    { id: "c-SumLEhmxM", title: "Maryo Ni Maryo | Cobweb", description: "Concert Videography", category: "music" },
    { id: "tuRXT8xhUC0", title: "Nepal | Robin And The New Revolution", description: "Concert Videography", category: "music" },
    { id: "_FFwowYz1N4", title: "Timro Nau | Cobweb", description: "Concert Videography", category: "music" },
    { id: "eM5egXnsT68", title: "Ma Chahi Nepali | Samriddhi Rai", description: "Concert Videography", category: "music" },
    { id: "w5Jpjw52L00", title: "Ko Hau Timi | Karma Band", description: "Concert Videography", category: "music" },
    { id: "SmUKGxnemRU", title: "Kaalpanik / MaayaaJastai | Bartika Eam Rai", description: "Concert Videography", category: "music" },
    { id: "sFvp4R8skio", title: "Drabya Dharma | Shree 3", description: "Concert Videography", category: "music" },
    { id: "1fhBjdAKlag", title: "Bhram | ASM", description: "Concert Videography", category: "music" },
    { id: "iUi_3i3j8mg", title: "Deshnikala | Bartika Eam Rai", description: "Concert Videography", category: "music" },
    { id: "M8cW_UUVL7o", title: "Oh Timi | Doleck", description: "Concert Videography", category: "music" },
    { id: "HJNS7JFe2SY", title: "Hukka Mero | Karma Band", description: "Concert Videography", category: "music" },
    { id: "u7PHlrfdS6o", title: "Sangi | Shiva Pariyar", description: "Music Show Production", category: "music" },
    { id: "zb2cYo0oGOk", title: "Phone Ko Number? | Sushant KC", description: "Music Show Production", category: "music" },
    { id: "RCD4FWyAgDE", title: "Namuna | Sabin Rai & The Pharaoh", description: "Music Show Production", category: "music" },
    { id: "19ZLY-LcNnU", title: "Ma Yesto Chu | Girish Pranil X Nishanta Gauchan", description: "Music Show Production", category: "music" },
    { id: "5GY4X5DZgi8", title: "Timi Pari | Lekaki Hey Maya | Kandara", description: "Music Show Production", category: "music" },
    { id: "46idHCU5sH0", title: "Prayas | Samriddhi Rai X Rohit John Chettri", description: "Music Show Production", category: "music" },
    { id: "u7PZRwbjq5s", title: "Mero Sathi Haru Ko Majh | Priyasi Ko | Jhaljhali Samjhana | Babin Pradhan", description: "Music Show Production", category: "music" },
    { id: "GQQusdjE2_c", title: "Vanna Aaudaina | Naren Limbu", description: "Music Show Production", category: "music" },
    { id: "rBch6jERw1k", title: "Chiya Bari Ma | The Axe", description: "Music Show Production", category: "music" },
    { id: "PeYguKCXWLk", title: "Nira | Kali Prasad Baskota", description: "Music Show Production", category: "music" },
    { id: "68rxBm9t46o", title: "Anubhav | ASM", description: "Music Show Production", category: "music" },
    { id: "DCIbflGir0s", title: "Lai Bari Lai | Kumar Basnet X Hercules Basnet", description: "Live Concert Videography", category: "music" },
    { id: "E-qNxxcnQfQ", title: "Barahsinghe Gears & Riffs Promo", description: "Show Promotion Motion Graphics", category: "promo" },
    { id: "dqhwD88Z3vg", title: "Gears & Riffs w/ Raunaq Singh Adhikari", description: "Podcast, Talk Show", category: "podcast" },
    { id: "VswytHDsI_0", title: "Gears & Riffs w/ Ridesh Tamang", description: "Podcast, Talk Show", category: "podcast" },
    { id: "pgpDZSPJzkI", title: "Gears & Riffs w/ Pravesh Thapa Magar", description: "Podcast, Talk Show", category: "podcast" },
    { id: "taOEhIteE-s", title: "Gears & Riffs w/ John Shrestha", description: "Podcast, Talk Show", category: "podcast" },
    { id: "hsneWRZxONQ", title: "Gears & Riffs w/ Sunit Kansakar", description: "Podcast, Talk Show", category: "podcast" },
    { id: "P6VwwXjUbA0", title: "Gears & Riffs w/ Diwas Gurung", description: "Podcast, Talk Show", category: "podcast" },
    { id: "dOyQBjgNHiA", title: "Gears & Riffs w/ Jyoti Ghimire", description: "Podcast, Talk Show", category: "podcast" },
    { id: "gghMO0PjWOo", title: "Gears & Riffs w/ Rajiv Rinchen Palzar", description: "Podcast, Talk Show", category: "podcast" },
    { id: "chZ3aRf9wFo", title: "Gears & Riffs w/ Mukti Shakya", description: "Podcast, Talk Show", category: "podcast" },
    { id: "5NaddvyhNqM", title: "Gears & Riffs w/ Iman Bikram Shah", description: "Podcast, Talk Show", category: "podcast" },
    { id: "tG8nkZE_kY0", title: "Gears & Riffs w/ Bikash Bhujel aka Dr. Pandu", description: "Podcast, Talk Show", category: "podcast" },
    { id: "DfFGt2AsDIU", title: "Gears & Riffs w/ Divesh Mulmi", description: "Podcast, Talk Show", category: "podcast" },
    { id: "css4cvY38Zg", title: "ULTO PULTO X Kengal Meher Shrestha", description: "YouTube Show, Full Production", category: "entertainment" },
    { id: "d6EkX31FToI", title: "ULTO PULTO X Deepak Bajracharya", description: "YouTube Show, Full Production", category: "entertainment" },
    { id: "5FyveK-9_xk", title: "ULTO PULTO X Subani Moktan", description: "YouTube Show, Full Production", category: "entertainment" },
    { id: "_SyRrqrkFQI", title: "ULTO PULTO X Rochak Dahal", description: "YouTube Show, Full Production", category: "entertainment" },
    { id: "FqM1r3dAJP8", title: "ULTOPULTO X MANAS GHALE", description: "YouTube Show, Full Production", category: "entertainment" },
    { id: "ConAmec4TNc", title: "ULTO PULTO X Swoopna Suman", description: "YouTube Show, Full Production", category: "entertainment" },
    { id: "TMDRh997ozg", title: "ULTO PULTO X Rachana Dahal", description: "YouTube Show, Full Production", category: "entertainment" },
    { id: "YolpS0wR0AQ", title: "ULTO PULTO X Samriddhi Rai", description: "YouTube Show, Full Production", category: "entertainment" },
    { id: "cxLs3P1S4WY", title: "ULTO PULTO X Sugam Pokharel", description: "YouTube Show, Full Production", category: "entertainment" },
    { id: "OA2S9-zaVto", title: "ULTO PULTO X SANDEEP BISHWAKARMA", description: "YouTube Show, Full Production", category: "entertainment" },
    { id: "d2GyA_nemOA", title: "ULTO PULTO X Suzeena Shrestha", description: "YouTube Show, Full Production", category: "entertainment" },
    { id: "7eakSnwPR_I", title: "ULTO PULTO X Ishan Raj Onta", description: "YouTube Show, Full Production", category: "entertainment" },
    { id: "iV81fYiAYpQ", title: "FARKANNA HOLA | John and The Locals", description: "Concert Videography", category: "music" },
    { id: "lnoFaShVZ5g", title: "Byron Bay Drone Video", description: "Travel Content", category: "travel" }
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

// Apply random gradient to the header text
function randomGradient() {
    const gradients = [
        'linear-gradient(to right, #ff5f6d, #ffc371)',  // Pink to yellow
        'linear-gradient(to right, #ff9966, #ff5e62)',  // Orange to red
        'linear-gradient(to right, #00c6ff, #0072ff)',  // Light blue to blue
        'linear-gradient(to right, #7f00ff, #e100ff)',  // Purple to magenta
        'linear-gradient(to right, #f7971e, #ffd200)',  // Orange to yellow
        'linear-gradient(to right, #00f260, #0575e6)',  // Green to blue
        'linear-gradient(to right, #f857a6, #ff5858)'   // Pink to red
    ];
    const gradient = gradients[Math.floor(Math.random() * gradients.length)];
    const rainbowText = document.getElementById('rainbow-text');
    rainbowText.style.background = gradient;
    rainbowText.style.webkitBackgroundClip = 'text';
    rainbowText.style.webkitTextFillColor = 'transparent';
}

randomGradient();


