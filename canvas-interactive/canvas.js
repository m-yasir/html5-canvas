const canvas = document.querySelector("canvas");

canvas.height = innerHeight;
canvas.width = innerWidth;

// c = context
const c = canvas.getContext("2d");

const mouse = {
    x: undefined,
    y: undefined
};

window.addEventListener("mousemove", (e) => {
    mouse.x = e.x;
    mouse.y = e.y;
});

window.addEventListener("mouseout", () => {
    mouse.x = undefined;
    mouse.y = undefined;
});

const init = () => {
    /**
     * @type Circle[]
     */
    const circles = [];
    for (let i = 0; i < 500; i++) {
        let r = Math.random() * 5 + 1;
        let x = Math.random() * (innerWidth - r * 2) + r;
        let y = Math.random() * (innerHeight - r * 2) + r;
        circles.push(
            new Circle(x, y, r, 0, Math.PI * 2, Math.random() * 8 + 1)
        );
    }

    function animate() {
        requestAnimationFrame(animate);
        c.clearRect(0, 0, innerWidth, innerHeight);
        circles.forEach((circle) => {
            circle.update();
        });
    }

    animate();
};

window.addEventListener("resize", () => {
    canvas.height = innerHeight;
    canvas.width = innerWidth;
    init();
});

init();
