// Smooth Scroll on Play Button
document.getElementById("playBtn").onclick = () => {
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
};

// Scroll-trigger animations
const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add("show");
    });
});
document.querySelectorAll(".hidden").forEach(el => observer.observe(el));


// PARTICLES BACKGROUND
const c = document.getElementById("particles");
const ctx = c.getContext("2d");
c.width = innerWidth;
c.height = innerHeight;

let particles = [];

for (let i = 0; i < 80; i++) {
    particles.push({
        x: Math.random() * c.width,
        y: Math.random() * c.height,
        s: Math.random() * 1.5,
        dx: Math.random() * .5,
        dy: Math.random() * .5
    });
}

function animate() {
    ctx.clearRect(0, 0, c.width, c.height);
    particles.forEach(p => {
        ctx.fillStyle = "rgba(255,255,255,0.4)";
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.s, 0, Math.PI * 2);
        ctx.fill();

        p.x += p.dx;
        p.y += p.dy;

        if (p.x > c.width) p.x = 0;
        if (p.y > c.height) p.y = 0;
    });
    requestAnimationFrame(animate);
}
animate();
