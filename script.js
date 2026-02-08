// Aspect Ratio Logic (រក្សាទំហំ 16:9 គ្រប់ Device)
const container = document.getElementById('presentation-container');

function resizePresentation() {
    const scale = Math.min(
        window.innerWidth / 1280,
        window.innerHeight / 720
    );
    container.style.transform = `scale(${scale})`;
}

// ហៅ Function នេះនៅពេល Resize និង Load ដំបូង
window.addEventListener('resize', resizePresentation);
window.addEventListener('load', resizePresentation);

// Slide Logic (គ្រប់គ្រងការប្តូរស្លាយ)
let currentSlide = 0;
const totalSlides = 20;
const slides = document.querySelectorAll('.slide');
const slideNum = document.getElementById('currentSlideNum');
const progressBar = document.getElementById('progressBar');

function updateSlide() {
    slides.forEach(s => s.classList.remove('active'));
    
    // Handle loop (វិលជុំវិញ)
    if (currentSlide < 0) currentSlide = totalSlides - 1;
    if (currentSlide >= totalSlides) currentSlide = 0;

    const activeSlide = document.getElementById('s' + (currentSlide + 1));
    if (activeSlide) activeSlide.classList.add('active');

    // Update UI (លេខស្លាយ និង Progress Bar)
    slideNum.innerText = currentSlide + 1;
    progressBar.style.width = `${((currentSlide + 1) / totalSlides) * 100}%`;
}

function changeSlide(dir) {
    currentSlide += dir;
    updateSlide();
}

// Keyboard Controls (បញ្ជាតាម Keyboard)
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight' || e.key === 'Space') changeSlide(1);
    if (e.key === 'ArrowLeft') changeSlide(-1);
});

// Init (ចាប់ផ្តើមដំណើរការ)
resizePresentation();
updateSlide();