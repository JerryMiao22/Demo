var game = {
    canvas : document.createElement("canvas"),
    start : function () {
        this.canvas.width = 640;
        this.canvas.height = 480;
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
var platforms = [];

function startGame() {
    player = new Player(30, 30, "red", 100, game.canvas.height - 5);
    
    //platforms = [
    //    new Platform   
    //]
}

var Platform = function(x, y, height, width, color) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.height = height;
    this.width = width;
}

function Player(width, height, color, x, y) {
    this.landed = false;
    this.jumping = false;
    this.jumpCounter = 0;
    this.width = width;
    this.height = height;
    this.color = color;
    this.x = x;
    this.y = y;
    this.speedX = 0;
    this.speedY = 0;
    this.gravity = 5;
    
    this.move = function() {
        // Speed without pressing keys
        this.speedX = 0;
        this.speedY = 0;
        
        // Check if jump button is pressed
        if (kbd.up && this.landed) {
            this.jumping = true;
            console.log("Hello world");
            this.landed = false;
        }
        
        // Smooth jumping
        if (this.jumping) {
            this.y += -30;
            this.jumpCounter++;
            this.landed = false;
        }
        
        // reset jump if we're at top of jump
        if (this.jumpCounter === 7) {
            this.jumping = false;
            this.jumpCounter = 0;
        }
        
        this.speedY += this.gravity;
        
        this.y += this.speedY;
        
        if (kbd.left) {
            this.x += -2;
        }
        
        if (kbd.right) {
            this.x += 2;
        }
        
        this.collisionDetect();
    }
    
    this.collisionDetect = function() {
        
        // check for colliding with bottom of screen
        if (this.y >= game.canvas.height - this.height - 5) {
            this.y = game.canvas.height - this.height - 5;
            this.landed = true;
        }
    };
    
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

