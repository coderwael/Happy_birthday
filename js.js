// Three.js Scene Setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('scene-container').appendChild(renderer.domElement);

const particleCount = 500;
const particles = new THREE.Group();
const particleGeometry = new THREE.SphereGeometry(0.1, 8, 8);
const particleMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });

for (let i = 0; i < particleCount; i++) {
    const particle = new THREE.Mesh(particleGeometry, particleMaterial);
    particle.position.set(Math.random() * 100 - 50, Math.random() * 100 - 50, Math.random() * 100 - 50);
    particles.add(particle);
}
scene.add(particles);

camera.position.z = 50;

function animate() {
    requestAnimationFrame(animate);
    particles.rotation.y += 0.001;
    particles.rotation.x += 0.0005;
    renderer.render(scene, camera);
}
animate();

// Messages Typing Effect
const messages = [
    "في يوم ميلادي، أتأمل في رحلة الحياة...",
    "أتمنى أن أكون كالغيث في حياة كل من عرفت",
    "أروي ظمأ القلوب بالحب والأمل",
    "وأنثر الخير حيثما حللت",
    "أتمنى أن تكون سعادتي نوراً",
    "يضيء دروب من حولي",
    "وأن تكون ابتسامتي شمساً",
    "تبدد غيوم الحزن عن وجوههم",
    "في هذا اليوم المميز",
    "أشكر الله على نعمه الكثيرة",
    "وأدعو أن يجعلني سبباً في سعادة الآخرين",
    "وأن يملأ قلبي بالرضا والطمأنينة",
    "كل عام وأنا أقترب من أحلامي",
    "كل عام وأنا أكبر في الحكمة والمعرفة",
    "كل عام وأنا أزداد حباً وعطاءً",
    "وكل عام وأنا بخير وسعادة",
    "سأجعل من هذا العام فرصة جديدة",
    "لأكون النسخة الأفضل من نفسي",
    "ولأترك أثراً طيباً في كل خطوة",
    "ولأكون سبباً في إسعاد من حولي",
    "شكراً لكل من كان جزءاً من قصتي",
    "ولكل من علمني درساً في الحياة",
    "ولكل من شاركني الفرح والحزن",
    "ولكل من جعل حياتي أجمل",
    "كل عام وأنا أقوى وأسعد وأطيب",
    "وكل عام وقلبي عامر بالحب والأمل"
];

new Typed('#message-display', {
    strings: messages,
    typeSpeed: 50,
    backSpeed: 30,
    loop: true
});

// Fireworks and Sparkles
function createFirework(x, y) {
    const colors = ['#ff1493', '#4169e1', '#ffd700', '#ff69b4'];
    const firework = document.createElement('div');
    firework.className = 'firework';
    firework.style.left = x + 'px';
    firework.style.top = y + 'px';
    firework.style.background = colors[Math.floor(Math.random() * colors.length)];
    document.body.appendChild(firework);

    setTimeout(() => firework.remove(), 1000);

    for (let i = 0; i < 20; i++) {
        createSparkle(x, y);
    }
}

function createSparkle(x, y) {
    const sparkle = document.createElement('div');
    sparkle.className = 'particle';
    sparkle.style.left = x + 'px';
    sparkle.style.top = y + 'px';
    sparkle.style.background = `hsl(${Math.random() * 360}, 100%, 50%)`;
    document.body.appendChild(sparkle);

    setTimeout(() => sparkle.remove(), 1500);
}

for (let i = 0; i < 5; i++) {
    setTimeout(() => {
        createFirework(Math.random() * window.innerWidth, Math.random() * window.innerHeight / 2);
    }, i * 300);
}

// Gift Reveal Animation
function revealGift(element) {
    const surprises = ['🎈', '🎉', '🎊', '💝', '✨', '🌟', '⭐', '🎆'];
    gsap.to(element, {
        scale: 1.5,
        rotation: 360,
        duration: 0.5,
        onComplete: () => {
            element.textContent = surprises[Math.floor(Math.random() * surprises.length)];
            setTimeout(() => {
                gsap.to(element, {
                    scale: 1,
                    duration: 0.3,
                    onComplete: () => {
                        setTimeout(() => {
                            element.textContent = '🎁';
                        }, 2000);
                    }
                });
            }, 1000);
        }
    });
    createFirework(element.getBoundingClientRect().left, element.getBoundingClientRect().top);
}

// Mp3 File Control
let audio;
function toggleMusic() {
    if (!audio) {
        audio = new Audio('file.mp3');
        audio.loop = true;
    }
    if (audio.paused) {
        audio.play().catch(() => console.log('Autoplay prevented'));
    } else {
        audio.pause();
    }
}

// Event Listeners
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

document.addEventListener('DOMContentLoaded', () => {
    triggerFireworks();
    toggleSnow();
});

document.addEventListener('mousemove', (e) => {
    if (Math.random() < 0.1) {
        createSparkle(e.clientX, e.clientY);
    }
});