const canvas = document.querySelector("canvas");

canvas.height = innerHeight;
canvas.width = innerWidth;

// c = context
const c = canvas.getContext("2d");

class Circle {
    antiClockwise;
    color;
    endAngle;
    radius;
    speed;
    startAngle;
    x;
    xSign = 1;
    y;
    ySign = 1;

    /**
     *
     * @param {number} x
     * @param {number} y
     * @param {number} radius
     * @param {number} startAngle
     * @param {number} endAngle
     * @param {boolean} antiClockwise
     * @param {string} color
     * @param {number} speed
     */

    constructor(
        x,
        y,
        radius,
        startAngle,
        endAngle,
        speed = 5,
        color = `#${Math.floor(Math.random() * 25542195).toString(16)}`,
        antiClockwise = false
    ) {
        this.antiClockwise = antiClockwise;
        this.color = color;
        this.endAngle = endAngle;
        this.radius = radius;
        this.speed = speed;
        this.startAngle = startAngle;
        this.x = x;
        this.y = y;
    }

    /**
     *
     * @param {number} x
     * @param {number} y
     * @param {number} radius
     * @param {number} startAngle
     * @param {number} endAngle
     * @param {boolean} antiClockwise
     */
    createArc(
        x,
        y,
        radius,
        startAngle,
        endAngle,
        color = `#${Math.floor(Math.random() * 25542195).toString(16)}`,
        antiClockwise = false
    ) {
        c.beginPath();
        c.arc(x, y, radius, startAngle, endAngle, antiClockwise);
        c.strokeStyle = color;
        c.stroke();
    }

    draw() {
        this.createArc(
            this.x,
            this.y,
            this.radius,
            this.startAngle,
            this.endAngle,
            this.color,
            this.antiClockwise
        );
    }

    update() {
        if (this.x + 30 >= innerWidth || this.x - 30 <= 0)
            this.xSign = -this.xSign;
        if (this.y + 30 >= innerHeight || this.y - 30 <= 0)
            this.ySign = -this.ySign;
        this.x += this.xSign * this.speed;
        this.y += this.ySign * this.speed;
    }
}

const circle = new Circle(200, 200, 30, 0, Math.PI * 2, 5, "pink");
function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);
    circle.update();
    circle.draw();
}

animate();
