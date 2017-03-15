var game = {
    canvas : document.createElement("canvas"),
    start : function () {
        this.canvas.width = 1280;
        this.canvas.height = 720;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval = setInterval(update, 20);
    },
    
    // Clears canvas
    clear : function () {
		this.context.globalAlpha = 1;
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
		this.context.drawImage(bgImage, 0, 0, this.canvas.width, this.canvas.height);
    }
}; // End Game object

game.start(); // canvas not created until this function is called

// Global variables
var player;

function startGame() {
    player = new Player(30, 30, "red", 100, 100);
}

function Player(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.color = color;
    this.x = x;
    this.y = y;
    // Draw the player to screen
    this.update = function() {
        ctx = game.context;
		ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
		ctx.drawImage(this.color, this.x, this.y, this.width, this.height);
    }
}

function update() {
    // draw images
    player.update();
}
