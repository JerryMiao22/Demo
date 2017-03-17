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
		//this.context.drawImage(bgImage, 0, 0, this.canvas.width, this.canvas.height);
    }
}; // End Game object

// Keyboard handler
var kbd = function () {
    this.up = false;
    this.down = false;
    this.left = false;
    this.right = false;
    this.p = true;
};

// add keyevent listener to track arrow key actions
document.addEventListener("keydown", function (e) {
    if (e.keyCode === 39 || e.keyCode === 68) {
        kbd.right = true;
    }
    else if (e.keyCode === 38 || e.keyCode === 87 || e.keyCode === 32) {
        kbd.up = true;
    }
    else if (e.keyCode === 37 || e.keyCode === 65) {
        kbd.left = true;
    }
    else if (e.keyCode === 40 || e.keyCode === 83) {
        kbd.down = true;
    }
    else if (e.keyCode === 80) {
        kbd.p = true;
    }
}, false);

document.addEventListener("keyup", function (e) {
  if (e) {
    kbd.up = kbd.left = kbd.right = kbd.down = kbd.p = false;
  }
}, false);

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
    this.speedX = 0;
    this.speedY = 0;
    
    this.move = function() {
        // Speed without pressing keys
        this.speedX = 0;
        this.speedY = 0;
        
        if (kbd.up) {
            this.y += -2;
        }
        
        if (kbd.down) {
            this.y += 2;
        }
        
        if (kbd.left) {
            this.x += -2;
        }
        
        if (kbd.right) {
            this.x += 2;
        }
    }
    
    // Draw the player to screen
    this.update = function() {
        ctx = game.context;
		ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
		//ctx.drawImage(this.color, this.x, this.y, this.width, this.height);
    }
}

function update() {
    
    // Clears screen of previous frames
    game.clear();
    
    // Move stuff
	player.move();
    
    // draw images
    player.update();
}
